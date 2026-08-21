"""
Page Routes
===========
Routes that serve HTML pages (not API endpoints).
These return actual web pages that users see.
"""

from flask import Blueprint, abort, send_from_directory, Response
from datetime import date
from html import escape as html_escape
import json
import os
import re

from .seo_meta import ROUTE_META, SITE_URL, get_meta, sitemap_priority

# No url_prefix - these are the main pages
pages_bp = Blueprint('pages', __name__)

# Path to React build directory
REACT_BUILD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'static', 'react-build')

# Requests for these extensions are asset lookups, not SPA routes.
STATIC_FILE_EXTENSIONS = ('.js', '.css', '.json', '.png', '.jpg', '.svg', '.ico', '.woff', '.woff2', '.ttf')

BUILD_NOT_FOUND_MESSAGE = (
    "React build not found. Please run 'npm run build' in the frontend directory.",
    404,
)


def _read_index_template():
    """
    Read the built index.html fresh off disk on every call (it's ~1KB, not a
    hot-path concern) so a `npm run build` while the server is running is
    picked up without a restart - the same reasoning the existing no-store
    Cache-Control on index.html already applies to the browser side.
    """
    index_path = os.path.join(REACT_BUILD_DIR, 'index.html')
    if not os.path.exists(index_path):
        return None
    with open(index_path, 'r', encoding='utf-8') as f:
        return f.read()


_TITLE_RE = re.compile(r'<title>(.*?)</title>', re.DOTALL)
_DESCRIPTION_RE = re.compile(r'<meta name="description" content="(.*?)"', re.DOTALL)


def _default_title_and_description(html):
    """Extract the title/description Vite baked into the built index.html,
    so injection has a reliable anchor even if the source strings drift."""
    title_match = _TITLE_RE.search(html)
    desc_match = _DESCRIPTION_RE.search(html)
    return (
        title_match.group(1) if title_match else None,
        desc_match.group(1) if desc_match else None,
    )


def _replace_default_tags(html, default_title, default_description, title, description):
    """Swap the build's baked-in <title>/<meta description> for the route's own."""
    if default_title:
        html = html.replace(
            f'<title>{default_title}</title>',
            f'<title>{html_escape(title)}</title>',
            1,
        )
    if default_description:
        html = html.replace(
            f'<meta name="description" content="{default_description}">',
            f'<meta name="description" content="{html_escape(description)}">',
            1,
        )
    return html


def _build_seo_tags(title, description, canonical_url, ld_json_description):
    """Canonical link + OG/Twitter tags + WebSite structured data, as one <head>-ready block."""
    safe_title = html_escape(title)
    safe_description = html_escape(description)
    safe_canonical = html_escape(canonical_url)
    website_ld_json = json.dumps({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'DSA Visualizer',
        'url': SITE_URL,
        'description': ld_json_description,
    })

    return (
        f'<link rel="canonical" href="{safe_canonical}">\n'
        f'    <meta property="og:type" content="website">\n'
        f'    <meta property="og:site_name" content="DSA Visualizer">\n'
        f'    <meta property="og:title" content="{safe_title}">\n'
        f'    <meta property="og:description" content="{safe_description}">\n'
        f'    <meta property="og:url" content="{safe_canonical}">\n'
        f'    <meta name="twitter:card" content="summary">\n'
        f'    <meta name="twitter:title" content="{safe_title}">\n'
        f'    <meta name="twitter:description" content="{safe_description}">\n'
        f'    <script type="application/ld+json">{website_ld_json}</script>\n'
        '</head>'
    )


def render_index_html(path):
    """
    Server-render per-route <title>/<meta description>/canonical/OG/Twitter
    tags into the SPA's index.html before sending it. This is what crawlers
    and social-preview bots (most of which don't execute JS on the initial
    fetch) actually see - the client-side equivalent in PageMeta.jsx only
    covers React Router navigations after the app has already loaded.
    """
    html = _read_index_template()
    if html is None:
        return None

    title, description = get_meta(path)
    default_title, default_description = _default_title_and_description(html)

    html = _replace_default_tags(html, default_title, default_description, title, description)

    canonical_url = f'{SITE_URL}{"" if path == "/" else path}'
    seo_tags = _build_seo_tags(title, description, canonical_url, default_description or description)
    html = html.replace('</head>', seo_tags, 1)

    return html


@pages_bp.route("/")
def index():
    """Home page - serves React app with server-rendered SEO meta."""
    html = render_index_html('/')
    if html is not None:
        return Response(html, mimetype='text/html')
    return BUILD_NOT_FOUND_MESSAGE


@pages_bp.route("/robots.txt")
def robots_txt():
    body = (
        "User-agent: *\n"
        "Allow: /\n"
        "Disallow: /api/\n"
        "\n"
        f"Sitemap: {SITE_URL}/sitemap.xml\n"
    )
    return Response(body, mimetype='text/plain')


@pages_bp.route("/sitemap.xml")
def sitemap_xml():
    today = date.today().isoformat()
    urls = []
    for path in ROUTE_META.keys():
        loc = f'{SITE_URL}{"" if path == "/" else path}'
        urls.append(
            '  <url>\n'
            f'    <loc>{loc}</loc>\n'
            f'    <lastmod>{today}</lastmod>\n'
            f'    <priority>{sitemap_priority(path)}</priority>\n'
            '  </url>'
        )
    body = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + '\n'.join(urls) +
        '\n</urlset>\n'
    )
    return Response(body, mimetype='application/xml')


@pages_bp.route("/<path:path>")
def serve_react_app(path):
    """Serve React app for all routes (React Router handles routing)."""
    # Don't intercept API routes - they're handled by other blueprints
    if path.startswith('api/'):
        # Return 404 to let Flask know this route doesn't handle api paths
        abort(404)

    # Check if it's a static file request (assets, images, etc.)
    if path.startswith('assets/') or path.endswith(STATIC_FILE_EXTENSIONS):
        file_path = os.path.join(REACT_BUILD_DIR, path)
        if os.path.exists(file_path):
            response = send_from_directory(REACT_BUILD_DIR, path)
            # Cache static assets for 1 year (immutable)
            response.headers['Cache-Control'] = 'public, max-age=31536000, immutable'
            return response

    # For all other routes, serve index.html with route-specific SEO meta
    # (React Router will handle the actual client-side routing).
    html = render_index_html('/' + path)
    if html is not None:
        response = Response(html, mimetype='text/html')
        # Don't cache index.html to ensure users always get the latest version
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        return response

    return BUILD_NOT_FOUND_MESSAGE

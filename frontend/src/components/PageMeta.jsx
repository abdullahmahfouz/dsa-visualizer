import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, SITE_URL } from '../data/routeMeta';

/** Sets a <meta content="..."> tag's value, creating it if it doesn't exist yet.
 *  `keyAttr` is 'name' for standard meta tags, 'property' for OG tags. */
function setMetaTag(keyAttr, key, content) {
  let tag = document.querySelector(`meta[${keyAttr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(keyAttr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

const setMetaByName = (name, content) => setMetaTag('name', name, content);
const setMetaByProperty = (property, content) => setMetaTag('property', property, content);

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * Keeps <title>, the meta description, the canonical link, and OG/Twitter
 * tags in sync with the current route on every client-side navigation.
 *
 * Flask already server-renders the correct values into index.html for the
 * initial load (see app/routes/pages.py) - this covers the case those
 * values can't: React Router swapping routes without a full page reload,
 * which the server never sees.
 *
 * Also renders a visually-hidden <h1> naming the page's real topic, for
 * visualizer pages whose visible "heading" is a styled sub-section label
 * rather than semantic h1 markup.
 */
function PageMeta() {
  const location = useLocation();
  const meta = getRouteMeta(location.pathname);
  const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    document.title = meta.title;
    setMetaByName('description', meta.description);
    setCanonical(canonicalUrl);
    setMetaByProperty('og:title', meta.title);
    setMetaByProperty('og:description', meta.description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByName('twitter:title', meta.title);
    setMetaByName('twitter:description', meta.description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!meta.h1) return null;
  return <h1 className="sr-only">{meta.h1}</h1>;
}

export default PageMeta;

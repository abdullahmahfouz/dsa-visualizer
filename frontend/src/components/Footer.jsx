import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The sidebar already carries the social links and the copyright, and it is
 * docked on every desktop viewport. Repeating them here was duplication, so
 * the footer does the one job the sidebar does not: a flat link map for
 * people who have scrolled to the bottom looking for somewhere to go next.
 */
const FOOTER_LINKS = [
  { to: '/algorithms', label: 'Algorithms' },
  { to: '/practice', label: 'Practice' },
  { to: '/compare', label: 'Compare' },
  { to: '/sandbox', label: 'Sandbox' },
  { to: '/contact', label: 'Contact' },
  { to: '/contributions', label: 'Contributions' },
];

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <nav className="footer-links" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="footer-copyright">&copy; 2026 Abdullah Mahfouz</p>
      </div>
    </footer>
  );
}

export default Footer;

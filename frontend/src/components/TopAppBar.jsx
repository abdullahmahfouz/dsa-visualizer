import React from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/algorithms', label: 'Algorithms' },
  { to: '/practice', label: 'Practice' },
];

function TopAppBar() {
  return (
    <header className="top-app-bar">
      <NavLink to="/" className="top-app-bar-brand" end>
        DSA<span className="top-app-bar-brand-slash">//</span>VISUALIZER
      </NavLink>
      <nav className="top-app-bar-nav" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `top-app-bar-link ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default TopAppBar;

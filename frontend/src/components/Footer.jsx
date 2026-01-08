import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://github.com/abdullahmahfouz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            <Github />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="footer-copyright">&copy; 2026 Abdullah Mahfouz</p>
      </div>
    </footer>
  );
}

export default Footer;


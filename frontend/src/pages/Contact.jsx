import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="page-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <Mail />
            </div>
            <h3>Email</h3>
            <p>For recruitment and professional opportunities</p>
            <a href="mailto:abdullahmahfouz@trentu.ca" className="info-link">abdullahmahfouz@trentu.ca</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Github />
            </div>
            <h3>GitHub</h3>
            <p>View my projects and contributions</p>
            <a href="https://github.com/abdullahmahfouz" target="_blank" rel="noopener noreferrer" className="info-link">github.com/abdullahmahfouz</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Linkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect for professional networking</p>
            <a href="https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/" target="_blank" rel="noopener noreferrer" className="info-link">Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


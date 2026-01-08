import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Bug, Lightbulb, ArrowRight, User } from 'lucide-react';

function Contributions() {
  return (
    <section className="contributions-section">
      <div className="page-header">
        <h1>Contributions</h1>
        <p>Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone.</p>
      </div>

      <div className="contributions-content">
        <div className="contribution-card">
          <div className="contribution-icon">
            <Code />
          </div>
          <h2>Code Contributions</h2>
          <p>Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!</p>
          <a href="https://github.com/abdullahmahfouz" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>View on GitHub</span>
            <ArrowRight />
          </a>
        </div>

        <div className="contribution-card">
          <div className="contribution-icon">
            <BookOpen />
          </div>
          <h2>Documentation</h2>
          <p>Help improve our documentation, fix typos, or add examples. Every bit helps!</p>
          <a href="https://github.com/abdullahmahfouz" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Improve Docs</span>
            <ArrowRight />
          </a>
        </div>

        <div className="contribution-card">
          <div className="contribution-icon">
            <Bug />
          </div>
          <h2>Report Issues</h2>
          <p>Found a bug or have a suggestion? Open an issue on GitHub and let us know!</p>
          <a href="https://github.com/abdullahmahfouz" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Report Issue</span>
            <ArrowRight />
          </a>
        </div>

        <div className="contribution-card">
          <div className="contribution-icon">
            <Lightbulb />
          </div>
          <h2>Feature Requests</h2>
          <p>Have an idea for a new visualizer or feature? We'd love to hear your suggestions!</p>
          <Link to="/contact" className="btn-primary">
            <span>Suggest Feature</span>
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="contributors-section">
        <h2>Contributors</h2>
        <div className="contributors-list">
          <div className="contributor-item">
            <div className="contributor-avatar">
              <User />
            </div>
            <div className="contributor-info">
              <h3>Abdullah Mahfouz</h3>
              <p>Creator & Maintainer</p>
            </div>
          </div>
        </div>
        <p className="contributors-note">Want to see your name here? Start contributing today!</p>
      </div>
    </section>
  );
}

export default Contributions;


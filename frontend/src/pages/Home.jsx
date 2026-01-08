import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Play, Eye, HelpCircle, Brain, Play as PlayIcon } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="explore-hero">
        <div className="hero-background"></div>
        <div className="hero-content-wrapper">
          <div className="hero-badge">
            <GraduationCap />
            <span>Free Student Learning Tool</span>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Learn</span> Data Structures & Algorithms
          </h1>
          <p className="hero-description">
            A free, interactive learning tool designed to help students master DSA concepts. 
            Visualize and understand them step-by-step.
          </p>
          <div className="hero-actions">
            <Link to="/algorithms" className="btn-primary">
              <span>Learn Now</span>
              <ArrowRight />
            </Link>
            <Link to="/stack" className="btn-secondary">
              <span>Try Your First Visualizer</span>
              <PlayIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>How This Tool Helps Students</h2>
          <p>Designed specifically for students who find DSA challenging</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Eye />
            </div>
            <h3>See It in Action</h3>
            <p>Watch how data structures work with real-time visualizations. Perfect for visual learners who struggle with abstract concepts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <HelpCircle />
            </div>
            <h3>Step-by-Step Help</h3>
            <p>Detailed explanations for each operation. No more confusion about how push, pop, or insert actually work.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Brain />
            </div>
            <h3>AI Study Buddy</h3>
            <p>Stuck on a concept? Ask our AI assistant anything about DSA. Get instant, personalized explanations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <PlayIcon />
            </div>
            <h3>Learn by Doing</h3>
            <p>Practice makes perfect. Interact with data structures yourself to build confidence and understanding.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;


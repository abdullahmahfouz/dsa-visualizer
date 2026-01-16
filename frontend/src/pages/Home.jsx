import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Eye, Brain, Layers, GitBranch, Database, Binary, Hash, TreePine,
  Sparkles, Zap, Code2, Terminal, ChevronRight, Box
} from 'lucide-react';

function Home() {
  const [activeShowcase, setActiveShowcase] = useState(0);

  // Auto-rotate showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    { icon: Layers, name: 'Stack', color: '#6366f1', description: 'LIFO Operations' },
    { icon: GitBranch, name: 'Binary Tree', color: '#10b981', description: 'Tree Traversals' },
    { icon: Hash, name: 'Hash Table', color: '#f59e0b', description: 'Key-Value Mapping' },
    { icon: Database, name: 'Heap', color: '#ec4899', description: 'Priority Queue' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-advanced">
        {/* Animated Background */}
        <div className="hero-bg-effects">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
        </div>

        <div className="hero-content-advanced">
          {/* Badge */}
          <div className="hero-badge-advanced">
            <Sparkles className="badge-icon" />
            <span>Free & Open Source Learning Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title-advanced">
            <span className="title-line">Master</span>
            <span className="title-line gradient-text-animated">Data Structures</span>
            <span className="title-line">& <span className="gradient-text-animated">Algorithms</span></span>
          </h1>

          {/* Description */}
          <p className="hero-description-advanced">
            Interactive visualizations that transform complex DSA concepts into
            intuitive, step-by-step learning experiences. Built for students, by students.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <Link to="/algorithms" className="btn-glow-primary">
              <span>Start Learning</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/stack" className="btn-glass">
              <Play className="btn-icon-left" />
              <span>Try Stack Visualizer</span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Data Structures</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free Forever</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">Powered Assistant</span>
            </div>
          </div>
        </div>

        {/* Floating Showcase */}
        <div className="hero-showcase">
          <div className="showcase-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">
                <Terminal size={14} />
                DSA Visualizer
              </span>
            </div>
            <div className="showcase-content">
              {showcaseItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`showcase-card ${index === activeShowcase ? 'active' : ''}`}
                  style={{ '--card-color': item.color }}
                >
                  <div className="showcase-card-icon">
                    <item.icon />
                  </div>
                  <div className="showcase-card-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <ChevronRight className="showcase-arrow" />
                </div>
              ))}
            </div>
          </div>
          {/* Floating Elements */}
          <div className="floating-element float-1">
            <Code2 />
          </div>
          <div className="floating-element float-2">
            <Binary />
          </div>
          <div className="floating-element float-3">
            <Box />
          </div>
        </div>
      </section>

      {/* Data Structures Showcase */}
      <section className="ds-showcase-section">
        <div className="section-header-advanced">
          <span className="section-tag">Explore</span>
          <h2>Interactive Data Structures</h2>
          <p>Click to visualize, interact, and truly understand how each structure works</p>
        </div>

        <div className="ds-showcase-grid">
          <Link to="/stack" className="ds-card" style={{ '--ds-color': '#6366f1' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <Layers />
              </div>
              <h3>Stack</h3>
              <p>Last In, First Out</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(1) push/pop</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>

          <Link to="/queue" className="ds-card" style={{ '--ds-color': '#10b981' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <GitBranch />
              </div>
              <h3>Queue</h3>
              <p>First In, First Out</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(1) enqueue</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>

          <Link to="/linkedlist" className="ds-card" style={{ '--ds-color': '#f59e0b' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="5" cy="12" r="3"/>
                  <circle cx="19" cy="12" r="3"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <h3>Linked List</h3>
              <p>Dynamic Node Chain</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(1) insert</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>

          <Link to="/bst" className="ds-card" style={{ '--ds-color': '#ec4899' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <TreePine />
              </div>
              <h3>Binary Search Tree</h3>
              <p>Ordered Tree Structure</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(log n) search</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>

          <Link to="/hashtable_chaining" className="ds-card" style={{ '--ds-color': '#8b5cf6' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <Hash />
              </div>
              <h3>Hash Table</h3>
              <p>Key-Value Mapping</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(1) average</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>

          <Link to="/minheap" className="ds-card" style={{ '--ds-color': '#06b6d4' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <Database />
              </div>
              <h3>Heap</h3>
              <p>Priority Queue</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">O(log n) insert</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>
        </div>

        <div className="showcase-cta">
          <Link to="/algorithms" className="btn-outline-glow">
            <span>View All Data Structures</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-advanced">
        <div className="section-header-advanced">
          <span className="section-tag">Why Choose Us</span>
          <h2>Built for Visual Learners</h2>
          <p>Everything you need to master DSA concepts</p>
        </div>

        <div className="features-grid-advanced">
          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#6366f1' }}>
              <Eye />
            </div>
            <h3>Real-Time Visualization</h3>
            <p>Watch data structures come alive with smooth animations that show exactly what happens during each operation.</p>
          </div>

          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#10b981' }}>
              <Zap />
            </div>
            <h3>Step-by-Step Execution</h3>
            <p>Control the pace of operations. Pause, step through, and understand every single state change.</p>
          </div>

          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#f59e0b' }}>
              <Brain />
            </div>
            <h3>AI Study Assistant</h3>
            <p>Get instant answers to your DSA questions. Our AI explains concepts in ways that make sense to you.</p>
          </div>

          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#ec4899' }}>
              <Code2 />
            </div>
            <h3>Code Implementation</h3>
            <p>See the actual code behind each operation. Copy, learn, and implement in your own projects.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="section-header-advanced">
          <span className="section-tag">Get Started</span>
          <h2>Start Learning in Seconds</h2>
          <p>No signup required. Just pick a data structure and start visualizing.</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose a Topic</h3>
            <p>Browse our collection of data structures and algorithms</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Interact & Visualize</h3>
            <p>Add elements, perform operations, and watch the magic happen</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Master the Concept</h3>
            <p>Read explanations, view code, and ask the AI for help</p>
          </div>
        </div>

        <div className="final-cta">
          <Link to="/stack" className="btn-glow-large">
            <Play className="btn-icon-left" />
            <span>Start with Stack Visualizer</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;


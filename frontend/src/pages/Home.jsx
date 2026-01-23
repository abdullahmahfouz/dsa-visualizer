import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Eye, Brain, Layers, GitBranch, Database, Hash, TreePine,
  Zap, Code2, Terminal, ChevronRight, Box, Trophy, Target, BookOpen,
  CheckCircle, Network, Cpu, BarChart3, GraduationCap
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
            <GraduationCap className="badge-icon" />
            <span>Interactive Learning Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title-advanced">
            <span className="title-line">Learn</span>
            <span className="title-line gradient-text-animated">Data Structures</span>
            <span className="title-line">& <span className="gradient-text-animated">Algorithms</span></span>
          </h1>

          {/* Description */}
          <p className="hero-description-advanced">
            The complete DSA learning platform. Visualize data structures in real-time,
            practice coding problems, and master algorithms with step-by-step animations.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <Link to="/algorithms" className="btn-glow-primary">
              <Eye className="btn-icon-left" />
              <span>Explore Visualizers</span>
            </Link>
            <Link to="/practice" className="btn-glass">
              <Trophy className="btn-icon-left" />
              <span>Practice Problems</span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Visualizers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">22+</span>
              <span className="stat-label">Practice Problems</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Topic Categories</span>
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
            <Trophy />
          </div>
          <div className="floating-element float-3">
            <Box />
          </div>
        </div>
      </section>

      {/* Two Main Features Section */}
      <section className="main-features-section">
        <div className="section-header-advanced">
          <span className="section-tag">What We Offer</span>
          <h2>Two Ways to Master DSA</h2>
          <p>Combine visual learning with hands-on practice for complete understanding</p>
        </div>

        <div className="main-features-grid">
          {/* Visualizers Card */}
          <Link to="/algorithms" className="main-feature-card">
            <div className="main-feature-card-bg visualizers"></div>
            <div className="main-feature-content">
              <div className="main-feature-icon" style={{ '--feature-color': '#6366f1' }}>
                <Eye />
              </div>
              <div className="main-feature-badge">12+ Structures</div>
              <h3>Interactive Visualizers</h3>
              <p>
                Watch data structures come alive with real-time animations.
                See exactly how operations like push, pop, insert, and delete work
                at every step.
              </p>
              <ul className="main-feature-list">
                <li><CheckCircle size={16} /> Stack, Queue, Linked List</li>
                <li><CheckCircle size={16} /> Binary Trees, BST, AVL, Heaps</li>
                <li><CheckCircle size={16} /> Hash Tables with collision handling</li>
                <li><CheckCircle size={16} /> Graph algorithms (BFS, DFS, Dijkstra)</li>
              </ul>
              <div className="main-feature-cta">
                <span>Start Visualizing</span>
                <ArrowRight />
              </div>
            </div>
          </Link>

          {/* Practice Card */}
          <Link to="/practice" className="main-feature-card">
            <div className="main-feature-card-bg practice"></div>
            <div className="main-feature-content">
              <div className="main-feature-icon" style={{ '--feature-color': '#10b981' }}>
                <Trophy />
              </div>
              <div className="main-feature-badge">22+ Problems</div>
              <h3>Practice Problems</h3>
              <p>
                Solve curated coding challenges organized in a structured roadmap.
                Write code, run tests, and track your progress as you level up your skills.
              </p>
              <ul className="main-feature-list">
                <li><CheckCircle size={16} /> NeetCode-style learning roadmap</li>
                <li><CheckCircle size={16} /> Built-in code editor with syntax highlighting</li>
                <li><CheckCircle size={16} /> Instant test case feedback</li>
                <li><CheckCircle size={16} /> Hints and solution guidance</li>
              </ul>
              <div className="main-feature-cta">
                <span>Start Practicing</span>
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Data Structures Showcase */}
      <section className="ds-showcase-section">
        <div className="section-header-advanced">
          <span className="section-tag">Visualizers</span>
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

          <Link to="/dijkstra" className="ds-card" style={{ '--ds-color': '#06b6d4' }}>
            <div className="ds-card-glow"></div>
            <div className="ds-card-content">
              <div className="ds-icon">
                <Network />
              </div>
              <h3>Graph Algorithms</h3>
              <p>BFS, DFS, Dijkstra</p>
              <div className="ds-card-footer">
                <span className="ds-complexity">Pathfinding</span>
                <ArrowRight className="ds-arrow" />
              </div>
            </div>
          </Link>
        </div>

        <div className="showcase-cta">
          <Link to="/algorithms" className="btn-outline-glow">
            <span>View All Visualizers</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Practice Roadmap Preview */}
      <section className="practice-preview-section">
        <div className="section-header-advanced">
          <span className="section-tag">Practice</span>
          <h2>Structured Learning Roadmap</h2>
          <p>Follow a proven path to master DSA concepts step by step</p>
        </div>

        <div className="roadmap-preview-grid">
          <div className="roadmap-preview-item" style={{ '--item-color': '#10b981' }}>
            <div className="roadmap-preview-icon"><Target size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Arrays & Hashing</h4>
              <span>3 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#3b82f6' }}>
            <div className="roadmap-preview-icon"><Cpu size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Two Pointers</h4>
              <span>2 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#8b5cf6' }}>
            <div className="roadmap-preview-icon"><Layers size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Stack</h4>
              <span>2 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#f59e0b' }}>
            <div className="roadmap-preview-icon"><BarChart3 size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Binary Search</h4>
              <span>2 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#ec4899' }}>
            <div className="roadmap-preview-icon"><GitBranch size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Trees</h4>
              <span>3 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#6366f1' }}>
            <div className="roadmap-preview-icon"><Network size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Graphs</h4>
              <span>3 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#ef4444' }}>
            <div className="roadmap-preview-icon"><Brain size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Dynamic Programming</h4>
              <span>2 problems</span>
            </div>
          </div>
          <div className="roadmap-preview-item" style={{ '--item-color': '#84cc16' }}>
            <div className="roadmap-preview-icon"><BarChart3 size={20} /></div>
            <div className="roadmap-preview-info">
              <h4>Sorting</h4>
              <span>2 problems</span>
            </div>
          </div>
        </div>

        <div className="showcase-cta">
          <Link to="/practice" className="btn-glow-primary">
            <Trophy className="btn-icon-left" />
            <span>Start the Roadmap</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-advanced">
        <div className="section-header-advanced">
          <span className="section-tag">Features</span>
          <h2>Everything You Need</h2>
          <p>Built for visual learners who want to truly understand DSA</p>
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
              <Code2 />
            </div>
            <h3>Built-in Code Editor</h3>
            <p>Write and test your solutions with a full-featured editor supporting Python, JavaScript, C++, and more.</p>
          </div>

          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#f59e0b' }}>
              <Zap />
            </div>
            <h3>Instant Feedback</h3>
            <p>Run your code against test cases and get immediate results. See exactly what passed and what failed.</p>
          </div>

          <div className="feature-card-advanced">
            <div className="feature-card-bg"></div>
            <div className="feature-icon-advanced" style={{ '--icon-color': '#ec4899' }}>
              <BookOpen />
            </div>
            <h3>Structured Learning</h3>
            <p>Follow a curated roadmap that builds your skills progressively from fundamentals to advanced topics.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="section-header-advanced">
          <span className="section-tag">Get Started</span>
          <h2>Start Learning in Seconds</h2>
          <p>No signup required. Just pick what you want to learn.</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose Your Path</h3>
            <p>Explore visualizers to understand concepts or practice problems to test your skills</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Learn Interactively</h3>
            <p>Visualize operations step-by-step or solve coding challenges with instant feedback</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Complete problems, mark them as solved, and watch your skills grow</p>
          </div>
        </div>

        <div className="final-cta">
          <Link to="/algorithms" className="btn-glow-large">
            <Play className="btn-icon-left" />
            <span>Start Learning Now</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

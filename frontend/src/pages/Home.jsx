import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import {
  StackIcon, HashTableIcon,
  LinkedListIcon, BSTIcon, GraphIcon, QueueIcon
} from '../components/DSAIcons';

const structures = [
  { icon: StackIcon, name: 'Stack', desc: 'Last in, first out. Push, pop, and peek in constant time.', tag: 'O(1)', path: '/stack' },
  { icon: QueueIcon, name: 'Queue', desc: 'First in, first out. Enqueue and dequeue operations.', tag: 'O(1)', path: '/queue' },
  { icon: LinkedListIcon, name: 'Linked List', desc: 'Dynamic chain of nodes with pointer-based traversal.', tag: 'O(1) insert', path: '/linkedlist' },
  { icon: BSTIcon, name: 'Binary Search Tree', desc: 'Ordered tree for logarithmic search and insertion.', tag: 'O(log n)', path: '/bst' },
  { icon: HashTableIcon, name: 'Hash Table', desc: 'Key-value mapping with collision handling strategies.', tag: 'O(1) avg', path: '/hashtable_chaining' },
  { icon: GraphIcon, name: 'Graph Algorithms', desc: 'BFS, DFS, Dijkstra, and minimum spanning trees.', tag: 'Traversal', path: '/dijkstra' },
];

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="home-hero-inner">
          <h1>
            Data Structures<br />
            <span>& Algorithms</span>
          </h1>
          <p>
            Visualize operations step by step, interact with live structures,
            and build real intuition for how algorithms work.
          </p>
          <div className="home-hero-actions">
            <Link to="/algorithms" className="home-btn home-btn--primary">
              Explore Visualizers
              <ArrowRight size={18} />
            </Link>
            <Link to="/practice" className="home-btn home-btn--ghost">
              <Trophy size={18} />
              Practice Problems
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <header className="home-section-head">
          <h2>Featured</h2>
          <Link to="/algorithms" className="home-link-muted">
            All visualizers <ArrowRight size={15} />
          </Link>
        </header>
        <div className="home-cards">
          {structures.map((ds, i) => (
            <Link
              key={ds.name}
              to={ds.path}
              className="home-card"
              style={{ '--stagger': `${i * 0.05}s` }}
            >
              <div className="home-card-icon">
                <ds.icon />
              </div>
              <div className="home-card-body">
                <h3>{ds.name}</h3>
                <p>{ds.desc}</p>
              </div>
              <span className="home-card-tag">{ds.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section home-section--alt">
        <div className="home-banner">
          <div>
            <h2>Practice Problems</h2>
            <p>
              22 curated problems across arrays, trees, graphs, dynamic programming,
              and more. Built-in editor with instant test feedback.
            </p>
          </div>
          <Link to="/practice" className="home-btn home-btn--primary">
            Start Practicing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

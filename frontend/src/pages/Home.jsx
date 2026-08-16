import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';
import {
  StackIcon, HashTableIcon,
  LinkedListIcon, BSTIcon, GraphIcon, QueueIcon
} from '../components/DSAIcons';
import HeroGraphDemo from '../components/HeroGraphDemo';

/**
 * Six items, six cells, no gaps. The two spanning tiles bookend two rows of
 * pairs, so the grid never ends on a half-empty row.
 */
const structures = [
  { icon: GraphIcon, name: 'Graph Algorithms', desc: 'BFS, DFS, Dijkstra, Bellman-Ford, and minimum spanning trees, each with a step scrubber.', tag: 'Traversal', path: '/dijkstra', wide: true },
  { icon: BSTIcon, name: 'Binary Search Tree', desc: 'Ordered tree for logarithmic search and insertion.', tag: 'O(log n)', path: '/bst' },
  { icon: HashTableIcon, name: 'Hash Table', desc: 'Key-value mapping with three collision strategies.', tag: 'O(1) avg', path: '/hashtable_chaining' },
  { icon: StackIcon, name: 'Stack', desc: 'Last in, first out. Push, pop, and peek in constant time.', tag: 'O(1)', path: '/stack' },
  { icon: QueueIcon, name: 'Queue', desc: 'First in, first out. Enqueue and dequeue operations.', tag: 'O(1)', path: '/queue' },
  { icon: LinkedListIcon, name: 'Linked List', desc: 'Dynamic chain of nodes, traversed one pointer at a time.', tag: 'O(1) insert', path: '/linkedlist', wide: true },
];

function Home() {
  return (
    <>
      {/* Asymmetric split: the claim on the left, the claim being
          demonstrated on the right. */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>
              Watch data structures
              <br />
              <span>actually run.</span>
            </h1>
            <p>
              Step through algorithms one operation at a time, scrub backwards,
              and see exactly what changed.
            </p>
            <div className="home-hero-actions">
              <Link to="/algorithms" className="home-btn home-btn--primary">
                Explore Visualizers
                <ArrowRight size={17} />
              </Link>
              <Link to="/sandbox" className="home-btn home-btn--ghost">
                <Terminal size={17} />
                Open Sandbox
              </Link>
            </div>
          </div>

          <div className="home-hero-demo">
            <HeroGraphDemo />
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

        {/* The first tile spans the row: the graph visualizers are the
            deepest part of the product, so the grid says so. */}
        <div className="home-cards">
          {structures.map((ds, i) => (
            <Link
              key={ds.name}
              to={ds.path}
              className={`home-card${ds.wide ? ' home-card--wide' : ''}`}
              style={{ '--stagger': `${i * 0.04}s` }}
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
          <div className="home-banner-copy">
            <h2>Practice problems</h2>
            <p>
              29 problems across arrays, trees, graphs, and dynamic programming.
              Built-in editor with instant test feedback.
            </p>
          </div>
          <Link to="/practice" className="home-btn home-btn--primary">
            Start Practicing
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import Contact from './pages/Contact';
import Contributions from './pages/Contributions';

// Visualizers - Linear
import StackVisualizer from './visualizers/linear/StackVisualizer';
import QueueVisualizer from './visualizers/linear/QueueVisualizer';
import LinkedListVisualizer from './visualizers/linear/LinkedListVisualizer';
import SkipListVisualizer from './visualizers/linear/SkipList/SkipListVisualizer';

// Visualizers - Hash
import HashTableVisualizer from './visualizers/hash/HashTableVisualizer';
import HashTableChaining from './visualizers/hash/HashTableChaining';
import HashTableQuadratic from './visualizers/hash/HashTableQuadratic';

// Visualizers - Trees
import BinaryTreeVisualizer from './visualizers/binarytrees/BinaryTreeTraversals/BinaryTreeTraversals';
import BSTVisualizer from './visualizers/binarytrees/BST/BSTVisualizer';
import AVLVisualizer from './visualizers/binarytrees/AVL/AVLVisualizer';
import SplayVisualizer from './visualizers/binarytrees/Splay/SplayVisualizer';
import TreapVisualizer from './visualizers/binarytrees/Treap/TreapVisualizer';

// Visualizers - Heaps
import MinHeapVisualizer from './visualizers/heaps/MinHeapVisualizer';
import MaxHeapVisualizer from './visualizers/heaps/MaxHeapVisualizer';

// Visualizers - Graphs
import GraphVisualizer from './visualizers/graphs/GraphVisualizer';
import AdjacencyMatrixVisualizer from './visualizers/graphs/AdjacencyMatrixVisualizer';
import BFSVisualizer from './visualizers/graphs/BFSVisualizer';
import DFSVisualizer from './visualizers/graphs/DFSVisualizer';
import DijkstraVisualizer from './visualizers/graphs/DijkstraVisualizer';
import MSTVisualizer from './visualizers/graphs/MSTVisualizer';
import TopologicalSortVisualizer from './visualizers/graphs/TopologicalSortVisualizer';
import BellmanFordVisualizer from './visualizers/graphs/BellmanFordVisualizer';
import KruskalVisualizer from './visualizers/graphs/KruskalVisualizer';

// Practice
import PracticePage from './practice/PracticePage';

// Comparison
import HashComparison from './pages/HashComparison';
import AlgoCompare from './pages/AlgoCompare';

function App() {
  return (
    <div className="homepage-body">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/stack" element={<StackVisualizer />} />
          <Route path="/queue" element={<QueueVisualizer />} />
          <Route path="/linkedlist" element={<LinkedListVisualizer />} />
          <Route path="/skiplist" element={<SkipListVisualizer />} />
          <Route path="/hashtable_linear" element={<HashTableVisualizer />} />
          <Route path="/hashtable_quadratic" element={<HashTableQuadratic />} />
          <Route path="/hashtable_chaining" element={<HashTableChaining />} />
          <Route path="/binarytree" element={<BinaryTreeVisualizer />} />
          <Route path="/bst" element={<BSTVisualizer />} />
          <Route path="/avl" element={<AVLVisualizer />} />
          <Route path="/splay" element={<SplayVisualizer />} />
          <Route path="/treap" element={<TreapVisualizer />} />
          <Route path="/minheap" element={<MinHeapVisualizer />} />
          <Route path="/maxheap" element={<MaxHeapVisualizer />} />
          <Route path="/adjacency-list" element={<GraphVisualizer />} />
          <Route path="/adjacency-matrix" element={<AdjacencyMatrixVisualizer />} />
          <Route path="/bfs" element={<BFSVisualizer />} />
          <Route path="/dfs" element={<DFSVisualizer />} />
          <Route path="/dijkstra" element={<DijkstraVisualizer />} />
          <Route path="/bellman-ford" element={<BellmanFordVisualizer />} />
          <Route path="/prim-mst" element={<MSTVisualizer />} />
          <Route path="/kruskal-mst" element={<KruskalVisualizer />} />
          <Route path="/topological-sort" element={<TopologicalSortVisualizer />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/:problemId" element={<PracticePage />} />
          <Route path="/compare-hash" element={<HashComparison />} />
          <Route path="/compare" element={<AlgoCompare />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;


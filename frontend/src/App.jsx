import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Algorithms = lazy(() => import('./pages/Algorithms'));
const Contact = lazy(() => import('./pages/Contact'));
const Contributions = lazy(() => import('./pages/Contributions'));

// Visualizers - Linear
const StackVisualizer = lazy(() => import('./visualizers/linear/StackVisualizer'));
const QueueVisualizer = lazy(() => import('./visualizers/linear/QueueVisualizer'));
const LinkedListVisualizer = lazy(() => import('./visualizers/linear/LinkedListVisualizer'));
const SkipListVisualizer = lazy(() => import('./visualizers/linear/SkipList/SkipListVisualizer'));

// Visualizers - Hash
const HashTableVisualizer = lazy(() => import('./visualizers/hash/HashTableVisualizer'));
const HashTableChaining = lazy(() => import('./visualizers/hash/HashTableChaining'));
const HashTableQuadratic = lazy(() => import('./visualizers/hash/HashTableQuadratic'));

// Visualizers - Trees
const BinaryTreeVisualizer = lazy(() => import('./visualizers/binarytrees/BinaryTreeTraversals/BinaryTreeTraversals'));
const BSTVisualizer = lazy(() => import('./visualizers/binarytrees/BST/BSTVisualizer'));
const AVLVisualizer = lazy(() => import('./visualizers/binarytrees/AVL/AVLVisualizer'));
const SplayVisualizer = lazy(() => import('./visualizers/binarytrees/Splay/SplayVisualizer'));
const TreapVisualizer = lazy(() => import('./visualizers/binarytrees/Treap/TreapVisualizer'));

// Visualizers - Heaps
const MinHeapVisualizer = lazy(() => import('./visualizers/heaps/MinHeapVisualizer'));
const MaxHeapVisualizer = lazy(() => import('./visualizers/heaps/MaxHeapVisualizer'));

// Visualizers - Graphs
const GraphVisualizer = lazy(() => import('./visualizers/graphs/GraphVisualizer'));
const AdjacencyMatrixVisualizer = lazy(() => import('./visualizers/graphs/AdjacencyMatrixVisualizer'));
const BFSVisualizer = lazy(() => import('./visualizers/graphs/BFSVisualizer'));
const DFSVisualizer = lazy(() => import('./visualizers/graphs/DFSVisualizer'));
const DijkstraVisualizer = lazy(() => import('./visualizers/graphs/DijkstraVisualizer'));
const MSTVisualizer = lazy(() => import('./visualizers/graphs/MSTVisualizer'));
const TopologicalSortVisualizer = lazy(() => import('./visualizers/graphs/TopologicalSortVisualizer'));
const BellmanFordVisualizer = lazy(() => import('./visualizers/graphs/BellmanFordVisualizer'));
const KruskalVisualizer = lazy(() => import('./visualizers/graphs/KruskalVisualizer'));

// Practice
const PracticePage = lazy(() => import('./practice/PracticePage'));

// Sandbox
const CodeVisualizerSandbox = lazy(() => import('./pages/CodeVisualizerSandbox'));

// Comparison
const HashComparison = lazy(() => import('./pages/HashComparison'));
const AlgoCompare = lazy(() => import('./pages/AlgoCompare'));

// Resume Reviewer
const ResumeReviewer = lazy(() => import('./pages/ResumeReviewer'));

// Loading component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
    <p>Loading Visualizer...</p>
  </div>
);

function App() {
  return (
    <div className="homepage-body">
      <Sidebar />
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/sandbox" element={<CodeVisualizerSandbox />} />
            <Route path="/compare-hash" element={<HashComparison />} />
            <Route path="/compare" element={<AlgoCompare />} />
            <Route path="/resume-reviewer" element={<ResumeReviewer />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </div>
  );
}

export default App;

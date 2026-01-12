import React from 'react';
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

// Visualizers - Hash
import HashTableVisualizer from './visualizers/hash/HashTableVisualizer';
import HashTableChaining from './visualizers/hash/HashTableChaining';

// Visualizers - Trees
import BinaryTreeVisualizer from './visualizers/binarytrees/BinaryTreeTraversals/BinaryTreeTraversals';

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
          <Route path="/hashtable_linear" element={<HashTableVisualizer />} />
          <Route path="/hashtable_chaining" element={<HashTableChaining />} />
          <Route path="/binarytree" element={<BinaryTreeVisualizer />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;


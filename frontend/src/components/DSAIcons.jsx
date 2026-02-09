import React from 'react';

/**
 * Custom SVG icons for data structures and algorithms.
 * Designed to visually represent each structure rather than using generic icons.
 * All icons use a 24x24 viewBox, stroke-based, compatible with Lucide sizing.
 */

const I = ({ children, size, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

/* ─── Linear ─── */

export const StackIcon = (p) => (
  <I {...p}>
    <rect x="4" y="2" width="16" height="5" rx="1.5" />
    <rect x="4" y="9.5" width="16" height="5" rx="1.5" />
    <rect x="4" y="17" width="16" height="5" rx="1.5" />
  </I>
);

export const QueueIcon = (p) => (
  <I {...p}>
    <rect x="1.5" y="6" width="5" height="9" rx="1.5" />
    <rect x="9.5" y="6" width="5" height="9" rx="1.5" />
    <rect x="17.5" y="6" width="5" height="9" rx="1.5" />
    <path d="M4 19h16" />
    <path d="M17.5 17l2.5 2-2.5 2" />
  </I>
);

export const LinkedListIcon = (p) => (
  <I {...p}>
    <circle cx="4" cy="12" r="2.5" />
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="20" cy="12" r="2.5" />
    <path d="M6.5 12h3" />
    <path d="M14.5 12h3" />
    <path d="M8.5 10.5l1 1.5-1 1.5" />
    <path d="M16.5 10.5l1 1.5-1 1.5" />
  </I>
);

export const SkipListIcon = (p) => (
  <I {...p}>
    {/* Bottom level */}
    <circle cx="3" cy="19" r="1.8" />
    <circle cx="9" cy="19" r="1.8" />
    <circle cx="15" cy="19" r="1.8" />
    <circle cx="21" cy="19" r="1.8" />
    <line x1="4.8" y1="19" x2="7.2" y2="19" />
    <line x1="10.8" y1="19" x2="13.2" y2="19" />
    <line x1="16.8" y1="19" x2="19.2" y2="19" />
    {/* Middle level */}
    <circle cx="3" cy="12" r="1.8" />
    <circle cx="15" cy="12" r="1.8" />
    <line x1="4.8" y1="12" x2="13.2" y2="12" />
    {/* Top level */}
    <circle cx="3" cy="5" r="1.8" />
    <circle cx="21" cy="5" r="1.8" />
    <line x1="4.8" y1="5" x2="19.2" y2="5" />
    {/* Vertical links */}
    <line x1="3" y1="6.8" x2="3" y2="10.2" />
    <line x1="3" y1="13.8" x2="3" y2="17.2" />
    <line x1="15" y1="13.8" x2="15" y2="17.2" />
    <line x1="21" y1="6.8" x2="21" y2="17.2" />
  </I>
);

/* ─── Hash Tables ─── */

export const HashTableIcon = (p) => (
  <I {...p}>
    {/* Buckets */}
    <rect x="13" y="2" width="9" height="4.5" rx="1" />
    <rect x="13" y="8.5" width="9" height="4.5" rx="1" />
    <rect x="13" y="15" width="9" height="4.5" rx="1" />
    {/* Keys */}
    <circle cx="3.5" cy="4.25" r="1.5" />
    <circle cx="3.5" cy="10.75" r="1.5" />
    <circle cx="3.5" cy="17.25" r="1.5" />
    {/* Hash arrows: key → scattered buckets */}
    <path d="M5 4.25h6.5" />
    <path d="M11.5 4.25l1.5 6.5" />
    <path d="M5 10.75h8" />
    <path d="M5 17.25h6.5" />
    <path d="M11.5 17.25l1.5-3" />
  </I>
);

export const HashChainingIcon = (p) => (
  <I {...p}>
    {/* Array slots */}
    <rect x="2" y="3" width="6" height="5" rx="1" />
    <rect x="2" y="10" width="6" height="5" rx="1" />
    <rect x="2" y="17" width="6" height="5" rx="1" />
    {/* Chains */}
    <line x1="8" y1="5.5" x2="11" y2="5.5" />
    <circle cx="13" cy="5.5" r="1.8" />
    <line x1="14.8" y1="5.5" x2="17.5" y2="5.5" />
    <circle cx="19.5" cy="5.5" r="1.8" />
    <line x1="8" y1="12.5" x2="11" y2="12.5" />
    <circle cx="13" cy="12.5" r="1.8" />
    {/* Empty slot indicator */}
    <line x1="8" y1="19.5" x2="10" y2="19.5" />
    <circle cx="10.5" cy="19.5" r="0.5" fill="currentColor" />
  </I>
);

export const HashProbeIcon = (p) => (
  <I {...p}>
    {/* Array of slots */}
    <rect x="3" y="8" width="3.5" height="8" rx="1" />
    <rect x="7.5" y="8" width="3.5" height="8" rx="1" />
    <rect x="12" y="8" width="3.5" height="8" rx="1" />
    <rect x="16.5" y="8" width="3.5" height="8" rx="1" />
    {/* Collision X in first slot */}
    <line x1="4" y1="10" x2="5.5" y2="14" />
    <line x1="5.5" y1="10" x2="4" y2="14" />
    {/* Probe arrow hopping over */}
    <path d="M4.75 6.5 C4.75 3 9.25 3 9.25 6.5" />
    <path d="M8.25 5l1 1.5-1.5 0.5" />
  </I>
);

/* ─── Trees ─── */

export const BinaryTreeIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="6" cy="13" r="2.5" />
    <circle cx="18" cy="13" r="2.5" />
    <circle cx="3" cy="21" r="1.8" />
    <circle cx="9" cy="21" r="1.8" />
    <circle cx="15" cy="21" r="1.8" />
    <circle cx="21" cy="21" r="1.8" />
    <line x1="10.2" y1="5.8" x2="7.8" y2="11.2" />
    <line x1="13.8" y1="5.8" x2="16.2" y2="11.2" />
    <line x1="4.5" y1="14.8" x2="3.5" y2="19.2" />
    <line x1="7.5" y1="14.8" x2="8.5" y2="19.2" />
    <line x1="16.5" y1="14.8" x2="15.5" y2="19.2" />
    <line x1="19.5" y1="14.8" x2="20.5" y2="19.2" />
  </I>
);

export const BSTIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="4.5" r="2.5" />
    <circle cx="7" cy="13" r="2.5" />
    <circle cx="17" cy="13" r="2.5" />
    <circle cx="4" cy="20.5" r="2" />
    <circle cx="20" cy="20.5" r="2" />
    <line x1="10.3" y1="6.2" x2="8.7" y2="11.3" />
    <line x1="13.7" y1="6.2" x2="15.3" y2="11.3" />
    <line x1="5.5" y1="14.8" x2="4.8" y2="18.5" />
    <line x1="18.5" y1="14.8" x2="19.2" y2="18.5" />
  </I>
);

export const AVLIcon = (p) => (
  <I {...p}>
    {/* Perfectly balanced tree */}
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="6.5" cy="12" r="2.5" />
    <circle cx="17.5" cy="12" r="2.5" />
    <circle cx="3.5" cy="20" r="2" />
    <circle cx="9.5" cy="20" r="2" />
    <circle cx="14.5" cy="20" r="2" />
    <circle cx="20.5" cy="20" r="2" />
    <line x1="10.2" y1="5.7" x2="8.3" y2="10.3" />
    <line x1="13.8" y1="5.7" x2="15.7" y2="10.3" />
    <line x1="5" y1="13.8" x2="4.2" y2="18" />
    <line x1="8" y1="13.8" x2="8.8" y2="18" />
    <line x1="16" y1="13.8" x2="15.2" y2="18" />
    <line x1="19" y1="13.8" x2="19.8" y2="18" />
  </I>
);

export const SplayIcon = (p) => (
  <I {...p}>
    {/* Root with emphasis glow ring */}
    <circle cx="12" cy="4.5" r="2.5" />
    <circle cx="12" cy="4.5" r="4" opacity="0.3" />
    {/* Subtrees */}
    <circle cx="6" cy="13" r="2.5" />
    <circle cx="18" cy="13" r="2.5" />
    <circle cx="3.5" cy="20.5" r="2" />
    <circle cx="15.5" cy="20.5" r="2" />
    <line x1="10.2" y1="6.2" x2="7.8" y2="11.2" />
    <line x1="13.8" y1="6.2" x2="16.2" y2="11.2" />
    <line x1="4.7" y1="14.8" x2="3.9" y2="18.5" />
    <line x1="16.8" y1="14.8" x2="16" y2="18.5" />
  </I>
);

export const TreapIcon = (p) => (
  <I {...p}>
    {/* Tree shaped by random priorities - slightly lopsided */}
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="7" cy="12" r="2.5" />
    <circle cx="18" cy="10" r="2.5" />
    <circle cx="4" cy="20" r="2" />
    <circle cx="10" cy="19" r="2" />
    <circle cx="21" cy="17.5" r="2" />
    <line x1="10.2" y1="5.7" x2="8.7" y2="10.3" />
    <line x1="13.8" y1="5.2" x2="16.2" y2="8.5" />
    <line x1="5.5" y1="13.8" x2="4.6" y2="18" />
    <line x1="8.5" y1="13.8" x2="9.5" y2="17" />
    <line x1="19.8" y1="12" x2="20.6" y2="15.5" />
  </I>
);

/* ─── Heaps ─── */

export const MinHeapIcon = (p) => (
  <I {...p}>
    {/* Pyramid with smallest at top */}
    <circle cx="12" cy="3.5" r="2.5" />
    <circle cx="6.5" cy="12" r="2.5" />
    <circle cx="17.5" cy="12" r="2.5" />
    <circle cx="3" cy="20.5" r="2" />
    <circle cx="10" cy="20.5" r="2" />
    <circle cx="14" cy="20.5" r="2" />
    <circle cx="21" cy="20.5" r="2" />
    <line x1="10.2" y1="5.2" x2="8.3" y2="10.3" />
    <line x1="13.8" y1="5.2" x2="15.7" y2="10.3" />
    <line x1="5" y1="13.8" x2="3.7" y2="18.5" />
    <line x1="8" y1="13.8" x2="9.3" y2="18.5" />
    <line x1="16" y1="13.8" x2="14.7" y2="18.5" />
    <line x1="19" y1="13.8" x2="20.3" y2="18.5" />
    {/* Up arrow indicating min at top */}
    <path d="M22 8l0-5" />
    <path d="M20.5 4.5L22 3l1.5 1.5" opacity="0.5" />
  </I>
);

export const MaxHeapIcon = (p) => (
  <I {...p}>
    {/* Pyramid with largest at top */}
    <circle cx="12" cy="3.5" r="2.5" />
    <circle cx="6.5" cy="12" r="2.5" />
    <circle cx="17.5" cy="12" r="2.5" />
    <circle cx="3" cy="20.5" r="2" />
    <circle cx="10" cy="20.5" r="2" />
    <circle cx="14" cy="20.5" r="2" />
    <circle cx="21" cy="20.5" r="2" />
    <line x1="10.2" y1="5.2" x2="8.3" y2="10.3" />
    <line x1="13.8" y1="5.2" x2="15.7" y2="10.3" />
    <line x1="5" y1="13.8" x2="3.7" y2="18.5" />
    <line x1="8" y1="13.8" x2="9.3" y2="18.5" />
    <line x1="16" y1="13.8" x2="14.7" y2="18.5" />
    <line x1="19" y1="13.8" x2="20.3" y2="18.5" />
    {/* Down arrow indicating max at top */}
    <path d="M22 3l0 5" />
    <path d="M20.5 6.5L22 8l1.5-1.5" opacity="0.5" />
  </I>
);

/* ─── Graphs ─── */

export const GraphIcon = (p) => (
  <I {...p}>
    {/* 5 nodes in a rough pentagon */}
    <circle cx="12" cy="3" r="2" />
    <circle cx="4" cy="10" r="2" />
    <circle cx="20" cy="10" r="2" />
    <circle cx="6.5" cy="20" r="2" />
    <circle cx="17.5" cy="20" r="2" />
    {/* Edges */}
    <line x1="10.2" y1="4.2" x2="5.8" y2="8.8" />
    <line x1="13.8" y1="4.2" x2="18.2" y2="8.8" />
    <line x1="4.5" y1="12" x2="6" y2="18" />
    <line x1="19.5" y1="12" x2="18" y2="18" />
    <line x1="8.5" y1="20" x2="15.5" y2="20" />
    {/* Cross edge */}
    <line x1="6" y1="10.5" x2="18" y2="10.5" opacity="0.4" />
  </I>
);

export const AdjMatrixIcon = (p) => (
  <I {...p}>
    {/* 4x4 grid */}
    <rect x="2" y="2" width="20" height="20" rx="1.5" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="7" x2="22" y2="7" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="17" x2="22" y2="17" />
    {/* Filled cells indicating edges */}
    <rect x="7.75" y="2.75" width="3.5" height="3.5" rx="0.5" fill="currentColor" opacity="0.25" stroke="none" />
    <rect x="12.75" y="7.75" width="3.5" height="3.5" rx="0.5" fill="currentColor" opacity="0.25" stroke="none" />
    <rect x="2.75" y="12.75" width="3.5" height="3.5" rx="0.5" fill="currentColor" opacity="0.25" stroke="none" />
    <rect x="17.75" y="17.75" width="3.5" height="3.5" rx="0.5" fill="currentColor" opacity="0.25" stroke="none" />
  </I>
);

export const AdjListIcon = (p) => (
  <I {...p}>
    {/* Source nodes */}
    <circle cx="4" cy="5" r="2" />
    <circle cx="4" cy="12" r="2" />
    <circle cx="4" cy="19" r="2" />
    {/* Arrows to neighbor lists */}
    <line x1="6" y1="5" x2="9" y2="5" />
    <line x1="6" y1="12" x2="9" y2="12" />
    <line x1="6" y1="19" x2="9" y2="19" />
    {/* Neighbor boxes */}
    <rect x="9.5" y="2.5" width="4.5" height="5" rx="1" />
    <rect x="15" y="2.5" width="4.5" height="5" rx="1" />
    <rect x="9.5" y="9.5" width="4.5" height="5" rx="1" />
    <rect x="15" y="9.5" width="4.5" height="5" rx="1" />
    <rect x="20.5" y="9.5" width="2" height="5" rx="0.5" opacity="0.4" />
    <rect x="9.5" y="16.5" width="4.5" height="5" rx="1" />
  </I>
);

export const BFSIcon = (p) => (
  <I {...p}>
    {/* Center source node */}
    <circle cx="12" cy="12" r="2.5" />
    {/* First ring - expanding outward */}
    <circle cx="12" cy="12" r="6" opacity="0.5" strokeDasharray="2 2" />
    {/* Second ring */}
    <circle cx="12" cy="12" r="9.5" opacity="0.25" strokeDasharray="2 2" />
    {/* Discovered nodes on first ring */}
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="12" cy="18" r="1.5" />
    {/* Discovered nodes on second ring */}
    <circle cx="3.5" cy="7" r="1.3" opacity="0.5" />
    <circle cx="20.5" cy="7" r="1.3" opacity="0.5" />
    <circle cx="3.5" cy="17" r="1.3" opacity="0.5" />
    <circle cx="20.5" cy="17" r="1.3" opacity="0.5" />
  </I>
);

export const DFSIcon = (p) => (
  <I {...p}>
    {/* Tree with a highlighted deep path */}
    <circle cx="12" cy="3" r="2" />
    <circle cx="6" cy="10" r="2" />
    <circle cx="18" cy="10" r="2" />
    <circle cx="3" cy="17" r="2" />
    <circle cx="9" cy="17" r="2" />
    <circle cx="6" cy="22" r="1.5" />
    <line x1="10.5" y1="4.5" x2="7.5" y2="8.5" />
    <line x1="13.5" y1="4.5" x2="16.5" y2="8.5" />
    <line x1="4.5" y1="11.5" x2="3.5" y2="15.5" />
    <line x1="7.5" y1="11.5" x2="8.5" y2="15.5" />
    <line x1="3.5" y1="19" x2="5.2" y2="20.8" />
    {/* Deep path highlight */}
    <path d="M12 3 L6 10 L3 17 L6 22" strokeWidth="2.5" opacity="0.25" />
  </I>
);

export const DijkstraIcon = (p) => (
  <I {...p}>
    {/* Graph with weighted shortest path */}
    <circle cx="3" cy="12" r="2" />
    <circle cx="11" cy="5" r="2" />
    <circle cx="11" cy="19" r="2" />
    <circle cx="21" cy="12" r="2" />
    {/* All edges */}
    <line x1="4.8" y1="10.8" x2="9.2" y2="6.2" />
    <line x1="4.8" y1="13.2" x2="9.2" y2="17.8" />
    <line x1="12.8" y1="6.2" x2="19.2" y2="10.8" />
    <line x1="12.8" y1="17.8" x2="19.2" y2="13.2" />
    <line x1="11" y1="7" x2="11" y2="17" opacity="0.4" />
    {/* Shortest path highlight */}
    <path d="M3 12 L11 5 L21 12" strokeWidth="2.5" opacity="0.25" />
  </I>
);

export const MSTIcon = (p) => (
  <I {...p}>
    {/* Nodes */}
    <circle cx="12" cy="3" r="2" />
    <circle cx="4" cy="10" r="2" />
    <circle cx="20" cy="10" r="2" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
    {/* MST edges (thicker) */}
    <line x1="10.5" y1="4.5" x2="5.5" y2="8.5" strokeWidth="2.5" />
    <line x1="13.5" y1="4.5" x2="18.5" y2="8.5" strokeWidth="2.5" />
    <line x1="5" y1="12" x2="6.5" y2="17" strokeWidth="2.5" />
    <line x1="19" y1="12" x2="17.5" y2="17" strokeWidth="2.5" />
    {/* Non-MST edges (dimmed) */}
    <line x1="9" y1="19" x2="15" y2="19" opacity="0.2" />
    <line x1="5.5" y1="11.5" x2="18.5" y2="11.5" opacity="0.2" />
  </I>
);

export const TopSortIcon = (p) => (
  <I {...p}>
    {/* DAG flowing left to right */}
    <circle cx="3" cy="6" r="2" />
    <circle cx="3" cy="18" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="21" cy="8" r="2" />
    <circle cx="21" cy="16" r="2" />
    {/* Directed edges */}
    <line x1="5" y1="7" x2="10" y2="11" />
    <line x1="5" y1="17" x2="10" y2="13" />
    <line x1="14" y1="11" x2="19" y2="9" />
    <line x1="14" y1="13" x2="19" y2="15" />
    {/* Arrowheads */}
    <path d="M9 9.5l1 1.5-1.5 0.5" />
    <path d="M9 14.5l1-1.5-1.5-0.5" />
    <path d="M18 10l1-1-1.5-0.2" />
    <path d="M18 14l1 1-1.5 0.2" />
  </I>
);

export const BellmanFordIcon = (p) => (
  <I {...p}>
    {/* Graph with negative edge vibe */}
    <circle cx="4" cy="12" r="2.5" />
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="20" cy="12" r="2.5" />
    <circle cx="12" cy="20" r="2.5" />
    {/* Edges */}
    <line x1="5.8" y1="10.5" x2="10.2" y2="5.5" />
    <line x1="13.8" y1="5.5" x2="18.2" y2="10.5" />
    <line x1="18.2" y1="13.5" x2="13.8" y2="18.5" />
    <line x1="10.2" y1="18.5" x2="5.8" y2="13.5" />
    {/* Relaxation wave */}
    <path d="M4 12 L12 4 L20 12 L12 20 Z" strokeWidth="2.5" opacity="0.15" />
  </I>
);

export const KruskalIcon = (p) => (
  <I {...p}>
    {/* Nodes in two clusters being merged */}
    <circle cx="5" cy="6" r="2" />
    <circle cx="11" cy="4" r="2" />
    <circle cx="5" cy="14" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="19" cy="14" r="2" />
    <circle cx="12" cy="20" r="2" />
    {/* Cluster 1 edges */}
    <line x1="6.5" y1="7.2" x2="9.5" y2="5" />
    <line x1="5" y1="8" x2="5" y2="12" />
    {/* Cluster 2 edges */}
    <line x1="19" y1="8" x2="19" y2="12" />
    {/* Bridge edge being added (dashed) */}
    <line x1="6.8" y1="14.8" x2="10.2" y2="19.2" strokeDasharray="2 2" />
    <line x1="13.8" y1="19.2" x2="17.2" y2="14.8" strokeDasharray="2 2" />
    <line x1="12.8" y1="4.5" x2="17.2" y2="5.5" strokeDasharray="2 2" />
  </I>
);

/* ─── Category Icons ─── */

export const LinearIcon = (p) => (
  <I {...p}>
    {/* Sequential elements */}
    <rect x="1" y="9" width="5" height="6" rx="1.5" />
    <rect x="7.5" y="9" width="5" height="6" rx="1.5" />
    <rect x="14" y="9" width="5" height="6" rx="1.5" />
    <path d="M19 12h2.5" />
    <path d="M20.5 10.5l1.5 1.5-1.5 1.5" />
  </I>
);

export const TreeCategoryIcon = (p) => (
  <I {...p}>
    {/* Stylized tree */}
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="5" cy="13" r="2.5" />
    <circle cx="19" cy="13" r="2.5" />
    <circle cx="12" cy="21" r="2" />
    <line x1="10.2" y1="5.8" x2="6.8" y2="11.2" />
    <line x1="13.8" y1="5.8" x2="17.2" y2="11.2" />
    <line x1="6.5" y1="15" x2="10.5" y2="19.5" />
    <line x1="17.5" y1="15" x2="13.5" y2="19.5" />
  </I>
);

export const HeapCategoryIcon = (p) => (
  <I {...p}>
    {/* Pyramid shape */}
    <circle cx="12" cy="3.5" r="2.5" />
    <circle cx="6.5" cy="12" r="2.5" />
    <circle cx="17.5" cy="12" r="2.5" />
    <circle cx="3.5" cy="20.5" r="2" />
    <circle cx="9.5" cy="20.5" r="2" />
    <circle cx="14.5" cy="20.5" r="2" />
    <circle cx="20.5" cy="20.5" r="2" />
    <line x1="10.3" y1="5.2" x2="8.3" y2="10.3" />
    <line x1="13.7" y1="5.2" x2="15.7" y2="10.3" />
    <line x1="5" y1="13.8" x2="4.2" y2="18.5" />
    <line x1="8" y1="13.8" x2="8.8" y2="18.5" />
    <line x1="16" y1="13.8" x2="15.2" y2="18.5" />
    <line x1="19" y1="13.8" x2="19.8" y2="18.5" />
  </I>
);

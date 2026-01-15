"""
Min Heap Implementation
=======================
Complete binary tree where each parent is smaller than or equal to its children.
The minimum element is always at the root.
"""


class MinHeap:
    """Min Heap - Priority Queue with minimum at root."""

    def __init__(self, capacity=7):
        self.heap = []
        self.capacity = capacity

    def _parent(self, i):
        """Get parent index."""
        return (i - 1) // 2

    def _left_child(self, i):
        """Get left child index."""
        return 2 * i + 1

    def _right_child(self, i):
        """Get right child index."""
        return 2 * i + 2

    def _swap(self, i, j):
        """Swap elements at indices i and j."""
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def _heapify_up(self, i):
        """Move element up to maintain heap property."""
        parent = self._parent(i)
        while i > 0 and self.heap[i] < self.heap[parent]:
            self._swap(i, parent)
            i = parent
            parent = self._parent(i)

    def _heapify_down(self, i):
        """Move element down to maintain heap property."""
        smallest = i
        left = self._left_child(i)
        right = self._right_child(i)

        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left

        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right

        if smallest != i:
            self._swap(i, smallest)
            self._heapify_down(smallest)

    def insert(self, key):
        """Insert a key into the heap."""
        if len(self.heap) >= self.capacity:
            return False

        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
        return True

    def extract_min(self):
        """Remove and return the minimum element."""
        if not self.heap:
            return None

        if len(self.heap) == 1:
            return self.heap.pop()

        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root

    def peek(self):
        """Return the minimum element without removing it."""
        if not self.heap:
            return None
        return self.heap[0]

    def decrease_key(self, i, new_val):
        """Decrease the value of key at index i."""
        if i >= len(self.heap) or new_val > self.heap[i]:
            return False
        self.heap[i] = new_val
        self._heapify_up(i)
        return True

    def delete(self, i):
        """Delete element at index i."""
        if i >= len(self.heap):
            return False
        self.decrease_key(i, float('-inf'))
        self.extract_min()
        return True

    def size(self):
        """Return the number of elements."""
        return len(self.heap)

    def is_empty(self):
        """Check if heap is empty."""
        return len(self.heap) == 0

    def is_full(self):
        """Check if heap is full."""
        return len(self.heap) >= self.capacity

    def to_list(self):
        """Return heap as list."""
        return self.heap.copy()

    def to_dict(self):
        """Convert heap to tree-like dictionary for visualization."""
        if not self.heap:
            return None
        return self._to_dict_rec(0)

    def _to_dict_rec(self, i):
        """Recursive dict conversion."""
        if i >= len(self.heap):
            return None
        return {
            "value": self.heap[i],
            "index": i,
            "left": self._to_dict_rec(self._left_child(i)),
            "right": self._to_dict_rec(self._right_child(i))
        }

    def get_levels(self):
        """Return heap as list of levels for visualization."""
        if not self.heap:
            return []
        levels = []
        level_size = 1
        i = 0
        while i < len(self.heap):
            level = []
            for _ in range(level_size):
                if i < len(self.heap):
                    level.append(self.heap[i])
                    i += 1
            levels.append(level)
            level_size *= 2
        return levels

    def height(self):
        """Return the height of the heap."""
        if not self.heap:
            return -1
        import math
        return int(math.log2(len(self.heap)))

    def clear(self):
        """Remove all elements from the heap."""
        self.heap = []

    def build_heap(self, arr):
        """Build heap from array."""
        self.heap = arr[:self.capacity]
        # Start from last non-leaf node
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

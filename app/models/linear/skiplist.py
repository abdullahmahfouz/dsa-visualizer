"""
Skip List Implementation
========================
A probabilistic data structure that allows O(log n) search, insert, and delete.
Uses multiple layers of linked lists with decreasing density at higher levels.

Operations:
- search: O(log n) average - Find element
- insert: O(log n) average - Add element
- delete: O(log n) average - Remove element
"""

import random


class SkipListNode:
    """A node in the skip list with multiple forward pointers"""
    def __init__(self, value, level):
        self.value = value
        # forward[i] points to the next node at level i
        self.forward = [None] * (level + 1)


class SkipList:
    """
    Skip List Implementation
    ========================
    A probabilistic data structure combining benefits of sorted arrays
    and linked lists. Uses multiple levels of linked lists where higher
    levels skip over more elements.

    Properties:
    - Average O(log n) for search, insert, delete
    - Space: O(n) expected
    - Probability p = 0.5 for level promotion
    """

    MAX_LEVEL = 16  # Maximum number of levels
    P = 0.5  # Probability for level promotion

    def __init__(self):
        self.level = 0  # Current highest level
        self.header = SkipListNode(float('-inf'), self.MAX_LEVEL)
        self._size = 0

    def random_level(self):
        """Generate a random level for new node using geometric distribution"""
        lvl = 0
        while random.random() < self.P and lvl < self.MAX_LEVEL:
            lvl += 1
        return lvl

    def search(self, value):
        """
        Search for a value in the skip list.
        Returns (found, path) where path shows the search traversal.
        """
        current = self.header
        path = []  # Track search path for visualization

        # Start from highest level and move down
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                path.append({
                    'level': i,
                    'value': current.forward[i].value,
                    'action': 'move_right'
                })
                current = current.forward[i]
            path.append({
                'level': i,
                'value': current.value if current.value != float('-inf') else 'HEAD',
                'action': 'move_down'
            })

        # Move to potential match
        current = current.forward[0]

        if current and current.value == value:
            path.append({
                'level': 0,
                'value': value,
                'action': 'found'
            })
            return True, path

        path.append({
            'level': 0,
            'value': value,
            'action': 'not_found'
        })
        return False, path

    def insert(self, value):
        """
        Insert a value into the skip list.
        Returns the new level assigned to this node.
        """
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header

        # Find position at each level
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        # Check if value already exists
        current = current.forward[0]
        if current and current.value == value:
            return -1  # Value already exists

        # Generate random level for new node
        new_level = self.random_level()

        # If new level is higher than current, update header
        if new_level > self.level:
            for i in range(self.level + 1, new_level + 1):
                update[i] = self.header
            self.level = new_level

        # Create new node and insert at all levels
        new_node = SkipListNode(value, new_level)
        for i in range(new_level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node

        self._size += 1
        return new_level

    def delete(self, value):
        """
        Delete a value from the skip list.
        Returns True if deleted, False if not found.
        """
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header

        # Find position at each level
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        # Move to target node
        current = current.forward[0]

        # If found, remove from all levels
        if current and current.value == value:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]

            # Update level if needed
            while self.level > 0 and self.header.forward[self.level] is None:
                self.level -= 1

            self._size -= 1
            return True

        return False

    def size(self):
        """Return the number of elements"""
        return self._size

    def is_empty(self):
        """Check if skip list is empty"""
        return self._size == 0

    def clear(self):
        """Remove all elements"""
        self.level = 0
        self.header = SkipListNode(float('-inf'), self.MAX_LEVEL)
        self._size = 0

    def get_current_level(self):
        """Return the current maximum level in use"""
        return self.level

    def to_visualization_data(self):
        """
        Convert skip list to visualization-friendly format.
        Returns a list of levels, each containing nodes at that level.
        """
        if self._size == 0:
            return {
                'levels': [],
                'nodes': [],
                'maxLevel': 0,
                'size': 0
            }

        # Collect all nodes with their levels
        # The node's level is determined by len(forward) - 1 (since forward has level+1 elements)
        nodes = []
        current = self.header.forward[0]
        while current:
            # Node level is the highest level this node participates in
            node_level = len(current.forward) - 1
            nodes.append({
                'value': current.value,
                'level': node_level
            })
            current = current.forward[0]

        # Build level-by-level representation
        levels = []
        for lvl in range(self.level + 1):
            level_nodes = []
            current = self.header.forward[lvl]
            while current:
                level_nodes.append(current.value)
                current = current.forward[lvl]
            levels.append(level_nodes)

        return {
            'levels': levels,
            'nodes': nodes,
            'maxLevel': self.level,
            'size': self._size
        }

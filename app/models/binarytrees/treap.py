import random


class TreapNode:
    """A node in the Treap with a key (BST) and priority (heap)."""
    def __init__(self, key, priority=None):
        self.key = key
        self.priority = priority if priority is not None else random.randint(1, 100)
        self.left = None
        self.right = None


class Treap:
    """Treap: a randomized BST where each node has a random priority
    maintaining max-heap order. Expected O(log n) for all operations."""

    def __init__(self):
        self.root = None

    def _rotate_right(self, node):
        """Right rotation around node."""
        new_root = node.left
        node.left = new_root.right
        new_root.right = node
        return new_root

    def _rotate_left(self, node):
        """Left rotation around node."""
        new_root = node.right
        node.right = new_root.left
        new_root.left = node
        return new_root

    def insert(self, key):
        """Insert a key into the treap."""
        self.root = self._insert_rec(self.root, key)

    def _insert_rec(self, node, key):
        """BST insert, then rotate up to restore heap property."""
        if node is None:
            return TreapNode(key)

        if key < node.key:
            node.left = self._insert_rec(node.left, key)
            if node.left.priority > node.priority:
                node = self._rotate_right(node)
        elif key > node.key:
            node.right = self._insert_rec(node.right, key)
            if node.right.priority > node.priority:
                node = self._rotate_left(node)
        # Duplicate keys are ignored
        return node

    def delete(self, key):
        """Delete a key from the treap."""
        self.root = self._delete_rec(self.root, key)

    def _delete_rec(self, node, key):
        """Rotate node down until it becomes a leaf, then remove."""
        if node is None:
            return None

        if key < node.key:
            node.left = self._delete_rec(node.left, key)
        elif key > node.key:
            node.right = self._delete_rec(node.right, key)
        else:
            # Found the node to delete
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            else:
                # Rotate the higher-priority child up
                if node.left.priority > node.right.priority:
                    node = self._rotate_right(node)
                    node.right = self._delete_rec(node.right, key)
                else:
                    node = self._rotate_left(node)
                    node.left = self._delete_rec(node.left, key)
        return node

    def search(self, key):
        """Search for a key in the treap. Returns the node if found."""
        return self._search_rec(self.root, key)

    def _search_rec(self, node, key):
        if node is None or node.key == key:
            return node
        if key < node.key:
            return self._search_rec(node.left, key)
        return self._search_rec(node.right, key)

    def size(self):
        """Return the number of nodes."""
        return self._size_rec(self.root)

    def _size_rec(self, node):
        if node is None:
            return 0
        return 1 + self._size_rec(node.left) + self._size_rec(node.right)

    def height(self):
        """Return the height of the treap."""
        return self._height_rec(self.root)

    def _height_rec(self, node):
        if node is None:
            return -1
        return 1 + max(self._height_rec(node.left), self._height_rec(node.right))

    def is_empty(self):
        return self.root is None

    def clear(self):
        """Remove all nodes."""
        self.root = None

    def to_dict(self):
        """Convert treap to nested dict for visualization."""
        return self._to_dict_rec(self.root)

    def _to_dict_rec(self, node):
        if node is None:
            return None
        return {
            "value": node.key,
            "priority": node.priority,
            "left": self._to_dict_rec(node.left),
            "right": self._to_dict_rec(node.right)
        }

    def to_list(self):
        """Return inorder traversal as a list."""
        result = []
        self._inorder_rec(self.root, result)
        return result

    def inorder(self):
        """Inorder traversal (Left, Root, Right)."""
        result = []
        self._inorder_rec(self.root, result)
        return result

    def _inorder_rec(self, node, result):
        if node:
            self._inorder_rec(node.left, result)
            result.append(node.key)
            self._inorder_rec(node.right, result)

    def preorder(self):
        """Preorder traversal (Root, Left, Right)."""
        result = []
        self._preorder_rec(self.root, result)
        return result

    def _preorder_rec(self, node, result):
        if node:
            result.append(node.key)
            self._preorder_rec(node.left, result)
            self._preorder_rec(node.right, result)

    def postorder(self):
        """Postorder traversal (Left, Right, Root)."""
        result = []
        self._postorder_rec(self.root, result)
        return result

    def _postorder_rec(self, node, result):
        if node:
            self._postorder_rec(node.left, result)
            self._postorder_rec(node.right, result)
            result.append(node.key)

    def level_order(self):
        """Level-order traversal (BFS)."""
        if self.root is None:
            return []
        result = []
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            result.append(node.key)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

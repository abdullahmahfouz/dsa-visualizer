"""
Splay Tree Implementation
=========================
Self-adjusting BST where recently accessed elements are moved
to the root using rotations (splaying).
"""


class SplayNode:
    """Node in a Splay Tree."""
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class SplayTree:
    """Splay Tree - Self-adjusting BST."""

    def __init__(self):
        self.root = None

    def _rotate_right(self, x):
        """Right rotation around node x."""
        y = x.left
        x.left = y.right
        y.right = x
        return y

    def _rotate_left(self, x):
        """Left rotation around node x."""
        y = x.right
        x.right = y.left
        y.left = x
        return y

    def _splay(self, root, key):
        """Splay operation - bring key to root."""
        if not root or root.key == key:
            return root

        # Key in left subtree
        if key < root.key:
            if not root.left:
                return root

            # Zig-Zig (Left Left)
            if key < root.left.key:
                root.left.left = self._splay(root.left.left, key)
                root = self._rotate_right(root)

            # Zig-Zag (Left Right)
            elif key > root.left.key:
                root.left.right = self._splay(root.left.right, key)
                if root.left.right:
                    root.left = self._rotate_left(root.left)

            return root if not root.left else self._rotate_right(root)

        # Key in right subtree
        else:
            if not root.right:
                return root

            # Zig-Zag (Right Left)
            if key < root.right.key:
                root.right.left = self._splay(root.right.left, key)
                if root.right.left:
                    root.right = self._rotate_right(root.right)

            # Zig-Zig (Right Right)
            elif key > root.right.key:
                root.right.right = self._splay(root.right.right, key)
                root = self._rotate_left(root)

            return root if not root.right else self._rotate_left(root)

    def insert(self, key):
        """Insert a key into the splay tree."""
        if not self.root:
            self.root = SplayNode(key)
            return

        # Splay the closest node to root
        self.root = self._splay(self.root, key)

        # If key already exists
        if self.root.key == key:
            return

        new_node = SplayNode(key)

        if key < self.root.key:
            new_node.right = self.root
            new_node.left = self.root.left
            self.root.left = None
        else:
            new_node.left = self.root
            new_node.right = self.root.right
            self.root.right = None

        self.root = new_node

    def delete(self, key):
        """Delete a key from the splay tree."""
        if not self.root:
            return False

        # Splay the key to root
        self.root = self._splay(self.root, key)

        # Key not found
        if self.root.key != key:
            return False

        # Key found at root, remove it
        if not self.root.left:
            self.root = self.root.right
        else:
            temp = self.root.right
            self.root = self._splay(self.root.left, key)
            self.root.right = temp

        return True

    def search(self, key):
        """Search for a key (splays it to root if found)."""
        if not self.root:
            return None

        self.root = self._splay(self.root, key)

        if self.root.key == key:
            return self.root
        return None

    def find(self, key):
        """Find without splaying (for checking existence)."""
        return self._find_rec(self.root, key)

    def _find_rec(self, node, key):
        """Recursive find without modifying tree."""
        if not node or node.key == key:
            return node
        if key < node.key:
            return self._find_rec(node.left, key)
        return self._find_rec(node.right, key)

    def size(self):
        """Return the number of nodes."""
        return self._size_rec(self.root)

    def _size_rec(self, node):
        """Recursive size count."""
        if not node:
            return 0
        return 1 + self._size_rec(node.left) + self._size_rec(node.right)

    def height(self):
        """Return the height of the tree."""
        return self._height_rec(self.root)

    def _height_rec(self, node):
        """Recursive height calculation."""
        if not node:
            return -1
        return 1 + max(self._height_rec(node.left), self._height_rec(node.right))

    def is_empty(self):
        """Check if tree is empty."""
        return self.root is None

    def to_dict(self):
        """Convert tree to dictionary representation."""
        return self._to_dict_rec(self.root)

    def _to_dict_rec(self, node):
        """Recursive dict conversion."""
        if not node:
            return None
        return {
            "value": node.key,
            "left": self._to_dict_rec(node.left),
            "right": self._to_dict_rec(node.right)
        }

    def to_list(self):
        """Return inorder traversal as list."""
        result = []
        self._inorder_rec(self.root, result)
        return result

    def _inorder_rec(self, node, result):
        """Recursive inorder traversal."""
        if node:
            self._inorder_rec(node.left, result)
            result.append(node.key)
            self._inorder_rec(node.right, result)

    def inorder(self):
        """Return inorder traversal."""
        return self.to_list()

    def preorder(self):
        """Return preorder traversal."""
        result = []
        self._preorder_rec(self.root, result)
        return result

    def _preorder_rec(self, node, result):
        """Recursive preorder traversal."""
        if node:
            result.append(node.key)
            self._preorder_rec(node.left, result)
            self._preorder_rec(node.right, result)

    def postorder(self):
        """Return postorder traversal."""
        result = []
        self._postorder_rec(self.root, result)
        return result

    def _postorder_rec(self, node, result):
        """Recursive postorder traversal."""
        if node:
            self._postorder_rec(node.left, result)
            self._postorder_rec(node.right, result)
            result.append(node.key)

    def level_order(self):
        """Return level-order traversal."""
        if not self.root:
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

    def clear(self):
        """Remove all nodes from the tree."""
        self.root = None

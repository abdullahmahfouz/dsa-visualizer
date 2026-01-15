"""
AVL Tree Implementation
=======================
Self-balancing Binary Search Tree where the height difference
between left and right subtrees is at most 1 for every node.
"""


class AVLNode:
    """Node in an AVL Tree."""
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1  # Height of node (leaf = 1)


class AVLTree:
    """AVL Tree - Self-balancing BST."""

    def __init__(self):
        self.root = None

    def _height(self, node):
        """Get height of a node."""
        if not node:
            return 0
        return node.height

    def _balance_factor(self, node):
        """Get balance factor of a node (left height - right height)."""
        if not node:
            return 0
        return self._height(node.left) - self._height(node.right)

    def _update_height(self, node):
        """Update height of a node based on children."""
        if node:
            node.height = 1 + max(self._height(node.left), self._height(node.right))

    def _rotate_right(self, y):
        """Right rotation around node y."""
        x = y.left
        T2 = x.right

        # Perform rotation
        x.right = y
        y.left = T2

        # Update heights
        self._update_height(y)
        self._update_height(x)

        return x

    def _rotate_left(self, x):
        """Left rotation around node x."""
        y = x.right
        T2 = y.left

        # Perform rotation
        y.left = x
        x.right = T2

        # Update heights
        self._update_height(x)
        self._update_height(y)

        return y

    def insert(self, key):
        """Insert a key into the AVL tree."""
        self.root = self._insert_rec(self.root, key)

    def _insert_rec(self, node, key):
        """Recursive insert with balancing."""
        # Standard BST insert
        if not node:
            return AVLNode(key)

        if key < node.key:
            node.left = self._insert_rec(node.left, key)
        elif key > node.key:
            node.right = self._insert_rec(node.right, key)
        else:
            return node  # Duplicate keys not allowed

        # Update height
        self._update_height(node)

        # Get balance factor
        balance = self._balance_factor(node)

        # Left Left Case
        if balance > 1 and key < node.left.key:
            return self._rotate_right(node)

        # Right Right Case
        if balance < -1 and key > node.right.key:
            return self._rotate_left(node)

        # Left Right Case
        if balance > 1 and key > node.left.key:
            node.left = self._rotate_left(node.left)
            return self._rotate_right(node)

        # Right Left Case
        if balance < -1 and key < node.right.key:
            node.right = self._rotate_right(node.right)
            return self._rotate_left(node)

        return node

    def delete(self, key):
        """Delete a key from the AVL tree."""
        self.root = self._delete_rec(self.root, key)

    def _delete_rec(self, node, key):
        """Recursive delete with balancing."""
        if not node:
            return node

        # Standard BST delete
        if key < node.key:
            node.left = self._delete_rec(node.left, key)
        elif key > node.key:
            node.right = self._delete_rec(node.right, key)
        else:
            # Node with one child or no child
            if not node.left:
                return node.right
            elif not node.right:
                return node.left

            # Node with two children
            temp = self._min_value_node(node.right)
            node.key = temp.key
            node.right = self._delete_rec(node.right, temp.key)

        if not node:
            return node

        # Update height
        self._update_height(node)

        # Get balance factor
        balance = self._balance_factor(node)

        # Left Left Case
        if balance > 1 and self._balance_factor(node.left) >= 0:
            return self._rotate_right(node)

        # Left Right Case
        if balance > 1 and self._balance_factor(node.left) < 0:
            node.left = self._rotate_left(node.left)
            return self._rotate_right(node)

        # Right Right Case
        if balance < -1 and self._balance_factor(node.right) <= 0:
            return self._rotate_left(node)

        # Right Left Case
        if balance < -1 and self._balance_factor(node.right) > 0:
            node.right = self._rotate_right(node.right)
            return self._rotate_left(node)

        return node

    def _min_value_node(self, node):
        """Get node with minimum key value."""
        current = node
        while current.left:
            current = current.left
        return current

    def search(self, key):
        """Search for a key in the AVL tree."""
        return self._search_rec(self.root, key)

    def _search_rec(self, node, key):
        """Recursive search."""
        if not node or node.key == key:
            return node
        if key < node.key:
            return self._search_rec(node.left, key)
        return self._search_rec(node.right, key)

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
        if not self.root:
            return -1
        return self.root.height - 1

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
            "height": node.height,
            "balance": self._balance_factor(node),
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

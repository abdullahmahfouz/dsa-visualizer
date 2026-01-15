class Node:
    """A node in the binary search tree."""
    def __init__(self, key):
        self.left = None  # Left child
        self.right = None  # Right child
        self.val = key  # Node value
        
class BST:
    """Binary Search Tree implementation."""
    def __init__(self):
        self.root = None  # Root node of the BST

    def insert(self, key):
        """Insert a key into the BST."""
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert_rec(self.root, key)

    def _insert_rec(self, root, key):
        """Helper method to insert recursively."""
        if key < root.val:
            if root.left is None:
                root.left = Node(key)
            else:
                self._insert_rec(root.left, key)
        else:
            if root.right is None:
                root.right = Node(key)
            else:
                self._insert_rec(root.right, key)
    
    def search(self, key):
        """Search for a key in the BST. Returns the node if found, else None."""
        return self._search_rec(self.root, key)

    def _search_rec(self, root, key):
        """Helper method to search recursively."""
        if root is None or root.val == key:
            return root
        if key < root.val:
            return self._search_rec(root.left, key)
        return self._search_rec(root.right, key)
    
    def delete(self, key):
        """Delete a key from the BST."""
        self.root = self._delete_rec(self.root, key)

    def _delete_rec(self, root, key):
        """Helper method to delete recursively."""
        if root is None:
            return root
        if key < root.val:
            root.left = self._delete_rec(root.left, key)
        elif key > root.val:
            root.right = self._delete_rec(root.right, key)
        else:
            # Node with only one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            # Node with two children: Get the inorder successor
            temp = self._min_value_node(root.right)
            root.val = temp.val
            root.right = self._delete_rec(root.right, temp.val)
        return root
    
    def _min_value_node(self, node):
        """Get the node with the minimum value in the subtree."""
        current = node
        while current.left is not None:
            current = current.left
        return current
    
    def size(self):
        """Return the number of nodes in the BST."""
        return self._size_rec(self.root)

    def _size_rec(self, node):
        """Helper method to count nodes recursively."""
        if node is None:
            return 0
        return 1 + self._size_rec(node.left) + self._size_rec(node.right)
    
    def height(self):
        """Return the height of the BST."""
        return self._height_rec(self.root)

    def _height_rec(self, node):
        """Helper method to compute height recursively."""
        if node is None:
            return -1
        left_height = self._height_rec(node.left)
        right_height = self._height_rec(node.right)
        return 1 + max(left_height, right_height)

    def to_dict(self):
        """Convert the BST to a nested dictionary representation."""
        return self._to_dict_rec(self.root)

    def _to_dict_rec(self, node):
        """Helper method to convert to dict recursively."""
        if node is None:
            return None
        return {
            "value": node.val,
            "left": self._to_dict_rec(node.left),
            "right": self._to_dict_rec(node.right)
        }

    def to_list(self):
        """Return the inorder traversal of the BST as a list."""
        result = []
        self._inorder_rec(self.root, result)
        return result
    
    def is_empty(self):
        return self.root is None

    def _inorder_rec(self, node, result):
        """Helper method for inorder traversal."""
        if node:
            self._inorder_rec(node.left, result)
            result.append(node.val)
            self._inorder_rec(node.right, result)

    def inorder(self):
        """Return inorder traversal (Left, Root, Right)."""
        result = []
        self._inorder_rec(self.root, result)
        return result

    def preorder(self):
        """Return preorder traversal (Root, Left, Right)."""
        result = []
        self._preorder_rec(self.root, result)
        return result

    def _preorder_rec(self, node, result):
        """Helper method for preorder traversal."""
        if node:
            result.append(node.val)
            self._preorder_rec(node.left, result)
            self._preorder_rec(node.right, result)

    def postorder(self):
        """Return postorder traversal (Left, Right, Root)."""
        result = []
        self._postorder_rec(self.root, result)
        return result

    def _postorder_rec(self, node, result):
        """Helper method for postorder traversal."""
        if node:
            self._postorder_rec(node.left, result)
            self._postorder_rec(node.right, result)
            result.append(node.val)

    def level_order(self):
        """Return level-order traversal (BFS)."""
        if self.root is None:
            return []
        result = []
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

    def clear(self):
        """Remove all nodes from the BST."""
        self.root = None

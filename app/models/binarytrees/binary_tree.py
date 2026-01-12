"""
Binary Tree Data Structure
==========================
A binary tree where each node has at most two children: left and right.

This implementation supports:
- Insert: Add nodes to the tree
- Delete: Remove nodes from the tree
- Search: Find if a value exists
- Traversals:
  - Inorder (Left, Root, Right)
  - Preorder (Root, Left, Right)
  - Postorder (Left, Right, Root)
  - Level-order / BFS (Breadth-First Search)
"""


class TreeNode:
    """A node in the binary tree"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BinaryTree:
    """
    Binary Tree Implementation
    ==========================
    A tree structure where each node has at most two children.
    
    Operations:
    - insert: O(log n) average, O(n) worst - Add a node
    - delete: O(log n) average, O(n) worst - Remove a node
    - search: O(log n) average, O(n) worst - Find a value
    - inorder: O(n) - Left, Root, Right traversal
    - preorder: O(n) - Root, Left, Right traversal
    - postorder: O(n) - Left, Right, Root traversal
    - level_order: O(n) - Breadth-first traversal
    """
    
    def __init__(self):
        """Initialize an empty binary tree."""
        self.root = None
        self._size = 0
    
    def insert(self, data):
        """
        Insert a new node into the tree.
        For simplicity, we'll insert in level-order (maintaining a complete tree).
        Time Complexity: O(n)
        
        Args:
            data: The value to insert
        """
        new_node = TreeNode(data)
        
        if self.root is None:
            self.root = new_node
            self._size += 1
            return
        
        # Level-order insertion to maintain completeness
        queue = [self.root]
        while queue:
            current = queue.pop(0)
            
            if current.left is None:
                current.left = new_node
                self._size += 1
                return
            elif current.right is None:
                current.right = new_node
                self._size += 1
                return
            else:
                queue.append(current.left)
                queue.append(current.right)
    
    def delete(self, data):
        """
        Delete a node with the given value from the tree.
        Time Complexity: O(n)
        
        Args:
            data: The value to delete
            
        Returns:
            True if deleted, False if not found
        """
        if self.root is None:
            return False
        
        # Find the node to delete and the deepest node
        node_to_delete = None
        deepest_node = None
        parent_of_deepest = None
        
        queue = [self.root]
        while queue:
            current = queue.pop(0)
            
            if current.data == data:
                node_to_delete = current
            
            if current.left:
                parent_of_deepest = current
                queue.append(current.left)
            if current.right:
                parent_of_deepest = current
                queue.append(current.right)
                
            deepest_node = current
        
        if node_to_delete is None:
            return False
        
        # Replace the node to delete with the deepest node's data
        node_to_delete.data = deepest_node.data
        
        # Remove the deepest node
        if parent_of_deepest:
            if parent_of_deepest.right:
                parent_of_deepest.right = None
            else:
                parent_of_deepest.left = None
        else:
            # Deleting the only node
            self.root = None
        
        self._size -= 1
        return True
    
    def search(self, data):
        """
        Search for a value in the tree.
        Time Complexity: O(n)
        
        Args:
            data: The value to search for
            
        Returns:
            True if found, False otherwise
        """
        return self._search_helper(self.root, data)
    
    def _search_helper(self, node, data):
        """Recursive helper for search"""
        if node is None:
            return False
        if node.data == data:
            return True
        return self._search_helper(node.left, data) or self._search_helper(node.right, data)
    
    def inorder(self):
        """
        Inorder traversal: Left, Root, Right
        Time Complexity: O(n)
        
        Returns:
            List of values in inorder order
        """
        result = []
        self._inorder_helper(self.root, result)
        return result
    
    def _inorder_helper(self, node, result):
        """Recursive helper for inorder traversal"""
        if node:
            self._inorder_helper(node.left, result)
            result.append(node.data)
            self._inorder_helper(node.right, result)
    
    def preorder(self):
        """
        Preorder traversal: Root, Left, Right
        Time Complexity: O(n)
        
        Returns:
            List of values in preorder order
        """
        result = []
        self._preorder_helper(self.root, result)
        return result
    
    def _preorder_helper(self, node, result):
        """Recursive helper for preorder traversal"""
        if node:
            result.append(node.data)
            self._preorder_helper(node.left, result)
            self._preorder_helper(node.right, result)
    
    def postorder(self):
        """
        Postorder traversal: Left, Right, Root
        Time Complexity: O(n)
        
        Returns:
            List of values in postorder order
        """
        result = []
        self._postorder_helper(self.root, result)
        return result
    
    def _postorder_helper(self, node, result):
        """Recursive helper for postorder traversal"""
        if node:
            self._postorder_helper(node.left, result)
            self._postorder_helper(node.right, result)
            result.append(node.data)
    
    def level_order(self):
        """
        Level-order traversal (BFS): Visit nodes level by level
        Time Complexity: O(n)
        
        Returns:
            List of values in level-order
        """
        if self.root is None:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            current = queue.pop(0)
            result.append(current.data)
            
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)
        
        return result
    
    def is_empty(self):
        """Check if the tree is empty"""
        return self.root is None
    
    def size(self):
        """Return the number of nodes in the tree"""
        return self._size
    
    def clear(self):
        """Remove all nodes from the tree"""
        self.root = None
        self._size = 0
    
    def height(self):
        """
        Calculate the height of the tree.
        Time Complexity: O(n)
        
        Returns:
            Height of the tree (0 for empty tree)
        """
        return self._height_helper(self.root)
    
    def _height_helper(self, node):
        """Recursive helper to calculate height"""
        if node is None:
            return -1
        return 1 + max(self._height_helper(node.left), self._height_helper(node.right))
    
    def to_dict(self):
        """
        Convert the tree to a dictionary representation for visualization.
        Returns a nested dictionary structure.
        """
        if self.root is None:
            return None
        return self._to_dict_helper(self.root)
    
    def _to_dict_helper(self, node):
        """Recursive helper to convert tree to dictionary"""
        if node is None:
            return None
        
        return {
            'data': node.data,
            'left': self._to_dict_helper(node.left),
            'right': self._to_dict_helper(node.right)
        }
    
    def to_list(self):
        """
        Convert the tree to a list representation (level-order).
        None values are included for missing children.
        """
        if self.root is None:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            current = queue.pop(0)
            if current:
                result.append(current.data)
                queue.append(current.left)
                queue.append(current.right)
            else:
                result.append(None)
        
        # Remove trailing None values
        while result and result[-1] is None:
            result.pop()
        
        return result


# Example usage (this runs when you execute this file directly)
if __name__ == "__main__":
    # Create a new binary tree
    tree = BinaryTree()
    
    print("=== Binary Tree Demo ===\n")
    
    # Insert some nodes
    print("Inserting: 1, 2, 3, 4, 5, 6, 7")
    for val in [1, 2, 3, 4, 5, 6, 7]:
        tree.insert(val)
    
    print(f"\nTree size: {tree.size()}")
    print(f"Tree height: {tree.height()}")
    
    # Traversals
    print(f"\nInorder traversal: {tree.inorder()}")
    print(f"Preorder traversal: {tree.preorder()}")
    print(f"Postorder traversal: {tree.postorder()}")
    print(f"Level-order traversal: {tree.level_order()}")
    
    # Search
    print(f"\nSearch for 5: {tree.search(5)}")
    print(f"Search for 10: {tree.search(10)}")
    
    # Delete
    print(f"\nDeleting 4: {tree.delete(4)}")
    print(f"Level-order after delete: {tree.level_order()}")
    print(f"Tree size after delete: {tree.size()}")


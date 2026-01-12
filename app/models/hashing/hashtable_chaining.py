"""
Hash Table with Chaining (Separate Chaining)
=============================================
A hash table implementation that uses separate chaining for collision resolution.
When multiple keys hash to the same index, they are stored in a linked list at that index.

Collision Resolution: Separate Chaining (Linked Lists)
Time Complexity:
- Average: O(1) for insert, search, delete
- Worst: O(n) if all keys hash to same index
"""


class Node:
    """
    Node class for the linked list used in chaining.
    Each node stores a key-value pair and a reference to the next node.
    """
    def __init__(self, key, value):
        self.key = key        # Key for this entry
        self.value = value    # Value associated with the key
        self.next = None      # Reference to next node in the chain


class HashTableChaining:
    """
    Hash table implementation using separate chaining for collision resolution.
    Each bucket (table index) contains a linked list of key-value pairs.
    """
    
    def __init__(self, initial_capacity):
        """
        Initialize the hash table with separate chaining.
        
        Args:
            initial_capacity (int): Initial number of buckets in the hash table
        """
        self.capacity = initial_capacity           # Number of buckets
        self.size = 0                              # Number of key-value pairs stored
        self.table = [None] * self.capacity        # Array of linked list heads (buckets)

    def _hash(self, key):
        """
        Hash function that converts a key to a bucket index.
        Uses Python's built-in hash() function and modulo operation.
        
        Args:
            key: The key to hash
            
        Returns:
            int: Index in the range [0, capacity-1]
        """
        return hash(key) % self.capacity

    def insert(self, key, value):
        """
        Insert a key-value pair into the hash table.
        If the bucket is empty, create a new node.
        If the bucket has existing nodes, append to the end of the chain.
        
        Time Complexity: O(1) average, O(n) worst case (long chain)
        
        Args:
            key: The key to insert
            value: The value associated with the key
        """
        # Calculate which bucket this key belongs to
        index = self._hash(key) 
        
        # Case 1: Bucket is empty - no collision
        if self.table[index] is None:
            self.table[index] = Node(key, value)
        
        # Case 2: Bucket has existing nodes - collision occurred
        else:
            # Traverse to the end of the chain
            current = self.table[index]
            while current.next:
                current = current.next
            # Append new node at the end
            current.next = Node(key, value)
        
        # Increment total number of elements
        self.size += 1
        
    def search(self, key):
        """
        Search for a value by its key in the hash table.
        Traverses the linked list at the hashed index to find the key.
        
        Time Complexity: O(1) average, O(n) worst case
        
        Args:
            key: The key to search for
            
        Returns:
            The value associated with the key, or None if key not found
        """
        # Find which bucket the key should be in
        index = self._hash(key)
        
        # Start at the head of the chain
        current = self.table[index]
        
        # Traverse the chain looking for the key
        while current:
            if current.key == key:
                return current.value  # Found it!
            current = current.next
        
        # Key not found in the chain
        return None

    def delete(self, key):
        """
        Delete a key-value pair from the hash table.
        Searches the chain and removes the node if found.
        
        Note: This implementation has a bug - it doesn't handle deleting
        the first node in the chain. Only deletes nodes after the head.
        
        Time Complexity: O(1) average, O(n) worst case
        
        Args:
            key: The key to delete
            
        Returns:
            bool: True if key was found and deleted, False otherwise
        """
        # Find which bucket the key should be in
        index = self._hash(key)

        # Case 1: Bucket is empty - key doesn't exist
        if self.table[index] is None:
            return False
        
        # Case 2: Bucket has nodes - search through the chain
        else:
            current = self.table[index]
            
            # Traverse the chain looking for the key
            while current.next:
                # Check if the NEXT node has the key
                if current.next.key == key:
                    # Remove the next node by skipping it
                    current.next = current.next.next
                    self.size -= 1
                    return True
                current = current.next
            
            # Key not found in the chain
            return False

    def to_list(self):
        """
        Convert the hash table to a list format for visualization.
        Each index contains either None (empty bucket) or a list of key-value pairs (chain).
        
        Returns:
            list: Array where each element represents a bucket.
                  None = empty bucket
                  List of dicts = chain of items at that bucket
        
        Example:
            [
                None,                                    # Index 0: empty
                [{"key": "apple", "value": 10}],        # Index 1: one item
                [{"key": "cat", "value": 5}, 
                 {"key": "dog", "value": 8}],           # Index 2: collision, two items
                None                                     # Index 3: empty
            ]
        """
        table_list = []
        
        # Loop through each bucket in the hash table
        for i in range(self.capacity):
            bucket = []
            current = self.table[i]
            
            # Traverse the linked list chain at this bucket
            while current:
                bucket.append({"key": current.key, "value": current.value})
                current = current.next
            
            # Add the bucket to result (or None if empty)
            table_list.append(bucket if bucket else None)
        
        return table_list

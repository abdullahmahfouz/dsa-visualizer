"""
Hash Table with Linear Probing
===============================
A hash table (hash map) is a data structure that implements an associative array.
It uses a hash function to map keys to array indices.

Features:
- Linear probing for collision resolution
- Automatic rehashing when load factor reaches 0.7
- Dynamic resizing

Operations:
- insert(key, value): Insert or update a key-value pair
- get(key): Retrieve value by key
- delete(key): Remove a key-value pair
- contains(key): Check if key exists
- size(): Get number of key-value pairs
"""


class HashTable:
    def __init__(self, initial_capacity=7):
        """
        Initialize the hash table.
        
        Args:
            initial_capacity: Starting size of the hash table (should be prime)
        """
        self.capacity = initial_capacity
        self.size = 0  # Number of key-value pairs
        self.load_factor_threshold = 0.7
        self.table = [None] * self.capacity  # Array to store key-value pairs
        self.max_capacity = 7  # Hard cap for this visualizer (do not physically rehash beyond this)
        self._rehash_needed = False
        
    def _hash(self, key):
        """
        Hash function: converts key to an index.
        Uses Python's built-in hash() and modulo.
        
        Args:
            key: The key to hash
            
        Returns:
            int: Index in the table
        """
        return hash(key) % self.capacity
    
    def _is_prime(self, n):
        """Check if a number is prime."""
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    def _next_prime(self, n):
        """Find the next prime number >= n."""
        while not self._is_prime(n):
            n += 1
        return n
    
    def _rehash(self):
        """
        Rehash the entire table when load factor exceeds threshold.
        Doubles the capacity and finds the next prime number.
        """
        old_table = self.table
        old_capacity = self.capacity
        
        # Decide new capacity (double, then next prime)
        new_capacity = self._next_prime(self.capacity * 2)
        # If new capacity would exceed the visualizer's hard cap, mark rehash needed and skip
        if new_capacity > self.max_capacity:
            self._rehash_needed = True
            return

        # Perform rehash
        self.capacity = new_capacity
        self.table = [None] * self.capacity
        self.size = 0

        # Reinsert all existing key-value pairs
        for item in old_table:
            if item is not None and item != "DELETED":
                self.insert(item[0], item[1], skip_rehash=True)
    
    def _load_factor(self):
        """Calculate current load factor."""
        return self.size / self.capacity
    
    def insert(self, key, value, skip_rehash=False):
        """
        Insert or update a key-value pair.
        Uses linear probing for collision resolution.
        
        Args:
            key: The key
            value: The value to store
            skip_rehash: Internal flag to skip rehashing during rehash operation
            
        Returns:
            A tuple of (start_index, final_index)
        """
        # Reset rehash_needed flag for this operation
        self._rehash_needed = False

        # Check if we need to rehash
        if not skip_rehash and self._load_factor() >= self.load_factor_threshold:
            # Attempt to rehash; _rehash will set _rehash_needed if it cannot proceed
            self._rehash()
        
        index = self._hash(key)
        start_index = index
        
        # Linear probing: find next available slot
        while self.table[index] is not None:
            # If key already exists, update the value
            if self.table[index] != "DELETED" and self.table[index][0] == key:
                self.table[index] = (key, value)
                return start_index, index
            # Move to next slot
            index = (index + 1) % self.capacity
        
        # Found an empty slot
        self.table[index] = (key, value)
        self.size += 1
        return start_index, index, self._rehash_needed
    
    def get(self, key):
        """
        Retrieve value by key.
        
        Args:
            key: The key to look up
            
        Returns:
            The value associated with the key, or None if not found
        """
        index = self._hash(key)
        start_index = index
        
        # Linear probing: search for the key
        while self.table[index] is not None:
            if self.table[index] != "DELETED" and self.table[index][0] == key:
                return self.table[index][1]
            
            index = (index + 1) % self.capacity
            
            # If we've wrapped around, key doesn't exist
            if index == start_index:
                return None
        
        return None
    
    def contains(self, key):
        """
        Check if a key exists in the hash table.
        
        Args:
            key: The key to check
            
        Returns:
            bool: True if key exists, False otherwise
        """
        return self.get(key) is not None
    
    def delete(self, key):
        """
        Delete a key-value pair.
        Uses lazy deletion (marks slot as "DELETED").
        
        Args:
            key: The key to delete
            
        Returns:
            bool: True if key was deleted, False if not found
        """
        index = self._hash(key)
        start_index = index
        
        # Linear probing: search for the key
        while self.table[index] is not None:
            if self.table[index] != "DELETED" and self.table[index][0] == key:
                # Mark as deleted (lazy deletion)
                self.table[index] = "DELETED"
                self.size -= 1
                return True
            
            index = (index + 1) % self.capacity
            
            # If we've wrapped around, key doesn't exist
            if index == start_index:
                return False
        
        return False
    
    def __len__(self):
        """Return the number of key-value pairs."""
        return self.size
    
    def __str__(self):
        """String representation of the hash table."""
        items = []
        for item in self.table:
            if item is not None and item != "DELETED":
                items.append(f"{item[0]}: {item[1]}")
        return "{" + ", ".join(items) + "}"
    
    def to_dict(self):
        """
        Convert hash table to a Python dictionary (for visualization).
        
        Returns:
            dict: Dictionary representation
        """
        result = {}
        for item in self.table:
            if item is not None and item != "DELETED":
                result[item[0]] = item[1]
        return result
    
    def to_list(self):
        """
        Convert hash table to a list of its internal array (for visualization).
        
        Returns:
            list: List representation of the table
        """
        return self.table
    
    def clear(self):
        """Remove all key-value pairs from the hash table."""
        self.table = [None] * self.capacity
        self.size = 0


# Example usage
if __name__ == "__main__":
    ht = HashTable(initial_capacity=7)
    
    print("=== Hash Table Demo ===\n")
    
    # Insert some key-value pairs
    print("Inserting key-value pairs:")
    ht.insert("apple", 10)
    ht.insert("banana", 20)
    ht.insert("cherry", 30)
    ht.insert("date", 40)
    
    print(f"Hash table: {ht}")
    print(f"Size: {len(ht)}")
    print(f"Capacity: {ht.capacity}")
    print(f"Load factor: {ht._load_factor():.2f}\n")
    
    # Get values
    print("Getting values:")
    print(f"apple -> {ht.get('apple')}")
    print(f"banana -> {ht.get('banana')}")
    print(f"nonexistent -> {ht.get('nonexistent')}\n")
    
    # Check if key exists
    print("Checking keys:")
    print(f"Contains 'cherry': {ht.contains('cherry')}")
    print(f"Contains 'grape': {ht.contains('grape')}\n")
    
    # Delete a key
    print("Deleting 'banana':")
    ht.delete("banana")
    print(f"Hash table: {ht}")
    print(f"Size: {len(ht)}\n")
    
    # Test rehashing (insert more to trigger rehash)
    print("Inserting more items to trigger rehashing:")
    for i in range(10):
        ht.insert(f"key{i}", i * 10)
    
    print(f"Size: {len(ht)}")
    print(f"Capacity: {ht.capacity}")
    print(f"Load factor: {ht._load_factor():.2f}")
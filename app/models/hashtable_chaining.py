class HashtableChaining:
   
    def __init__(self, initial_capacity):
        self.capacity = initial_capacity
        self.size = 0
        self.table = [None] * self.capacity
        self.load_factor_threshold = 1.0  # Rehash at load factor 1.0
        self.collision_count = 0  # Track collisions

    def _hash(self, key):
        return hash(key) % self.capacity

    def _load_factor(self):
        """Calculate current load factor"""
        return self.size / self.capacity if self.capacity > 0 else 0
    
    def _should_rehash(self):
        """Check if we need to rehash"""
        return self._load_factor() >= self.load_factor_threshold

    def insert(self, key, value):
        index = self._hash(key)
        
        # Track if this is a collision
        if self.table[index] is not None:
            self.collision_count += 1
        
        if self.table[index] is None:
            self.table[index] = Node(key, value)
        else:
            # Check if key already exists (update instead of insert)
            current = self.table[index]
            while current:
                if current.key == key:
                    current.value = value  # Update existing
                    return
                if current.next is None:
                    break
                current = current.next
            current.next = Node(key, value)
        
        self.size += 1
        
        # Check if rehashing is needed
        if self._should_rehash():
            self._rehash()

    def _rehash(self):
        """Double capacity and rehash all elements"""
        old_table = self.table
        self.capacity *= 2
        self.table = [None] * self.capacity
        self.size = 0
        self.collision_count = 0
        
        # Reinsert all elements
        for bucket in old_table:
            current = bucket
            while current:
                self.insert(current.key, current.value)
                current = current.next

    def get_stats(self):
        """Return statistics about the hash table"""
        return {
            'size': self.size,
            'capacity': self.capacity,
            'load_factor': self._load_factor(),
            'collision_count': self.collision_count,
            'avg_chain_length': self._avg_chain_length()
        }
    
    def _avg_chain_length(self):
        """Calculate average chain length"""
        if self.size == 0:
            return 0
        
        total_length = 0
        non_empty_buckets = 0
        
        for bucket in self.table:
            if bucket is not None:
                non_empty_buckets += 1
                length = 0
                current = bucket
                while current:
                    length += 1
                    current = current.next
                total_length += length
        
        return total_length / non_empty_buckets if non_empty_buckets > 0 else 0


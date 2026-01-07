class Node:
    """A node in the singly linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None


class SinglyLinkedList:
    """
    Singly Linked List Implementation
    ==================================
    A linear data structure where each element points to the next.
    
    Operations:
    - insert_at_head: O(1) - Add to beginning
    - insert_at_tail: O(n) - Add to end
    - insert_at_index: O(n) - Add at specific position
    - delete_at_head: O(1) - Remove from beginning
    - delete_at_tail: O(n) - Remove from end
    - delete_at_index: O(n) - Remove at specific position
    - search: O(n) - Find element
    - get: O(n) - Get element at index
    """
    
    def __init__(self):
        self.head = None
        self._size = 0
    
    def insert_at_head(self, data):
        """Insert a new node at the beginning - O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self._size += 1
    
    def insert_at_tail(self, data):
        """Insert a new node at the end - O(n)"""
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self._size += 1
    
    def insert_at_index(self, index, data):
        """Insert a new node at specific index - O(n)"""
        if index < 0 or index > self._size:
            raise IndexError("Index out of bounds")
        
        if index == 0:
            self.insert_at_head(data)
            return
        
        new_node = Node(data)
        current = self.head
        for _ in range(index - 1):
            current = current.next
        new_node.next = current.next
        current.next = new_node
        self._size += 1
    
    def delete_at_head(self):
        """Remove and return the first node - O(1)"""
        if self.head is None:
            raise IndexError("List is empty")
        
        data = self.head.data
        self.head = self.head.next
        self._size -= 1
        return data
    
    def delete_at_tail(self):
        """Remove and return the last node - O(n)"""
        if self.head is None:
            raise IndexError("List is empty")
        
        if self.head.next is None:
            data = self.head.data
            self.head = None
            self._size -= 1
            return data
        
        current = self.head
        while current.next.next:
            current = current.next
        data = current.next.data
        current.next = None
        self._size -= 1
        return data
    
    def delete_at_index(self, index):
        """Remove and return node at specific index - O(n)"""
        if index < 0 or index >= self._size:
            raise IndexError("Index out of bounds")
        
        if index == 0:
            return self.delete_at_head()
        
        current = self.head
        for _ in range(index - 1):
            current = current.next
        data = current.next.data
        current.next = current.next.next
        self._size -= 1
        return data
    
    def search(self, data):
        """Search for a value and return its index, or -1 if not found - O(n)"""
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1
    
    def get(self, index):
        """Get the value at a specific index - O(n)"""
        if index < 0 or index >= self._size:
            raise IndexError("Index out of bounds")
        
        current = self.head
        for _ in range(index):
            current = current.next
        return current.data
    
    def is_empty(self):
        """Check if list is empty"""
        return self.head is None
    
    def size(self):
        """Return the number of nodes"""
        return self._size
    
    def clear(self):
        """Remove all nodes"""
        self.head = None
        self._size = 0
    
    def to_list(self):
        """Convert linked list to Python list for JSON serialization"""
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
"""
Stack Data Structure
====================
A stack is a LIFO (Last In, First Out) data structure.
Think of it like a stack of plates - you add to the top and remove from the top.

Operations:
- push(item): Add item to top of stack
- pop(): Remove and return top item
- peek(): Look at top item without removing
- is_empty(): Check if stack is empty
- size(): Get number of items
"""


class Stack:
    def __init__(self, max_size=10):
        """Initialize an empty stack with a maximum size (default 10)."""
        self._items = []
        self._max_size = max_size
    
    def push(self, item):
        """
        Add an item to the top of the stack.
        Time Complexity: O(1) - constant time
        Raises OverflowError if stack is at max size.
        """
        if len(self._items) >= self._max_size:
            raise OverflowError(f"Stack limit reached: {self._max_size} items")
        self._items.append(item)
        def max_size(self):
            """Return the maximum allowed size of the stack."""
            return self._max_size
    
    def pop(self):
        """
        Remove and return the top item from the stack.
        Time Complexity: O(1) - constant time
        Raises IndexError if stack is empty.
        """
        if self.is_empty():
            raise IndexError("Cannot pop from an empty stack")
        return self._items.pop()
    
    def peek(self):
        """
        Return the top item without removing it.
        Time Complexity: O(1) - constant time
        Returns None if stack is empty.
        """
        if self.is_empty():
            return None
        return self._items[-1]  # -1 gives us the last element
    
    def is_empty(self):
        """
        Check if the stack is empty.
        Time Complexity: O(1) - constant time
        """
        return len(self._items) == 0
    
    def size(self):
        """
        Return the number of items in the stack.
        Time Complexity: O(1) - constant time
        """
        return len(self._items)
    
    def to_list(self):
        """
        Return a copy of the stack as a list (for visualization).
        The last element is the top of the stack.
        """
        return self._items.copy()
    
    def clear(self):
        """Remove all items from the stack."""
        self._items = []


# Example usage (this runs when you execute this file directly)
if __name__ == "__main__":
    # Create a new stack
    stack = Stack()
    
    print("=== Stack Demo ===\n")
    
    # Push some items
    print("Pushing: 10, 20, 30")
    stack.push(10)
    stack.push(20)
    stack.push(30)
    
    print(f"Stack contents: {stack.to_list()}")
    print(f"Top element (peek): {stack.peek()}")
    print(f"Stack size: {stack.size()}")
    
    # Pop an item
    print(f"\nPopping: {stack.pop()}")
    print(f"Stack after pop: {stack.to_list()}")
    
    # Check if empty
    print(f"\nIs empty? {stack.is_empty()}")

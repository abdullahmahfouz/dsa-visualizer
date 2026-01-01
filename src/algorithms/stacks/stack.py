class Stack:
    """
    A Stack data structure implementation using a Python list.
    
    Stack follows the LIFO (Last In, First Out) principle - the last element 
    added is the first one to be removed, like a stack of plates.
    
    Attributes:
        items (list): Internal list storing the stack elements.
    
    Methods:
        push(item): Add an item to the top of the stack.
        pop(): Remove and return the top item.
        peek(): View the top item without removing it.
        is_empty(): Check if the stack is empty.
        size(): Return the number of items in the stack.
    
    Example:
        >>> stack = Stack()
        >>> stack.push(1)
        >>> stack.push(2)
        >>> stack.pop()
        2
        >>> stack.peek()
        1
    
    Time Complexity:
        - push: O(1)
        - pop: O(1)
        - peek: O(1)
        - is_empty: O(1)
        - size: O(1)
    """
    
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self.items[-1]
   # Returns the number of items in the stack
    def size(self):
        return len(self.items)
    
    def get_items(self):
        return list(self.items)
"""
Queue Data Structure
====================
A queue is a FIFO (First In, First Out) data structure.
Think of it like a line at a store - first person in line gets served first.

Operations:
- enqueue(item): Add item to the back of the queue
- dequeue(): Remove and return the front item
- peek(): Look at front item without removing
- is_empty(): Check if queue is empty
- size(): Get number of items

Difference from Stack:
- Stack = LIFO (Last In, First Out) - like stack of plates
- Queue = FIFO (First In, First Out) - like a line of people
"""


class Queue:
    def __init__(self):
        """Initialize an empty queue using a Python list."""
        self.items = []

    def is_empty(self):
        """
        Check if the queue is empty.
        Time Complexity: O(1) - constant time

        Returns:
            bool: True if empty, False otherwise
        """
        return len(self.items) == 0

    def enqueue(self, item):
        """
        Add an item to the back of the queue.
        Time Complexity: O(1) - constant time

        Args:
            item: The value to add to the queue
        """
        self.items.append(item)

    def dequeue(self):
        """
        Remove and return the front item from the queue.
        Time Complexity: O(n) - because we remove from front (index 0)

        Returns:
            The front item

        Raises:
            IndexError: If queue is empty
        """
        if not self.is_empty():
            return self.items.pop(0)
        raise IndexError("Dequeue from empty queue")

    def peek(self):
        """
        Return the front item without removing it.
        Time Complexity: O(1) - constant time

        Returns:
            The front item

        Raises:
            IndexError: If queue is empty
        """
        if not self.is_empty():
            return self.items[0]
        raise IndexError("Peek from empty queue")

    def size(self):
        """
        Return the number of items in the queue.
        Time Complexity: O(1) - constant time

        Returns:
            int: Number of items
        """
        return len(self.items)

    def to_list(self):
        """
        Return a copy of the queue as a list (for visualization).
        The first element is the front of the queue.

        Returns:
            list: Copy of queue items
        """
        return self.items.copy()

    def clear(self):
        """Remove all items from the queue."""
        self.items = []


# Example usage (runs when you execute this file directly)
if __name__ == "__main__":
    queue = Queue()

    print("=== Queue Demo ===\n")

    # Enqueue some items
    print("Enqueuing: 10, 20, 30")
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)

    print(f"Queue contents: {queue.to_list()}")
    print(f"Front element (peek): {queue.peek()}")
    print(f"Queue size: {queue.size()}")

    # Dequeue an item
    print(f"\nDequeuing: {queue.dequeue()}")
    print(f"Queue after dequeue: {queue.to_list()}")

    print(f"\nIs empty? {queue.is_empty()}")
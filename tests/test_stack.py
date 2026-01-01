"""
Unit tests for Stack data structure.
"""

import pytest
import sys
sys.path.insert(0, '../src')

from algorithms.stacks.stack import Stack


class TestStack:
    """Test cases for Stack class."""
    
    def test_new_stack_is_empty(self):
        """A new stack should be empty."""
        stack = Stack()
        assert stack.is_empty() is True
        assert stack.size() == 0
    
    def test_push_adds_item(self):
        """Push should add an item to the stack."""
        stack = Stack()
        stack.push(42)
        assert stack.is_empty() is False
        assert stack.size() == 1
    
    def test_pop_removes_item(self):
        """Pop should remove and return the top item."""
        stack = Stack()
        stack.push(1)
        stack.push(2)
        result = stack.pop()
        assert result == 2
        assert stack.size() == 1
    
    def test_pop_empty_raises_error(self):
        """Pop on empty stack should raise IndexError."""
        stack = Stack()
        with pytest.raises(IndexError):
            stack.pop()
    
    def test_peek_returns_top(self):
        """Peek should return top item without removing it."""
        stack = Stack()
        stack.push(1)
        stack.push(2)
        result = stack.peek()
        assert result == 2
        assert stack.size() == 2  # Size unchanged
    
    def test_peek_empty_raises_error(self):
        """Peek on empty stack should raise IndexError."""
        stack = Stack()
        with pytest.raises(IndexError):
            stack.peek()
    
    def test_lifo_order(self):
        """Stack should follow LIFO order."""
        stack = Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        
        assert stack.pop() == 3
        assert stack.pop() == 2
        assert stack.pop() == 1
    
    def test_get_items_returns_copy(self):
        """get_items should return a copy, not the original."""
        stack = Stack()
        stack.push(1)
        stack.push(2)
        
        items = stack.get_items()
        items.append(99)  # Modify the copy
        
        assert stack.size() == 2  # Original unchanged

import{c as f,r as o,j as n}from"./index-CTr5tlhh.js";import{C as w}from"./copy-CmHqhHD3.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=f("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=f("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),x=`class Stack:
    """Stack using Python's dynamic list - simple and Pythonic!"""
    
    def __init__(self):
        self.items = []  # Dynamic list, no fixed size
    
    def push(self, item):
        """Add item to top - O(1) amortized"""
        self.items.append(item)
    
    def pop(self):
        """Remove and return top item - O(1)"""
        if self.is_empty():
            raise IndexError("Cannot pop from empty stack")
        return self.items.pop()
    
    def peek(self):
        """View top item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        """Check if stack is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of items - O(1)"""
        return len(self.items)

# Usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.pop())   # 30
print(stack.peek())  # 20`,b=`class Stack {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.top = -1;
    }
    
    push(item) {
        if (this.top >= this.capacity - 1) {
            throw new Error("Stack is full");
        }
        this.top++;
        this.items[this.top] = item;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const item = this.items[this.top];
        this.items[this.top] = undefined;
        this.top--;
        return item;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }
    
    isEmpty() {
        return this.top === -1;
    }
    
    size() {
        return this.top + 1;
    }
}

// Usage
const stack = new Stack(100);
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20`,m=`import java.util.EmptyStackException;

public class Stack<T> {
    private Object[] items;
    private int top;
    private int capacity;
    
    public Stack(int capacity) {
        this.capacity = capacity;
        this.items = new Object[capacity];
        this.top = -1;
    }
    
    public void push(T item) {
        if (top >= capacity - 1) {
            throw new StackOverflowError("Stack is full");
        }
        items[++top] = item;
    }
    
    @SuppressWarnings("unchecked")
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T item = (T) items[top];
        items[top--] = null;
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return (T) items[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
    
    public int size() {
        return top + 1;
    }
}

// Usage
Stack<Integer> stack = new Stack<>(100);
stack.push(10);
stack.push(20);
System.out.println(stack.pop()); // 20`,L={python:x,javascript:b,java:m,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class Stack {
private:
    T* items;
    int top;
    int capacity;

public:
    Stack(int cap = 100) : capacity(cap), top(-1) {
        items = new T[capacity];
    }
    
    ~Stack() {
        delete[] items;
    }
    
    void push(const T& item) {
        if (top >= capacity - 1) {
            throw std::overflow_error("Stack is full");
        }
        items[++top] = item;
    }
    
    T pop() {
        if (isEmpty()) {
            throw std::underflow_error("Stack is empty");
        }
        return items[top--];
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::underflow_error("Stack is empty");
        }
        return items[top];
    }
    
    bool isEmpty() const {
        return top == -1;
    }
    
    int size() const {
        return top + 1;
    }
};

// Usage
int main() {
    Stack<int> stack(100);
    stack.push(10);
    stack.push(20);
    std::cout << stack.pop() << std::endl; // 20
    return 0;
}`,"c#":`using System;

public class Stack<T>
{
    private T[] items;
    private int top;
    private int capacity;
    
    public Stack(int capacity = 100)
    {
        this.capacity = capacity;
        this.items = new T[capacity];
        this.top = -1;
    }
    
    public void Push(T item)
    {
        if (top >= capacity - 1)
            throw new StackOverflowException("Stack is full");
        items[++top] = item;
    }
    
    public T Pop()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack is empty");
        return items[top--];
    }
    
    public T Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack is empty");
        return items[top];
    }
    
    public bool IsEmpty() => top == -1;
    
    public int Size() => top + 1;
}

// Usage
var stack = new Stack<int>(100);
stack.Push(10);
stack.Push(20);
Console.WriteLine(stack.Pop()); // 20`},N=`class Queue:
    """Queue using Python's dynamic list - FIFO principle"""
    
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        """Add item to the back - O(1) amortized"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove and return front item - O(n)"""
        if self.is_empty():
            raise IndexError("Cannot dequeue from empty queue")
        return self.items.pop(0)
    
    def peek(self):
        """View front item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[0]
    
    def is_empty(self):
        """Check if queue is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of items - O(1)"""
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(queue.dequeue())  # 10 (first in, first out)
print(queue.peek())     # 20`,T=`class Queue {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    enqueue(item) {
        if (this.size >= this.capacity) {
            throw new Error("Queue is full");
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.size++;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return item;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
        return this.size;
    }
}

// Usage
const queue = new Queue(100);
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10`,_=`import java.util.NoSuchElementException;

public class Queue<T> {
    private Object[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public Queue(int capacity) {
        this.capacity = capacity;
        this.items = new Object[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void enqueue(T item) {
        if (size >= capacity) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    @SuppressWarnings("unchecked")
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        T item = (T) items[front];
        items[front] = null;
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return (T) items[front];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int size() {
        return size;
    }
}

// Usage
Queue<Integer> queue = new Queue<>(100);
queue.enqueue(10);
queue.enqueue(20);
System.out.println(queue.dequeue()); // 10`,S={python:N,javascript:T,java:_,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class Queue {
private:
    T* items;
    int front;
    int rear;
    int size;
    int capacity;

public:
    Queue(int cap = 100) : capacity(cap), front(0), rear(-1), size(0) {
        items = new T[capacity];
    }
    
    ~Queue() {
        delete[] items;
    }
    
    void enqueue(const T& item) {
        if (size >= capacity) {
            throw std::overflow_error("Queue is full");
        }
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    T dequeue() {
        if (isEmpty()) {
            throw std::underflow_error("Queue is empty");
        }
        T item = items[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::underflow_error("Queue is empty");
        }
        return items[front];
    }
    
    bool isEmpty() const {
        return size == 0;
    }
    
    int getSize() const {
        return size;
    }
};

// Usage
int main() {
    Queue<int> queue(100);
    queue.enqueue(10);
    queue.enqueue(20);
    std::cout << queue.dequeue() << std::endl; // 10
    return 0;
}`,"c#":`using System;

public class Queue<T>
{
    private T[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public Queue(int capacity = 100)
    {
        this.capacity = capacity;
        this.items = new T[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void Enqueue(T item)
    {
        if (size >= capacity)
            throw new InvalidOperationException("Queue is full");
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    public T Dequeue()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        T item = items[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public T Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        return items[front];
    }
    
    public bool IsEmpty() => size == 0;
    
    public int Size => size;
}

// Usage
var queue = new Queue<int>(100);
queue.Enqueue(10);
queue.Enqueue(20);
Console.WriteLine(queue.Dequeue()); // 10`},R=`class Node:
    """Node for singly linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    """Singly Linked List Implementation"""
    
    def __init__(self):
        self.head = None
        self.size = 0
    
    def insert_at_head(self, data):
        """Insert at the beginning - O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def insert_at_tail(self, data):
        """Insert at the end - O(n)"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def delete_at_head(self):
        """Delete from beginning - O(1)"""
        if not self.head:
            raise IndexError("List is empty")
        data = self.head.data
        self.head = self.head.next
        self.size -= 1
        return data
    
    def delete_at_tail(self):
        """Delete from end - O(n)"""
        if not self.head:
            raise IndexError("List is empty")
        if not self.head.next:
            data = self.head.data
            self.head = None
            self.size -= 1
            return data
        current = self.head
        while current.next.next:
            current = current.next
        data = current.next.data
        current.next = None
        self.size -= 1
        return data
    
    def search(self, data):
        """Search for element - O(n)"""
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1

# Usage
ll = SinglyLinkedList()
ll.insert_at_head(10)
ll.insert_at_tail(20)
ll.insert_at_tail(30)
print(ll.search(20))  # 1`,A=`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insertAtHead(data) {
        // Insert at beginning - O(1)
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    insertAtTail(data) {
        // Insert at end - O(n)
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    deleteAtHead() {
        // Delete from beginning - O(1)
        if (!this.head) {
            throw new Error("List is empty");
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }
    
    deleteAtTail() {
        // Delete from end - O(n)
        if (!this.head) {
            throw new Error("List is empty");
        }
        if (!this.head.next) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const data = current.next.data;
        current.next = null;
        this.size--;
        return data;
    }
    
    search(data) {
        // Search for element - O(n)
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
}

// Usage
const ll = new SinglyLinkedList();
ll.insertAtHead(10);
ll.insertAtTail(20);
ll.insertAtTail(30);`,E=`public class SinglyLinkedList<T> {
    private class Node {
        T data;
        Node next;
        
        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node head;
    private int size;
    
    public SinglyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    public void insertAtHead(T data) {
        // Insert at beginning - O(1)
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    public void insertAtTail(T data) {
        // Insert at end - O(n)
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    public T deleteAtHead() {
        // Delete from beginning - O(1)
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }
    
    public T deleteAtTail() {
        // Delete from end - O(n)
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        if (head.next == null) {
            T data = head.data;
            head = null;
            size--;
            return data;
        }
        Node current = head;
        while (current.next.next != null) {
            current = current.next;
        }
        T data = current.next.data;
        current.next = null;
        size--;
        return data;
    }
    
    public int search(T data) {
        // Search for element - O(n)
        Node current = head;
        int index = 0;
        while (current != null) {
            if (current.data.equals(data)) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    
    public int size() {
        return size;
    }
}

// Usage
SinglyLinkedList<Integer> ll = new SinglyLinkedList<>();
ll.insertAtHead(10);
ll.insertAtTail(20);
ll.insertAtTail(30);`,I={python:R,javascript:A,java:E,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class SinglyLinkedList {
private:
    struct Node {
        T data;
        Node* next;
        Node(T val) : data(val), next(nullptr) {}
    };
    
    Node* head;
    int listSize;

public:
    SinglyLinkedList() : head(nullptr), listSize(0) {}
    
    ~SinglyLinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
    
    void insertAtHead(T data) {
        // Insert at beginning - O(1)
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
        listSize++;
    }
    
    void insertAtTail(T data) {
        // Insert at end - O(n)
        Node* newNode = new Node(data);
        if (!head) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        listSize++;
    }
    
    T deleteAtHead() {
        // Delete from beginning - O(1)
        if (!head) {
            throw std::runtime_error("List is empty");
        }
        T data = head->data;
        Node* temp = head;
        head = head->next;
        delete temp;
        listSize--;
        return data;
    }
    
    T deleteAtTail() {
        // Delete from end - O(n)
        if (!head) {
            throw std::runtime_error("List is empty");
        }
        if (!head->next) {
            T data = head->data;
            delete head;
            head = nullptr;
            listSize--;
            return data;
        }
        Node* current = head;
        while (current->next->next) {
            current = current->next;
        }
        T data = current->next->data;
        delete current->next;
        current->next = nullptr;
        listSize--;
        return data;
    }
    
    int search(T data) {
        // Search for element - O(n)
        Node* current = head;
        int index = 0;
        while (current) {
            if (current->data == data) return index;
            current = current->next;
            index++;
        }
        return -1;
    }
    
    int size() const { return listSize; }
};

// Usage
int main() {
    SinglyLinkedList<int> ll;
    ll.insertAtHead(10);
    ll.insertAtTail(20);
    ll.insertAtTail(30);
    return 0;
}`,"c#":`using System;

public class SinglyLinkedList<T>
{
    private class Node
    {
        public T Data { get; set; }
        public Node Next { get; set; }
        
        public Node(T data)
        {
            Data = data;
            Next = null;
        }
    }
    
    private Node head;
    private int size;
    
    public SinglyLinkedList()
    {
        head = null;
        size = 0;
    }
    
    public void InsertAtHead(T data)
    {
        // Insert at beginning - O(1)
        var newNode = new Node(data);
        newNode.Next = head;
        head = newNode;
        size++;
    }
    
    public void InsertAtTail(T data)
    {
        // Insert at end - O(n)
        var newNode = new Node(data);
        if (head == null)
        {
            head = newNode;
        }
        else
        {
            var current = head;
            while (current.Next != null)
                current = current.Next;
            current.Next = newNode;
        }
        size++;
    }
    
    public T DeleteAtHead()
    {
        // Delete from beginning - O(1)
        if (head == null)
            throw new InvalidOperationException("List is empty");
        T data = head.Data;
        head = head.Next;
        size--;
        return data;
    }
    
    public T DeleteAtTail()
    {
        // Delete from end - O(n)
        if (head == null)
            throw new InvalidOperationException("List is empty");
        if (head.Next == null)
        {
            T data = head.Data;
            head = null;
            size--;
            return data;
        }
        var current = head;
        while (current.Next.Next != null)
            current = current.Next;
        T tailData = current.Next.Data;
        current.Next = null;
        size--;
        return tailData;
    }
    
    public int Search(T data)
    {
        // Search for element - O(n)
        var current = head;
        int index = 0;
        while (current != null)
        {
            if (current.Data.Equals(data)) return index;
            current = current.Next;
            index++;
        }
        return -1;
    }
    
    public int Size => size;
}

// Usage
var ll = new SinglyLinkedList<int>();
ll.InsertAtHead(10);
ll.InsertAtTail(20);
ll.InsertAtTail(30);`},O=`import random

class SkipListNode:
    def __init__(self, value, level):
        self.value = value
        self.forward = [None] * (level + 1)

class SkipList:
    MAX_LEVEL = 16
    P = 0.5
    
    def __init__(self):
        self.level = 0
        self.header = SkipListNode(float('-inf'), self.MAX_LEVEL)
        self.size = 0
    
    def random_level(self):
        lvl = 0
        while random.random() < self.P and lvl < self.MAX_LEVEL:
            lvl += 1
        return lvl
    
    def search(self, value):
        current = self.header
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
        current = current.forward[0]
        return current and current.value == value
    
    def insert(self, value):
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        current = current.forward[0]
        if current and current.value == value:
            return False  # Already exists
        
        new_level = self.random_level()
        if new_level > self.level:
            for i in range(self.level + 1, new_level + 1):
                update[i] = self.header
            self.level = new_level
        
        new_node = SkipListNode(value, new_level)
        for i in range(new_level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node
        
        self.size += 1
        return True
    
    def delete(self, value):
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        current = current.forward[0]
        if current and current.value == value:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]
            
            while self.level > 0 and not self.header.forward[self.level]:
                self.level -= 1
            
            self.size -= 1
            return True
        return False`,z=`class SkipListNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    static MAX_LEVEL = 16;
    static P = 0.5;
    
    constructor() {
        this.level = 0;
        this.header = new SkipListNode(-Infinity, SkipList.MAX_LEVEL);
        this.size = 0;
    }
    
    randomLevel() {
        let lvl = 0;
        while (Math.random() < SkipList.P && lvl < SkipList.MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
    search(value) {
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current && current.value === value;
    }
    
    insert(value) {
        const update = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.header;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current && current.value === value) {
            return false; // Already exists
        }
        
        const newLevel = this.randomLevel();
        if (newLevel > this.level) {
            for (let i = this.level + 1; i <= newLevel; i++) {
                update[i] = this.header;
            }
            this.level = newLevel;
        }
        
        const newNode = new SkipListNode(value, newLevel);
        for (let i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
        
        this.size++;
        return true;
    }
    
    delete(value) {
        const update = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.header;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }
            
            while (this.level > 0 && !this.header.forward[this.level]) {
                this.level--;
            }
            
            this.size--;
            return true;
        }
        return false;
    }
}`,V=`import java.util.Random;

public class SkipList<T extends Comparable<T>> {
    private static final int MAX_LEVEL = 16;
    private static final double P = 0.5;
    
    private class Node {
        T value;
        Node[] forward;
        
        @SuppressWarnings("unchecked")
        Node(T value, int level) {
            this.value = value;
            this.forward = new SkipList.Node[level + 1];
        }
    }
    
    private int level;
    private Node header;
    private int size;
    private Random random;
    
    public SkipList() {
        this.level = 0;
        this.header = new Node(null, MAX_LEVEL);
        this.size = 0;
        this.random = new Random();
    }
    
    private int randomLevel() {
        int lvl = 0;
        while (random.nextDouble() < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
    public boolean search(T value) {
        Node current = header;
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current != null && current.value.compareTo(value) == 0;
    }
    
    @SuppressWarnings("unchecked")
    public boolean insert(T value) {
        Node[] update = new SkipList.Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current != null && current.value.compareTo(value) == 0) {
            return false;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level + 1; i <= newLevel; i++) {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
        
        size++;
        return true;
    }
    
    @SuppressWarnings("unchecked")
    public boolean delete(T value) {
        Node[] update = new SkipList.Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current != null && current.value.compareTo(value) == 0) {
            for (int i = 0; i <= level; i++) {
                if (update[i].forward[i] != current) break;
                update[i].forward[i] = current.forward[i];
            }
            
            while (level > 0 && header.forward[level] == null) {
                level--;
            }
            
            size--;
            return true;
        }
        return false;
    }
    
    public int size() { return size; }
}`,C={python:O,javascript:z,java:V,"c++":`#include <vector>
#include <cstdlib>
#include <ctime>
#include <climits>

template <typename T>
class SkipList {
private:
    static const int MAX_LEVEL = 16;
    static constexpr double P = 0.5;
    
    struct Node {
        T value;
        std::vector<Node*> forward;
        
        Node(T val, int level) : value(val), forward(level + 1, nullptr) {}
    };
    
    int level;
    Node* header;
    int size_;
    
    int randomLevel() {
        int lvl = 0;
        while ((double)rand() / RAND_MAX < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
public:
    SkipList() : level(0), size_(0) {
        srand(time(nullptr));
        header = new Node(T(), MAX_LEVEL);
    }
    
    ~SkipList() {
        Node* current = header;
        while (current) {
            Node* next = current->forward[0];
            delete current;
            current = next;
        }
    }
    
    bool search(const T& value) {
        Node* current = header;
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
        }
        current = current->forward[0];
        return current && current->value == value;
    }
    
    bool insert(const T& value) {
        std::vector<Node*> update(MAX_LEVEL + 1, nullptr);
        Node* current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
            update[i] = current;
        }
        
        current = current->forward[0];
        if (current && current->value == value) {
            return false;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level + 1; i <= newLevel; i++) {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node* newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++) {
            newNode->forward[i] = update[i]->forward[i];
            update[i]->forward[i] = newNode;
        }
        
        size_++;
        return true;
    }
    
    bool remove(const T& value) {
        std::vector<Node*> update(MAX_LEVEL + 1, nullptr);
        Node* current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
            update[i] = current;
        }
        
        current = current->forward[0];
        if (current && current->value == value) {
            for (int i = 0; i <= level; i++) {
                if (update[i]->forward[i] != current) break;
                update[i]->forward[i] = current->forward[i];
            }
            delete current;
            
            while (level > 0 && !header->forward[level]) {
                level--;
            }
            
            size_--;
            return true;
        }
        return false;
    }
    
    int size() const { return size_; }
};`,"c#":`using System;

public class SkipList<T> where T : IComparable<T>
{
    private const int MAX_LEVEL = 16;
    private const double P = 0.5;
    
    private class Node
    {
        public T Value;
        public Node[] Forward;
        
        public Node(T value, int level)
        {
            Value = value;
            Forward = new Node[level + 1];
        }
    }
    
    private int level;
    private Node header;
    private int size;
    private Random random;
    
    public SkipList()
    {
        level = 0;
        header = new Node(default(T), MAX_LEVEL);
        size = 0;
        random = new Random();
    }
    
    private int RandomLevel()
    {
        int lvl = 0;
        while (random.NextDouble() < P && lvl < MAX_LEVEL)
        {
            lvl++;
        }
        return lvl;
    }
    
    public bool Search(T value)
    {
        Node current = header;
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
        }
        current = current.Forward[0];
        return current != null && current.Value.CompareTo(value) == 0;
    }
    
    public bool Insert(T value)
    {
        Node[] update = new Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
            update[i] = current;
        }
        
        current = current.Forward[0];
        if (current != null && current.Value.CompareTo(value) == 0)
        {
            return false;
        }
        
        int newLevel = RandomLevel();
        if (newLevel > level)
        {
            for (int i = level + 1; i <= newLevel; i++)
            {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++)
        {
            newNode.Forward[i] = update[i].Forward[i];
            update[i].Forward[i] = newNode;
        }
        
        size++;
        return true;
    }
    
    public bool Delete(T value)
    {
        Node[] update = new Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
            update[i] = current;
        }
        
        current = current.Forward[0];
        if (current != null && current.Value.CompareTo(value) == 0)
        {
            for (int i = 0; i <= level; i++)
            {
                if (update[i].Forward[i] != current) break;
                update[i].Forward[i] = current.Forward[i];
            }
            
            while (level > 0 && header.Forward[level] == null)
            {
                level--;
            }
            
            size--;
            return true;
        }
        return false;
    }
    
    public int Size => size;
}`},H=`class TreeNode:
    """Node in a binary tree"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    """Binary Search Tree with Traversals"""
    
    def __init__(self):
        self.root = None
        self.size = 0
    
    def insert(self, data):
        """Insert a value into the BST - O(log n) average"""
        if not self.root:
            self.root = TreeNode(data)
            self.size += 1
            return
        self._insert_recursive(self.root, data)
        self.size += 1
    
    def _insert_recursive(self, node, data):
        if data < node.data:
            if node.left is None:
                node.left = TreeNode(data)
            else:
                self._insert_recursive(node.left, data)
        else:
            if node.right is None:
                node.right = TreeNode(data)
            else:
                self._insert_recursive(node.right, data)
    
    # ============ TRAVERSALS ============
    
    def inorder_traversal(self):
        """Left -> Root -> Right (sorted order for BST)"""
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.data)
            self._inorder(node.right, result)
    
    def preorder_traversal(self):
        """Root -> Left -> Right (copy tree structure)"""
        result = []
        self._preorder(self.root, result)
        return result
    
    def _preorder(self, node, result):
        if node:
            result.append(node.data)
            self._preorder(node.left, result)
            self._preorder(node.right, result)
    
    def postorder_traversal(self):
        """Left -> Right -> Root (delete tree safely)"""
        result = []
        self._postorder(self.root, result)
        return result
    
    def _postorder(self, node, result):
        if node:
            self._postorder(node.left, result)
            self._postorder(node.right, result)
            result.append(node.data)
    
    def levelorder_traversal(self):
        """Level by level - BFS (shortest path)"""
        if not self.root:
            return []
        result = []
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            result.append(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

# Usage
tree = BinaryTree()
for val in [50, 30, 70, 20, 40, 60, 80]:
    tree.insert(val)

print("Inorder:   ", tree.inorder_traversal())     # [20, 30, 40, 50, 60, 70, 80]
print("Preorder:  ", tree.preorder_traversal())    # [50, 30, 20, 40, 70, 60, 80]
print("Postorder: ", tree.postorder_traversal())   # [20, 40, 30, 60, 80, 70, 50]
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,D=`class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    
    insert(data) {
        // Insert into BST - O(log n) average
        if (!this.root) {
            this.root = new TreeNode(data);
            this.size++;
            return;
        }
        this._insertRecursive(this.root, data);
        this.size++;
    }
    
    _insertRecursive(node, data) {
        if (data < node.data) {
            if (!node.left) {
                node.left = new TreeNode(data);
            } else {
                this._insertRecursive(node.left, data);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(data);
            } else {
                this._insertRecursive(node.right, data);
            }
        }
    }
    
    // ============ TRAVERSALS ============
    
    inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        const result = [];
        this._inorder(this.root, result);
        return result;
    }
    
    _inorder(node, result) {
        if (node) {
            this._inorder(node.left, result);
            result.push(node.data);
            this._inorder(node.right, result);
        }
    }
    
    preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        const result = [];
        this._preorder(this.root, result);
        return result;
    }
    
    _preorder(node, result) {
        if (node) {
            result.push(node.data);
            this._preorder(node.left, result);
            this._preorder(node.right, result);
        }
    }
    
    postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        const result = [];
        this._postorder(this.root, result);
        return result;
    }
    
    _postorder(node, result) {
        if (node) {
            this._postorder(node.left, result);
            this._postorder(node.right, result);
            result.push(node.data);
        }
    }
    
    levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        if (!this.root) return [];
        const result = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }
}

// Usage
const tree = new BinaryTree();
[50, 30, 70, 20, 40, 60, 80].forEach(val => tree.insert(val));

console.log("Inorder:  ", tree.inorderTraversal());     // [20, 30, 40, 50, 60, 70, 80]
console.log("Preorder: ", tree.preorderTraversal());    // [50, 30, 20, 40, 70, 60, 80]
console.log("Postorder:", tree.postorderTraversal());   // [20, 40, 30, 60, 80, 70, 50]
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,j=`import java.util.*;

class TreeNode {
    int data;
    TreeNode left, right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    private TreeNode root;
    private int size;
    
    public BinaryTree() {
        this.root = null;
        this.size = 0;
    }
    
    public void insert(int data) {
        // Insert into BST - O(log n) average
        if (root == null) {
            root = new TreeNode(data);
            size++;
            return;
        }
        insertRecursive(root, data);
        size++;
    }
    
    private void insertRecursive(TreeNode node, int data) {
        if (data < node.data) {
            if (node.left == null) {
                node.left = new TreeNode(data);
            } else {
                insertRecursive(node.left, data);
            }
        } else {
            if (node.right == null) {
                node.right = new TreeNode(data);
            } else {
                insertRecursive(node.right, data);
            }
        }
    }
    
    // ============ TRAVERSALS ============
    
    public List<Integer> inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    
    private void inorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            inorder(node.left, result);
            result.add(node.data);
            inorder(node.right, result);
        }
    }
    
    public List<Integer> preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        List<Integer> result = new ArrayList<>();
        preorder(root, result);
        return result;
    }
    
    private void preorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            result.add(node.data);
            preorder(node.left, result);
            preorder(node.right, result);
        }
    }
    
    public List<Integer> postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        List<Integer> result = new ArrayList<>();
        postorder(root, result);
        return result;
    }
    
    private void postorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            postorder(node.left, result);
            postorder(node.right, result);
            result.add(node.data);
        }
    }
    
    public List<Integer> levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            result.add(node.data);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        return result;
    }
}

// Usage
BinaryTree tree = new BinaryTree();
for (int val : new int[]{50, 30, 70, 20, 40, 60, 80}) {
    tree.insert(val);
}

System.out.println("Inorder:   " + tree.inorderTraversal());
System.out.println("Preorder:  " + tree.preorderTraversal());
System.out.println("Postorder: " + tree.postorderTraversal());
System.out.println("Level:     " + tree.levelOrderTraversal());`,B={python:H,javascript:D,java:j,"c++":`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BinaryTree {
private:
    TreeNode* root;
    int size;
    
    void insertRecursive(TreeNode* node, int data) {
        if (data < node->data) {
            if (!node->left) node->left = new TreeNode(data);
            else insertRecursive(node->left, data);
        } else {
            if (!node->right) node->right = new TreeNode(data);
            else insertRecursive(node->right, data);
        }
    }
    
    // Helper functions for traversals
    void inorder(TreeNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->data);
            inorder(node->right, result);
        }
    }
    
    void preorder(TreeNode* node, vector<int>& result) {
        if (node) {
            result.push_back(node->data);
            preorder(node->left, result);
            preorder(node->right, result);
        }
    }
    
    void postorder(TreeNode* node, vector<int>& result) {
        if (node) {
            postorder(node->left, result);
            postorder(node->right, result);
            result.push_back(node->data);
        }
    }

public:
    BinaryTree() : root(nullptr), size(0) {}
    
    void insert(int data) {
        // Insert into BST - O(log n) average
        if (!root) {
            root = new TreeNode(data);
            size++;
            return;
        }
        insertRecursive(root, data);
        size++;
    }
    
    // ============ TRAVERSALS ============
    
    vector<int> inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        vector<int> result;
        inorder(root, result);
        return result;
    }
    
    vector<int> preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        vector<int> result;
        preorder(root, result);
        return result;
    }
    
    vector<int> postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        vector<int> result;
        postorder(root, result);
        return result;
    }
    
    vector<int> levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        vector<int> result;
        if (!root) return result;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            result.push_back(node->data);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        return result;
    }
};

// Usage
int main() {
    BinaryTree tree;
    for (int val : {50, 30, 70, 20, 40, 60, 80}) {
        tree.insert(val);
    }
    
    // Inorder:   [20, 30, 40, 50, 60, 70, 80]
    // Preorder:  [50, 30, 20, 40, 70, 60, 80]
    // Postorder: [20, 40, 30, 60, 80, 70, 50]
    // Level:     [50, 30, 70, 20, 40, 60, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreeNode
{
    public int Data { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
    
    public TreeNode(int data)
    {
        Data = data;
        Left = null;
        Right = null;
    }
}

public class BinaryTree
{
    private TreeNode root;
    private int size;
    
    public BinaryTree()
    {
        root = null;
        size = 0;
    }
    
    public void Insert(int data)
    {
        // Insert into BST - O(log n) average
        if (root == null)
        {
            root = new TreeNode(data);
            size++;
            return;
        }
        InsertRecursive(root, data);
        size++;
    }
    
    private void InsertRecursive(TreeNode node, int data)
    {
        if (data < node.Data)
        {
            if (node.Left == null)
                node.Left = new TreeNode(data);
            else
                InsertRecursive(node.Left, data);
        }
        else
        {
            if (node.Right == null)
                node.Right = new TreeNode(data);
            else
                InsertRecursive(node.Right, data);
        }
    }
    
    // ============ TRAVERSALS ============
    
    public List<int> InorderTraversal()
    {
        // Left -> Root -> Right (sorted order for BST)
        var result = new List<int>();
        Inorder(root, result);
        return result;
    }
    
    private void Inorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            Inorder(node.Left, result);
            result.Add(node.Data);
            Inorder(node.Right, result);
        }
    }
    
    public List<int> PreorderTraversal()
    {
        // Root -> Left -> Right (copy tree structure)
        var result = new List<int>();
        Preorder(root, result);
        return result;
    }
    
    private void Preorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            result.Add(node.Data);
            Preorder(node.Left, result);
            Preorder(node.Right, result);
        }
    }
    
    public List<int> PostorderTraversal()
    {
        // Left -> Right -> Root (delete tree safely)
        var result = new List<int>();
        Postorder(root, result);
        return result;
    }
    
    private void Postorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            Postorder(node.Left, result);
            Postorder(node.Right, result);
            result.Add(node.Data);
        }
    }
    
    public List<int> LevelOrderTraversal()
    {
        // Level by level - BFS (shortest path)
        var result = new List<int>();
        if (root == null) return result;
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while (queue.Count > 0)
        {
            var node = queue.Dequeue();
            result.Add(node.Data);
            if (node.Left != null) queue.Enqueue(node.Left);
            if (node.Right != null) queue.Enqueue(node.Right);
        }
        return result;
    }
}

// Usage
var tree = new BinaryTree();
foreach (var val in new[] {50, 30, 70, 20, 40, 60, 80})
    tree.Insert(val);

Console.WriteLine("Inorder:   " + string.Join(", ", tree.InorderTraversal()));
Console.WriteLine("Preorder:  " + string.Join(", ", tree.PreorderTraversal()));
Console.WriteLine("Postorder: " + string.Join(", ", tree.PostorderTraversal()));
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},q=`class HashTable:
    """Hash Table with Linear Probing for collision resolution"""
    
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.size = 0
        self.keys = [None] * capacity
        self.values = [None] * capacity
    
    def _hash(self, key):
        """Simple hash function"""
        hash_value = 0
        for char in str(key):
            hash_value = (hash_value * 31 + ord(char)) % self.capacity
        return hash_value
    
    def insert(self, key, value):
        """Insert key-value pair - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value  # Update
                return
            index = (index + 1) % self.capacity  # Linear probing
            if index == original_index:
                raise Exception("Hash table is full")
        
        self.keys[index] = key
        self.values[index] = value
        self.size += 1
    
    def get(self, key):
        """Get value by key - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index + 1) % self.capacity
            if index == original_index:
                break
        return None
    
    def delete(self, key):
        """Delete key-value pair - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.keys[index] = None
                self.values[index] = None
                self.size -= 1
                return True
            index = (index + 1) % self.capacity
            if index == original_index:
                break
        return False

# Usage
ht = HashTable(10)
ht.insert("apple", 5)
ht.insert("banana", 3)
ht.insert("orange", 8)
print(ht.get("apple"))   # 5
print(ht.get("banana"))  # 3`,M=`class HashTable {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.size = 0;
        this.keys = new Array(capacity).fill(null);
        this.values = new Array(capacity).fill(null);
    }
    
    _hash(key) {
        // Simple hash function
        let hash = 0;
        const str = String(key);
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }
    
    insert(key, value) {
        // Insert key-value pair - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                this.values[index] = value; // Update
                return;
            }
            index = (index + 1) % this.capacity; // Linear probing
            if (index === originalIndex) {
                throw new Error("Hash table is full");
            }
        }
        
        this.keys[index] = key;
        this.values[index] = value;
        this.size++;
    }
    
    get(key) {
        // Get value by key - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            index = (index + 1) % this.capacity;
            if (index === originalIndex) break;
        }
        return null;
    }
    
    delete(key) {
        // Delete key-value pair - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                this.keys[index] = null;
                this.values[index] = null;
                this.size--;
                return true;
            }
            index = (index + 1) % this.capacity;
            if (index === originalIndex) break;
        }
        return false;
    }
}

// Usage
const ht = new HashTable(10);
ht.insert("apple", 5);
ht.insert("banana", 3);
console.log(ht.get("apple"));  // 5`,U=`public class HashTable<K, V> {
    private K[] keys;
    private V[] values;
    private int capacity;
    private int size;
    
    @SuppressWarnings("unchecked")
    public HashTable(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.keys = (K[]) new Object[capacity];
        this.values = (V[]) new Object[capacity];
    }
    
    private int hash(K key) {
        // Simple hash function
        int hash = 0;
        String str = String.valueOf(key);
        for (int i = 0; i < str.length(); i++) {
            hash = (hash * 31 + str.charAt(i)) % capacity;
        }
        return Math.abs(hash);
    }
    
    public void insert(K key, V value) {
        // Insert with linear probing - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) {
                throw new RuntimeException("Hash table is full");
            }
        }
        
        keys[index] = key;
        values[index] = value;
        size++;
    }
    
    public V get(K key) {
        // Get value - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                return values[index];
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return null;
    }
    
    public boolean delete(K key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                keys[index] = null;
                values[index] = null;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
}

// Usage
HashTable<String, Integer> ht = new HashTable<>(10);
ht.insert("apple", 5);
ht.insert("banana", 3);
System.out.println(ht.get("apple")); // 5`,F={python:q,javascript:M,java:U,"c++":`#include <iostream>
#include <string>
#include <vector>
using namespace std;

class HashTable {
private:
    vector<string> keys;
    vector<int> values;
    vector<bool> occupied;
    int capacity;
    int size;
    
    int hash(const string& key) {
        int hashVal = 0;
        for (char c : key) {
            hashVal = (hashVal * 31 + c) % capacity;
        }
        return abs(hashVal);
    }

public:
    HashTable(int cap = 10) : capacity(cap), size(0) {
        keys.resize(capacity);
        values.resize(capacity);
        occupied.resize(capacity, false);
    }
    
    void insert(const string& key, int value) {
        // Insert with linear probing - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) {
                throw runtime_error("Hash table is full");
            }
        }
        
        keys[index] = key;
        values[index] = value;
        occupied[index] = true;
        size++;
    }
    
    int get(const string& key) {
        // Get value - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                return values[index];
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return -1; // Not found
    }
    
    bool remove(const string& key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                occupied[index] = false;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
};

// Usage
int main() {
    HashTable ht(10);
    ht.insert("apple", 5);
    ht.insert("banana", 3);
    cout << ht.get("apple") << endl; // 5
    return 0;
}`,"c#":`using System;

public class HashTable<K, V>
{
    private K[] keys;
    private V[] values;
    private bool[] occupied;
    private int capacity;
    private int size;
    
    public HashTable(int capacity = 10)
    {
        this.capacity = capacity;
        this.size = 0;
        this.keys = new K[capacity];
        this.values = new V[capacity];
        this.occupied = new bool[capacity];
    }
    
    private int Hash(K key)
    {
        // Simple hash function
        string str = key.ToString();
        int hash = 0;
        foreach (char c in str)
        {
            hash = (hash * 31 + c) % capacity;
        }
        return Math.Abs(hash);
    }
    
    public void Insert(K key, V value)
    {
        // Insert with linear probing - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
            {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex)
                throw new InvalidOperationException("Hash table is full");
        }
        
        keys[index] = key;
        values[index] = value;
        occupied[index] = true;
        size++;
    }
    
    public V Get(K key)
    {
        // Get value - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
                return values[index];
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return default(V);
    }
    
    public bool Delete(K key)
    {
        // Delete key-value pair - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
            {
                occupied[index] = false;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
}

// Usage
var ht = new HashTable<string, int>(10);
ht.Insert("apple", 5);
ht.Insert("banana", 3);
Console.WriteLine(ht.Get("apple")); // 5`},K=`class Node:
    """Node for linked list in each bucket"""
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class HashTableChaining:
    """
    Hash Table with Separate Chaining
    Each bucket contains a linked list of key-value pairs
    """
    
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.size = 0
        self.table = [None] * capacity
    
    def _hash(self, key):
        """Hash function - O(k) where k is key length"""
        return hash(key) % self.capacity
    
    def insert(self, key, value):
        """
        Insert or update key-value pair
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        
        # Empty bucket - create new node
        if self.table[index] is None:
            self.table[index] = Node(key, value)
            self.size += 1
            return
        
        # Traverse chain to find key or end
        current = self.table[index]
        while current:
            if current.key == key:
                current.value = value  # Update existing
                return
            if current.next is None:
                break
            current = current.next
        
        # Append new node (collision)
        current.next = Node(key, value)
        self.size += 1
    
    def search(self, key):
        """
        Search for value by key
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        current = self.table[index]
        
        while current:
            if current.key == key:
                return current.value
            current = current.next
        return None
    
    def delete(self, key):
        """
        Delete key-value pair
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        
        if self.table[index] is None:
            return False
        
        # Check head node
        if self.table[index].key == key:
            self.table[index] = self.table[index].next
            self.size -= 1
            return True
        
        # Search rest of chain
        current = self.table[index]
        while current.next:
            if current.next.key == key:
                current.next = current.next.next
                self.size -= 1
                return True
            current = current.next
        return False


# Usage
ht = HashTableChaining(7)
ht.insert("apple", 5)
ht.insert("banana", 3)
ht.insert("cherry", 8)  # May collide
print(ht.search("apple"))  # 5
ht.delete("banana")`,P=`class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTableChaining {
    /**
     * Hash Table with Separate Chaining
     * Each bucket contains a linked list of key-value pairs
     */
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);
    }
    
    _hash(key) {
        // Hash function - O(k) where k is key length
        let hash = 0;
        const str = String(key);
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }
    
    insert(key, value) {
        /**
         * Insert or update key-value pair
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        
        // Empty bucket - create new node
        if (this.table[index] === null) {
            this.table[index] = new Node(key, value);
            this.size++;
            return;
        }
        
        // Traverse chain to find key or end
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                current.value = value;  // Update existing
                return;
            }
            if (current.next === null) break;
            current = current.next;
        }
        
        // Append new node (collision)
        current.next = new Node(key, value);
        this.size++;
    }
    
    search(key) {
        /**
         * Search for value by key
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        let current = this.table[index];
        
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    delete(key) {
        /**
         * Delete key-value pair
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        
        if (this.table[index] === null) return false;
        
        // Check head node
        if (this.table[index].key === key) {
            this.table[index] = this.table[index].next;
            this.size--;
            return true;
        }
        
        // Search rest of chain
        let current = this.table[index];
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Usage
const ht = new HashTableChaining(7);
ht.insert("apple", 5);
ht.insert("banana", 3);
console.log(ht.search("apple"));  // 5`,$=`public class HashTableChaining<K, V> {
    /**
     * Hash Table with Separate Chaining
     * Each bucket contains a linked list of key-value pairs
     */
    
    private class Node {
        K key;
        V value;
        Node next;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.next = null;
        }
    }
    
    private Node[] table;
    private int capacity;
    private int size;
    
    @SuppressWarnings("unchecked")
    public HashTableChaining(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.table = (Node[]) new HashTableChaining.Node[capacity];
    }
    
    private int hash(K key) {
        // Hash function - O(1)
        return Math.abs(key.hashCode() % capacity);
    }
    
    /**
     * Insert or update key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public void insert(K key, V value) {
        int index = hash(key);
        
        // Empty bucket - create new node
        if (table[index] == null) {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node current = table[index];
        while (current != null) {
            if (current.key.equals(key)) {
                current.value = value;  // Update existing
                return;
            }
            if (current.next == null) break;
            current = current.next;
        }
        
        // Append new node (collision)
        current.next = new Node(key, value);
        size++;
    }
    
    /**
     * Search for value by key
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public V search(K key) {
        int index = hash(key);
        Node current = table[index];
        
        while (current != null) {
            if (current.key.equals(key)) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    /**
     * Delete key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public boolean delete(K key) {
        int index = hash(key);
        
        if (table[index] == null) return false;
        
        // Check head node
        if (table[index].key.equals(key)) {
            table[index] = table[index].next;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node current = table[index];
        while (current.next != null) {
            if (current.next.key.equals(key)) {
                current.next = current.next.next;
                size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Usage
HashTableChaining<String, Integer> ht = new HashTableChaining<>(7);
ht.insert("apple", 5);
ht.insert("banana", 3);
System.out.println(ht.search("apple"));  // 5`,G={python:K,javascript:P,java:$,"c++":`#include <iostream>
#include <string>
#include <functional>
using namespace std;

/**
 * Hash Table with Separate Chaining
 * Each bucket contains a linked list of key-value pairs
 */
template <typename K, typename V>
class HashTableChaining {
private:
    struct Node {
        K key;
        V value;
        Node* next;
        Node(K k, V v) : key(k), value(v), next(nullptr) {}
    };
    
    Node** table;
    int capacity;
    int size;
    
    int hash(const K& key) {
        // Hash function - O(1)
        return abs((int)(std::hash<K>{}(key) % capacity));
    }

public:
    HashTableChaining(int cap = 10) : capacity(cap), size(0) {
        table = new Node*[capacity]();
    }
    
    ~HashTableChaining() {
        for (int i = 0; i < capacity; i++) {
            Node* current = table[i];
            while (current) {
                Node* temp = current;
                current = current->next;
                delete temp;
            }
        }
        delete[] table;
    }
    
    /**
     * Insert or update key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    void insert(const K& key, const V& value) {
        int index = hash(key);
        
        // Empty bucket - create new node
        if (table[index] == nullptr) {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node* current = table[index];
        while (current) {
            if (current->key == key) {
                current->value = value;  // Update existing
                return;
            }
            if (current->next == nullptr) break;
            current = current->next;
        }
        
        // Append new node (collision)
        current->next = new Node(key, value);
        size++;
    }
    
    /**
     * Search for value by key
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    V* search(const K& key) {
        int index = hash(key);
        Node* current = table[index];
        
        while (current) {
            if (current->key == key) {
                return &current->value;
            }
            current = current->next;
        }
        return nullptr;
    }
    
    /**
     * Delete key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    bool remove(const K& key) {
        int index = hash(key);
        
        if (table[index] == nullptr) return false;
        
        // Check head node
        if (table[index]->key == key) {
            Node* temp = table[index];
            table[index] = table[index]->next;
            delete temp;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node* current = table[index];
        while (current->next) {
            if (current->next->key == key) {
                Node* temp = current->next;
                current->next = current->next->next;
                delete temp;
                size--;
                return true;
            }
            current = current->next;
        }
        return false;
    }
};

// Usage
int main() {
    HashTableChaining<string, int> ht(7);
    ht.insert("apple", 5);
    ht.insert("banana", 3);
    int* val = ht.search("apple");
    if (val) cout << *val << endl;  // 5
    return 0;
}`,"c#":`using System;

/// <summary>
/// Hash Table with Separate Chaining
/// Each bucket contains a linked list of key-value pairs
/// </summary>
public class HashTableChaining<K, V>
{
    private class Node
    {
        public K Key;
        public V Value;
        public Node Next;
        
        public Node(K key, V value)
        {
            Key = key;
            Value = value;
            Next = null;
        }
    }
    
    private Node[] table;
    private int capacity;
    private int size;
    
    public HashTableChaining(int capacity = 10)
    {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Node[capacity];
    }
    
    private int Hash(K key)
    {
        // Hash function - O(1)
        return Math.Abs(key.GetHashCode() % capacity);
    }
    
    /// <summary>
    /// Insert or update key-value pair
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public void Insert(K key, V value)
    {
        int index = Hash(key);
        
        // Empty bucket - create new node
        if (table[index] == null)
        {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node current = table[index];
        while (current != null)
        {
            if (current.Key.Equals(key))
            {
                current.Value = value;  // Update existing
                return;
            }
            if (current.Next == null) break;
            current = current.Next;
        }
        
        // Append new node (collision)
        current.Next = new Node(key, value);
        size++;
    }
    
    /// <summary>
    /// Search for value by key
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public V Search(K key)
    {
        int index = Hash(key);
        Node current = table[index];
        
        while (current != null)
        {
            if (current.Key.Equals(key))
            {
                return current.Value;
            }
            current = current.Next;
        }
        return default(V);
    }
    
    /// <summary>
    /// Delete key-value pair
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public bool Delete(K key)
    {
        int index = Hash(key);
        
        if (table[index] == null) return false;
        
        // Check head node
        if (table[index].Key.Equals(key))
        {
            table[index] = table[index].Next;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node current = table[index];
        while (current.Next != null)
        {
            if (current.Next.Key.Equals(key))
            {
                current.Next = current.Next.Next;
                size--;
                return true;
            }
            current = current.Next;
        }
        return false;
    }
}

// Usage
var ht = new HashTableChaining<string, int>(7);
ht.Insert("apple", 5);
ht.Insert("banana", 3);
Console.WriteLine(ht.Search("apple"));  // 5`},Q=`class TreeNode:
    """Node in a Binary Search Tree"""
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BST:
    """Binary Search Tree - Left < Root < Right"""
    
    def __init__(self):
        self.root = None
    
    def insert(self, key):
        """Insert maintaining BST property - O(log n) avg"""
        if not self.root:
            self.root = TreeNode(key)
            return
        self._insert_rec(self.root, key)
    
    def _insert_rec(self, node, key):
        if key < node.key:
            if node.left is None:
                node.left = TreeNode(key)
            else:
                self._insert_rec(node.left, key)
        else:
            if node.right is None:
                node.right = TreeNode(key)
            else:
                self._insert_rec(node.right, key)
    
    def search(self, key):
        """Search for key - O(log n) avg"""
        return self._search_rec(self.root, key)
    
    def _search_rec(self, node, key):
        if node is None or node.key == key:
            return node
        if key < node.key:
            return self._search_rec(node.left, key)
        return self._search_rec(node.right, key)
    
    def delete(self, key):
        """Delete node with key - O(log n) avg"""
        self.root = self._delete_rec(self.root, key)
    
    def _delete_rec(self, node, key):
        if node is None:
            return node
        
        if key < node.key:
            node.left = self._delete_rec(node.left, key)
        elif key > node.key:
            node.right = self._delete_rec(node.right, key)
        else:
            # Node found - handle 3 cases
            # Case 1 & 2: No child or one child
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            # Case 3: Two children - get inorder successor
            successor = self._min_value(node.right)
            node.key = successor.key
            node.right = self._delete_rec(node.right, successor.key)
        return node
    
    def _min_value(self, node):
        """Find minimum value node (leftmost)"""
        current = node
        while current.left:
            current = current.left
        return current
    
    def inorder(self):
        """Inorder traversal - returns sorted order!"""
        result = []
        self._inorder_rec(self.root, result)
        return result
    
    def _inorder_rec(self, node, result):
        if node:
            self._inorder_rec(node.left, result)
            result.append(node.key)
            self._inorder_rec(node.right, result)

# Usage
bst = BST()
for val in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(val)

print("Inorder (sorted):", bst.inorder())  # [20, 30, 40, 50, 60, 70, 80]
print("Search 40:", bst.search(40) is not None)  # True
bst.delete(30)  # Delete node with two children
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,W=`class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Binary Search Tree - Left < Root < Right
    
    constructor() {
        this.root = null;
    }
    
    insert(key) {
        // Insert maintaining BST property - O(log n) avg
        if (!this.root) {
            this.root = new TreeNode(key);
            return;
        }
        this._insertRec(this.root, key);
    }
    
    _insertRec(node, key) {
        if (key < node.key) {
            if (!node.left) {
                node.left = new TreeNode(key);
            } else {
                this._insertRec(node.left, key);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(key);
            } else {
                this._insertRec(node.right, key);
            }
        }
    }
    
    search(key) {
        // Search for key - O(log n) avg
        return this._searchRec(this.root, key);
    }
    
    _searchRec(node, key) {
        if (!node || node.key === key) return node;
        if (key < node.key) return this._searchRec(node.left, key);
        return this._searchRec(node.right, key);
    }
    
    delete(key) {
        // Delete node with key - O(log n) avg
        this.root = this._deleteRec(this.root, key);
    }
    
    _deleteRec(node, key) {
        if (!node) return node;
        
        if (key < node.key) {
            node.left = this._deleteRec(node.left, key);
        } else if (key > node.key) {
            node.right = this._deleteRec(node.right, key);
        } else {
            // Node found - handle 3 cases
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            // Two children - get inorder successor
            const successor = this._minValue(node.right);
            node.key = successor.key;
            node.right = this._deleteRec(node.right, successor.key);
        }
        return node;
    }
    
    _minValue(node) {
        // Find minimum value node (leftmost)
        let current = node;
        while (current.left) current = current.left;
        return current;
    }
    
    inorder() {
        // Inorder traversal - returns sorted order!
        const result = [];
        this._inorderRec(this.root, result);
        return result;
    }
    
    _inorderRec(node, result) {
        if (node) {
            this._inorderRec(node.left, result);
            result.push(node.key);
            this._inorderRec(node.right, result);
        }
    }
}

// Usage
const bst = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(val => bst.insert(val));

console.log("Inorder (sorted):", bst.inorder());  // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", bst.search(40) !== null);  // true
bst.delete(30);  // Delete node with two children
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,X=`import java.util.*;

class TreeNode {
    int key;
    TreeNode left, right;
    
    TreeNode(int key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

public class BST {
    // Binary Search Tree - Left < Root < Right
    private TreeNode root;
    
    public BST() {
        this.root = null;
    }
    
    public void insert(int key) {
        // Insert maintaining BST property - O(log n) avg
        if (root == null) {
            root = new TreeNode(key);
            return;
        }
        insertRec(root, key);
    }
    
    private void insertRec(TreeNode node, int key) {
        if (key < node.key) {
            if (node.left == null) node.left = new TreeNode(key);
            else insertRec(node.left, key);
        } else {
            if (node.right == null) node.right = new TreeNode(key);
            else insertRec(node.right, key);
        }
    }
    
    public TreeNode search(int key) {
        // Search for key - O(log n) avg
        return searchRec(root, key);
    }
    
    private TreeNode searchRec(TreeNode node, int key) {
        if (node == null || node.key == key) return node;
        if (key < node.key) return searchRec(node.left, key);
        return searchRec(node.right, key);
    }
    
    public void delete(int key) {
        // Delete node with key - O(log n) avg
        root = deleteRec(root, key);
    }
    
    private TreeNode deleteRec(TreeNode node, int key) {
        if (node == null) return node;
        
        if (key < node.key) {
            node.left = deleteRec(node.left, key);
        } else if (key > node.key) {
            node.right = deleteRec(node.right, key);
        } else {
            // Node found - handle 3 cases
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            // Two children - get inorder successor
            TreeNode successor = minValue(node.right);
            node.key = successor.key;
            node.right = deleteRec(node.right, successor.key);
        }
        return node;
    }
    
    private TreeNode minValue(TreeNode node) {
        // Find minimum value node (leftmost)
        TreeNode current = node;
        while (current.left != null) current = current.left;
        return current;
    }
    
    public List<Integer> inorder() {
        // Inorder traversal - returns sorted order!
        List<Integer> result = new ArrayList<>();
        inorderRec(root, result);
        return result;
    }
    
    private void inorderRec(TreeNode node, List<Integer> result) {
        if (node != null) {
            inorderRec(node.left, result);
            result.add(node.key);
            inorderRec(node.right, result);
        }
    }
}

// Usage
BST bst = new BST();
for (int val : new int[]{50, 30, 70, 20, 40, 60, 80}) bst.insert(val);

System.out.println("Inorder: " + bst.inorder());  // [20, 30, 40, 50, 60, 70, 80]
System.out.println("Search 40: " + (bst.search(40) != null));  // true
bst.delete(30);  // Delete node with two children
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,J={python:Q,javascript:W,java:X,"c++":`#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int key;
    TreeNode *left, *right;
    TreeNode(int k) : key(k), left(nullptr), right(nullptr) {}
};

class BST {
    // Binary Search Tree - Left < Root < Right
private:
    TreeNode* root;
    
    void insertRec(TreeNode* node, int key) {
        if (key < node->key) {
            if (!node->left) node->left = new TreeNode(key);
            else insertRec(node->left, key);
        } else {
            if (!node->right) node->right = new TreeNode(key);
            else insertRec(node->right, key);
        }
    }
    
    TreeNode* searchRec(TreeNode* node, int key) {
        if (!node || node->key == key) return node;
        if (key < node->key) return searchRec(node->left, key);
        return searchRec(node->right, key);
    }
    
    TreeNode* minValue(TreeNode* node) {
        TreeNode* current = node;
        while (current->left) current = current->left;
        return current;
    }
    
    TreeNode* deleteRec(TreeNode* node, int key) {
        if (!node) return node;
        
        if (key < node->key) {
            node->left = deleteRec(node->left, key);
        } else if (key > node->key) {
            node->right = deleteRec(node->right, key);
        } else {
            // Node found - handle 3 cases
            if (!node->left) return node->right;
            if (!node->right) return node->left;
            // Two children - get inorder successor
            TreeNode* successor = minValue(node->right);
            node->key = successor->key;
            node->right = deleteRec(node->right, successor->key);
        }
        return node;
    }
    
    void inorderRec(TreeNode* node, vector<int>& result) {
        if (node) {
            inorderRec(node->left, result);
            result.push_back(node->key);
            inorderRec(node->right, result);
        }
    }

public:
    BST() : root(nullptr) {}
    
    void insert(int key) {
        // Insert maintaining BST property - O(log n) avg
        if (!root) { root = new TreeNode(key); return; }
        insertRec(root, key);
    }
    
    TreeNode* search(int key) {
        // Search for key - O(log n) avg
        return searchRec(root, key);
    }
    
    void remove(int key) {
        // Delete node with key - O(log n) avg
        root = deleteRec(root, key);
    }
    
    vector<int> inorder() {
        // Inorder traversal - returns sorted order!
        vector<int> result;
        inorderRec(root, result);
        return result;
    }
};

// Usage
int main() {
    BST bst;
    for (int val : {50, 30, 70, 20, 40, 60, 80}) bst.insert(val);
    
    // Inorder (sorted): [20, 30, 40, 50, 60, 70, 80]
    // Search 40: true
    bst.remove(30);  // Delete node with two children
    // After delete: [20, 40, 50, 60, 70, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreeNode
{
    public int Key { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
    
    public TreeNode(int key)
    {
        Key = key;
        Left = null;
        Right = null;
    }
}

public class BST
{
    // Binary Search Tree - Left < Root < Right
    private TreeNode root;
    
    public BST() { root = null; }
    
    public void Insert(int key)
    {
        // Insert maintaining BST property - O(log n) avg
        if (root == null) { root = new TreeNode(key); return; }
        InsertRec(root, key);
    }
    
    private void InsertRec(TreeNode node, int key)
    {
        if (key < node.Key)
        {
            if (node.Left == null) node.Left = new TreeNode(key);
            else InsertRec(node.Left, key);
        }
        else
        {
            if (node.Right == null) node.Right = new TreeNode(key);
            else InsertRec(node.Right, key);
        }
    }
    
    public TreeNode Search(int key)
    {
        // Search for key - O(log n) avg
        return SearchRec(root, key);
    }
    
    private TreeNode SearchRec(TreeNode node, int key)
    {
        if (node == null || node.Key == key) return node;
        if (key < node.Key) return SearchRec(node.Left, key);
        return SearchRec(node.Right, key);
    }
    
    public void Delete(int key)
    {
        // Delete node with key - O(log n) avg
        root = DeleteRec(root, key);
    }
    
    private TreeNode DeleteRec(TreeNode node, int key)
    {
        if (node == null) return node;
        
        if (key < node.Key)
            node.Left = DeleteRec(node.Left, key);
        else if (key > node.Key)
            node.Right = DeleteRec(node.Right, key);
        else
        {
            // Node found - handle 3 cases
            if (node.Left == null) return node.Right;
            if (node.Right == null) return node.Left;
            // Two children - get inorder successor
            var successor = MinValue(node.Right);
            node.Key = successor.Key;
            node.Right = DeleteRec(node.Right, successor.Key);
        }
        return node;
    }
    
    private TreeNode MinValue(TreeNode node)
    {
        var current = node;
        while (current.Left != null) current = current.Left;
        return current;
    }
    
    public List<int> Inorder()
    {
        // Inorder traversal - returns sorted order!
        var result = new List<int>();
        InorderRec(root, result);
        return result;
    }
    
    private void InorderRec(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            InorderRec(node.Left, result);
            result.Add(node.Key);
            InorderRec(node.Right, result);
        }
    }
}

// Usage
var bst = new BST();
foreach (var val in new[] {50, 30, 70, 20, 40, 60, 80}) bst.Insert(val);

Console.WriteLine("Inorder: " + string.Join(", ", bst.Inorder()));
Console.WriteLine("Search 40: " + (bst.Search(40) != null));
bst.Delete(30);  // Delete node with two children
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Z=`class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    """Self-balancing BST with O(log n) guaranteed"""
    
    def __init__(self):
        self.root = None
    
    def height(self, node):
        return node.height if node else 0
    
    def balance_factor(self, node):
        return self.height(node.left) - self.height(node.right) if node else 0
    
    def rotate_right(self, y):
        """Right rotation for Left-Left case"""
        x = y.left
        T2 = x.right
        x.right = y
        y.left = T2
        y.height = 1 + max(self.height(y.left), self.height(y.right))
        x.height = 1 + max(self.height(x.left), self.height(x.right))
        return x
    
    def rotate_left(self, x):
        """Left rotation for Right-Right case"""
        y = x.right
        T2 = y.left
        y.left = x
        x.right = T2
        x.height = 1 + max(self.height(x.left), self.height(x.right))
        y.height = 1 + max(self.height(y.left), self.height(y.right))
        return y
    
    def insert(self, key):
        self.root = self._insert(self.root, key)
    
    def _insert(self, node, key):
        # Standard BST insert
        if not node:
            return AVLNode(key)
        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:
            node.right = self._insert(node.right, key)
        else:
            return node  # No duplicates
        
        # Update height
        node.height = 1 + max(self.height(node.left), self.height(node.right))
        
        # Get balance factor and rebalance if needed
        bf = self.balance_factor(node)
        
        # Left Left -> Right rotation
        if bf > 1 and key < node.left.key:
            return self.rotate_right(node)
        # Right Right -> Left rotation
        if bf < -1 and key > node.right.key:
            return self.rotate_left(node)
        # Left Right -> Left-Right rotation
        if bf > 1 and key > node.left.key:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        # Right Left -> Right-Left rotation
        if bf < -1 and key < node.right.key:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node

# Usage
avl = AVLTree()
for val in [30, 20, 40, 10, 25, 35, 50]:
    avl.insert(val)
# Tree automatically balances after each insert!`,Y=`class AVLNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    
    constructor() {
        this.root = null;
    }
    
    height(node) {
        return node ? node.height : 0;
    }
    
    balanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }
    
    rotateRight(y) {
        // Right rotation for Left-Left case
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        return x;
    }
    
    rotateLeft(x) {
        // Left rotation for Right-Right case
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }
    
    insert(key) {
        this.root = this._insert(this.root, key);
    }
    
    _insert(node, key) {
        if (!node) return new AVLNode(key);
        
        if (key < node.key) node.left = this._insert(node.left, key);
        else if (key > node.key) node.right = this._insert(node.right, key);
        else return node; // No duplicates
        
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        const bf = this.balanceFactor(node);
        
        // Left Left
        if (bf > 1 && key < node.left.key) return this.rotateRight(node);
        // Right Right
        if (bf < -1 && key > node.right.key) return this.rotateLeft(node);
        // Left Right
        if (bf > 1 && key > node.left.key) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        // Right Left
        if (bf < -1 && key < node.right.key) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        return node;
    }
}

// Usage
const avl = new AVLTree();
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,ee=`class AVLNode {
    int key, height;
    AVLNode left, right;
    AVLNode(int key) { this.key = key; this.height = 1; }
}

public class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    private AVLNode root;
    
    int height(AVLNode node) { return node == null ? 0 : node.height; }
    
    int balanceFactor(AVLNode node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    AVLNode rotateRight(AVLNode y) {
        AVLNode x = y.left, T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));
        return x;
    }
    
    AVLNode rotateLeft(AVLNode x) {
        AVLNode y = x.right, T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));
        return y;
    }
    
    public void insert(int key) { root = insert(root, key); }
    
    private AVLNode insert(AVLNode node, int key) {
        if (node == null) return new AVLNode(key);
        
        if (key < node.key) node.left = insert(node.left, key);
        else if (key > node.key) node.right = insert(node.right, key);
        else return node;
        
        node.height = 1 + Math.max(height(node.left), height(node.right));
        int bf = balanceFactor(node);
        
        if (bf > 1 && key < node.left.key) return rotateRight(node);
        if (bf < -1 && key > node.right.key) return rotateLeft(node);
        if (bf > 1 && key > node.left.key) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        if (bf < -1 && key < node.right.key) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        return node;
    }
}

// Usage
AVLTree avl = new AVLTree();
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,ne={python:Z,javascript:Y,java:ee,"c++":`#include <algorithm>
using namespace std;

struct AVLNode {
    int key, height;
    AVLNode *left, *right;
    AVLNode(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    AVLNode* root = nullptr;
    
    int height(AVLNode* n) { return n ? n->height : 0; }
    int bf(AVLNode* n) { return n ? height(n->left) - height(n->right) : 0; }
    
    AVLNode* rotateRight(AVLNode* y) {
        AVLNode* x = y->left;
        y->left = x->right;
        x->right = y;
        y->height = 1 + max(height(y->left), height(y->right));
        x->height = 1 + max(height(x->left), height(x->right));
        return x;
    }
    
    AVLNode* rotateLeft(AVLNode* x) {
        AVLNode* y = x->right;
        x->right = y->left;
        y->left = x;
        x->height = 1 + max(height(x->left), height(x->right));
        y->height = 1 + max(height(y->left), height(y->right));
        return y;
    }
    
    AVLNode* insert(AVLNode* node, int key) {
        if (!node) return new AVLNode(key);
        
        if (key < node->key) node->left = insert(node->left, key);
        else if (key > node->key) node->right = insert(node->right, key);
        else return node;
        
        node->height = 1 + max(height(node->left), height(node->right));
        int balance = bf(node);
        
        if (balance > 1 && key < node->left->key) return rotateRight(node);
        if (balance < -1 && key > node->right->key) return rotateLeft(node);
        if (balance > 1 && key > node->left->key) {
            node->left = rotateLeft(node->left);
            return rotateRight(node);
        }
        if (balance < -1 && key < node->right->key) {
            node->right = rotateRight(node->right);
            return rotateLeft(node);
        }
        return node;
    }
    
public:
    void insert(int key) { root = insert(root, key); }
};

// Usage: AVLTree avl; for(int v : {30,20,40,10,25}) avl.insert(v);`,"c#":`public class AVLNode {
    public int Key { get; set; }
    public int Height { get; set; } = 1;
    public AVLNode Left { get; set; }
    public AVLNode Right { get; set; }
    public AVLNode(int key) { Key = key; }
}

public class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    private AVLNode root;
    
    int Height(AVLNode n) => n?.Height ?? 0;
    int BalanceFactor(AVLNode n) => n == null ? 0 : Height(n.Left) - Height(n.Right);
    
    AVLNode RotateRight(AVLNode y) {
        var x = y.Left;
        y.Left = x.Right;
        x.Right = y;
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        return x;
    }
    
    AVLNode RotateLeft(AVLNode x) {
        var y = x.Right;
        x.Right = y.Left;
        y.Left = x;
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        return y;
    }
    
    public void Insert(int key) => root = Insert(root, key);
    
    private AVLNode Insert(AVLNode node, int key) {
        if (node == null) return new AVLNode(key);
        
        if (key < node.Key) node.Left = Insert(node.Left, key);
        else if (key > node.Key) node.Right = Insert(node.Right, key);
        else return node;
        
        node.Height = 1 + Math.Max(Height(node.Left), Height(node.Right));
        int bf = BalanceFactor(node);
        
        if (bf > 1 && key < node.Left.Key) return RotateRight(node);
        if (bf < -1 && key > node.Right.Key) return RotateLeft(node);
        if (bf > 1 && key > node.Left.Key) {
            node.Left = RotateLeft(node.Left);
            return RotateRight(node);
        }
        if (bf < -1 && key < node.Right.Key) {
            node.Right = RotateRight(node.Right);
            return RotateLeft(node);
        }
        return node;
    }
}

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},te=`class SplayNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class SplayTree:
    """Self-adjusting BST - accessed nodes move to root"""
    
    def __init__(self):
        self.root = None
    
    def _rotate_right(self, x):
        y = x.left
        x.left = y.right
        y.right = x
        return y
    
    def _rotate_left(self, x):
        y = x.right
        x.right = y.left
        y.left = x
        return y
    
    def _splay(self, root, key):
        """Splay operation - bring key to root"""
        if not root or root.key == key:
            return root
        
        # Key in left subtree
        if key < root.key:
            if not root.left:
                return root
            # Zig-Zig (Left Left)
            if key < root.left.key:
                root.left.left = self._splay(root.left.left, key)
                root = self._rotate_right(root)
            # Zig-Zag (Left Right)
            elif key > root.left.key:
                root.left.right = self._splay(root.left.right, key)
                if root.left.right:
                    root.left = self._rotate_left(root.left)
            return root if not root.left else self._rotate_right(root)
        
        # Key in right subtree
        else:
            if not root.right:
                return root
            # Zig-Zag (Right Left)
            if key < root.right.key:
                root.right.left = self._splay(root.right.left, key)
                if root.right.left:
                    root.right = self._rotate_right(root.right)
            # Zig-Zig (Right Right)
            elif key > root.right.key:
                root.right.right = self._splay(root.right.right, key)
                root = self._rotate_left(root)
            return root if not root.right else self._rotate_left(root)
    
    def search(self, key):
        """Search and splay to root - O(log n) amortized"""
        self.root = self._splay(self.root, key)
        return self.root if self.root and self.root.key == key else None
    
    def insert(self, key):
        """Insert and splay new node to root"""
        if not self.root:
            self.root = SplayNode(key)
            return
        
        self.root = self._splay(self.root, key)
        if self.root.key == key:
            return  # Key exists
        
        node = SplayNode(key)
        if key < self.root.key:
            node.right = self.root
            node.left = self.root.left
            self.root.left = None
        else:
            node.left = self.root
            node.right = self.root.right
            self.root.right = None
        self.root = node

# Usage
splay = SplayTree()
for val in [50, 30, 70, 20, 40]:
    splay.insert(val)

splay.search(20)  # 20 is now at root!
print("Root:", splay.root.key)  # 20`,re=`class SplayNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    
    constructor() {
        this.root = null;
    }
    
    _rotateRight(x) {
        const y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }
    
    _rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }
    
    _splay(root, key) {
        if (!root || root.key === key) return root;
        
        if (key < root.key) {
            if (!root.left) return root;
            if (key < root.left.key) {
                root.left.left = this._splay(root.left.left, key);
                root = this._rotateRight(root);
            } else if (key > root.left.key) {
                root.left.right = this._splay(root.left.right, key);
                if (root.left.right) root.left = this._rotateLeft(root.left);
            }
            return !root.left ? root : this._rotateRight(root);
        } else {
            if (!root.right) return root;
            if (key < root.right.key) {
                root.right.left = this._splay(root.right.left, key);
                if (root.right.left) root.right = this._rotateRight(root.right);
            } else if (key > root.right.key) {
                root.right.right = this._splay(root.right.right, key);
                root = this._rotateLeft(root);
            }
            return !root.right ? root : this._rotateLeft(root);
        }
    }
    
    search(key) {
        this.root = this._splay(this.root, key);
        return this.root?.key === key ? this.root : null;
    }
    
    insert(key) {
        if (!this.root) { this.root = new SplayNode(key); return; }
        this.root = this._splay(this.root, key);
        if (this.root.key === key) return;
        
        const node = new SplayNode(key);
        if (key < this.root.key) {
            node.right = this.root;
            node.left = this.root.left;
            this.root.left = null;
        } else {
            node.left = this.root;
            node.right = this.root.right;
            this.root.right = null;
        }
        this.root = node;
    }
}

// Usage
const splay = new SplayTree();
[50, 30, 70, 20].forEach(v => splay.insert(v));
splay.search(20); // 20 moves to root`,ie=`class SplayNode {
    int key;
    SplayNode left, right;
    SplayNode(int key) { this.key = key; }
}

public class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    private SplayNode root;
    
    private SplayNode rotateRight(SplayNode x) {
        SplayNode y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }
    
    private SplayNode rotateLeft(SplayNode x) {
        SplayNode y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }
    
    private SplayNode splay(SplayNode root, int key) {
        if (root == null || root.key == key) return root;
        
        if (key < root.key) {
            if (root.left == null) return root;
            if (key < root.left.key) {
                root.left.left = splay(root.left.left, key);
                root = rotateRight(root);
            } else if (key > root.left.key) {
                root.left.right = splay(root.left.right, key);
                if (root.left.right != null)
                    root.left = rotateLeft(root.left);
            }
            return root.left == null ? root : rotateRight(root);
        } else {
            if (root.right == null) return root;
            if (key < root.right.key) {
                root.right.left = splay(root.right.left, key);
                if (root.right.left != null)
                    root.right = rotateRight(root.right);
            } else if (key > root.right.key) {
                root.right.right = splay(root.right.right, key);
                root = rotateLeft(root);
            }
            return root.right == null ? root : rotateLeft(root);
        }
    }
    
    public SplayNode search(int key) {
        root = splay(root, key);
        return (root != null && root.key == key) ? root : null;
    }
    
    public void insert(int key) {
        if (root == null) { root = new SplayNode(key); return; }
        root = splay(root, key);
        if (root.key == key) return;
        
        SplayNode node = new SplayNode(key);
        if (key < root.key) {
            node.right = root;
            node.left = root.left;
            root.left = null;
        } else {
            node.left = root;
            node.right = root.right;
            root.right = null;
        }
        root = node;
    }
}

// Usage
SplayTree st = new SplayTree();
for (int v : new int[]{50, 30, 70, 20}) st.insert(v);
st.search(20); // 20 is now root`,ae={python:te,javascript:re,java:ie,"c++":`struct SplayNode {
    int key;
    SplayNode *left, *right;
    SplayNode(int k) : key(k), left(nullptr), right(nullptr) {}
};

class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    SplayNode* root = nullptr;
    
    SplayNode* rotateRight(SplayNode* x) {
        SplayNode* y = x->left;
        x->left = y->right;
        y->right = x;
        return y;
    }
    
    SplayNode* rotateLeft(SplayNode* x) {
        SplayNode* y = x->right;
        x->right = y->left;
        y->left = x;
        return y;
    }
    
    SplayNode* splay(SplayNode* root, int key) {
        if (!root || root->key == key) return root;
        
        if (key < root->key) {
            if (!root->left) return root;
            if (key < root->left->key) {
                root->left->left = splay(root->left->left, key);
                root = rotateRight(root);
            } else if (key > root->left->key) {
                root->left->right = splay(root->left->right, key);
                if (root->left->right) root->left = rotateLeft(root->left);
            }
            return !root->left ? root : rotateRight(root);
        } else {
            if (!root->right) return root;
            if (key < root->right->key) {
                root->right->left = splay(root->right->left, key);
                if (root->right->left) root->right = rotateRight(root->right);
            } else if (key > root->right->key) {
                root->right->right = splay(root->right->right, key);
                root = rotateLeft(root);
            }
            return !root->right ? root : rotateLeft(root);
        }
    }
    
public:
    SplayNode* search(int key) {
        root = splay(root, key);
        return (root && root->key == key) ? root : nullptr;
    }
    
    void insert(int key) {
        if (!root) { root = new SplayNode(key); return; }
        root = splay(root, key);
        if (root->key == key) return;
        
        SplayNode* node = new SplayNode(key);
        if (key < root->key) {
            node->right = root; node->left = root->left; root->left = nullptr;
        } else {
            node->left = root; node->right = root->right; root->right = nullptr;
        }
        root = node;
    }
};

// Usage: SplayTree st; for(int v:{50,30,70,20}) st.insert(v);`,"c#":`public class SplayNode {
    public int Key { get; set; }
    public SplayNode Left { get; set; }
    public SplayNode Right { get; set; }
    public SplayNode(int key) { Key = key; }
}

public class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    private SplayNode root;
    
    private SplayNode RotateRight(SplayNode x) {
        var y = x.Left; x.Left = y.Right; y.Right = x; return y;
    }
    
    private SplayNode RotateLeft(SplayNode x) {
        var y = x.Right; x.Right = y.Left; y.Left = x; return y;
    }
    
    private SplayNode Splay(SplayNode root, int key) {
        if (root == null || root.Key == key) return root;
        
        if (key < root.Key) {
            if (root.Left == null) return root;
            if (key < root.Left.Key) {
                root.Left.Left = Splay(root.Left.Left, key);
                root = RotateRight(root);
            } else if (key > root.Left.Key) {
                root.Left.Right = Splay(root.Left.Right, key);
                if (root.Left.Right != null) root.Left = RotateLeft(root.Left);
            }
            return root.Left == null ? root : RotateRight(root);
        } else {
            if (root.Right == null) return root;
            if (key < root.Right.Key) {
                root.Right.Left = Splay(root.Right.Left, key);
                if (root.Right.Left != null) root.Right = RotateRight(root.Right);
            } else if (key > root.Right.Key) {
                root.Right.Right = Splay(root.Right.Right, key);
                root = RotateLeft(root);
            }
            return root.Right == null ? root : RotateLeft(root);
        }
    }
    
    public SplayNode Search(int key) {
        root = Splay(root, key);
        return root?.Key == key ? root : null;
    }
    
    public void Insert(int key) {
        if (root == null) { root = new SplayNode(key); return; }
        root = Splay(root, key);
        if (root.Key == key) return;
        
        var node = new SplayNode(key);
        if (key < root.Key) {
            node.Right = root; node.Left = root.Left; root.Left = null;
        } else {
            node.Left = root; node.Right = root.Right; root.Right = null;
        }
        root = node;
    }
}

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},oe=`class MinHeap:
    """Min Heap - Parent always smaller than children"""
    
    def __init__(self):
        self.heap = []
    
    def parent(self, i): return (i - 1) // 2
    def left(self, i): return 2 * i + 1
    def right(self, i): return 2 * i + 2
    
    def insert(self, key):
        """Insert and bubble up - O(log n)"""
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
    
    def _heapify_up(self, i):
        """Move element up to maintain heap property"""
        while i > 0 and self.heap[i] < self.heap[self.parent(i)]:
            p = self.parent(i)
            self.heap[i], self.heap[p] = self.heap[p], self.heap[i]
            i = p
    
    def extract_min(self):
        """Remove and return min - O(log n)"""
        if not self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move last to root
        self._heapify_down(0)
        return min_val
    
    def _heapify_down(self, i):
        """Move element down to maintain heap property"""
        smallest = i
        l, r = self.left(i), self.right(i)
        
        if l < len(self.heap) and self.heap[l] < self.heap[smallest]:
            smallest = l
        if r < len(self.heap) and self.heap[r] < self.heap[smallest]:
            smallest = r
        
        if smallest != i:
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            self._heapify_down(smallest)
    
    def peek(self):
        """Get min without removing - O(1)"""
        return self.heap[0] if self.heap else None
    
    def build_heap(self, arr):
        """Build heap from array - O(n)"""
        self.heap = arr[:]
        # Start from last non-leaf and heapify down
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

# Usage
heap = MinHeap()
for val in [5, 3, 8, 1, 2, 9]:
    heap.insert(val)

print("Min:", heap.peek())  # 1
print("Extract:", heap.extract_min())  # 1
print("New min:", heap.peek())  # 2`,se=`class MinHeap {
    // Min Heap - Parent always smaller than children
    
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
    
    insert(key) {
        // Insert and bubble up - O(log n)
        this.heap.push(key);
        this._heapifyUp(this.heap.length - 1);
    }
    
    _heapifyUp(i) {
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            const p = this.parent(i);
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    
    extractMin() {
        // Remove and return min - O(log n)
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return min;
    }
    
    _heapifyDown(i) {
        let smallest = i;
        const l = this.left(i), r = this.right(i);
        
        if (l < this.heap.length && this.heap[l] < this.heap[smallest])
            smallest = l;
        if (r < this.heap.length && this.heap[r] < this.heap[smallest])
            smallest = r;
        
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this._heapifyDown(smallest);
        }
    }
    
    peek() { return this.heap[0] ?? null; }
    
    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--)
            this._heapifyDown(i);
    }
}

// Usage
const heap = new MinHeap();
[5, 3, 8, 1, 2, 9].forEach(v => heap.insert(v));
console.log("Min:", heap.peek());  // 1
console.log("Extract:", heap.extractMin());  // 1`,le=`import java.util.*;

public class MinHeap {
    // Min Heap - Parent always smaller than children
    private List<Integer> heap = new ArrayList<>();
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    public void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.add(key);
        heapifyUp(heap.size() - 1);
    }
    
    private void heapifyUp(int i) {
        while (i > 0 && heap.get(i) < heap.get(parent(i))) {
            int p = parent(i);
            Collections.swap(heap, i, p);
            i = p;
        }
    }
    
    public Integer extractMin() {
        // Remove and return min - O(log n)
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return min;
    }
    
    private void heapifyDown(int i) {
        int smallest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap.get(l) < heap.get(smallest))
            smallest = l;
        if (r < heap.size() && heap.get(r) < heap.get(smallest))
            smallest = r;
        
        if (smallest != i) {
            Collections.swap(heap, i, smallest);
            heapifyDown(smallest);
        }
    }
    
    public Integer peek() {
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    public void buildHeap(int[] arr) {
        heap.clear();
        for (int v : arr) heap.add(v);
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
}

// Usage
MinHeap heap = new MinHeap();
for (int v : new int[]{5, 3, 8, 1, 2, 9}) heap.insert(v);
System.out.println("Min: " + heap.peek());  // 1`,de={python:oe,javascript:se,java:le,"c++":`#include <vector>
#include <algorithm>
using namespace std;

class MinHeap {
    // Min Heap - Parent always smaller than children
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    void heapifyUp(int i) {
        while (i > 0 && heap[i] < heap[parent(i)]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    void heapifyDown(int i) {
        int smallest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.size() && heap[r] < heap[smallest]) smallest = r;
        
        if (smallest != i) {
            swap(heap[i], heap[smallest]);
            heapifyDown(smallest);
        }
    }
    
public:
    void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.push_back(key);
        heapifyUp(heap.size() - 1);
    }
    
    int extractMin() {
        // Remove and return min - O(log n)
        if (heap.empty()) return -1;
        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) heapifyDown(0);
        return min;
    }
    
    int peek() { return heap.empty() ? -1 : heap[0]; }
    
    void buildHeap(vector<int>& arr) {
        // Build heap from array - O(n)
        heap = arr;
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
};

// Usage: MinHeap h; for(int v:{5,3,8,1,2}) h.insert(v);`,"c#":`using System.Collections.Generic;

public class MinHeap {
    // Min Heap - Parent always smaller than children
    private List<int> heap = new List<int>();
    
    int Parent(int i) => (i - 1) / 2;
    int Left(int i) => 2 * i + 1;
    int Right(int i) => 2 * i + 2;
    
    public void Insert(int key) {
        // Insert and bubble up - O(log n)
        heap.Add(key);
        HeapifyUp(heap.Count - 1);
    }
    
    private void HeapifyUp(int i) {
        while (i > 0 && heap[i] < heap[Parent(i)]) {
            int p = Parent(i);
            (heap[i], heap[p]) = (heap[p], heap[i]);
            i = p;
        }
    }
    
    public int? ExtractMin() {
        // Remove and return min - O(log n)
        if (heap.Count == 0) return null;
        int min = heap[0];
        heap[0] = heap[heap.Count - 1];
        heap.RemoveAt(heap.Count - 1);
        if (heap.Count > 0) HeapifyDown(0);
        return min;
    }
    
    private void HeapifyDown(int i) {
        int smallest = i;
        int l = Left(i), r = Right(i);
        
        if (l < heap.Count && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.Count && heap[r] < heap[smallest]) smallest = r;
        
        if (smallest != i) {
            (heap[i], heap[smallest]) = (heap[smallest], heap[i]);
            HeapifyDown(smallest);
        }
    }
    
    public int? Peek() => heap.Count > 0 ? heap[0] : null;
    
    public void BuildHeap(int[] arr) {
        heap = new List<int>(arr);
        for (int i = heap.Count / 2 - 1; i >= 0; i--)
            HeapifyDown(i);
    }
}

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},ue=`class MaxHeap:
    """Max Heap - Parent always greater than children"""
    
    def __init__(self):
        self.heap = []
    
    def parent(self, i): return (i - 1) // 2
    def left(self, i): return 2 * i + 1
    def right(self, i): return 2 * i + 2
    
    def insert(self, key):
        """Insert and bubble up - O(log n)"""
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
    
    def _heapify_up(self, i):
        """Move element up to maintain heap property"""
        while i > 0 and self.heap[i] > self.heap[self.parent(i)]:
            p = self.parent(i)
            self.heap[i], self.heap[p] = self.heap[p], self.heap[i]
            i = p
    
    def extract_max(self):
        """Remove and return max - O(log n)"""
        if not self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        
        max_val = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move last to root
        self._heapify_down(0)
        return max_val
    
    def _heapify_down(self, i):
        """Move element down to maintain heap property"""
        largest = i
        l, r = self.left(i), self.right(i)
        
        if l < len(self.heap) and self.heap[l] > self.heap[largest]:
            largest = l
        if r < len(self.heap) and self.heap[r] > self.heap[largest]:
            largest = r
        
        if largest != i:
            self.heap[i], self.heap[largest] = self.heap[largest], self.heap[i]
            self._heapify_down(largest)
    
    def peek(self):
        """Get max without removing - O(1)"""
        return self.heap[0] if self.heap else None
    
    def build_heap(self, arr):
        """Build heap from array - O(n)"""
        self.heap = arr[:]
        # Start from last non-leaf and heapify down
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

# Usage
heap = MaxHeap()
for val in [5, 3, 8, 1, 2, 9]:
    heap.insert(val)

print("Max:", heap.peek())  # 9
print("Extract:", heap.extract_max())  # 9
print("New max:", heap.peek())  # 8`,he=`class MaxHeap {
    // Max Heap - Parent always greater than children
    
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
    
    insert(key) {
        // Insert and bubble up - O(log n)
        this.heap.push(key);
        this._heapifyUp(this.heap.length - 1);
    }
    
    _heapifyUp(i) {
        while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
            const p = this.parent(i);
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    
    extractMax() {
        // Remove and return max - O(log n)
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return max;
    }
    
    _heapifyDown(i) {
        let largest = i;
        const l = this.left(i), r = this.right(i);
        
        if (l < this.heap.length && this.heap[l] > this.heap[largest])
            largest = l;
        if (r < this.heap.length && this.heap[r] > this.heap[largest])
            largest = r;
        
        if (largest !== i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this._heapifyDown(largest);
        }
    }
    
    peek() { return this.heap[0] ?? null; }
    
    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--)
            this._heapifyDown(i);
    }
}

// Usage
const heap = new MaxHeap();
[5, 3, 8, 1, 2, 9].forEach(v => heap.insert(v));
console.log("Max:", heap.peek());  // 9
console.log("Extract:", heap.extractMax());  // 9`,pe=`import java.util.*;

public class MaxHeap {
    // Max Heap - Parent always greater than children
    private List<Integer> heap = new ArrayList<>();
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    public void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.add(key);
        heapifyUp(heap.size() - 1);
    }
    
    private void heapifyUp(int i) {
        while (i > 0 && heap.get(i) > heap.get(parent(i))) {
            int p = parent(i);
            Collections.swap(heap, i, p);
            i = p;
        }
    }
    
    public Integer extractMax() {
        // Remove and return max - O(log n)
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int max = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return max;
    }
    
    private void heapifyDown(int i) {
        int largest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap.get(l) > heap.get(largest))
            largest = l;
        if (r < heap.size() && heap.get(r) > heap.get(largest))
            largest = r;
        
        if (largest != i) {
            Collections.swap(heap, i, largest);
            heapifyDown(largest);
        }
    }
    
    public Integer peek() {
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    public void buildHeap(int[] arr) {
        heap.clear();
        for (int v : arr) heap.add(v);
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
}

// Usage
MaxHeap heap = new MaxHeap();
for (int v : new int[]{5, 3, 8, 1, 2, 9}) heap.insert(v);
System.out.println("Max: " + heap.peek());  // 9`,ce={python:ue,javascript:he,java:pe,"c++":`#include <vector>
#include <algorithm>
using namespace std;

class MaxHeap {
    // Max Heap - Parent always greater than children
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    void heapifyUp(int i) {
        while (i > 0 && heap[i] > heap[parent(i)]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    void heapifyDown(int i) {
        int largest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap[l] > heap[largest]) largest = l;
        if (r < heap.size() && heap[r] > heap[largest]) largest = r;
        
        if (largest != i) {
            swap(heap[i], heap[largest]);
            heapifyDown(largest);
        }
    }
    
public:
    void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.push_back(key);
        heapifyUp(heap.size() - 1);
    }
    
    int extractMax() {
        // Remove and return max - O(log n)
        if (heap.empty()) return -1;
        int max = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) heapifyDown(0);
        return max;
    }
    
    int peek() { return heap.empty() ? -1 : heap[0]; }
    
    void buildHeap(vector<int>& arr) {
        // Build heap from array - O(n)
        heap = arr;
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
};

// Usage: MaxHeap h; for(int v:{5,3,8,1,9}) h.insert(v);`,"c#":`using System.Collections.Generic;

public class MaxHeap {
    // Max Heap - Parent always greater than children
    private List<int> heap = new List<int>();
    
    int Parent(int i) => (i - 1) / 2;
    int Left(int i) => 2 * i + 1;
    int Right(int i) => 2 * i + 2;
    
    public void Insert(int key) {
        // Insert and bubble up - O(log n)
        heap.Add(key);
        HeapifyUp(heap.Count - 1);
    }
    
    private void HeapifyUp(int i) {
        while (i > 0 && heap[i] > heap[Parent(i)]) {
            int p = Parent(i);
            (heap[i], heap[p]) = (heap[p], heap[i]);
            i = p;
        }
    }
    
    public int? ExtractMax() {
        // Remove and return max - O(log n)
        if (heap.Count == 0) return null;
        int max = heap[0];
        heap[0] = heap[heap.Count - 1];
        heap.RemoveAt(heap.Count - 1);
        if (heap.Count > 0) HeapifyDown(0);
        return max;
    }
    
    private void HeapifyDown(int i) {
        int largest = i;
        int l = Left(i), r = Right(i);
        
        if (l < heap.Count && heap[l] > heap[largest]) largest = l;
        if (r < heap.Count && heap[r] > heap[largest]) largest = r;
        
        if (largest != i) {
            (heap[i], heap[largest]) = (heap[largest], heap[i]);
            HeapifyDown(largest);
        }
    }
    
    public int? Peek() => heap.Count > 0 ? heap[0] : null;
    
    public void BuildHeap(int[] arr) {
        heap = new List<int>(arr);
        for (int i = heap.Count / 2 - 1; i >= 0; i--)
            HeapifyDown(i);
    }
}

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},fe=`from collections import defaultdict

class Graph:
    """Graph using adjacency list representation"""
    
    def __init__(self, directed=False):
        self.adj_list = defaultdict(list)
        self.directed = directed
    
    def add_vertex(self, vertex):
        """Add a vertex - O(1)"""
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []
    
    def add_edge(self, v1, v2, weight=1):
        """Add an edge - O(1)"""
        self.adj_list[v1].append((v2, weight))
        if not self.directed:
            self.adj_list[v2].append((v1, weight))
    
    def remove_edge(self, v1, v2):
        """Remove an edge - O(E)"""
        self.adj_list[v1] = [(v, w) for v, w in self.adj_list[v1] if v != v2]
        if not self.directed:
            self.adj_list[v2] = [(v, w) for v, w in self.adj_list[v2] if v != v1]
    
    def get_neighbors(self, vertex):
        """Get all neighbors - O(1)"""
        return self.adj_list[vertex]
    
    def get_vertices(self):
        """Get all vertices - O(1)"""
        return list(self.adj_list.keys())

# Usage
g = Graph()
for v in ['A', 'B', 'C', 'D']:
    g.add_vertex(v)
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,ye=`class Graph {
    constructor(directed = false) {
        this.adjList = new Map();
        this.directed = directed;
    }
    
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }
    
    addEdge(v1, v2, weight = 1) {
        this.adjList.get(v1).push({ node: v2, weight });
        if (!this.directed) {
            this.adjList.get(v2).push({ node: v1, weight });
        }
    }
    
    removeEdge(v1, v2) {
        this.adjList.set(v1, 
            this.adjList.get(v1).filter(e => e.node !== v2));
        if (!this.directed) {
            this.adjList.set(v2, 
                this.adjList.get(v2).filter(e => e.node !== v1));
        }
    }
    
    getNeighbors(vertex) {
        return this.adjList.get(vertex) || [];
    }
    
    getVertices() {
        return Array.from(this.adjList.keys());
    }
}

// Usage
const g = new Graph();
['A', 'B', 'C', 'D'].forEach(v => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
console.log(g.getNeighbors('A'));`,ge=`import java.util.*;

public class Graph {
    private Map<String, List<Edge>> adjList;
    private boolean directed;
    
    static class Edge {
        String to;
        int weight;
        Edge(String to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }
    
    public Graph(boolean directed) {
        this.adjList = new HashMap<>();
        this.directed = directed;
    }
    
    public void addVertex(String vertex) {
        adjList.putIfAbsent(vertex, new ArrayList<>());
    }
    
    public void addEdge(String v1, String v2, int weight) {
        adjList.get(v1).add(new Edge(v2, weight));
        if (!directed) {
            adjList.get(v2).add(new Edge(v1, weight));
        }
    }
    
    public void addEdge(String v1, String v2) {
        addEdge(v1, v2, 1);
    }
    
    public List<Edge> getNeighbors(String vertex) {
        return adjList.getOrDefault(vertex, new ArrayList<>());
    }
    
    public Set<String> getVertices() {
        return adjList.keySet();
    }
}

// Usage
Graph g = new Graph(false);
for (String v : new String[]{"A", "B", "C", "D"}) {
    g.addVertex(v);
}
g.addEdge("A", "B");
g.addEdge("A", "C");`,ve={python:fe,javascript:ye,java:ge,"c++":`#include <iostream>
#include <vector>
#include <unordered_map>
#include <list>

class Graph {
private:
    std::unordered_map<std::string, 
        std::list<std::pair<std::string, int>>> adjList;
    bool directed;

public:
    Graph(bool directed = false) : directed(directed) {}
    
    void addVertex(const std::string& vertex) {
        if (adjList.find(vertex) == adjList.end()) {
            adjList[vertex] = {};
        }
    }
    
    void addEdge(const std::string& v1, 
                 const std::string& v2, int weight = 1) {
        adjList[v1].push_back({v2, weight});
        if (!directed) {
            adjList[v2].push_back({v1, weight});
        }
    }
    
    auto& getNeighbors(const std::string& vertex) {
        return adjList[vertex];
    }
    
    std::vector<std::string> getVertices() {
        std::vector<std::string> vertices;
        for (const auto& pair : adjList) {
            vertices.push_back(pair.first);
        }
        return vertices;
    }
};

// Usage
int main() {
    Graph g(false);
    for (auto v : {"A", "B", "C", "D"}) {
        g.addVertex(v);
    }
    g.addEdge("A", "B");
    g.addEdge("A", "C");
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class Graph
{
    private Dictionary<string, List<(string To, int Weight)>> adjList;
    private bool directed;
    
    public Graph(bool directed = false)
    {
        this.adjList = new Dictionary<string, List<(string, int)>>();
        this.directed = directed;
    }
    
    public void AddVertex(string vertex)
    {
        if (!adjList.ContainsKey(vertex))
            adjList[vertex] = new List<(string, int)>();
    }
    
    public void AddEdge(string v1, string v2, int weight = 1)
    {
        adjList[v1].Add((v2, weight));
        if (!directed)
            adjList[v2].Add((v1, weight));
    }
    
    public List<(string To, int Weight)> GetNeighbors(string vertex)
    {
        return adjList.GetValueOrDefault(vertex, 
            new List<(string, int)>());
    }
    
    public IEnumerable<string> GetVertices()
    {
        return adjList.Keys;
    }
}

// Usage
var g = new Graph();
foreach (var v in new[] {"A", "B", "C", "D"})
    g.AddVertex(v);
g.AddEdge("A", "B");
g.AddEdge("A", "C");`},ke=`from collections import deque

def bfs(graph, start):
    """Breadth-First Search - O(V + E)"""
    visited = set()
    queue = deque([start])
    result = []
    
    while queue:
        vertex = queue.popleft()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add all unvisited neighbors to queue
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,we=`function bfs(graph, start) {
    // Breadth-First Search - O(V + E)
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    while (queue.length > 0) {
        const vertex = queue.shift();
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            
            // Add all unvisited neighbors to queue
            for (const neighbor of graph[vertex]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,xe=`import java.util.*;

public class BFS {
    public static List<String> bfs(Map<String, List<String>> graph, 
                                    String start) {
        // Breadth-First Search - O(V + E)
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        List<String> result = new ArrayList<>();
        
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            String vertex = queue.poll();
            
            if (!visited.contains(vertex)) {
                visited.add(vertex);
                result.add(vertex);
                
                // Add all unvisited neighbors to queue
                for (String neighbor : graph.get(vertex)) {
                    if (!visited.contains(neighbor)) {
                        queue.offer(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        graph.put("C", Arrays.asList("A", "F"));
        graph.put("D", Arrays.asList("B"));
        graph.put("E", Arrays.asList("B", "F"));
        graph.put("F", Arrays.asList("C", "E"));
        
        System.out.println(bfs(graph, "A"));
    }
}`,be={python:ke,javascript:we,java:xe,"c++":`#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>

std::vector<std::string> bfs(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& start) {
    
    // Breadth-First Search - O(V + E)
    std::unordered_set<std::string> visited;
    std::queue<std::string> queue;
    std::vector<std::string> result;
    
    queue.push(start);
    
    while (!queue.empty()) {
        std::string vertex = queue.front();
        queue.pop();
        
        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            result.push_back(vertex);
            
            // Add all unvisited neighbors to queue
            for (const auto& neighbor : graph[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

int main() {
    std::unordered_map<std::string, 
        std::vector<std::string>> graph;
    graph["A"] = {"B", "C"};
    graph["B"] = {"A", "D", "E"};
    graph["C"] = {"A", "F"};
    graph["D"] = {"B"};
    graph["E"] = {"B", "F"};
    graph["F"] = {"C", "E"};
    
    auto result = bfs(graph, "A");
    for (const auto& v : result) {
        std::cout << v << " ";
    }
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class BFS
{
    public static List<string> Search(
        Dictionary<string, List<string>> graph, 
        string start)
    {
        // Breadth-First Search - O(V + E)
        var visited = new HashSet<string>();
        var queue = new Queue<string>();
        var result = new List<string>();
        
        queue.Enqueue(start);
        
        while (queue.Count > 0)
        {
            var vertex = queue.Dequeue();
            
            if (!visited.Contains(vertex))
            {
                visited.Add(vertex);
                result.Add(vertex);
                
                // Add all unvisited neighbors to queue
                foreach (var neighbor in graph[vertex])
                {
                    if (!visited.Contains(neighbor))
                    {
                        queue.Enqueue(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void Main()
    {
        var graph = new Dictionary<string, List<string>>
        {
            ["A"] = new List<string> {"B", "C"},
            ["B"] = new List<string> {"A", "D", "E"},
            ["C"] = new List<string> {"A", "F"},
            ["D"] = new List<string> {"B"},
            ["E"] = new List<string> {"B", "F"},
            ["F"] = new List<string> {"C", "E"}
        };
        
        Console.WriteLine(string.Join(", ", Search(graph, "A")));
    }
}`},me=`def dfs(graph, start):
    """Depth-First Search (Iterative) - O(V + E)"""
    visited = set()
    stack = [start]
    result = []
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add neighbors in reverse for consistent order
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return result

def dfs_recursive(graph, start, visited=None):
    """Depth-First Search (Recursive) - O(V + E)"""
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            result.extend(dfs_recursive(graph, neighbor, visited))
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,Le=`function dfs(graph, start) {
    // Depth-First Search (Iterative) - O(V + E)
    const visited = new Set();
    const stack = [start];
    const result = [];
    
    while (stack.length > 0) {
        const vertex = stack.pop();
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            
            // Add neighbors in reverse for consistent order
            const neighbors = graph[vertex].slice().reverse();
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

function dfsRecursive(graph, start, visited = new Set()) {
    // Depth-First Search (Recursive) - O(V + E)
    visited.add(start);
    const result = [start];
    
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            result.push(...dfsRecursive(graph, neighbor, visited));
        }
    }
    
    return result;
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(dfs(graph, 'A'));`,Ne=`import java.util.*;

public class DFS {
    public static List<String> dfs(Map<String, List<String>> graph, 
                                    String start) {
        // Depth-First Search (Iterative) - O(V + E)
        Set<String> visited = new HashSet<>();
        Stack<String> stack = new Stack<>();
        List<String> result = new ArrayList<>();
        
        stack.push(start);
        
        while (!stack.isEmpty()) {
            String vertex = stack.pop();
            
            if (!visited.contains(vertex)) {
                visited.add(vertex);
                result.add(vertex);
                
                // Add neighbors in reverse
                List<String> neighbors = graph.get(vertex);
                for (int i = neighbors.size() - 1; i >= 0; i--) {
                    String neighbor = neighbors.get(i);
                    if (!visited.contains(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void dfsRecursive(Map<String, List<String>> graph,
                                     String vertex, 
                                     Set<String> visited,
                                     List<String> result) {
        visited.add(vertex);
        result.add(vertex);
        
        for (String neighbor : graph.get(vertex)) {
            if (!visited.contains(neighbor)) {
                dfsRecursive(graph, neighbor, visited, result);
            }
        }
    }
    
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        
        System.out.println(dfs(graph, "A"));
    }
}`,Te={python:me,javascript:Le,java:Ne,"c++":`#include <iostream>
#include <vector>
#include <stack>
#include <unordered_set>
#include <unordered_map>
#include <algorithm>

std::vector<std::string> dfs(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& start) {
    
    // Depth-First Search (Iterative) - O(V + E)
    std::unordered_set<std::string> visited;
    std::stack<std::string> stack;
    std::vector<std::string> result;
    
    stack.push(start);
    
    while (!stack.empty()) {
        std::string vertex = stack.top();
        stack.pop();
        
        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            result.push_back(vertex);
            
            // Add neighbors in reverse order
            auto& neighbors = graph[vertex];
            for (auto it = neighbors.rbegin(); 
                 it != neighbors.rend(); ++it) {
                if (visited.find(*it) == visited.end()) {
                    stack.push(*it);
                }
            }
        }
    }
    
    return result;
}

void dfsRecursive(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& vertex,
    std::unordered_set<std::string>& visited,
    std::vector<std::string>& result) {
    
    visited.insert(vertex);
    result.push_back(vertex);
    
    for (const auto& neighbor : graph[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
            dfsRecursive(graph, neighbor, visited, result);
        }
    }
}

int main() {
    std::unordered_map<std::string, 
        std::vector<std::string>> graph;
    graph["A"] = {"B", "C"};
    graph["B"] = {"A", "D", "E"};
    
    auto result = dfs(graph, "A");
    for (const auto& v : result) {
        std::cout << v << " ";
    }
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class DFS
{
    public static List<string> Search(
        Dictionary<string, List<string>> graph, 
        string start)
    {
        // Depth-First Search (Iterative) - O(V + E)
        var visited = new HashSet<string>();
        var stack = new Stack<string>();
        var result = new List<string>();
        
        stack.Push(start);
        
        while (stack.Count > 0)
        {
            var vertex = stack.Pop();
            
            if (!visited.Contains(vertex))
            {
                visited.Add(vertex);
                result.Add(vertex);
                
                // Add neighbors in reverse order
                var neighbors = graph[vertex];
                for (int i = neighbors.Count - 1; i >= 0; i--)
                {
                    if (!visited.Contains(neighbors[i]))
                    {
                        stack.Push(neighbors[i]);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void SearchRecursive(
        Dictionary<string, List<string>> graph,
        string vertex,
        HashSet<string> visited,
        List<string> result)
    {
        visited.Add(vertex);
        result.Add(vertex);
        
        foreach (var neighbor in graph[vertex])
        {
            if (!visited.Contains(neighbor))
            {
                SearchRecursive(graph, neighbor, visited, result);
            }
        }
    }
    
    public static void Main()
    {
        var graph = new Dictionary<string, List<string>>
        {
            ["A"] = new List<string> {"B", "C"},
            ["B"] = new List<string> {"A", "D", "E"}
        };
        
        Console.WriteLine(string.Join(", ", Search(graph, "A")));
    }
}`},_e=`import random

class TreapNode:
    """Node with key (BST) and priority (heap)"""
    def __init__(self, key, priority=None):
        self.key = key
        self.priority = priority or random.randint(1, 100)
        self.left = None
        self.right = None

class Treap:
    """Treap = BST on keys + Max-Heap on priorities"""
    
    def __init__(self):
        self.root = None
    
    def _rotate_right(self, node):
        new_root = node.left
        node.left = new_root.right
        new_root.right = node
        return new_root
    
    def _rotate_left(self, node):
        new_root = node.right
        node.right = new_root.left
        new_root.left = node
        return new_root
    
    def insert(self, key):
        """Insert key with random priority - O(log n) expected"""
        self.root = self._insert(self.root, key)
    
    def _insert(self, node, key):
        if not node:
            return TreapNode(key)
        if key < node.key:
            node.left = self._insert(node.left, key)
            if node.left.priority > node.priority:
                node = self._rotate_right(node)
        elif key > node.key:
            node.right = self._insert(node.right, key)
            if node.right.priority > node.priority:
                node = self._rotate_left(node)
        return node
    
    def delete(self, key):
        """Delete key by rotating it down - O(log n) expected"""
        self.root = self._delete(self.root, key)
    
    def _delete(self, node, key):
        if not node:
            return None
        if key < node.key:
            node.left = self._delete(node.left, key)
        elif key > node.key:
            node.right = self._delete(node.right, key)
        else:
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            elif node.left.priority > node.right.priority:
                node = self._rotate_right(node)
                node.right = self._delete(node.right, key)
            else:
                node = self._rotate_left(node)
                node.left = self._delete(node.left, key)
        return node
    
    def search(self, key):
        """BST search - O(log n) expected"""
        node = self.root
        while node:
            if key == node.key:
                return True
            elif key < node.key:
                node = node.left
            else:
                node = node.right
        return False
    
    def inorder(self):
        """Inorder traversal - returns sorted keys"""
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.key)
            self._inorder(node.right, result)

# Usage
treap = Treap()
for val in [50, 30, 70, 20, 40, 60, 80]:
    treap.insert(val)

print("Inorder (sorted):", treap.inorder())  # [20, 30, 40, 50, 60, 70, 80]
print("Search 40:", treap.search(40))  # True
treap.delete(30)
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,Se=`class TreapNode {
    constructor(key, priority = null) {
        this.key = key;
        this.priority = priority ?? Math.floor(Math.random() * 100) + 1;
        this.left = null;
        this.right = null;
    }
}

class Treap {
    // Treap = BST on keys + Max-Heap on priorities
    
    constructor() {
        this.root = null;
    }
    
    _rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    
    _rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    
    insert(key) {
        // Insert key with random priority - O(log n) expected
        this.root = this._insert(this.root, key);
    }
    
    _insert(node, key) {
        if (!node) return new TreapNode(key);
        
        if (key < node.key) {
            node.left = this._insert(node.left, key);
            if (node.left.priority > node.priority) {
                node = this._rotateRight(node);
            }
        } else if (key > node.key) {
            node.right = this._insert(node.right, key);
            if (node.right.priority > node.priority) {
                node = this._rotateLeft(node);
            }
        }
        return node;
    }
    
    delete(key) {
        // Delete key by rotating it down - O(log n) expected
        this.root = this._delete(this.root, key);
    }
    
    _delete(node, key) {
        if (!node) return null;
        
        if (key < node.key) {
            node.left = this._delete(node.left, key);
        } else if (key > node.key) {
            node.right = this._delete(node.right, key);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            if (node.left.priority > node.right.priority) {
                node = this._rotateRight(node);
                node.right = this._delete(node.right, key);
            } else {
                node = this._rotateLeft(node);
                node.left = this._delete(node.left, key);
            }
        }
        return node;
    }
    
    search(key) {
        // BST search - O(log n) expected
        let node = this.root;
        while (node) {
            if (key === node.key) return true;
            node = key < node.key ? node.left : node.right;
        }
        return false;
    }
    
    inorder() {
        // Returns sorted keys
        const result = [];
        this._inorder(this.root, result);
        return result;
    }
    
    _inorder(node, result) {
        if (node) {
            this._inorder(node.left, result);
            result.push(node.key);
            this._inorder(node.right, result);
        }
    }
}

// Usage
const treap = new Treap();
[50, 30, 70, 20, 40, 60, 80].forEach(v => treap.insert(v));

console.log("Inorder (sorted):", treap.inorder());  // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", treap.search(40));  // true
treap.delete(30);
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Re=`import java.util.*;

class TreapNode {
    int key, priority;
    TreapNode left, right;
    
    TreapNode(int key) {
        this.key = key;
        this.priority = new Random().nextInt(100) + 1;
        this.left = null;
        this.right = null;
    }
}

public class Treap {
    // Treap = BST on keys + Max-Heap on priorities
    private TreapNode root;
    
    public Treap() { root = null; }
    
    private TreapNode rotateRight(TreapNode node) {
        TreapNode newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    
    private TreapNode rotateLeft(TreapNode node) {
        TreapNode newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    
    public void insert(int key) {
        // Insert with random priority - O(log n) expected
        root = insert(root, key);
    }
    
    private TreapNode insert(TreapNode node, int key) {
        if (node == null) return new TreapNode(key);
        
        if (key < node.key) {
            node.left = insert(node.left, key);
            if (node.left.priority > node.priority)
                node = rotateRight(node);
        } else if (key > node.key) {
            node.right = insert(node.right, key);
            if (node.right.priority > node.priority)
                node = rotateLeft(node);
        }
        return node;
    }
    
    public void delete(int key) {
        // Delete by rotating down - O(log n) expected
        root = delete(root, key);
    }
    
    private TreapNode delete(TreapNode node, int key) {
        if (node == null) return null;
        
        if (key < node.key) {
            node.left = delete(node.left, key);
        } else if (key > node.key) {
            node.right = delete(node.right, key);
        } else {
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            if (node.left.priority > node.right.priority) {
                node = rotateRight(node);
                node.right = delete(node.right, key);
            } else {
                node = rotateLeft(node);
                node.left = delete(node.left, key);
            }
        }
        return node;
    }
    
    public boolean search(int key) {
        // BST search - O(log n) expected
        TreapNode node = root;
        while (node != null) {
            if (key == node.key) return true;
            node = key < node.key ? node.left : node.right;
        }
        return false;
    }
    
    public List<Integer> inorder() {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    
    private void inorder(TreapNode node, List<Integer> result) {
        if (node != null) {
            inorder(node.left, result);
            result.add(node.key);
            inorder(node.right, result);
        }
    }
}

// Usage
Treap treap = new Treap();
for (int v : new int[]{50, 30, 70, 20, 40, 60, 80}) treap.insert(v);

System.out.println("Inorder: " + treap.inorder());  // [20, 30, 40, 50, 60, 70, 80]
System.out.println("Search 40: " + treap.search(40));  // true
treap.delete(30);
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Ae={python:_e,javascript:Se,java:Re,"c++":`#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
using namespace std;

struct TreapNode {
    int key, priority;
    TreapNode *left, *right;
    TreapNode(int k) : key(k), priority(rand() % 100 + 1),
                       left(nullptr), right(nullptr) {}
};

class Treap {
    // Treap = BST on keys + Max-Heap on priorities
private:
    TreapNode* root;
    
    TreapNode* rotateRight(TreapNode* node) {
        TreapNode* newRoot = node->left;
        node->left = newRoot->right;
        newRoot->right = node;
        return newRoot;
    }
    
    TreapNode* rotateLeft(TreapNode* node) {
        TreapNode* newRoot = node->right;
        node->right = newRoot->left;
        newRoot->left = node;
        return newRoot;
    }
    
    TreapNode* insert(TreapNode* node, int key) {
        if (!node) return new TreapNode(key);
        
        if (key < node->key) {
            node->left = insert(node->left, key);
            if (node->left->priority > node->priority)
                node = rotateRight(node);
        } else if (key > node->key) {
            node->right = insert(node->right, key);
            if (node->right->priority > node->priority)
                node = rotateLeft(node);
        }
        return node;
    }
    
    TreapNode* erase(TreapNode* node, int key) {
        if (!node) return nullptr;
        
        if (key < node->key) {
            node->left = erase(node->left, key);
        } else if (key > node->key) {
            node->right = erase(node->right, key);
        } else {
            if (!node->left) return node->right;
            if (!node->right) return node->left;
            if (node->left->priority > node->right->priority) {
                node = rotateRight(node);
                node->right = erase(node->right, key);
            } else {
                node = rotateLeft(node);
                node->left = erase(node->left, key);
            }
        }
        return node;
    }
    
    void inorder(TreapNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->key);
            inorder(node->right, result);
        }
    }

public:
    Treap() : root(nullptr) { srand(time(0)); }
    
    void insert(int key) {
        // Insert with random priority - O(log n) expected
        root = insert(root, key);
    }
    
    void remove(int key) {
        // Delete by rotating down - O(log n) expected
        root = erase(root, key);
    }
    
    bool search(int key) {
        // BST search - O(log n) expected
        TreapNode* node = root;
        while (node) {
            if (key == node->key) return true;
            node = key < node->key ? node->left : node->right;
        }
        return false;
    }
    
    vector<int> inorder() {
        vector<int> result;
        inorder(root, result);
        return result;
    }
};

// Usage
int main() {
    Treap treap;
    for (int v : {50, 30, 70, 20, 40, 60, 80}) treap.insert(v);
    
    // Inorder (sorted): [20, 30, 40, 50, 60, 70, 80]
    // Search 40: true
    treap.remove(30);
    // After delete: [20, 40, 50, 60, 70, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreapNode
{
    public int Key { get; set; }
    public int Priority { get; set; }
    public TreapNode Left { get; set; }
    public TreapNode Right { get; set; }
    
    private static readonly Random Rng = new Random();
    
    public TreapNode(int key)
    {
        Key = key;
        Priority = Rng.Next(1, 101);
        Left = null;
        Right = null;
    }
}

public class Treap
{
    // Treap = BST on keys + Max-Heap on priorities
    private TreapNode root;
    
    public Treap() { root = null; }
    
    private TreapNode RotateRight(TreapNode node)
    {
        var newRoot = node.Left;
        node.Left = newRoot.Right;
        newRoot.Right = node;
        return newRoot;
    }
    
    private TreapNode RotateLeft(TreapNode node)
    {
        var newRoot = node.Right;
        node.Right = newRoot.Left;
        newRoot.Left = node;
        return newRoot;
    }
    
    public void Insert(int key)
    {
        // Insert with random priority - O(log n) expected
        root = Insert(root, key);
    }
    
    private TreapNode Insert(TreapNode node, int key)
    {
        if (node == null) return new TreapNode(key);
        
        if (key < node.Key)
        {
            node.Left = Insert(node.Left, key);
            if (node.Left.Priority > node.Priority)
                node = RotateRight(node);
        }
        else if (key > node.Key)
        {
            node.Right = Insert(node.Right, key);
            if (node.Right.Priority > node.Priority)
                node = RotateLeft(node);
        }
        return node;
    }
    
    public void Delete(int key)
    {
        // Delete by rotating down - O(log n) expected
        root = Delete(root, key);
    }
    
    private TreapNode Delete(TreapNode node, int key)
    {
        if (node == null) return null;
        
        if (key < node.Key)
            node.Left = Delete(node.Left, key);
        else if (key > node.Key)
            node.Right = Delete(node.Right, key);
        else
        {
            if (node.Left == null) return node.Right;
            if (node.Right == null) return node.Left;
            if (node.Left.Priority > node.Right.Priority)
            {
                node = RotateRight(node);
                node.Right = Delete(node.Right, key);
            }
            else
            {
                node = RotateLeft(node);
                node.Left = Delete(node.Left, key);
            }
        }
        return node;
    }
    
    public bool Search(int key)
    {
        // BST search - O(log n) expected
        var node = root;
        while (node != null)
        {
            if (key == node.Key) return true;
            node = key < node.Key ? node.Left : node.Right;
        }
        return false;
    }
    
    public List<int> Inorder()
    {
        var result = new List<int>();
        Inorder(root, result);
        return result;
    }
    
    private void Inorder(TreapNode node, List<int> result)
    {
        if (node != null)
        {
            Inorder(node.Left, result);
            result.Add(node.Key);
            Inorder(node.Right, result);
        }
    }
}

// Usage
var treap = new Treap();
foreach (var v in new[] {50, 30, 70, 20, 40, 60, 80}) treap.Insert(v);

Console.WriteLine("Inorder: " + string.Join(", ", treap.Inorder()));
Console.WriteLine("Search 40: " + treap.Search(40));
treap.Delete(30);
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},s={stack:L,queue:S,linkedlist:I,skiplist:C,binarytree:B,hashtable:F,hashtableChaining:G,bst:J,avl:ne,splay:ae,minheap:de,maxheap:ce,graph:ve,bfs:be,dfs:Te,treap:Ae};function ze({dataStructure:r}){var p;const[i,l]=o.useState("python"),[y,d]=o.useState(!1),u=["python","javascript","java","c++","c#"],t=u.filter(e=>{var a;return(a=s[r])==null?void 0:a[e]}),g=t.length>0?t:u,h=((p=s[r])==null?void 0:p[i])||"Code not available for this data structure";o.useEffect(()=>{var e;!((e=s[r])!=null&&e[i])&&t.length>0&&l(t[0])},[r,i,t]);const v=e=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[e]||e,k=()=>{navigator.clipboard.writeText(h),d(!0),setTimeout(()=>d(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(c,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:g.map(e=>n.jsxs("button",{className:`tab-btn ${i===e?"active":""}`,onClick:()=>l(e),children:[n.jsx(c,{}),v(e)]},e))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:k,children:[n.jsx(w,{})," ",y?"Copied!":"Copy"]}),n.jsx("code",{children:h})]})})})]})}export{ze as C,Oe as H};

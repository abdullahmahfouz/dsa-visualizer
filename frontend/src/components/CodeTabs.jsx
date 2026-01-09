import React, { useState, useEffect } from 'react';
import { FileCode, Copy } from 'lucide-react';

function CodeTabs({ dataStructure }) {
  const [activeLang, setActiveLang] = useState('python');

  const codeSnippets = {
    stack: {
      python: `class Stack:
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
print(stack.peek())  # 20`,
      javascript: `class Stack {
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
console.log(stack.pop()); // 20`,
    },
    binarytree: {
      python: `class TreeNode:
    """Node in a binary tree"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    """Binary Search Tree Implementation"""
    
    def __init__(self):
        self.root = None
        self.size = 0
    
    def insert(self, data):
        """Insert a value into the BST - O(log n) average, O(n) worst"""
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
    
    def inorder_traversal(self):
        """Left -> Root -> Right - O(n)"""
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.data)
            self._inorder(node.right, result)
    
    def preorder_traversal(self):
        """Root -> Left -> Right - O(n)"""
        result = []
        self._preorder(self.root, result)
        return result
    
    def _preorder(self, node, result):
        if node:
            result.append(node.data)
            self._preorder(node.left, result)
            self._preorder(node.right, result)
    
    def postorder_traversal(self):
        """Left -> Right -> Root - O(n)"""
        result = []
        self._postorder(self.root, result)
        return result
    
    def _postorder(self, node, result):
        if node:
            self._postorder(node.left, result)
            self._postorder(node.right, result)
            result.append(node.data)
    
    def levelorder_traversal(self):
        """Level by level (BFS) - O(n)"""
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
tree.insert(50)
tree.insert(30)
tree.insert(70)
tree.insert(20)
tree.insert(40)

print(tree.inorder_traversal())    # [20, 30, 40, 50, 70]
print(tree.preorder_traversal())   # [50, 30, 20, 40, 70]
print(tree.levelorder_traversal()) # [50, 30, 70, 20, 40]`,
      javascript: `class TreeNode {
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
        const newNode = new TreeNode(data);
        
        if (!this.root) {
            this.root = newNode;
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
    
    inorderTraversal() {
        // Left -> Root -> Right
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
        // Root -> Left -> Right
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
        // Left -> Right -> Root
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
        // Level by level (BFS)
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
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);

console.log(tree.inorderTraversal());    // [20, 30, 40, 50, 70]
console.log(tree.preorderTraversal());   // [50, 30, 20, 40, 70]
console.log(tree.levelOrderTraversal()); // [50, 30, 70, 20, 40]`,
      java: `import java.util.*;

class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    private TreeNode root;
    private int size;
    
    public BinaryTree() {
        this.root = null;
        this.size = 0;
    }
    
    public void insert(int data) {
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
    
    public List<Integer> inorderTraversal() {
        // Left -> Root -> Right
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
        // Root -> Left -> Right
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
        // Left -> Right -> Root
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
        // Level by level (BFS)
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
public class Main {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.insert(50);
        tree.insert(30);
        tree.insert(70);
        tree.insert(20);
        tree.insert(40);
        
        System.out.println(tree.inorderTraversal());
        // Output: [20, 30, 40, 50, 70]
        
        System.out.println(tree.preorderTraversal());
        // Output: [50, 30, 20, 40, 70]
        
        System.out.println(tree.levelOrderTraversal());
        // Output: [50, 30, 70, 20, 40]
    }
}`,
      csharp: `using System;
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
    
    public List<int> InorderTraversal()
    {
        // Left -> Root -> Right
        List<int> result = new List<int>();
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
        // Root -> Left -> Right
        List<int> result = new List<int>();
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
        // Left -> Right -> Root
        List<int> result = new List<int>();
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
        // Level by level (BFS)
        if (root == null) return new List<int>();
        
        List<int> result = new List<int>();
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        
        while (queue.Count > 0)
        {
            TreeNode node = queue.Dequeue();
            result.Add(node.Data);
            
            if (node.Left != null) queue.Enqueue(node.Left);
            if (node.Right != null) queue.Enqueue(node.Right);
        }
        
        return result;
    }
}

// Usage
class Program
{
    static void Main()
    {
        BinaryTree tree = new BinaryTree();
        tree.Insert(50);
        tree.Insert(30);
        tree.Insert(70);
        tree.Insert(20);
        tree.Insert(40);
        
        Console.WriteLine(string.Join(", ", tree.InorderTraversal()));
        // Output: 20, 30, 40, 50, 70
        Console.WriteLine(string.Join(", ", tree.PreorderTraversal()));
        // Output: 50, 30, 20, 40, 70
        Console.WriteLine(string.Join(", ", tree.LevelOrderTraversal()));
        // Output: 50, 30, 70, 20, 40
    }
}`,
      cpp: `#include <iostream>
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
            if (node->left == nullptr) {
                node->left = new TreeNode(data);
            } else {
                insertRecursive(node->left, data);
            }
        } else {
            if (node->right == nullptr) {
                node->right = new TreeNode(data);
            } else {
                insertRecursive(node->right, data);
            }
        }
    }
    
    void inorder(TreeNode* node, vector<int>& result) {
        if (node != nullptr) {
            inorder(node->left, result);
            result.push_back(node->data);
            inorder(node->right, result);
        }
    }
    
    void preorder(TreeNode* node, vector<int>& result) {
        if (node != nullptr) {
            result.push_back(node->data);
            preorder(node->left, result);
            preorder(node->right, result);
        }
    }
    
    void postorder(TreeNode* node, vector<int>& result) {
        if (node != nullptr) {
            postorder(node->left, result);
            postorder(node->right, result);
            result.push_back(node->data);
        }
    }
    
public:
    BinaryTree() : root(nullptr), size(0) {}
    
    void insert(int data) {
        if (root == nullptr) {
            root = new TreeNode(data);
            size++;
            return;
        }
        
        insertRecursive(root, data);
        size++;
    }
    
    vector<int> inorderTraversal() {
        // Left -> Root -> Right
        vector<int> result;
        inorder(root, result);
        return result;
    }
    
    vector<int> preorderTraversal() {
        // Root -> Left -> Right
        vector<int> result;
        preorder(root, result);
        return result;
    }
    
    vector<int> postorderTraversal() {
        // Left -> Right -> Root
        vector<int> result;
        postorder(root, result);
        return result;
    }
    
    vector<int> levelOrderTraversal() {
        // Level by level (BFS)
        vector<int> result;
        if (root == nullptr) return result;
        
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            result.push_back(node->data);
            
            if (node->left != nullptr) q.push(node->left);
            if (node->right != nullptr) q.push(node->right);
        }
        
        return result;
    }
};

// Usage
int main() {
    BinaryTree tree;
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    
    vector<int> inorder = tree.inorderTraversal();
    // Output: [20, 30, 40, 50, 70]
    
    vector<int> preorder = tree.preorderTraversal();
    // Output: [50, 30, 20, 40, 70]
    
    vector<int> levelorder = tree.levelOrderTraversal();
    // Output: [50, 30, 70, 20, 40]
    
    return 0;
}`,
    },
    // Add more data structures as needed
  };

  const allLanguages = ['python', 'javascript', 'java', 'csharp', 'cpp', 'c'];
  const availableLanguages = allLanguages.filter(lang => 
    codeSnippets[dataStructure]?.[lang]
  );
  const languages = availableLanguages.length > 0 ? availableLanguages : allLanguages;
  const code = codeSnippets[dataStructure]?.[activeLang] || 'Code not available';

  // Auto-switch to first available language if current one isn't available
  useEffect(() => {
    if (!codeSnippets[dataStructure]?.[activeLang] && availableLanguages.length > 0) {
      setActiveLang(availableLanguages[0]);
    }
  }, [dataStructure, activeLang, availableLanguages]);

  const getLanguageName = (lang) => {
    const names = {
      python: 'Python',
      javascript: 'JavaScript',
      java: 'Java',
      csharp: 'C#',
      cpp: 'C++',
      c: 'C'
    };
    return names[lang] || lang;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  return (
    <div className="code-section">
      <h2><FileCode /> Implementation</h2>
      
      <div className="code-tabs">
        {languages.map(lang => (
          <button
            key={lang}
            className={`tab-btn ${activeLang === lang ? 'active' : ''}`}
            onClick={() => setActiveLang(lang)}
          >
            <FileCode />
            {getLanguageName(lang)}
          </button>
        ))}
      </div>

      <div className="code-panels">
        <div className={`code-panel ${activeLang === activeLang ? 'active' : ''}`}>
          <pre>
            <button className="copy-btn" onClick={copyToClipboard}>
              <Copy /> Copy
            </button>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeTabs;


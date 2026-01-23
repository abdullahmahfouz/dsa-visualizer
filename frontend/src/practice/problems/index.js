// Problem definitions for practice section
// Organized like NeetCode roadmap with categories and visual progression

export const roadmap = [
  {
    id: 'arrays-hashing',
    title: 'Arrays & Hashing',
    icon: 'grid',
    color: '#10b981',
    description: 'Foundation of DSA - array manipulation and hash maps',
    problems: ['two-sum', 'valid-anagram', 'contains-duplicate']
  },
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    icon: 'pointer',
    color: '#3b82f6',
    description: 'Efficient array traversal techniques',
    problems: ['valid-palindrome', 'two-sum-sorted']
  },
  {
    id: 'stack',
    title: 'Stack',
    icon: 'layers',
    color: '#8b5cf6',
    description: 'LIFO data structure problems',
    problems: ['valid-parentheses', 'min-stack']
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    icon: 'search',
    color: '#f59e0b',
    description: 'Divide and conquer search technique',
    problems: ['binary-search', 'search-rotated-array']
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    icon: 'link',
    color: '#ec4899',
    description: 'Pointer-based data structures',
    problems: ['reverse-linked-list', 'merge-two-lists', 'linked-list-cycle']
  },
  {
    id: 'trees',
    title: 'Trees',
    icon: 'tree',
    color: '#14b8a6',
    description: 'Hierarchical data structures',
    problems: ['invert-tree', 'max-depth-tree', 'same-tree']
  },
  {
    id: 'graphs',
    title: 'Graphs',
    icon: 'network',
    color: '#6366f1',
    description: 'Graph traversal and algorithms',
    problems: ['bfs-traversal', 'dfs-traversal', 'number-of-islands']
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    icon: 'puzzle',
    color: '#ef4444',
    description: 'Optimization through memoization',
    problems: ['climbing-stairs', 'house-robber']
  },
  {
    id: 'sorting',
    title: 'Sorting',
    icon: 'sort',
    color: '#84cc16',
    description: 'Classic sorting algorithms',
    problems: ['merge-sort', 'quick-sort']
  }
];

export const problems = {
  // Arrays & Hashing
  'two-sum': {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      'Only one valid answer exists.'
    ],
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0, 1]' },
      { input: '[3,2,4], 6', expected: '[1, 2]' },
      { input: '[3,3], 6', expected: '[0, 1]' }
    ],
    starterCode: {
      python: `def solution(nums, target):
    # Use a hash map for O(n) time complexity
    pass

# Test
print(solution([2,7,11,15], 9))`
    },
    hints: [
      'A brute force approach is O(n²). Can you do better with a hash map?',
      'For each number, check if (target - number) exists in the hash map.',
      'Store each number and its index as you iterate.'
    ]
  },

  'valid-anagram': {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.

An anagram is a word formed by rearranging the letters of another word.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true', explanation: 'Both contain the same letters.' },
      { input: 's = "rat", t = "car"', output: 'false', explanation: 'Different letters.' }
    ],
    constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters.'],
    testCases: [
      { input: '"anagram", "nagaram"', expected: 'True' },
      { input: '"rat", "car"', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(s, t):
    # Count character frequencies
    pass

print(solution("anagram", "nagaram"))`
    },
    hints: ['Compare character frequencies in both strings.', 'You can use a hash map or sort both strings.']
  },

  'contains-duplicate': {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    description: `Given an integer array \`nums\`, return \`true\` if any value appears at least twice in the array, and return \`false\` if every element is distinct.`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true', explanation: '1 appears twice.' },
      { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'All elements are distinct.' }
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    testCases: [
      { input: '[1,2,3,1]', expected: 'True' },
      { input: '[1,2,3,4]', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(nums):
    # Use a set for O(n) lookup
    pass

print(solution([1,2,3,1]))`
    },
    hints: ['A set only stores unique values.', 'Compare the length of the set vs the original array.']
  },

  // Two Pointers
  'valid-palindrome': {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    category: 'Two Pointers',
    description: `Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.

Consider only alphanumeric characters and ignore cases.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' }
    ],
    constraints: ['1 <= s.length <= 2 * 10^5', 's consists only of printable ASCII characters.'],
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'True' },
      { input: '"race a car"', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(s):
    # Use two pointers from both ends
    pass

print(solution("A man, a plan, a canal: Panama"))`
    },
    hints: ['Clean the string first (remove non-alphanumeric, lowercase).', 'Compare characters from start and end moving inward.']
  },

  'two-sum-sorted': {
    id: 'two-sum-sorted',
    title: 'Two Sum II - Sorted Array',
    difficulty: 'Medium',
    category: 'Two Pointers',
    description: `Given a 1-indexed sorted array, find two numbers that add up to a target.

Return the indices of the two numbers (1-indexed).`,
    examples: [
      { input: 'numbers = [2,7,11,15], target = 9', output: '[1,2]', explanation: '2 + 7 = 9' }
    ],
    constraints: ['2 <= numbers.length <= 3 * 10^4', 'numbers is sorted in non-decreasing order.'],
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[1, 2]' },
      { input: '[2,3,4], 6', expected: '[1, 3]' }
    ],
    starterCode: {
      python: `def solution(numbers, target):
    # Two pointers - no extra space needed!
    pass

print(solution([2,7,11,15], 9))`
    },
    hints: ['Since array is sorted, use two pointers.', 'If sum < target, move left pointer. If sum > target, move right pointer.']
  },

  // Stack
  'valid-parentheses': {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    description: `Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Valid if: brackets closed by same type, in correct order.`,
    examples: [
      { input: 's = "()"', output: 'true', explanation: 'Valid pair.' },
      { input: 's = "()[]{}"', output: 'true', explanation: 'Multiple valid pairs.' },
      { input: 's = "(]"', output: 'false', explanation: 'Mismatched types.' }
    ],
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only.'],
    testCases: [
      { input: '"()"', expected: 'True' },
      { input: '"()[]{}"', expected: 'True' },
      { input: '"(]"', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(s):
    # Use a stack to track opening brackets
    pass

print(solution("()[]{}"))`
    },
    hints: ['Push opening brackets onto stack.', 'For closing brackets, check if it matches top of stack.', 'Stack should be empty at the end.']
  },

  'min-stack': {
    id: 'min-stack',
    title: 'Min Stack',
    difficulty: 'Medium',
    category: 'Stack',
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.`,
    examples: [
      { input: 'push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()', output: '-3, 0, -2', explanation: 'Track min at each level.' }
    ],
    constraints: ['Methods will be called at most 3 * 10^4 times.'],
    testCases: [
      { input: '[[-2],[0],[-3],[],[],[],[]]', expected: '[-3, 0, -2]' }
    ],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass

    def push(self, val):
        pass

    def pop(self):
        pass

    def top(self):
        pass

    def getMin(self):
        pass

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3`
    },
    hints: ['Use two stacks - one for values, one for minimums.', 'Or store (value, currentMin) pairs in a single stack.']
  },

  // Binary Search
  'binary-search': {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'Binary Search',
    description: `Given a sorted array and a target, return the index if found, else -1.

Must be O(log n) time complexity.`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 is at index 4.' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 not found.' }
    ],
    constraints: ['1 <= nums.length <= 10^4', 'nums is sorted in ascending order.'],
    testCases: [
      { input: '[-1,0,3,5,9,12], 9', expected: '4' },
      { input: '[-1,0,3,5,9,12], 2', expected: '-1' }
    ],
    starterCode: {
      python: `def solution(nums, target):
    # Classic binary search
    pass

print(solution([-1,0,3,5,9,12], 9))`
    },
    hints: ['Use left and right pointers.', 'mid = (left + right) // 2', 'Adjust left or right based on comparison.']
  },

  'search-rotated-array': {
    id: 'search-rotated-array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'Binary Search',
    description: `Given a rotated sorted array (e.g., [4,5,6,7,0,1,2]), find a target in O(log n) time.`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4', explanation: '0 is at index 4.' }
    ],
    constraints: ['1 <= nums.length <= 5000', 'nums contains distinct values.'],
    testCases: [
      { input: '[4,5,6,7,0,1,2], 0', expected: '4' },
      { input: '[4,5,6,7,0,1,2], 3', expected: '-1' }
    ],
    starterCode: {
      python: `def solution(nums, target):
    # Modified binary search
    pass

print(solution([4,5,6,7,0,1,2], 0))`
    },
    hints: ['One half is always sorted.', 'Check which half is sorted, then decide which half to search.']
  },

  // Linked List
  'reverse-linked-list': {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    category: 'Linked List',
    description: `Given the head of a singly linked list, reverse it and return the reversed list.`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]', explanation: 'Reversed.' }
    ],
    constraints: ['0 <= Number of nodes <= 5000'],
    testCases: [
      { input: '[1,2,3,4,5]', expected: '[5, 4, 3, 2, 1]' },
      { input: '[1,2]', expected: '[2, 1]' }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Use three pointers: prev, curr, next
    pass

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

print(to_array(solution(create_list([1,2,3,4,5]))))`
    },
    hints: ['Track previous, current, and next nodes.', 'Reverse the link: curr.next = prev', 'Move all pointers forward.']
  },

  'merge-two-lists': {
    id: 'merge-two-lists',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'Linked List',
    description: `Merge two sorted linked lists into one sorted list.`,
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]', explanation: 'Merged in order.' }
    ],
    constraints: ['0 <= list length <= 50'],
    testCases: [
      { input: '[1,2,4], [1,3,4]', expected: '[1, 1, 2, 3, 4, 4]' }
    ],
    starterCode: {
      python: `def solution(list1, list2):
    # Compare heads, build merged list
    pass

print("Implement merge two lists")`
    },
    hints: ['Use a dummy head node.', 'Compare values and append smaller one.', 'Attach remaining nodes at the end.']
  },

  'linked-list-cycle': {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    category: 'Linked List',
    description: `Detect if a linked list has a cycle (a node's next points back to a previous node).`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'Tail connects to node index 1.' }
    ],
    constraints: ['0 <= Number of nodes <= 10^4'],
    testCases: [
      { input: '[3,2,0,-4], 1', expected: 'True' },
      { input: '[1], -1', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(head):
    # Floyd's cycle detection (slow & fast pointers)
    pass

print("Implement cycle detection")`
    },
    hints: ['Use slow (1 step) and fast (2 steps) pointers.', 'If they meet, there\'s a cycle.', 'If fast reaches null, no cycle.']
  },

  // Trees
  'invert-tree': {
    id: 'invert-tree',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    description: `Invert a binary tree (swap left and right children at every node).`,
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]', explanation: 'Mirror image.' }
    ],
    constraints: ['0 <= Number of nodes <= 100'],
    testCases: [
      { input: '[4,2,7,1,3,6,9]', expected: '[4, 7, 2, 9, 6, 3, 1]' }
    ],
    starterCode: {
      python: `def solution(root):
    # Swap left and right recursively
    pass

print("Implement invert tree")`
    },
    hints: ['Base case: null node.', 'Swap left and right children.', 'Recursively invert both subtrees.']
  },

  'max-depth-tree': {
    id: 'max-depth-tree',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    description: `Find the maximum depth (longest path from root to leaf) of a binary tree.`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3', explanation: 'Depth is 3.' }
    ],
    constraints: ['0 <= Number of nodes <= 10^4'],
    testCases: [
      { input: '[3,9,20,null,null,15,7]', expected: '3' }
    ],
    starterCode: {
      python: `def solution(root):
    # DFS: 1 + max(left depth, right depth)
    pass

print("Implement max depth")`
    },
    hints: ['Base case: null node has depth 0.', 'Recursively find max of left and right depths.', 'Add 1 for current node.']
  },

  'same-tree': {
    id: 'same-tree',
    title: 'Same Tree',
    difficulty: 'Easy',
    category: 'Trees',
    description: `Check if two binary trees are identical (same structure and values).`,
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true', explanation: 'Identical.' }
    ],
    constraints: ['0 <= Number of nodes <= 100'],
    testCases: [
      { input: '[1,2,3], [1,2,3]', expected: 'True' },
      { input: '[1,2], [1,null,2]', expected: 'False' }
    ],
    starterCode: {
      python: `def solution(p, q):
    # Compare nodes recursively
    pass

print("Implement same tree")`
    },
    hints: ['Both null = same.', 'One null = different.', 'Compare values, then recurse on children.']
  },

  // Graphs
  'bfs-traversal': {
    id: 'bfs-traversal',
    title: 'BFS Graph Traversal',
    difficulty: 'Medium',
    category: 'Graphs',
    description: `Implement BFS traversal on a graph (adjacency list). Return visit order.`,
    examples: [
      { input: 'graph = {0: [1,2], 1: [2], 2: [0,3], 3: []}, start = 2', output: '[2, 0, 3, 1]', explanation: 'Level by level.' }
    ],
    constraints: ['Graph may contain cycles.'],
    testCases: [
      { input: '{0: [1,2], 1: [2], 2: [0,3], 3: [3]}, 2', expected: '[2, 0, 3, 1]' }
    ],
    starterCode: {
      python: `from collections import deque

def solution(graph, start):
    # Use queue, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`
    },
    hints: ['Use a queue (FIFO).', 'Mark nodes as visited when adding to queue.', 'Process neighbors level by level.']
  },

  'dfs-traversal': {
    id: 'dfs-traversal',
    title: 'DFS Graph Traversal',
    difficulty: 'Medium',
    category: 'Graphs',
    description: `Implement DFS traversal on a graph. Return visit order.`,
    examples: [
      { input: 'graph = {0: [1,2], 1: [2], 2: [3], 3: []}, start = 0', output: '[0, 1, 2, 3]', explanation: 'Depth first.' }
    ],
    constraints: ['Graph may contain cycles.'],
    testCases: [
      { input: '{0: [1,2], 1: [2], 2: [3], 3: []}, 0', expected: '[0, 1, 2, 3]' }
    ],
    starterCode: {
      python: `def solution(graph, start):
    # Use stack or recursion, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`
    },
    hints: ['Use a stack (LIFO) or recursion.', 'Mark visited before exploring.', 'Go deep before going wide.']
  },

  'number-of-islands': {
    id: 'number-of-islands',
    title: 'Number of Islands',
    difficulty: 'Medium',
    category: 'Graphs',
    description: `Count islands in a 2D grid. '1' = land, '0' = water. Islands are surrounded by water.`,
    examples: [
      { input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: '2', explanation: 'Two separate islands.' }
    ],
    constraints: ['1 <= m, n <= 300'],
    testCases: [
      { input: '[["1","1","0"],["1","1","0"],["0","0","1"]]', expected: '2' }
    ],
    starterCode: {
      python: `def solution(grid):
    # DFS/BFS from each unvisited land cell
    pass

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`
    },
    hints: ['Iterate through grid.', 'When you find "1", increment count and flood-fill (DFS/BFS) to mark all connected land.']
  },

  // Dynamic Programming
  'climbing-stairs': {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    description: `You can climb 1 or 2 steps at a time. How many distinct ways to reach step n?`,
    examples: [
      { input: 'n = 3', output: '3', explanation: '1+1+1, 1+2, 2+1' }
    ],
    constraints: ['1 <= n <= 45'],
    testCases: [
      { input: '2', expected: '2' },
      { input: '3', expected: '3' }
    ],
    starterCode: {
      python: `def solution(n):
    # Fibonacci pattern! dp[i] = dp[i-1] + dp[i-2]
    pass

print(solution(3))`
    },
    hints: ['Base cases: dp[1]=1, dp[2]=2', 'dp[i] = ways to reach from i-1 + ways from i-2', 'This is Fibonacci!']
  },

  'house-robber': {
    id: 'house-robber',
    title: 'House Robber',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    description: `Rob houses for max money, but can't rob adjacent houses.`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 0 and 2: 1+3=4' }
    ],
    constraints: ['1 <= nums.length <= 100'],
    testCases: [
      { input: '[1,2,3,1]', expected: '4' },
      { input: '[2,7,9,3,1]', expected: '12' }
    ],
    starterCode: {
      python: `def solution(nums):
    # dp[i] = max(rob this + dp[i-2], skip + dp[i-1])
    pass

print(solution([1,2,3,1]))`
    },
    hints: ['At each house: rob it or skip it.', 'Rob: nums[i] + dp[i-2]', 'Skip: dp[i-1]', 'Take the max.']
  },

  // Sorting
  'merge-sort': {
    id: 'merge-sort',
    title: 'Merge Sort',
    difficulty: 'Medium',
    category: 'Sorting',
    description: `Implement merge sort. Divide array, sort halves, merge.`,
    examples: [
      { input: 'nums = [5,2,3,1]', output: '[1,2,3,5]', explanation: 'Sorted.' }
    ],
    constraints: ['1 <= nums.length <= 5 * 10^4'],
    testCases: [
      { input: '[5,2,3,1]', expected: '[1, 2, 3, 5]' }
    ],
    starterCode: {
      python: `def solution(nums):
    # Divide, conquer, merge
    pass

print(solution([5,2,3,1]))`
    },
    hints: ['Base case: length <= 1.', 'Split at mid, recursively sort both.', 'Merge by comparing heads of both sorted halves.']
  },

  'quick-sort': {
    id: 'quick-sort',
    title: 'Quick Sort',
    difficulty: 'Medium',
    category: 'Sorting',
    description: `Implement quick sort. Pick pivot, partition, recurse.`,
    examples: [
      { input: 'nums = [3,6,8,10,1,2,1]', output: '[1,1,2,3,6,8,10]', explanation: 'Sorted.' }
    ],
    constraints: ['1 <= nums.length <= 5 * 10^4'],
    testCases: [
      { input: '[3,6,8,10,1,2,1]', expected: '[1, 1, 2, 3, 6, 8, 10]' }
    ],
    starterCode: {
      python: `def solution(nums):
    # Partition around pivot, recurse
    pass

print(solution([3,6,8,10,1,2,1]))`
    },
    hints: ['Pick a pivot (last element is common).', 'Partition: smaller left, larger right.', 'Recurse on both partitions.']
  }
};

export const problemList = Object.values(problems);

export const categories = [...new Set(problemList.map(p => p.category))];

export function getProblemById(id) {
  return problems[id] || null;
}

export function getProblemsByCategory(category) {
  return problemList.filter(p => p.category === category);
}

// Get problems in a roadmap section
export function getRoadmapSection(sectionId) {
  const section = roadmap.find(s => s.id === sectionId);
  if (!section) return null;
  return {
    ...section,
    problemDetails: section.problems.map(id => problems[id]).filter(Boolean)
  };
}

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
        solutions: {
            optimal: {
                name: 'Hash Map (Optimal)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Use a hash map to store seen numbers and their indices. For each number, check if complement exists.',
                code: `def solution(nums, target):
    # Hash map: number -> index
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
print(solution([2,7,11,15], 9))`
            },
            bruteForce: {
                name: 'Brute Force',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Check every pair of numbers to see if they sum to target.',
                code: `def solution(nums, target):
    # Check all pairs
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

# Test
print(solution([2,7,11,15], 9))`
            },
            sorting: {
                name: 'Sorting + Two Pointers',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Sort with indices, then use two pointers. Note: need to track original indices.',
                code: `def solution(nums, target):
    # Store (value, original_index) pairs
    indexed = [(num, i) for i, num in enumerate(nums)]
    indexed.sort(key=lambda x: x[0])

    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = indexed[left][0] + indexed[right][0]
        if current_sum == target:
            return sorted([indexed[left][1], indexed[right][1]])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []

# Test
print(solution([2,7,11,15], 9))`
            }
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
        solutions: {
            optimal: {
                name: 'Hash Map Counter',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Count character frequencies using a hash map. Space is O(1) since alphabet is fixed (26 letters).',
                code: `def solution(s, t):
    if len(s) != len(t):
        return False

    # Count characters in s
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1

    # Subtract counts for t
    for char in t:
        if char not in count:
            return False
        count[char] -= 1
        if count[char] < 0:
            return False

    return True

print(solution("anagram", "nagaram"))`
            },
            sorting: {
                name: 'Sorting',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Sort both strings and compare. Simple but slower.',
                code: `def solution(s, t):
    return sorted(s) == sorted(t)

print(solution("anagram", "nagaram"))`
            },
            arrayCounter: {
                name: 'Array Counter (26 letters)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Use a fixed-size array of 26 for lowercase letters.',
                code: `def solution(s, t):
    if len(s) != len(t):
        return False

    # Use array for 26 lowercase letters
    count = [0] * 26

    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1

    return all(c == 0 for c in count)

print(solution("anagram", "nagaram"))`
            }
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
        solutions: {
            optimal: {
                name: 'Hash Set',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Use a set to track seen numbers. Return true if we see a duplicate.',
                code: `def solution(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

print(solution([1,2,3,1]))`
            },
            setLength: {
                name: 'Set Length Comparison',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Compare length of set vs original array. One-liner approach.',
                code: `def solution(nums):
    return len(nums) != len(set(nums))

print(solution([1,2,3,1]))`
            },
            sorting: {
                name: 'Sorting',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(1)',
                description: 'Sort the array, then check adjacent elements for duplicates.',
                code: `def solution(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False

print(solution([1,2,3,1]))`
            },
            bruteForce: {
                name: 'Brute Force',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Compare each element with every other element.',
                code: `def solution(nums):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                return True
    return False

print(solution([1,2,3,1]))`
            }
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
        solutions: {
            optimal: {
                name: 'Two Pointers (In-place)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Use two pointers from both ends, skipping non-alphanumeric characters.',
                code: `def solution(s):
    left, right = 0, len(s) - 1

    while left < right:
        # Skip non-alphanumeric from left
        while left < right and not s[left].isalnum():
            left += 1
        # Skip non-alphanumeric from right
        while left < right and not s[right].isalnum():
            right -= 1

        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True

print(solution("A man, a plan, a canal: Panama"))`
            },
            cleanFirst: {
                name: 'Clean String First',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'First clean the string, then compare with reverse.',
                code: `def solution(s):
    # Clean: keep only alphanumeric, convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

print(solution("A man, a plan, a canal: Panama"))`
            },
            recursive: {
                name: 'Recursive',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Recursive approach comparing characters from both ends.',
                code: `def solution(s):
    # Clean the string first
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    def is_palindrome(left, right):
        if left >= right:
            return True
        if cleaned[left] != cleaned[right]:
            return False
        return is_palindrome(left + 1, right - 1)

    return is_palindrome(0, len(cleaned) - 1)

print(solution("A man, a plan, a canal: Panama"))`
            }
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
        solutions: {
            optimal: {
                name: 'Two Pointers',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Use two pointers from both ends. Since array is sorted, adjust pointers based on sum.',
                code: `def solution(numbers, target):
    left, right = 0, len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]

        if current_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1  # Need smaller sum

    return []

print(solution([2,7,11,15], 9))`
            },
            binarySearch: {
                name: 'Binary Search',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(1)',
                description: 'For each element, binary search for its complement.',
                code: `def solution(numbers, target):
    def binary_search(arr, left, target):
        right = len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1

    for i in range(len(numbers)):
        complement = target - numbers[i]
        j = binary_search(numbers, i + 1, complement)
        if j != -1:
            return [i + 1, j + 1]  # 1-indexed

    return []

print(solution([2,7,11,15], 9))`
            },
            hashMap: {
                name: 'Hash Map',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Same as regular Two Sum, but uses extra space.',
                code: `def solution(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return [seen[complement] + 1, i + 1]  # 1-indexed
        seen[num] = i
    return []

print(solution([2,7,11,15], 9))`
            }
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
        solutions: {
            optimal: {
                name: 'Stack with Hash Map',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Use a stack to track opening brackets. Use hash map for bracket matching.',
                code: `def solution(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in mapping:
            # Closing bracket
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            # Opening bracket
            stack.append(char)

    return len(stack) == 0

print(solution("()[]{}"))`
            },
            basicStack: {
                name: 'Basic Stack',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Stack approach with explicit if-else for each bracket type.',
                code: `def solution(s):
    stack = []

    for char in s:
        if char in '({[':
            stack.append(char)
        else:
            if not stack:
                return False
            top = stack.pop()
            if char == ')' and top != '(':
                return False
            if char == '}' and top != '{':
                return False
            if char == ']' and top != '[':
                return False

    return len(stack) == 0

print(solution("()[]{}"))`
            },
            replacement: {
                name: 'String Replacement',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(n)',
                description: 'Repeatedly remove valid pairs until string is empty or no more pairs.',
                code: `def solution(s):
    while '()' in s or '{}' in s or '[]' in s:
        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')
    return s == ''

print(solution("()[]{}"))`
            }
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
            {
                input: '{"methods": ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], "args": [[], [-2], [0], [-3], [], [], [], []]}',
                expected: '[-3, 0, -2]'
            }
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
        solutions: {
            optimal: {
                name: 'Two Stacks',
                timeComplexity: 'O(1) all operations',
                spaceComplexity: 'O(n)',
                description: 'Use two stacks: one for values, one for minimums at each level.',
                code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Push minimum so far onto min_stack
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
        else:
            self.min_stack.append(self.min_stack[-1])

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`
            },
            singleStack: {
                name: 'Single Stack with Tuples',
                timeComplexity: 'O(1) all operations',
                spaceComplexity: 'O(n)',
                description: 'Store (value, currentMin) pairs in a single stack.',
                code: `class MinStack:
    def __init__(self):
        self.stack = []  # Each element is (value, min_so_far)

    def push(self, val):
        if not self.stack:
            self.stack.append((val, val))
        else:
            current_min = min(val, self.stack[-1][1])
            self.stack.append((val, current_min))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`
            },
            optimizedMinStack: {
                name: 'Optimized Min Stack',
                timeComplexity: 'O(1) all operations',
                spaceComplexity: 'O(n) worst case, better average',
                description: 'Only push to min_stack when new value <= current min.',
                code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Only push if <= current min (handles duplicates)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self):
        val = self.stack.pop()
        # Only pop from min_stack if it matches
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`
            }
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
        solutions: {
            iterative: {
                name: 'Iterative Binary Search',
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(1)',
                description: 'Classic iterative binary search using two pointers.',
                code: `def solution(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(solution([-1,0,3,5,9,12], 9))`
            },
            recursive: {
                name: 'Recursive Binary Search',
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(log n)',
                description: 'Recursive approach - cleaner but uses stack space.',
                code: `def solution(nums, target):
    def binary_search(left, right):
        if left > right:
            return -1

        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            return binary_search(mid + 1, right)
        else:
            return binary_search(left, mid - 1)

    return binary_search(0, len(nums) - 1)

print(solution([-1,0,3,5,9,12], 9))`
            },
            linear: {
                name: 'Linear Search (Comparison)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Simple linear search - does not meet O(log n) requirement but shows contrast.',
                code: `def solution(nums, target):
    # Linear search - O(n), doesn't meet the requirement
    # Shown for comparison only
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1

print(solution([-1,0,3,5,9,12], 9))`
            }
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
        solutions: {
            optimal: {
                name: 'Modified Binary Search',
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(1)',
                description: 'One half is always sorted. Determine which half and if target is in that range.',
                code: `def solution(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        # Check which half is sorted
        if nums[left] <= nums[mid]:
            # Left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`
            },
            findPivotFirst: {
                name: 'Find Pivot Then Search',
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(1)',
                description: 'First find the rotation pivot, then binary search the correct half.',
                code: `def solution(nums, target):
    n = len(nums)

    # Find the pivot (smallest element)
    left, right = 0, n - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid

    pivot = left

    # Binary search in the correct half
    if target >= nums[pivot] and target <= nums[n - 1]:
        left, right = pivot, n - 1
    else:
        left, right = 0, pivot - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`
            },
            linear: {
                name: 'Linear Search (Comparison)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Simple but does not meet O(log n) requirement.',
                code: `def solution(nums, target):
    # O(n) - doesn't meet requirement, for comparison
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1

print(solution([4,5,6,7,0,1,2], 0))`
            }
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
        solutions: {
            iterative: {
                name: 'Iterative (Three Pointers)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Use three pointers to reverse links one by one.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    prev = None
    curr = head

    while curr:
        next_temp = curr.next  # Save next
        curr.next = prev       # Reverse link
        prev = curr            # Move prev forward
        curr = next_temp       # Move curr forward

    return prev

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
            recursive: {
                name: 'Recursive',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Recursive approach - elegant but uses stack space.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Base case
    if not head or not head.next:
        return head

    # Recursively reverse the rest
    new_head = solution(head.next)

    # Reverse the link
    head.next.next = head
    head.next = None

    return new_head

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
            stackBased: {
                name: 'Stack-Based',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Push all nodes to stack, then pop to build reversed list.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head:
        return None

    # Push all nodes to stack
    stack = []
    curr = head
    while curr:
        stack.append(curr)
        curr = curr.next

    # Pop and rebuild
    new_head = stack.pop()
    curr = new_head
    while stack:
        curr.next = stack.pop()
        curr = curr.next
    curr.next = None

    return new_head

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
            }
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
            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    # Compare heads, build merged list
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

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`
        },
        solutions: {
            iterative: {
                name: 'Iterative with Dummy Node',
                timeComplexity: 'O(n + m)',
                spaceComplexity: 'O(1)',
                description: 'Use a dummy head and compare nodes one by one.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    dummy = ListNode(0)
    curr = dummy

    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next

    # Attach remaining nodes
    curr.next = list1 if list1 else list2

    return dummy.next

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

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`
            },
            recursive: {
                name: 'Recursive',
                timeComplexity: 'O(n + m)',
                spaceComplexity: 'O(n + m)',
                description: 'Recursive approach - compare heads and recurse.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    if not list1:
        return list2
    if not list2:
        return list1

    if list1.val <= list2.val:
        list1.next = solution(list1.next, list2)
        return list1
    else:
        list2.next = solution(list1, list2.next)
        return list2

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

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`
            }
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
            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Floyd's cycle detection (slow & fast pointers)
    pass

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`
        },
        solutions: {
            optimal: {
                name: "Floyd's Cycle Detection",
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Use slow (1 step) and fast (2 steps) pointers. If they meet, cycle exists.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head or not head.next:
        return False

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`
            },
            hashSet: {
                name: 'Hash Set',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Store visited nodes in a set. If we see a node twice, cycle exists.',
                code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    visited = set()
    curr = head

    while curr:
        if curr in visited:
            return True
        visited.add(curr)
        curr = curr.next

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`
            }
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
            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    # Swap left and right recursively
    pass

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`
        },
        solutions: {
            recursive: {
                name: 'Recursive DFS',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Recursively swap left and right children.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    # Swap children
    root.left, root.right = root.right, root.left

    # Recursively invert subtrees
    solution(root.left)
    solution(root.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`
            },
            iterativeBFS: {
                name: 'Iterative BFS',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Use a queue to process nodes level by level.',
                code: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    queue = deque([root])

    while queue:
        node = queue.popleft()

        # Swap children
        node.left, node.right = node.right, node.left

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`
            },
            iterativeDFS: {
                name: 'Iterative DFS (Stack)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Use a stack for iterative DFS.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    stack = [root]

    while stack:
        node = stack.pop()

        # Swap children
        node.left, node.right = node.right, node.left

        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`
            }
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
            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    # DFS: 1 + max(left depth, right depth)
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`
        },
        solutions: {
            recursiveDFS: {
                name: 'Recursive DFS',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Recursively find max depth of subtrees and add 1.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    left_depth = solution(root.left)
    right_depth = solution(root.right)

    return 1 + max(left_depth, right_depth)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`
            },
            iterativeBFS: {
                name: 'Iterative BFS (Level Order)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Count levels using BFS traversal.',
                code: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    queue = deque([root])
    depth = 0

    while queue:
        depth += 1
        level_size = len(queue)

        for _ in range(level_size):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return depth

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`
            },
            iterativeDFS: {
                name: 'Iterative DFS (Stack)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Use stack with (node, depth) pairs.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    stack = [(root, 1)]
    max_depth = 0

    while stack:
        node, depth = stack.pop()
        max_depth = max(max_depth, depth)

        if node.left:
            stack.append((node.left, depth + 1))
        if node.right:
            stack.append((node.right, depth + 1))

    return max_depth

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`
            }
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
            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Compare nodes recursively
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`
        },
        solutions: {
            recursive: {
                name: 'Recursive DFS',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Recursively compare each node.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Both null
    if not p and not q:
        return True

    # One null, one not
    if not p or not q:
        return False

    # Compare values and recurse
    if p.val != q.val:
        return False

    return solution(p.left, q.left) and solution(p.right, q.right)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`
            },
            iterativeBFS: {
                name: 'Iterative BFS',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Use queues to compare level by level.',
                code: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    queue = deque([(p, q)])

    while queue:
        node1, node2 = queue.popleft()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        queue.append((node1.left, node2.left))
        queue.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`
            },
            iterativeDFS: {
                name: 'Iterative DFS (Stack)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                description: 'Use stack to compare nodes iteratively.',
                code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    stack = [(p, q)]

    while stack:
        node1, node2 = stack.pop()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        stack.append((node1.left, node2.left))
        stack.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`
            }
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
        solutions: {
            optimal: {
                name: 'BFS with Queue',
                timeComplexity: 'O(V + E)',
                spaceComplexity: 'O(V)',
                description: 'Use a queue and visited set for level-order traversal.',
                code: `from collections import deque

def solution(graph, start):
    visited = set()
    result = []
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`
            },
            withLevel: {
                name: 'BFS with Level Tracking',
                timeComplexity: 'O(V + E)',
                spaceComplexity: 'O(V)',
                description: 'Track levels for each node.',
                code: `from collections import deque

def solution(graph, start):
    visited = set()
    result = []
    queue = deque([(start, 0)])  # (node, level)
    visited.add(start)

    while queue:
        node, level = queue.popleft()
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, level + 1))

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`
            },
            listQueue: {
                name: 'BFS with List (Less Efficient)',
                timeComplexity: 'O(V² + E)',
                spaceComplexity: 'O(V)',
                description: 'Using list as queue - less efficient due to pop(0).',
                code: `def solution(graph, start):
    visited = set()
    result = []
    queue = [start]  # List as queue (inefficient)
    visited.add(start)

    while queue:
        node = queue.pop(0)  # O(n) operation
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`
            }
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
        solutions: {
            recursive: {
                name: 'Recursive DFS',
                timeComplexity: 'O(V + E)',
                spaceComplexity: 'O(V)',
                description: 'Classic recursive approach.',
                code: `def solution(graph, start):
    visited = set()
    result = []

    def dfs(node):
        if node in visited:
            return

        visited.add(node)
        result.append(node)

        for neighbor in graph.get(node, []):
            dfs(neighbor)

    dfs(start)
    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`
            },
            iterative: {
                name: 'Iterative DFS (Stack)',
                timeComplexity: 'O(V + E)',
                spaceComplexity: 'O(V)',
                description: 'Use explicit stack instead of recursion.',
                code: `def solution(graph, start):
    visited = set()
    result = []
    stack = [start]

    while stack:
        node = stack.pop()

        if node in visited:
            continue

        visited.add(node)
        result.append(node)

        # Add neighbors in reverse order for consistent ordering
        for neighbor in reversed(graph.get(node, [])):
            if neighbor not in visited:
                stack.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`
            },
            preorderIterative: {
                name: 'Pre-order Iterative',
                timeComplexity: 'O(V + E)',
                spaceComplexity: 'O(V)',
                description: 'Iterative with pre-order guarantee.',
                code: `def solution(graph, start):
    visited = set()
    result = []
    stack = [start]
    visited.add(start)

    while stack:
        node = stack.pop()
        result.append(node)

        # Process in reverse to maintain order
        for neighbor in reversed(graph.get(node, [])):
            if neighbor not in visited:
                visited.add(neighbor)
                stack.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`
            }
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
        solutions: {
            dfs: {
                name: 'DFS (Recursive)',
                timeComplexity: 'O(m × n)',
                spaceComplexity: 'O(m × n)',
                description: 'Use DFS to flood-fill each island.',
                code: `def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        # Out of bounds or water
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return

        # Mark as visited (sink the island)
        grid[r][c] = '0'

        # Explore all 4 directions
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)

    return count

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`
            },
            bfs: {
                name: 'BFS',
                timeComplexity: 'O(m × n)',
                spaceComplexity: 'O(min(m, n))',
                description: 'Use BFS to explore each island.',
                code: `from collections import deque

def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])
    count = 0

    def bfs(r, c):
        queue = deque([(r, c)])
        grid[r][c] = '0'

        while queue:
            row, col = queue.popleft()

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = row + dr, col + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                    grid[nr][nc] = '0'
                    queue.append((nr, nc))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                bfs(r, c)

    return count

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`
            },
            unionFind: {
                name: 'Union-Find',
                timeComplexity: 'O(m × n × α(m × n))',
                spaceComplexity: 'O(m × n)',
                description: 'Use Union-Find to group connected land cells.',
                code: `def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])

    # Union-Find
    parent = {}
    rank = {}

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  # Path compression
        return parent[x]

    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return
        # Union by rank
        if rank[px] < rank[py]:
            px, py = py, px
        parent[py] = px
        if rank[px] == rank[py]:
            rank[px] += 1

    # Initialize
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                parent[(r, c)] = (r, c)
                rank[(r, c)] = 0

    # Union adjacent land cells
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                if r + 1 < rows and grid[r + 1][c] == '1':
                    union((r, c), (r + 1, c))
                if c + 1 < cols and grid[r][c + 1] == '1':
                    union((r, c), (r, c + 1))

    # Count unique roots
    return len(set(find(k) for k in parent))

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`
            }
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
        solutions: {
            dpOptimized: {
                name: 'DP (Space Optimized)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Only track last two values since dp[i] depends only on dp[i-1] and dp[i-2].',
                code: `def solution(n):
    if n <= 2:
        return n

    prev2, prev1 = 1, 2

    for i in range(3, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr

    return prev1

print(solution(3))`
            },
            dpArray: {
                name: 'DP (Array)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Build up solution using an array.',
                code: `def solution(n):
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

print(solution(3))`
            },
            memoization: {
                name: 'Recursion with Memoization',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Top-down approach with caching.',
                code: `def solution(n):
    memo = {}

    def climb(i):
        if i <= 2:
            return i
        if i in memo:
            return memo[i]

        memo[i] = climb(i - 1) + climb(i - 2)
        return memo[i]

    return climb(n)

print(solution(3))`
            },
            bruteForce: {
                name: 'Brute Force Recursion',
                timeComplexity: 'O(2^n)',
                spaceComplexity: 'O(n)',
                description: 'Naive recursion - exponential time, for comparison only.',
                code: `def solution(n):
    # WARNING: Very slow for large n!
    if n <= 2:
        return n
    return solution(n - 1) + solution(n - 2)

print(solution(3))`
            }
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
        solutions: {
            dpOptimized: {
                name: 'DP (Space Optimized)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                description: 'Only track last two maximum values.',
                code: `def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2, prev1 = 0, 0

    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = curr

    return prev1

print(solution([1,2,3,1]))`
            },
            dpArray: {
                name: 'DP (Array)',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Build up solution using an array.',
                code: `def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, n):
        # Rob current house + dp[i-2], or skip and take dp[i-1]
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

    return dp[n - 1]

print(solution([1,2,3,1]))`
            },
            memoization: {
                name: 'Recursion with Memoization',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                description: 'Top-down approach with caching.',
                code: `def solution(nums):
    memo = {}

    def rob(i):
        if i < 0:
            return 0
        if i in memo:
            return memo[i]

        # Rob this house + best from i-2, or skip
        memo[i] = max(rob(i - 1), rob(i - 2) + nums[i])
        return memo[i]

    return rob(len(nums) - 1)

print(solution([1,2,3,1]))`
            },
            bruteForce: {
                name: 'Brute Force Recursion',
                timeComplexity: 'O(2^n)',
                spaceComplexity: 'O(n)',
                description: 'Try all combinations - exponential time.',
                code: `def solution(nums):
    # WARNING: Very slow for large inputs!
    def rob(i):
        if i < 0:
            return 0
        return max(rob(i - 1), rob(i - 2) + nums[i])

    return rob(len(nums) - 1)

print(solution([1,2,3,1]))`
            }
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
        solutions: {
            topDown: {
                name: 'Top-Down (Recursive)',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Classic recursive divide and conquer approach.',
                code: `def solution(nums):
    if len(nums) <= 1:
        return nums

    # Divide
    mid = len(nums) // 2
    left = solution(nums[:mid])
    right = solution(nums[mid:])

    # Merge
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

print(solution([5,2,3,1]))`
            },
            inPlace: {
                name: 'In-Place Merge Sort',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Modify array in place with auxiliary space for merging.',
                code: `def solution(nums):
    def merge_sort(arr, left, right):
        if left >= right:
            return

        mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        merge(arr, left, mid, right)

    def merge(arr, left, mid, right):
        # Create temp arrays
        left_arr = arr[left:mid + 1]
        right_arr = arr[mid + 1:right + 1]

        i = j = 0
        k = left

        while i < len(left_arr) and j < len(right_arr):
            if left_arr[i] <= right_arr[j]:
                arr[k] = left_arr[i]
                i += 1
            else:
                arr[k] = right_arr[j]
                j += 1
            k += 1

        while i < len(left_arr):
            arr[k] = left_arr[i]
            i += 1
            k += 1

        while j < len(right_arr):
            arr[k] = right_arr[j]
            j += 1
            k += 1

    merge_sort(nums, 0, len(nums) - 1)
    return nums

print(solution([5,2,3,1]))`
            },
            bottomUp: {
                name: 'Bottom-Up (Iterative)',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Iterative approach, merging progressively larger subarrays.',
                code: `def solution(nums):
    n = len(nums)

    # Start with subarrays of size 1, double each iteration
    size = 1
    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(left + size - 1, n - 1)
            right = min(left + 2 * size - 1, n - 1)

            if mid < right:
                # Merge [left, mid] and [mid+1, right]
                left_arr = nums[left:mid + 1]
                right_arr = nums[mid + 1:right + 1]

                i = j = 0
                k = left

                while i < len(left_arr) and j < len(right_arr):
                    if left_arr[i] <= right_arr[j]:
                        nums[k] = left_arr[i]
                        i += 1
                    else:
                        nums[k] = right_arr[j]
                        j += 1
                    k += 1

                while i < len(left_arr):
                    nums[k] = left_arr[i]
                    i += 1
                    k += 1

                while j < len(right_arr):
                    nums[k] = right_arr[j]
                    j += 1
                    k += 1

        size *= 2

    return nums

print(solution([5,2,3,1]))`
            }
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
        solutions: {
            lomuto: {
                name: 'Lomuto Partition',
                timeComplexity: 'O(n log n) avg, O(n²) worst',
                spaceComplexity: 'O(log n)',
                description: 'Classic quicksort with Lomuto partition (last element as pivot).',
                code: `def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx - 1)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`
            },
            hoare: {
                name: 'Hoare Partition',
                timeComplexity: 'O(n log n) avg, O(n²) worst',
                spaceComplexity: 'O(log n)',
                description: 'More efficient partition using two pointers.',
                code: `def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        pivot = arr[(low + high) // 2]
        i = low - 1
        j = high + 1

        while True:
            i += 1
            while arr[i] < pivot:
                i += 1

            j -= 1
            while arr[j] > pivot:
                j -= 1

            if i >= j:
                return j

            arr[i], arr[j] = arr[j], arr[i]

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`
            },
            pythonic: {
                name: 'Pythonic (Not In-Place)',
                timeComplexity: 'O(n log n) avg',
                spaceComplexity: 'O(n)',
                description: 'Clean, list-comprehension based approach.',
                code: `def solution(nums):
    if len(nums) <= 1:
        return nums

    pivot = nums[len(nums) // 2]
    left = [x for x in nums if x < pivot]
    middle = [x for x in nums if x == pivot]
    right = [x for x in nums if x > pivot]

    return solution(left) + middle + solution(right)

print(solution([3,6,8,10,1,2,1]))`
            },
            randomized: {
                name: 'Randomized Pivot',
                timeComplexity: 'O(n log n) expected',
                spaceComplexity: 'O(log n)',
                description: 'Random pivot selection to avoid worst case.',
                code: `import random

def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx - 1)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        # Randomize pivot
        rand_idx = random.randint(low, high)
        arr[rand_idx], arr[high] = arr[high], arr[rand_idx]

        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`
            }
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

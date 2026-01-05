/**
 * Stack Visualizer JavaScript
 * ============================
 * Handles the frontend interactions for the stack visualizer.
 * 
 * Stack = LIFO (Last In, First Out) data structure
 * - Push adds to the top
 * - Pop removes from the top
 */

// ============ API Functions ============
// Functions that communicate with the Flask backend server

/**
 * Fetches the current state of the stack from the server
 * @returns {Promise<Object>} Promise that resolves to stack data (items, size, top)
 */
async function getStack() {
    // Make GET request to /api/stack endpoint
    const response = await fetch('/api/stack');
    // Convert JSON response to JavaScript object
    return await response.json();
}

/**
 * Adds an item to the top of the stack (push operation)
 * @param {number|string} value - The value to push onto the stack
 * @returns {Promise<Object>} Promise that resolves to updated stack state
 */
async function pushToServer(value) {
    // POST request to add item to top of stack
    const response = await fetch('/api/stack/push', {
        method: 'POST',  // POST because we're modifying data
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })  // Send value as JSON
    });
    return await response.json();
}

/**
 * Removes and returns the top item from the stack (pop operation)
 * @returns {Promise<Object>} Promise that resolves to the popped item and updated stack
 */
async function popFromServer() {
    // POST request (no body needed - just remove top item)
    const response = await fetch('/api/stack/pop', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Views the top item without removing it (peek operation)
 * @returns {Promise<Object>} Promise that resolves to the top item
 */
async function peekFromServer() {
    // GET request - just viewing, not modifying
    const response = await fetch('/api/stack/peek');
    return await response.json();
}

/**
 * Removes all items from the stack
 * @returns {Promise<Object>} Promise that resolves to confirmation
 */
async function clearFromServer() {
    // POST request to clear the stack
    const response = await fetch('/api/stack/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============
// Functions that update what the user sees on the page

/**
 * Renders the stack visually on the page
 * Shows items from top (first) to bottom (last)
 * Stack is rendered in reverse order so top appears at top of screen
 * @param {Array} items - Array of stack items [10, 20, 30] (30 is top)
 * @param {number} highlightIndex - Optional index to highlight (for animations)
 */
function renderStack(items, highlightIndex = -1) {
    // Get the HTML element where stack will be displayed
    const container = document.getElementById('stackVisual');
    
    // Check if stack is empty
    if (items.length === 0) {
        // Show empty message and exit early
        container.innerHTML = '<div class="stack-empty">Stack is empty. Push some items!</div>';
        return;
    }
    
    // Start building HTML string
    let html = '';
    
    // Loop through items in REVERSE order (from last to first)
    // This makes the top item appear at the top of the screen
    // i starts at items.length - 1 (last item) and goes down to 0 (first item)
    for (let i = items.length - 1; i >= 0; i--) {
        // Determine item position
        const isTop = i === items.length - 1;  // Last item in array is top of stack
        const isHighlighted = i === highlightIndex;  // Should this item be highlighted?
        
        // Build HTML for this stack item
        // animation-delay creates staggered animation (top animates first)
        html += `
            <div class="stack-item ${isTop ? 'stack-top' : ''} ${isHighlighted ? 'stack-highlight' : ''}" 
                 style="animation-delay: ${(items.length - 1 - i) * 0.1}s">
                ${isTop ? '<span class="top-marker">TOP →</span>' : ''}
                <div class="stack-value">${items[i]}</div>
            </div>
        `;
    }
    
    // Insert the HTML into the page
    container.innerHTML = html;
    // Re-initialize Lucide icons
    lucide.createIcons();
}

/**
 * Updates the info panel showing stack statistics
 * @param {number} size - Current number of items in stack
 * @param {number|string|null} top - The top item value, or null if empty
 */
function updateInfo(size, top) {
    // Update size display
    document.getElementById('stackSize').textContent = size;
    
    // Update top display
    // Check if top exists, otherwise show 'Empty'
    document.getElementById('stackTop').textContent = top !== null && top !== undefined ? top : 'Empty';
}

/**
 * Displays a temporary message to the user
 * @param {string} text - Message text to display
 * @param {string} type - Message type: 'info', 'success', or 'error' (defaults to 'info')
 */
function showMessage(text, type = 'info') {
    // Get the message element
    const messageEl = document.getElementById('message');
    
    // Set the message text
    messageEl.textContent = text;
    
    // Set CSS classes for styling
    messageEl.className = `message message-${type}`;
    
    // Auto-hide message after 3 seconds
    setTimeout(() => {
        messageEl.textContent = '';  // Clear text
        messageEl.className = 'message';  // Reset CSS class
    }, 3000);  // 3000 milliseconds = 3 seconds
}


// ============ Button Click Handlers ============
// These functions are called when user clicks buttons

/**
 * Handles the push button click
 * Adds an item to the top of the stack
 */
async function pushItem() {
    // Get the input element
    const input = document.getElementById('pushValue');
    
    // Get value and remove whitespace
    const value = input.value.trim();
    
    // Validate: check if input is empty
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;  // Exit early if validation fails
    }
    
    // try/catch handles errors
    try {
        // Send value to server
        // Number(value) converts string to number
        const result = await pushToServer(Number(value));
        
        // Check if server returned an error (e.g., stack is full)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization
        // Highlight the last item (the one we just pushed - it's at the top)
        renderStack(result.items, result.items.length - 1);
        
        // Update info panel
        // Top is the last item in the array (index length - 1)
        updateInfo(result.size, result.items[result.items.length - 1]);
        
        // Show success message
        showMessage(`Pushed ${value} to stack!`, 'success');
        
        // Clear input and refocus for next entry
        input.value = '';
        input.focus();
    } catch (error) {
        // Handle errors
        showMessage('Error pushing to stack', 'error');
    }
}

/**
 * Handles the pop button click
 * Removes the top item from the stack
 */
async function popItem() {
    try {
        // Request pop from server
        const result = await popFromServer();
        
        // Check if server returned an error (e.g., stack is empty)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization with remaining items
        renderStack(result.items);
        
        // Calculate new top item (last item in array, or null if empty)
        const top = result.items.length > 0 ? result.items[result.items.length - 1] : null;
        
        // Update info panel
        updateInfo(result.size, top);
        
        // Show success message with what was popped
        showMessage(`Popped ${result.popped} from stack!`, 'success');
    } catch (error) {
        showMessage('Error popping from stack', 'error');
    }
}

/**
 * Handles the peek button click
 * Views the top item without removing it
 */
async function peekItem() {
    try {
        // Request peek from server
        const result = await peekFromServer();
        
        // Check if stack is empty
        if (result.top === null) {
            showMessage('Stack is empty!', 'error');
            return;
        }
        
        // Get current stack state to highlight the top item
        const stack = await getStack();
        // Highlight the last item (index length - 1, which is the top)
        renderStack(stack.items, stack.items.length - 1);
        
        // Show info message
        showMessage(`Top element is ${result.top}`, 'info');
    } catch (error) {
        showMessage('Error peeking at stack', 'error');
    }
}

/**
 * Handles the clear button click
 * Removes all items from the stack
 */
async function clearStack() {
    try {
        // Send clear request to server
        await clearFromServer();
        
        // Update visualization with empty stack
        renderStack([]);  // [] is an empty array
        
        // Reset info panel
        updateInfo(0, null);
        
        showMessage('Stack cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing stack', 'error');
    }
}


// ============ Event Listeners ============
// Code that runs when the page loads

/**
 * Runs when the HTML page has finished loading
 * Sets up the initial state and keyboard shortcuts
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Load the current stack state from the server
    try {
        // Fetch stack data
        const stack = await getStack();
        
        // Display the stack
        renderStack(stack.items);
        
        // Calculate top item (last item in array, or null if empty)
        const top = stack.items.length > 0 ? stack.items[stack.items.length - 1] : null;
        
        // Update info panel
        updateInfo(stack.size, top);
        
        // Optionally show max size if the element exists
        const maxSizeEl = document.getElementById('stackMaxSize');
        // Check if element exists AND stack has max_size property
        if (maxSizeEl && stack.max_size) {
            maxSizeEl.textContent = stack.max_size;
        }
    } catch (error) {
        // Log error to browser console if loading fails
        console.error('Error loading stack:', error);
    }
    
    // Add keyboard shortcut: Press Enter in input to push
    const pushInput = document.getElementById('pushValue');
    
    // Listen for keypress events
    pushInput.addEventListener('keypress', (e) => {
        // e is the event object, e.key tells us which key was pressed
        if (e.key === 'Enter') {
            // If Enter was pressed, trigger push
            pushItem();
        }
    });
});

/**
 * Queue Visualizer JavaScript
 * ============================
 * Handles the frontend interactions for the queue visualizer.
 * 
 * Queue = FIFO (First In, First Out) data structure
 * - Enqueue adds to the back
 * - Dequeue removes from the front
 */

// ============ API Functions ============
// Functions that communicate with the Flask backend server

/**
 * Fetches the current state of the queue from the server
 * @returns {Promise<Object>} Promise that resolves to queue data (items, size, front)
 */
async function getQueue() {
    // Make GET request to /api/queue endpoint
    const response = await fetch('/api/queue');
    // Convert JSON response to JavaScript object
    return await response.json();
}

/**
 * Adds an item to the back of the queue (enqueue operation)
 * @param {number|string} value - The value to add to the queue
 * @returns {Promise<Object>} Promise that resolves to updated queue state
 */
async function enqueueToServer(value) {
    // POST request to add item
    const response = await fetch('/api/queue/enqueue', {
        method: 'POST',  // POST because we're modifying data
        headers: { 'Content-Type': 'application/json' },  // Tell server we're sending JSON
        body: JSON.stringify({ value: value })  // Convert value to JSON string
    });
    return await response.json();
}

/**
 * Removes and returns the front item from the queue (dequeue operation)
 * @returns {Promise<Object>} Promise that resolves to the dequeued item and updated queue
 */
async function dequeueFromServer() {
    // POST request (no body needed - just remove front item)
    const response = await fetch('/api/queue/dequeue', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Views the front item without removing it (peek operation)
 * @returns {Promise<Object>} Promise that resolves to the front item
 */
async function peekFromServer() {
    // GET request - just viewing, not modifying
    const response = await fetch('/api/queue/peek');
    return await response.json();
}

/**
 * Removes all items from the queue
 * @returns {Promise<Object>} Promise that resolves to confirmation
 */
async function clearFromServer() {
    // POST request to clear the queue
    const response = await fetch('/api/queue/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============
// Functions that update what the user sees on the page

/**
 * Renders the queue visually on the page
 * Shows items from front (left) to back (right)
 * @param {Array} items - Array of queue items [10, 20, 30]
 * @param {number} highlightIndex - Optional index to highlight (for animations)
 */
function renderQueue(items, highlightIndex = -1) {
    // Get the HTML element where queue will be displayed
    const container = document.getElementById('queueVisual');
    
    // Check if queue is empty
    if (items.length === 0) {
        // Show empty message and exit early
        container.innerHTML = '<div class="queue-empty">Queue is empty. Enqueue some items!</div>';
        return;
    }
    
    // Start building HTML string
    let html = '';
    
    // Loop through each item in the queue
    // Queue is FIFO, so first item (index 0) is the front
    for (let i = 0; i < items.length; i++) {
        // Determine item position
        const isFront = i === 0;  // First item is front
        const isBack = i === items.length - 1;  // Last item is back
        const isHighlighted = i === highlightIndex;  // Should this item be highlighted?
        
        // Build HTML for this queue item
        // Template literal (backticks) allows multi-line strings and ${} variables
        html += `
            <div class="queue-item ${isFront ? 'queue-front' : ''} ${isBack ? 'queue-back' : ''} ${isHighlighted ? 'queue-highlight' : ''}" 
                 style="animation-delay: ${i * 0.1}s">
                <div class="queue-value">${items[i]}</div>
                ${isFront ? '<span class="front-label">FRONT</span>' : ''}
                ${isBack ? '<span class="back-label">BACK</span>' : ''}
            </div>
        `;
    }
    
    // Insert the HTML into the page
    container.innerHTML = html;
    // Re-initialize Lucide icons (if any icons were added)
    lucide.createIcons();
}

/**
 * Updates the info panel showing queue statistics
 * @param {number} size - Current number of items in queue
 * @param {number|string|null} front - The front item value, or null if empty
 */
function updateInfo(size, front) {
    // Update size display
    document.getElementById('queueSize').textContent = size;
    
    // Update front display
    // Check if front exists (not null and not undefined), otherwise show 'Empty'
    document.getElementById('queueFront').textContent = front !== null && front !== undefined ? front : 'Empty';
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
    
    // Set CSS classes for styling (e.g., 'message message-success')
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
 * Handles the enqueue button click
 * Adds an item to the back of the queue
 */
async function enqueueItem() {
    // Get the input element
    const input = document.getElementById('enqueueValue');
    
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
        const result = await enqueueToServer(Number(value));
        
        // Update visualization
        // Highlight the last item (the one we just added)
        renderQueue(result.items, result.items.length - 1);
        
        // Update info panel
        // Front is the first item (index 0)
        updateInfo(result.size, result.items[0]);
        
        // Show success message
        showMessage(`Enqueued ${value} to queue!`, 'success');
        
        // Clear input and refocus for next entry
        input.value = '';
        input.focus();
    } catch (error) {
        // Handle errors
        showMessage('Error enqueueing to queue', 'error');
    }
}

/**
 * Handles the dequeue button click
 * Removes the front item from the queue
 */
async function dequeueItem() {
    try {
        // Request dequeue from server
        const result = await dequeueFromServer();
        
        // Check if server returned an error (e.g., queue is empty)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization with remaining items
        renderQueue(result.items);
        
        // Calculate new front item (first item, or null if empty)
        const front = result.items.length > 0 ? result.items[0] : null;
        
        // Update info panel
        updateInfo(result.size, front);
        
        // Show success message with what was dequeued
        showMessage(`Dequeued ${result.dequeued} from queue!`, 'success');
    } catch (error) {
        showMessage('Error dequeuing from queue', 'error');
    }
}

/**
 * Handles the peek button click
 * Views the front item without removing it
 */
async function peekItem() {
    try {
        // Request peek from server
        const result = await peekFromServer();
        
        // Check if queue is empty
        if (result.front === null) {
            showMessage('Queue is empty!', 'error');
            return;
        }
        
        // Get current queue state to highlight the front item
        const queue = await getQueue();
        // Highlight index 0 (the front)
        renderQueue(queue.items, 0);
        
        // Show info message
        showMessage(`Front element is ${result.front}`, 'info');
    } catch (error) {
        showMessage('Error peeking at queue', 'error');
    }
}

/**
 * Handles the clear button click
 * Removes all items from the queue
 */
async function clearQueue() {
    try {
        // Send clear request to server
        await clearFromServer();
        
        // Update visualization with empty queue
        renderQueue([]);  // [] is an empty array
        
        // Reset info panel
        updateInfo(0, null);
        
        showMessage('Queue cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing queue', 'error');
    }
}


// ============ Event Listeners ============
// Code that runs when the page loads

/**
 * Runs when the HTML page has finished loading
 * Sets up the initial state and keyboard shortcuts
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Load the current queue state from the server
    try {
        // Fetch queue data
        const queue = await getQueue();
        
        // Display the queue
        renderQueue(queue.items);
        
        // Calculate front item (first item, or null if empty)
        const front = queue.items.length > 0 ? queue.items[0] : null;
        
        // Update info panel
        updateInfo(queue.size, front);
    } catch (error) {
        // Log error to browser console if loading fails
        console.error('Error loading queue:', error);
    }
    
    // Add keyboard shortcut: Press Enter in input to enqueue
    const enqueueInput = document.getElementById('enqueueValue');
    
    // Listen for keypress events
    enqueueInput.addEventListener('keypress', (e) => {
        // e is the event object, e.key tells us which key was pressed
        if (e.key === 'Enter') {
            // If Enter was pressed, trigger enqueue
            enqueueItem();
        }
    });
});

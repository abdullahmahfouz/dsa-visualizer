/**
 * Stack Visualizer JavaScript
 * ============================
 * This file handles the frontend interactions for the stack visualizer.
 * 
 * Key Concepts:
 * - fetch() is used to make HTTP requests to our Flask API
 * - async/await makes asynchronous code easier to read
 * - DOM manipulation updates what users see
 */

// ============ API Functions ============
// These functions talk to our Flask backend

/**
 * Fetch the current state of the stack from the server
 */
async function getStack() {
    // fetch() returns a Promise - await pauses until it completes
    const response = await fetch('/api/stack');
    const data = await response.json();  // Parse JSON response
    return data;
}

/**
 * Push a value onto the stack
 * @param {number} value - The value to push
 */
async function pushToServer(value) {
    const response = await fetch('/api/stack/push', {
        method: 'POST',  // POST = sending data to server
        headers: {
            'Content-Type': 'application/json'  // Tell server we're sending JSON
        },
        body: JSON.stringify({ value: value })  // Convert JS object to JSON string
    });
    return await response.json();
}

/**
 * Pop a value from the stack
 */
async function popFromServer() {
    const response = await fetch('/api/stack/pop', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Clear the entire stack
 */
async function clearFromServer() {
    const response = await fetch('/api/stack/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============

/**
 * Update the visual representation of the stack
 * @param {Array} items - Array of stack items
 */
function renderStack(items) {
    const container = document.getElementById('stackVisual');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="stack-empty">Stack is empty. Push some items!</div>';
        return;
    }
    
    // Build HTML for each stack item
    // We reverse because we want to show top of stack at the top visually
    let html = '';
    for (let i = items.length - 1; i >= 0; i--) {
        const isTop = i === items.length - 1;
        html += `
            <div class="stack-item ${isTop ? 'stack-top' : ''}" style="animation-delay: ${(items.length - 1 - i) * 0.05}s">
                <span class="item-value">${items[i]}</span>
                ${isTop ? '<span class="top-label">← TOP</span>' : ''}
            </div>
        `;
    }
    
    container.innerHTML = html;
}

/**
 * Update the info panel (size and top element)
 */
function updateInfo(size, top) {
    document.getElementById('stackSize').textContent = size;
    document.getElementById('stackTop').textContent = top !== null ? top : 'Empty';
}

/**
 * Show a message to the user
 * @param {string} text - Message text
 * @param {string} type - 'success', 'error', or 'info'
 */
function showMessage(text, type = 'info') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message message-${type}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        messageEl.textContent = '';
        messageEl.className = 'message';
    }, 3000);
}


// ============ Button Click Handlers ============

/**
 * Handle Push button click
 */
async function pushItem() {
    const input = document.getElementById('pushValue');
    const value = input.value.trim();
    
    // Validation
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await pushToServer(Number(value));
        renderStack(result.items);
        updateInfo(result.size, result.items[result.items.length - 1]);
        showMessage(`Pushed ${value} onto the stack!`, 'success');
        input.value = '';  // Clear input
        input.focus();
    } catch (error) {
        showMessage('Error pushing to stack', 'error');
    }
}

/**
 * Handle Pop button click
 */
async function popItem() {
    try {
        const result = await popFromServer();
        
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        renderStack(result.items);
        updateInfo(result.size, result.items.length > 0 ? result.items[result.items.length - 1] : null);
        showMessage(`Popped ${result.popped} from the stack!`, 'success');
    } catch (error) {
        showMessage('Error popping from stack', 'error');
    }
}

/**
 * Handle Peek button click
 */
async function peekItem() {
    try {
        const data = await getStack();
        if (data.top !== null) {
            showMessage(`Top element is: ${data.top}`, 'info');
            // Highlight the top element
            const topEl = document.querySelector('.stack-top');
            if (topEl) {
                topEl.classList.add('highlight');
                setTimeout(() => topEl.classList.remove('highlight'), 1000);
            }
        } else {
            showMessage('Stack is empty!', 'error');
        }
    } catch (error) {
        showMessage('Error peeking stack', 'error');
    }
}

/**
 * Handle Clear button click
 */
async function clearStack() {
    try {
        await clearFromServer();
        renderStack([]);
        updateInfo(0, null);
        showMessage('Stack cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing stack', 'error');
    }
}


// ============ Initialization ============

/**
 * Load the initial stack state when page loads
 */
async function init() {
    try {
        const data = await getStack();
        renderStack(data.items);
        updateInfo(data.size, data.top);
    } catch (error) {
        showMessage('Error loading stack', 'error');
    }
}

// Allow Enter key to push items
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    document.getElementById('pushValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            pushItem();
        }
    });
});

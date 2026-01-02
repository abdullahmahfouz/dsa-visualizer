/**
 * Queue Visualizer JavaScript
 * ============================
 * This file handles the frontend interactions for the queue visualizer.
 * 
 * Queue = FIFO (First In, First Out)
 * - Enqueue: Add to BACK
 * - Dequeue: Remove from FRONT
 * 
 * Think of it like a line at a store!
 */

// ============ API Functions ============
// These functions talk to our Flask backend

/**
 * Fetch the current state of the queue from the server
 */
async function getQueue() {
    const response = await fetch('/api/queue');
    const data = await response.json();
    return data;
}

/**
 * Add a value to the back of the queue
 * @param {number} value - The value to enqueue
 */
async function enqueueToServer(value) {
    const response = await fetch('/api/queue/enqueue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

/**
 * Remove a value from the front of the queue
 */
async function dequeueFromServer() {
    const response = await fetch('/api/queue/dequeue', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Clear the entire queue
 */
async function clearFromServer() {
    const response = await fetch('/api/queue/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============

/**
 * Update the visual representation of the queue
 * @param {Array} items - Array of queue items
 */
function renderQueue(items) {
    const container = document.getElementById('queueVisual');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="queue-empty">Queue is empty. Enqueue some items!</div>';
        return;
    }
    
    // Build HTML for each queue item
    // First item = front, Last item = back
    let html = '';
    for (let i = 0; i < items.length; i++) {
        const isFront = i === 0;
        const isBack = i === items.length - 1;
        
        let label = '';
        if (isFront && isBack) {
            label = 'FRONT & BACK';
        } else if (isFront) {
            label = 'FRONT';
        } else if (isBack) {
            label = 'BACK';
        }
        
        html += `
            <div class="queue-item ${isFront ? 'queue-front' : ''} ${isBack ? 'queue-back' : ''}" 
                 style="animation-delay: ${i * 0.05}s">
                <span class="item-value">${items[i]}</span>
                ${label ? `<span class="position-label">${label}</span>` : ''}
            </div>
        `;
    }
    
    container.innerHTML = html;
}

/**
 * Update the info panel (size and front element)
 */
function updateInfo(size, front) {
    document.getElementById('queueSize').textContent = size;
    document.getElementById('queueFront').textContent = front !== null ? front : 'Empty';
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
 * Handle Enqueue button click
 */
async function enqueueItem() {
    const input = document.getElementById('enqueueValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await enqueueToServer(Number(value));
        renderQueue(result.items);
        updateInfo(result.size, result.items[0]);
        showMessage(`Enqueued ${value} to the back!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error enqueueing to queue', 'error');
    }
}

/**
 * Handle Dequeue button click
 */
async function dequeueItem() {
    try {
        const result = await dequeueFromServer();
        
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        renderQueue(result.items);
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        showMessage(`Dequeued ${result.dequeued} from the front!`, 'success');
    } catch (error) {
        showMessage('Error dequeuing from queue', 'error');
    }
}

/**
 * Handle Peek button click
 */
async function peekItem() {
    try {
        const data = await getQueue();
        if (data.front !== null) {
            showMessage(`Front element is: ${data.front}`, 'info');
            // Highlight the front element
            const frontEl = document.querySelector('.queue-front');
            if (frontEl) {
                frontEl.classList.add('highlight');
                setTimeout(() => frontEl.classList.remove('highlight'), 1000);
            }
        } else {
            showMessage('Queue is empty!', 'error');
        }
    } catch (error) {
        showMessage('Error peeking queue', 'error');
    }
}

/**
 * Handle Clear button click
 */
async function clearQueue() {
    try {
        await clearFromServer();
        renderQueue([]);
        updateInfo(0, null);
        showMessage('Queue cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing queue', 'error');
    }
}


// ============ Initialization ============

/**
 * Load the initial queue state when page loads
 */
async function init() {
    try {
        const data = await getQueue();
        renderQueue(data.items);
        updateInfo(data.size, data.front);
    } catch (error) {
        showMessage('Error loading queue', 'error');
    }
}

// Run init when page loads, and allow Enter key to enqueue
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    document.getElementById('enqueueValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enqueueItem();
        }
    });
});

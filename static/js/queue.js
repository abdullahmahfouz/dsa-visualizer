/**
 * Queue Visualizer JavaScript
 * ============================
 * Handles the frontend interactions for the queue visualizer.
 */

// ============ API Functions ============

async function getQueue() {
    const response = await fetch('/api/queue');
    return await response.json();
}

async function enqueueToServer(value) {
    const response = await fetch('/api/queue/enqueue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

async function dequeueFromServer() {
    const response = await fetch('/api/queue/dequeue', {
        method: 'POST'
    });
    return await response.json();
}

async function peekFromServer() {
    const response = await fetch('/api/queue/peek');
    return await response.json();
}

async function clearFromServer() {
    const response = await fetch('/api/queue/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============

function renderQueue(items, highlightIndex = -1) {
    const container = document.getElementById('queueVisual');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="queue-empty">Queue is empty. Enqueue some items!</div>';
        return;
    }
    
    let html = '';
    // Render queue from front to back
    for (let i = 0; i < items.length; i++) {
        const isFront = i === 0;
        const isBack = i === items.length - 1;
        const isHighlighted = i === highlightIndex;
        
        html += `
            <div class="queue-item ${isFront ? 'queue-front' : ''} ${isBack ? 'queue-back' : ''} ${isHighlighted ? 'queue-highlight' : ''}" 
                 style="animation-delay: ${i * 0.1}s">
                <div class="queue-value">${items[i]}</div>
                ${isFront ? '<span class="front-label">FRONT</span>' : ''}
                ${isBack ? '<span class="back-label">BACK</span>' : ''}
            </div>
        `;
    }
    
    container.innerHTML = html;
    lucide.createIcons();
}

function updateInfo(size, front) {
    document.getElementById('queueSize').textContent = size;
    document.getElementById('queueFront').textContent = front !== null && front !== undefined ? front : 'Empty';
}

function showMessage(text, type = 'info') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message message-${type}`;
    
    setTimeout(() => {
        messageEl.textContent = '';
        messageEl.className = 'message';
    }, 3000);
}


// ============ Button Click Handlers ============

async function enqueueItem() {
    const input = document.getElementById('enqueueValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await enqueueToServer(Number(value));
        renderQueue(result.items, result.items.length - 1);
        updateInfo(result.size, result.items[0]);
        showMessage(`Enqueued ${value} to queue!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error enqueueing to queue', 'error');
    }
}

async function dequeueItem() {
    try {
        const result = await dequeueFromServer();
        
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        renderQueue(result.items);
        const front = result.items.length > 0 ? result.items[0] : null;
        updateInfo(result.size, front);
        showMessage(`Dequeued ${result.dequeued} from queue!`, 'success');
    } catch (error) {
        showMessage('Error dequeuing from queue', 'error');
    }
}

async function peekItem() {
    try {
        const result = await peekFromServer();
        
        if (result.front === null) {
            showMessage('Queue is empty!', 'error');
            return;
        }
        
        // Get current queue to highlight front
        const queue = await getQueue();
        renderQueue(queue.items, 0);
        showMessage(`Front element is ${result.front}`, 'info');
    } catch (error) {
        showMessage('Error peeking at queue', 'error');
    }
}

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


// ============ Event Listeners ============

document.addEventListener('DOMContentLoaded', async () => {
    // Load initial queue state
    try {
        const queue = await getQueue();
        renderQueue(queue.items);
        const front = queue.items.length > 0 ? queue.items[0] : null;
        updateInfo(queue.size, front);
    } catch (error) {
        console.error('Error loading queue:', error);
    }
    
    // Add Enter key listener for enqueue input
    const enqueueInput = document.getElementById('enqueueValue');
    enqueueInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enqueueItem();
        }
    });
});

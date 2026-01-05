/**
 * Stack Visualizer JavaScript
 * ============================
 * Handles the frontend interactions for the stack visualizer.
 */

// ============ API Functions ============

async function getStack() {
    const response = await fetch('/api/stack');
    return await response.json();
}

async function pushToServer(value) {
    const response = await fetch('/api/stack/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

async function popFromServer() {
    const response = await fetch('/api/stack/pop', {
        method: 'POST'
    });
    return await response.json();
}

async function peekFromServer() {
    const response = await fetch('/api/stack/peek');
    return await response.json();
}

async function clearFromServer() {
    const response = await fetch('/api/stack/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============

function renderStack(items, highlightIndex = -1) {
    const container = document.getElementById('stackVisual');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="stack-empty">Stack is empty. Push some items!</div>';
        return;
    }
    
    let html = '';
    // Render stack from top to bottom (reverse order)
    for (let i = items.length - 1; i >= 0; i--) {
        const isTop = i === items.length - 1;
        const isHighlighted = i === highlightIndex;
        
        html += `
            <div class="stack-item ${isTop ? 'stack-top' : ''} ${isHighlighted ? 'stack-highlight' : ''}" 
                 style="animation-delay: ${(items.length - 1 - i) * 0.1}s">
                ${isTop ? '<span class="top-marker">TOP →</span>' : ''}
                <div class="stack-value">${items[i]}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    lucide.createIcons();
}

function updateInfo(size, top) {
    document.getElementById('stackSize').textContent = size;
    document.getElementById('stackTop').textContent = top !== null && top !== undefined ? top : 'Empty';
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

async function pushItem() {
    const input = document.getElementById('pushValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await pushToServer(Number(value));
        renderStack(result.items, result.items.length - 1);
        updateInfo(result.size, result.items[result.items.length - 1]);
        showMessage(`Pushed ${value} to stack!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error pushing to stack', 'error');
    }
}

async function popItem() {
    try {
        const result = await popFromServer();
        
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        renderStack(result.items);
        const top = result.items.length > 0 ? result.items[result.items.length - 1] : null;
        updateInfo(result.size, top);
        showMessage(`Popped ${result.popped} from stack!`, 'success');
    } catch (error) {
        showMessage('Error popping from stack', 'error');
    }
}

async function peekItem() {
    try {
        const result = await peekFromServer();
        
        if (result.top === null) {
            showMessage('Stack is empty!', 'error');
            return;
        }
        
        // Get current stack to highlight top
        const stack = await getStack();
        renderStack(stack.items, stack.items.length - 1);
        showMessage(`Top element is ${result.top}`, 'info');
    } catch (error) {
        showMessage('Error peeking at stack', 'error');
    }
}

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


// ============ Event Listeners ============

document.addEventListener('DOMContentLoaded', async () => {
    // Load initial stack state
    try {
        const stack = await getStack();
        renderStack(stack.items);
        const top = stack.items.length > 0 ? stack.items[stack.items.length - 1] : null;
        updateInfo(stack.size, top);
    } catch (error) {
        console.error('Error loading stack:', error);
    }
    
    // Add Enter key listener for push input
    const pushInput = document.getElementById('pushValue');
    pushInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            pushItem();
        }
    });
});

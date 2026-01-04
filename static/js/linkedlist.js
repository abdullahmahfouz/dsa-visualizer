/**
 * Linked List Visualizer JavaScript
 * ==================================
 * Handles the frontend interactions for the linked list visualizer.
 */

// ============ API Functions ============

async function getLinkedList() {
    const response = await fetch('/api/linkedlist');
    return await response.json();
}

async function insertHeadToServer(value) {
    const response = await fetch('/api/linkedlist/insert/head', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

async function insertTailToServer(value) {
    const response = await fetch('/api/linkedlist/insert/tail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

async function insertAtIndexToServer(index, value) {
    const response = await fetch('/api/linkedlist/insert/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: index, value: value })
    });
    return await response.json();
}

async function deleteHeadFromServer() {
    const response = await fetch('/api/linkedlist/delete/head', {
        method: 'POST'
    });
    return await response.json();
}

async function deleteTailFromServer() {
    const response = await fetch('/api/linkedlist/delete/tail', {
        method: 'POST'
    });
    return await response.json();
}

async function deleteAtIndexFromServer(index) {
    const response = await fetch('/api/linkedlist/delete/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: index })
    });
    return await response.json();
}

async function searchFromServer(value) {
    const response = await fetch('/api/linkedlist/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

async function clearFromServer() {
    const response = await fetch('/api/linkedlist/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============

function renderLinkedList(items, highlightIndex = -1) {
    const container = document.getElementById('linkedlistVisual');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="linkedlist-empty">List is empty. Insert some nodes!</div>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < items.length; i++) {
        const isHead = i === 0;
        const isTail = i === items.length - 1;
        const isHighlighted = i === highlightIndex;
        
        html += `
            <div class="node-wrapper" style="animation-delay: ${i * 0.1}s">
                ${isHead ? '<span class="node-label head-label">HEAD</span>' : ''}
                ${isTail ? '<span class="node-label tail-label">TAIL</span>' : ''}
                <div class="node ${isHead ? 'node-head' : ''} ${isTail ? 'node-tail' : ''} ${isHighlighted ? 'node-highlight' : ''}">
                    <div class="node-data">${items[i]}</div>
                    <div class="node-next"><i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i></div>
                </div>
                ${!isTail ? '<div class="node-arrow"><i data-lucide="chevron-right"></i></div>' : '<div class="null-pointer"><span>NULL</span></div>'}
            </div>
        `;
    }
    
    container.innerHTML = html;
    lucide.createIcons();
}

function updateInfo(size, head) {
    document.getElementById('listSize').textContent = size;
    document.getElementById('listHead').textContent = head !== null && head !== undefined ? head : 'Empty';
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

async function insertAtHead() {
    const input = document.getElementById('insertHeadValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await insertHeadToServer(Number(value));
        renderLinkedList(result.items, 0);
        updateInfo(result.size, result.items[0]);
        showMessage(`Inserted ${value} at head!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error inserting at head', 'error');
    }
}

async function insertAtTail() {
    const input = document.getElementById('insertTailValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        const result = await insertTailToServer(Number(value));
        renderLinkedList(result.items, result.items.length - 1);
        updateInfo(result.size, result.items[0]);
        showMessage(`Inserted ${value} at tail!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error inserting at tail', 'error');
    }
}

async function insertAtIndex() {
    const valueInput = document.getElementById('insertIndexValue');
    const indexInput = document.getElementById('insertIndex');
    const value = valueInput.value.trim();
    const index = indexInput.value.trim();
    
    if (value === '' || index === '') {
        showMessage('Please enter both value and index!', 'error');
        return;
    }
    
    try {
        const result = await insertAtIndexToServer(Number(index), Number(value));
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        renderLinkedList(result.items, Number(index));
        updateInfo(result.size, result.items[0]);
        showMessage(`Inserted ${value} at index ${index}!`, 'success');
        valueInput.value = '';
        indexInput.value = '';
    } catch (error) {
        showMessage('Error inserting at index', 'error');
    }
}

async function deleteAtHead() {
    try {
        const result = await deleteHeadFromServer();
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        renderLinkedList(result.items);
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        showMessage(`Deleted ${result.deleted} from head!`, 'success');
    } catch (error) {
        showMessage('Error deleting from head', 'error');
    }
}

async function deleteAtTail() {
    try {
        const result = await deleteTailFromServer();
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        renderLinkedList(result.items);
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        showMessage(`Deleted ${result.deleted} from tail!`, 'success');
    } catch (error) {
        showMessage('Error deleting from tail', 'error');
    }
}

async function deleteAtIndex() {
    const input = document.getElementById('deleteIndex');
    const index = input.value.trim();
    
    if (index === '') {
        showMessage('Please enter an index!', 'error');
        return;
    }
    
    try {
        const result = await deleteAtIndexFromServer(Number(index));
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        renderLinkedList(result.items);
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        showMessage(`Deleted ${result.deleted} at index ${index}!`, 'success');
        input.value = '';
    } catch (error) {
        showMessage('Error deleting at index', 'error');
    }
}

async function searchValue() {
    const input = document.getElementById('searchValue');
    const value = input.value.trim();
    
    if (value === '') {
        showMessage('Please enter a value to search!', 'error');
        return;
    }
    
    try {
        const result = await searchFromServer(Number(value));
        const data = await getLinkedList();
        
        if (result.found) {
            renderLinkedList(data.items, result.index);
            showMessage(`Found ${value} at index ${result.index}!`, 'success');
        } else {
            renderLinkedList(data.items);
            showMessage(`Value ${value} not found!`, 'error');
        }
        input.value = '';
    } catch (error) {
        showMessage('Error searching', 'error');
    }
}

async function clearList() {
    try {
        await clearFromServer();
        renderLinkedList([]);
        updateInfo(0, null);
        showMessage('Linked list cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing list', 'error');
    }
}


// ============ Initialization ============

async function init() {
    try {
        const data = await getLinkedList();
        renderLinkedList(data.items);
        updateInfo(data.size, data.items.length > 0 ? data.items[0] : null);
    } catch (error) {
        showMessage('Error loading linked list', 'error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Allow Enter key for inputs
    document.getElementById('insertHeadValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') insertAtHead();
    });
    document.getElementById('insertTailValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') insertAtTail();
    });
    document.getElementById('searchValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchValue();
    });
});

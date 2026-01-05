/**
 * Linked List Visualizer JavaScript
 * ==================================
 * Handles the frontend interactions for the linked list visualizer.
 * 
 * Linked List = Linear data structure where each node points to the next
 * - Insert at head/tail/index
 * - Delete at head/tail/index
 * - Search for values
 */

// ============ API Functions ============
// Functions that communicate with the Flask backend server

/**
 * Fetches the current state of the linked list from the server
 * @returns {Promise<Object>} Promise that resolves to linked list data
 */
async function getLinkedList() {
    // Make GET request to /api/linkedlist endpoint
    const response = await fetch('/api/linkedlist');
    // Convert JSON response to JavaScript object
    return await response.json();
}

/**
 * Inserts a new node at the head (beginning) of the linked list
 * @param {number|string} value - The value to insert
 * @returns {Promise<Object>} Promise that resolves to updated linked list
 */
async function insertHeadToServer(value) {
    // POST request to insert at head
    const response = await fetch('/api/linkedlist/insert/head', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

/**
 * Inserts a new node at the tail (end) of the linked list
 * @param {number|string} value - The value to insert
 * @returns {Promise<Object>} Promise that resolves to updated linked list
 */
async function insertTailToServer(value) {
    // POST request to insert at tail
    const response = await fetch('/api/linkedlist/insert/tail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })
    });
    return await response.json();
}

/**
 * Inserts a new node at a specific index in the linked list
 * @param {number} index - The position to insert at (0-based)
 * @param {number|string} value - The value to insert
 * @returns {Promise<Object>} Promise that resolves to updated linked list
 */
async function insertAtIndexToServer(index, value) {
    // POST request to insert at specific index
    const response = await fetch('/api/linkedlist/insert/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: index, value: value })  // Send both index and value
    });
    return await response.json();
}

/**
 * Deletes the head (first) node from the linked list
 * @returns {Promise<Object>} Promise that resolves to deleted value and updated list
 */
async function deleteHeadFromServer() {
    // POST request (no body needed - just delete head)
    const response = await fetch('/api/linkedlist/delete/head', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Deletes the tail (last) node from the linked list
 * @returns {Promise<Object>} Promise that resolves to deleted value and updated list
 */
async function deleteTailFromServer() {
    // POST request to delete tail
    const response = await fetch('/api/linkedlist/delete/tail', {
        method: 'POST'
    });
    return await response.json();
}

/**
 * Deletes a node at a specific index in the linked list
 * @param {number} index - The position to delete from (0-based)
 * @returns {Promise<Object>} Promise that resolves to deleted value and updated list
 */
async function deleteAtIndexFromServer(index) {
    // POST request to delete at specific index
    const response = await fetch('/api/linkedlist/delete/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: index })  // Send the index to delete
    });
    return await response.json();
}

/**
 * Searches for a value in the linked list
 * @param {number|string} value - The value to search for
 * @returns {Promise<Object>} Promise that resolves to search result (found, index)
 */
async function searchFromServer(value) {
    // POST request to search for value
    const response = await fetch('/api/linkedlist/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: value })  // Send the value to search for
    });
    return await response.json();
}

/**
 * Removes all nodes from the linked list
 * @returns {Promise<Object>} Promise that resolves to confirmation
 */
async function clearFromServer() {
    // POST request to clear the list
    const response = await fetch('/api/linkedlist/clear', {
        method: 'POST'
    });
    return await response.json();
}


// ============ UI Update Functions ============
// Functions that update what the user sees on the page

/**
 * Renders the linked list visually on the page
 * Shows nodes connected with arrows, with HEAD and TAIL labels
 * @param {Array} items - Array of node values [10, 20, 30]
 * @param {number} highlightIndex - Optional index to highlight (for search results)
 */
function renderLinkedList(items, highlightIndex = -1) {
    // Get the HTML element where linked list will be displayed
    const container = document.getElementById('linkedlistVisual');
    
    // Check if list is empty
    if (items.length === 0) {
        // Show empty message and exit early
        container.innerHTML = '<div class="linkedlist-empty">List is empty. Insert some nodes!</div>';
        return;
    }
    
    // Start building HTML string
    let html = '';
    
    // Loop through each node in the linked list
    for (let i = 0; i < items.length; i++) {
        // Determine node position
        const isHead = i === 0;  // First node is the head
        const isTail = i === items.length - 1;  // Last node is the tail
        const isHighlighted = i === highlightIndex;  // Should this node be highlighted?
        
        // Build HTML for this node
        // Each node has: data, arrow pointer, and connection to next node
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
    
    // Insert the HTML into the page
    container.innerHTML = html;
    // Re-initialize Lucide icons (for arrow icons)
    lucide.createIcons();
}

/**
 * Updates the info panel showing linked list statistics
 * @param {number} size - Current number of nodes in the list
 * @param {number|string|null} head - The head node value, or null if empty
 */
function updateInfo(size, head) {
    // Update size display
    document.getElementById('listSize').textContent = size;
    
    // Update head display
    // Check if head exists, otherwise show 'Empty'
    document.getElementById('listHead').textContent = head !== null && head !== undefined ? head : 'Empty';
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
 * Handles the insert at head button click
 * Adds a new node at the beginning of the linked list
 */
async function insertAtHead() {
    // Get the input element
    const input = document.getElementById('insertHeadValue');
    
    // Get value and remove whitespace
    const value = input.value.trim();
    
    // Validate: check if input is empty
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;  // Exit early if validation fails
    }
    
    try {
        // Send value to server
        // Number(value) converts string to number
        const result = await insertHeadToServer(Number(value));
        
        // Update visualization
        // Highlight index 0 (the head, where we just inserted)
        renderLinkedList(result.items, 0);
        
        // Update info panel
        // Head is the first item (index 0)
        updateInfo(result.size, result.items[0]);
        
        // Show success message
        showMessage(`Inserted ${value} at head!`, 'success');
        
        // Clear input and refocus for next entry
        input.value = '';
        input.focus();
    } catch (error) {
        // Handle errors
        showMessage('Error inserting at head', 'error');
    }
}

/**
 * Handles the insert at tail button click
 * Adds a new node at the end of the linked list
 */
async function insertAtTail() {
    // Get the input element
    const input = document.getElementById('insertTailValue');
    const value = input.value.trim();
    
    // Validate input
    if (value === '') {
        showMessage('Please enter a value!', 'error');
        return;
    }
    
    try {
        // Send value to server
        const result = await insertTailToServer(Number(value));
        
        // Update visualization
        // Highlight the last item (the tail, where we just inserted)
        renderLinkedList(result.items, result.items.length - 1);
        
        // Update info panel (head is still the first item)
        updateInfo(result.size, result.items[0]);
        
        showMessage(`Inserted ${value} at tail!`, 'success');
        input.value = '';
        input.focus();
    } catch (error) {
        showMessage('Error inserting at tail', 'error');
    }
}

/**
 * Handles the insert at index button click
 * Adds a new node at a specific position in the linked list
 */
async function insertAtIndex() {
    // Get both input elements (value and index)
    const valueInput = document.getElementById('insertIndexValue');
    const indexInput = document.getElementById('insertIndex');
    
    // Get values and remove whitespace
    const value = valueInput.value.trim();
    const index = indexInput.value.trim();
    
    // Validate: both fields must be filled
    if (value === '' || index === '') {
        showMessage('Please enter both value and index!', 'error');
        return;
    }
    
    try {
        // Send both index and value to server
        // Number() converts strings to numbers
        const result = await insertAtIndexToServer(Number(index), Number(value));
        
        // Check for errors (e.g., invalid index)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization
        // Highlight the index where we inserted
        renderLinkedList(result.items, Number(index));
        
        // Update info panel
        updateInfo(result.size, result.items[0]);
        
        showMessage(`Inserted ${value} at index ${index}!`, 'success');
        
        // Clear both inputs
        valueInput.value = '';
        indexInput.value = '';
    } catch (error) {
        showMessage('Error inserting at index', 'error');
    }
}

/**
 * Handles the delete head button click
 * Removes the first node from the linked list
 */
async function deleteAtHead() {
    try {
        // Request delete head from server
        const result = await deleteHeadFromServer();
        
        // Check for errors (e.g., list is empty)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization with remaining items
        renderLinkedList(result.items);
        
        // Update info panel
        // New head is the first item, or null if list is now empty
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        
        showMessage(`Deleted ${result.deleted} from head!`, 'success');
    } catch (error) {
        showMessage('Error deleting from head', 'error');
    }
}

/**
 * Handles the delete tail button click
 * Removes the last node from the linked list
 */
async function deleteAtTail() {
    try {
        // Request delete tail from server
        const result = await deleteTailFromServer();
        
        // Check for errors
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization
        renderLinkedList(result.items);
        
        // Update info panel
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        
        showMessage(`Deleted ${result.deleted} from tail!`, 'success');
    } catch (error) {
        showMessage('Error deleting from tail', 'error');
    }
}

/**
 * Handles the delete at index button click
 * Removes a node at a specific position in the linked list
 */
async function deleteAtIndex() {
    // Get the input element
    const input = document.getElementById('deleteIndex');
    const index = input.value.trim();
    
    // Validate input
    if (index === '') {
        showMessage('Please enter an index!', 'error');
        return;
    }
    
    try {
        // Send index to server
        const result = await deleteAtIndexFromServer(Number(index));
        
        // Check for errors (e.g., invalid index)
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization
        renderLinkedList(result.items);
        
        // Update info panel
        updateInfo(result.size, result.items.length > 0 ? result.items[0] : null);
        
        showMessage(`Deleted ${result.deleted} at index ${index}!`, 'success');
        input.value = '';  // Clear input
    } catch (error) {
        showMessage('Error deleting at index', 'error');
    }
}

/**
 * Handles the search button click
 * Searches for a value in the linked list and highlights it
 */
async function searchValue() {
    // Get the input element
    const input = document.getElementById('searchValue');
    const value = input.value.trim();
    
    // Validate input
    if (value === '') {
        showMessage('Please enter a value to search!', 'error');
        return;
    }
    
    try {
        // Search for the value on the server
        const result = await searchFromServer(Number(value));
        
        // Get current linked list state
        const data = await getLinkedList();
        
        // Check if value was found
        if (result.found) {
            // Highlight the found node at the returned index
            renderLinkedList(data.items, result.index);
            showMessage(`Found ${value} at index ${result.index}!`, 'success');
        } else {
            // Value not found - just render normally
            renderLinkedList(data.items);
            showMessage(`Value ${value} not found!`, 'error');
        }
        input.value = '';  // Clear input
    } catch (error) {
        showMessage('Error searching', 'error');
    }
}

/**
 * Handles the clear button click
 * Removes all nodes from the linked list
 */
async function clearList() {
    try {
        // Send clear request to server
        await clearFromServer();
        
        // Update visualization with empty list
        renderLinkedList([]);  // [] is an empty array
        
        // Reset info panel
        updateInfo(0, null);
        
        showMessage('Linked list cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing list', 'error');
    }
}


// ============ Initialization ============
// Code that runs when the page loads

/**
 * Initializes the linked list visualizer
 * Loads the current state from the server and displays it
 */
async function init() {
    try {
        // Fetch linked list data from server
        const data = await getLinkedList();
        
        // Display the linked list
        renderLinkedList(data.items);
        
        // Calculate head value (first item, or null if empty)
        updateInfo(data.size, data.items.length > 0 ? data.items[0] : null);
    } catch (error) {
        // Show error message if loading fails
        showMessage('Error loading linked list', 'error');
    }
}

/**
 * Runs when the HTML page has finished loading
 * Sets up the initial state and keyboard shortcuts
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the linked list display
    init();
    
    // Add keyboard shortcuts: Press Enter in input fields to submit
    
    // Enter key for insert head input
    document.getElementById('insertHeadValue').addEventListener('keypress', (e) => {
        // e is the event object, e.key tells us which key was pressed
        if (e.key === 'Enter') {
            insertAtHead();  // Trigger insert at head
        }
    });
    
    // Enter key for insert tail input
    document.getElementById('insertTailValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            insertAtTail();  // Trigger insert at tail
        }
    });
    
    // Enter key for search input
    document.getElementById('searchValue').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchValue();  // Trigger search
        }
    });
});

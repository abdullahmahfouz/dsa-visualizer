/**
 * Hash Table Visualizer JavaScript
 * ==================================
 * Handles the frontend interactions for the hash table visualizer.
 * 
 * This file contains:
 * - API functions to communicate with the Flask backend
 * - UI update functions to render the hash table
 * - Button click handlers for user interactions
 * - Event listeners for initialization
 */

// ============ API Functions ============
// These functions make HTTP requests to the Flask backend
// They use async/await to wait for server responses

/**
 * Fetches the current state of the hash table from the server
 * @returns {Promise<Object>} Promise that resolves to hash table data
 */
async function getHashtable() {
    // fetch() makes an HTTP GET request to the server
    const response = await fetch('/api/hashtable');
    // await waits for the response, then converts JSON to JavaScript object
    return await response.json();
}

/**
 * Sends a key-value pair to the server to insert into the hash table
 * @param {string|number} key - The key to insert
 * @param {string|number} value - The value to associate with the key
 * @returns {Promise<Object>} Promise that resolves to the server response
 */
async function insertToServer(key, value) {
    // fetch() with POST method to send data to server
    const response = await fetch('/api/hashtable/insert', {
        method: 'POST',  // HTTP method for creating/updating data
        headers: { 'Content-Type': 'application/json' },  // Tell server we're sending JSON
        // JSON.stringify() converts JavaScript object to JSON string
        body: JSON.stringify({ key: key, value: value })
    });
    // Convert server's JSON response back to JavaScript object
    return await response.json();
}

/**
 * Retrieves a value from the hash table by its key
 * @param {string|number} key - The key to look up
 * @returns {Promise<Object>} Promise that resolves to the value or error
 */
async function getFromServer(key) {
    const response = await fetch('/api/hashtable/get', {
        method: 'POST',  // POST because we're sending data (the key) in the body
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: key })  // Send the key we want to find
    });
    return await response.json();
}

/**
 * Deletes a key-value pair from the hash table
 * @param {string|number} key - The key to delete
 * @returns {Promise<Object>} Promise that resolves to the server response
 */
async function deleteFromServer(key) {
    const response = await fetch('/api/hashtable/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: key })  // Send the key to delete
    });
    return await response.json();
}

/**
 * Clears all key-value pairs from the hash table
 * @returns {Promise<Object>} Promise that resolves to the server response
 */
async function clearFromServer() {
    const response = await fetch('/api/hashtable/clear', {
        method: 'POST'  // No body needed - just clear everything
    });
    return await response.json();
}


// ============ UI Update Functions ============
// These functions update what the user sees on the page

/**
 * Renders the hash table as a grid showing all slots (including empty ones)
 * This is a more complex visualization that shows the internal structure
 * @param {Object} items - Object with key-value pairs like {"apple": 10, "banana": 20}
 * @param {number} capacity - Total number of slots in the hash table
 * @param {string|null} highlightKey - Optional key to highlight (for search results)
 */
function renderHashtable(table, capacity, highlightKey = null, probePath = []) {
    // Get the HTML element where we'll display the hash table
    const container = document.getElementById('hashtableVisual');
    
    // Check if hash table is empty
    if (!table) {
        // If empty, show a message and exit early
        container.innerHTML = '<div class="hashtable-empty">Hash table is empty. Insert some key-value pairs!</div>';
        return;  // Exit function early
    }
    
    // Ensure the container uses the horizontal grid class (avoid nested grid conflicts)
    container.classList.remove('hashtable-container');
    container.classList.add('hashtable-grid');

    // Start building HTML for slots (we'll render slots directly inside the container)
    let html = '';

    // Loop through each slot in the hash table (0 to capacity-1)
    for (let i = 0; i < capacity; i++) {
        const item = table[i];

        const isEmpty = item === null;
        const isDeleted = item === 'DELETED';
        const isFilled = !isEmpty && !isDeleted;

        let key = null;
        let value = null;

        if (isFilled) {
            key = item[0];
            value = item[1];
        }
        
        // Check if this key should be highlighted (for search results)
        const isHighlighted = isFilled && key === highlightKey;
        const isProbed = probePath.includes(i);
        
        // Build HTML for this slot using template literal
        html += `
            <div class="hashtable-slot ${isEmpty ? 'slot-empty' : isDeleted ? 'slot-deleted' : 'slot-filled'} ${isHighlighted ? 'slot-highlight' : ''} ${isProbed ? 'slot-probed' : ''}">
                <div class="slot-index">${i}</div>
                ${isFilled ? `
                    <div class="slot-content">
                        <div class="slot-key">${key}</div>
                        <div class="slot-arrow">→</div>
                        <div class="slot-value">${value}</div>
                    </div>
                ` : isDeleted 
                    ? '<div class="slot-deleted-text">DELETED</div>'
                    : '<div class="slot-empty-text">Empty</div>'
                }
            </div>
        `;
    }
    // Insert the slots HTML directly into the container
    container.innerHTML = html;
    // Re-initialize Lucide icons (for any icons in the HTML)
    lucide.createIcons();
}

/**
 * Renders the hash table as a simple list of key-value pairs
 * This is easier to understand and is the default visualization
 * @param {Object} items - Object with key-value pairs
 * @param {string|null} highlightKey - Optional key to highlight
 */
function renderHashtableSimple(items, highlightKey = null) {
    // Get the container element
    const container = document.getElementById('hashtableVisual');
    
    // Check if empty
    if (Object.keys(items).length === 0) {
        container.innerHTML = '<div class="hashtable-empty">Hash table is empty. Insert some key-value pairs!</div>';
        return;
    }
    
    // Start building HTML
    let html = '<div class="hashtable-items">';
    let i = 0;
    
    // Loop through each key-value pair in the items object
    // Object.entries() returns [["apple", 10], ["banana", 20]]
    // [key, value] destructures each pair
    for (const [key, value] of Object.entries(items)) {
        // Check if this key should be highlighted
        const isHighlighted = key === highlightKey;
        
        // Build HTML for this item
        // ${} inserts variable values into the string
        // animation-delay creates a staggered animation effect
        html += `
            <div class="hashtable-item ${isHighlighted ? 'item-highlight' : ''}" 
                 style="animation-delay: ${i * 0.1}s">
                <div class="item-key">${key}</div>
                <div class="item-arrow">→</div>
                <div class="item-value">${value}</div>
            </div>
        `;
        i++;
    }
    
    // Close container and insert into page
    html += '</div>';
    container.innerHTML = html;
    lucide.createIcons();
}

/**
 * Calculates a hash value for a string (for visualization purposes)
 * This is a simple hash function - not the same as the backend uses
 * @param {string} str - The string to hash
 * @returns {number} A positive integer hash value
 */
function hashString(str) {
    let hash = 0;  // Start with hash = 0
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the character code (ASCII/Unicode value)
        const char = str.charCodeAt(i);
        // Bit shift left by 5 (multiply by 32) and add character code
        // This creates a hash value
        hash = ((hash << 5) - hash) + char;
        // Bitwise AND to keep it as a 32-bit integer
        hash = hash & hash;
    }
    // Return absolute value (always positive)
    return Math.abs(hash);
}

/**
 * Updates the info panel showing hash table statistics
 * @param {number} size - Current number of key-value pairs
 * @param {number} capacity - Total capacity of the hash table
 * @param {number} loadFactor - Load factor (size/capacity)
 */
function updateInfo(size, capacity, loadFactor) {
    // Update size display
    // getElementById() finds the element, .textContent sets its text
    document.getElementById('hashtableSize').textContent = size;
    
    // Update capacity display
    document.getElementById('hashtableCapacity').textContent = capacity;
    
    // Update load factor display
    // toFixed(2) formats number to 2 decimal places
    // If loadFactor is falsy (null/undefined/0), show '0.00'
    document.getElementById('hashtableLoadFactor').textContent = loadFactor ? loadFactor.toFixed(2) : '0.00';
    // Show or hide persistent rehash recommendation note when load factor passes threshold
    try {
        const lf = loadFactor || 0;
        manageRehashNote(lf, false);
    } catch (e) {
        console.warn('Could not update rehash note', e);
    }
}

/**
 * Create or toggle a persistent note recommending rehash when load factor is high
 * @param {number} loadFactor
 * @param {boolean} serverRequested - true if server reported rehash_needed
 */
function manageRehashNote(loadFactor, serverRequested = false) {
    const panel = document.querySelector('.visual-panel');
    if (!panel) return;
    let note = document.getElementById('rehashNote');
    const shouldShow = serverRequested || (loadFactor >= 0.7);
    if (!note && shouldShow) {
        note = document.createElement('div');
        note.id = 'rehashNote';
        note.className = 'note-box rehash-note';
        note.innerHTML = `<i data-lucide="info"></i><div class="note-content"><strong>Recommendation:</strong> Load factor is ${(loadFactor||0).toFixed(2)} — it's time to <em>rehash</em> to a larger table for better performance. (This visualizer will not automatically rehash.)</div>`;
        panel.appendChild(note);
        lucide.createIcons();
        return;
    }
    if (note) {
        if (shouldShow) {
            note.style.display = 'flex';
            note.querySelector('.note-content').innerHTML = `<strong>Recommendation:</strong> Load factor is ${(loadFactor||0).toFixed(2)} — it's time to <em>rehash</em> to a larger table for better performance. (This visualizer will not automatically rehash.)`;
        } else {
            note.style.display = 'none';
        }
    }
}

/**
 * Displays a temporary message to the user
 * @param {string} text - The message to display
 * @param {string} type - Message type: 'info', 'success', or 'error'
 */
function showMessage(text, type = 'info') {
    // Get the message element
    const messageEl = document.getElementById('message');
    
    // Set the message text
    messageEl.textContent = text;
    
    // Set CSS classes for styling (e.g., 'message message-success')
    messageEl.className = `message message-${type}`;
    
    // After 3 seconds (3000 milliseconds), clear the message
    setTimeout(() => {
        messageEl.textContent = '';  // Clear text
        messageEl.className = 'message';  // Reset to base class
    }, 3000);
}


// ============ Button Click Handlers ============
// These functions are called when the user clicks buttons or submits forms

/**
 * Handles the insert button click
 * Gets key and value from input fields and sends them to the server
 */
async function insertItem() {
    // Get the input elements from the HTML
    const keyInput = document.getElementById('insertKey');
    const valueInput = document.getElementById('insertValue');
    
    // Get the values and remove whitespace with trim()
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();
    
    // Validate: check if either field is empty
    if (key === '' || value === '') {
        showMessage('Please enter both key and value!', 'error');
        return;  // Exit early if validation fails
    }

    const currentHashtable = await getHashtable();
    if (currentHashtable.size >= 7) {
        showMessage('Hash table is full! Cannot add more than 7 items.', 'error');
        return;
    }
    
    // try/catch handles errors gracefully
    try {
        // Send data to server and wait for response
        const result = await insertToServer(key, value);
        
        // Check if server returned an error
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update the visualization with new data
        const hashtable = await getHashtable();
        
        let probePath = [];
        if (result.start_index !== result.final_index) {
            // Show detailed collision message with indices
            showMessage(`Collision for "${key}": hashed to index ${result.start_index}, placed at ${result.final_index}.`, 'info');
            let i = result.start_index;
            while (i !== result.final_index) {
                probePath.push(i);
                i = (i + 1) % hashtable.capacity;
            }
        }
        renderHashtable(hashtable.table, hashtable.capacity, key, probePath);
        // If server indicates a rehash would have occurred but was prevented by the visualizer cap,
        // show an explanatory note to the user (no server-side resizing performed).
        if (result.rehash_needed) {
            showMessage('Table reached resize threshold — would rehash, but max capacity (7) is enforced in this visualizer.', 'info');
            // also show the persistent recommendation note
            manageRehashNote(hashtable.load_factor || hashtable.loadFactor || 0, true);
        }
        
        // Update the info panel with new statistics
        updateInfo(hashtable.size, hashtable.capacity, hashtable.load_factor);
        
        // Show success message
        showMessage(`Inserted ${key}: ${value}!`, 'success');
        
        // Clear the input fields
        keyInput.value = '';
        valueInput.value = '';
        
        // Put cursor back in the key input for next entry
        keyInput.focus();
    } catch (error) {
        // If something goes wrong, show error message
        showMessage('Error inserting item', 'error');
    }
}

/**
 * Handles the get/search button click
 * Retrieves a value by its key from the hash table
 */
async function getItem() {
    // Get the input element
    const keyInput = document.getElementById('getKey');
    const key = keyInput.value.trim();
    
    // Validate input
    if (key === '') {
        showMessage('Please enter a key!', 'error');
        return;
    }
    
    try {
        // Request the value from server
        const result = await getFromServer(key);
        
        // Check for errors
        if (result.error) {
            showMessage(result.error, 'error');
            // Refresh visualization to show current state
            const hashtable = await getHashtable();
            renderHashtable(hashtable.table, hashtable.capacity);
            return;
        }
        
        // Get current hash table state and highlight the found key
        const hashtable = await getHashtable();
        renderHashtable(hashtable.table, hashtable.capacity, key);  // Highlight the key
        showMessage(`Found ${key}: ${result.value}`, 'success');
        keyInput.value = '';  // Clear input
    } catch (error) {
        showMessage('Error getting item', 'error');
    }
}

/**
 * Handles the delete button click
 * Removes a key-value pair from the hash table
 */
async function deleteItem() {
    const keyInput = document.getElementById('deleteKey');
    const key = keyInput.value.trim();
    
    // Validate input
    if (key === '') {
        showMessage('Please enter a key!', 'error');
        return;
    }
    
    try {
        // Send delete request to server
        const result = await deleteFromServer(key);
        
        // Check for errors
        if (result.error) {
            showMessage(result.error, 'error');
            return;
        }
        
        // Update visualization with remaining items
        const hashtable = await getHashtable();
        renderHashtable(hashtable.table, hashtable.capacity);
        
        // Update info panel
        updateInfo(hashtable.size, hashtable.capacity, hashtable.load_factor);
        
        showMessage(`Deleted ${key}!`, 'success');
        keyInput.value = '';  // Clear input
    } catch (error) {
        showMessage('Error deleting item', 'error');
    }
}

/**
 * Handles the clear button click
 * Removes all key-value pairs from the hash table
 */
async function clearHashtable() {
    try {
        // Send clear request to server
        await clearFromServer();
        
        // Update visualization with empty hash table
        const hashtable = await getHashtable();
        renderHashtable(hashtable.table, hashtable.capacity);
        
        // Reset info panel to initial values
        updateInfo(hashtable.size, hashtable.capacity, hashtable.load_factor);
        
        showMessage('Hash table cleared!', 'success');
    } catch (error) {
        showMessage('Error clearing hash table', 'error');
    }
}


// ============ Event Listeners ============
// These run when the page loads and set up keyboard shortcuts

/**
 * This runs when the HTML page has finished loading
 * DOMContentLoaded event fires when HTML is parsed (before images load)
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Load the current hash table state from the server
    try {
        // Fetch data from server
        const hashtable = await getHashtable();
        
        // Display the hash table
        renderHashtable(hashtable.table, hashtable.capacity);
        
        // Update the info panel
        updateInfo(hashtable.size, hashtable.capacity, hashtable.load_factor);
    } catch (error) {
        // If loading fails, log error to browser console
        console.error('Error loading hash table:', error);
    }
    
    // Set up keyboard shortcuts (Enter key to submit)
    // Get all input elements
    const insertKeyInput = document.getElementById('insertKey');
    const insertValueInput = document.getElementById('insertValue');
    const getKeyInput = document.getElementById('getKey');
    const deleteKeyInput = document.getElementById('deleteKey');
    
    // Add Enter key listener to insert key input
    // If element exists (check prevents errors if HTML doesn't have it)
    if (insertKeyInput) {
        // Listen for keypress events
        insertKeyInput.addEventListener('keypress', (e) => {
            // e is the event object, e.key is which key was pressed
            if (e.key === 'Enter') {
                // Move focus to value input (better UX)
                insertValueInput.focus();
            }
        });
    }
    
    // Add Enter key listener to insert value input
    if (insertValueInput) {
        insertValueInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                // Submit the form when Enter is pressed
                insertItem();
            }
        });
    }
    
    // Add Enter key listener to get/search input
    if (getKeyInput) {
        getKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                getItem();
            }
        });
    }
    
    // Add Enter key listener to delete input
    if (deleteKeyInput) {
        deleteKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                deleteItem();
            }
        });
    }
});
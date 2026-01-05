/**
 * Code Tabs - Language Switcher
 * =============================
 * Handles switching between different programming language implementations
 * 
 * This file manages:
 * - Tab switching between Python, JavaScript, Java, C#, C++, C
 * - Copy to clipboard functionality for code blocks
 */

/**
 * Runs when the HTML page has finished loading
 * Sets up tab switching and copy button functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // ============ Tab Switching ============
    // Get all tab buttons (Python, JavaScript, Java, etc.)
    // querySelectorAll() returns a list of all matching elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    const codePanels = document.querySelectorAll('.code-panel');
    
    // Add click event listener to each tab button
    // forEach() loops through each button in the list
    tabButtons.forEach(button => {
        // Listen for click events on this button
        button.addEventListener('click', () => {
            // Get the language from the button's data-lang attribute
            // e.g., "python", "javascript", "java"
            const lang = button.getAttribute('data-lang');
            
            // Remove 'active' class from ALL buttons and panels
            // This hides all code panels and unhighlights all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            codePanels.forEach(panel => panel.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');
            
            // Find the code panel that matches this language
            // querySelector() finds the first matching element
            // [data-lang="${lang}"] is an attribute selector
            document.querySelector(`.code-panel[data-lang="${lang}"]`).classList.add('active');
        });
    });

    // ============ Copy Button Functionality ============
    // Get all copy buttons (one for each code block)
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    // Add click event listener to each copy button
    copyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            // Prevent default button behavior
            e.preventDefault();
            // Stop event from bubbling up to parent elements
            e.stopPropagation();
            
            // Find the <pre> element that contains this button
            // closest() searches up the DOM tree to find the nearest matching parent
            const pre = button.closest('pre');
            
            // Find the <code> element inside the <pre>
            // querySelector() finds the first matching child element
            const codeElement = pre.querySelector('code');
            
            // Get the text content (the actual code)
            // textContent gets plain text, ignoring HTML tags
            const codeText = codeElement.textContent;
            
            // Try modern clipboard API first (works in newer browsers)
            try {
                // navigator.clipboard is the modern clipboard API
                // writeText() copies text to clipboard
                await navigator.clipboard.writeText(codeText);
                
                // Update button to show "Copied!" with checkmark icon
                button.innerHTML = '<i data-lucide="check"></i> Copied!';
                button.classList.add('copied');  // Add CSS class for styling
                
                // Re-initialize Lucide icons (for the new checkmark icon)
                lucide.createIcons();
                
                // Reset button back to "Copy" after 2 seconds
                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy"></i> Copy';
                    button.classList.remove('copied');
                    lucide.createIcons();
                }, 2000);  // 2000 milliseconds = 2 seconds
            } catch (err) {
                // Fallback for older browsers that don't support clipboard API
                // Create a temporary textarea element
                const textArea = document.createElement('textarea');
                textArea.value = codeText;  // Set the code text
                
                // Position it off-screen so user doesn't see it
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                
                // Add it to the page (needed for select() to work)
                document.body.appendChild(textArea);
                
                // Select all the text
                textArea.select();
                
                // Try old clipboard method (document.execCommand)
                try {
                    document.execCommand('copy');  // Copy selected text
                    // Update button to show success
                    button.innerHTML = '<i data-lucide="check"></i> Copied!';
                    button.classList.add('copied');
                } catch (fallbackErr) {
                    // If even the fallback fails, show error
                    button.innerHTML = '<i data-lucide="x"></i> Failed';
                }
                
                // Remove the temporary textarea
                document.body.removeChild(textArea);
                
                // Re-initialize icons
                lucide.createIcons();
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy"></i> Copy';
                    button.classList.remove('copied');
                    lucide.createIcons();
                }, 2000);
            }
        });
    });
});

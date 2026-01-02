/**
 * Code Tabs - Language Switcher
 * =============================
 * Handles switching between different programming language implementations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    const codePanels = document.querySelectorAll('.code-panel');
    
    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            codePanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.querySelector(`.code-panel[data-lang="${lang}"]`).classList.add('active');
        });
    });
});

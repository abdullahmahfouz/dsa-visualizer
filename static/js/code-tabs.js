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

    // Copy button functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const pre = button.closest('pre');
            const codeElement = pre.querySelector('code');
            const codeText = codeElement.textContent;
            
            try {
                await navigator.clipboard.writeText(codeText);
                
                // Update button text and style
                button.innerHTML = '<i data-lucide="check"></i> Copied!';
                button.classList.add('copied');
                
                // Re-initialize lucide icons for the new icon
                lucide.createIcons();
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy"></i> Copy';
                    button.classList.remove('copied');
                    lucide.createIcons();
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = codeText;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    button.innerHTML = '<i data-lucide="check"></i> Copied!';
                    button.classList.add('copied');
                } catch (fallbackErr) {
                    button.innerHTML = '<i data-lucide="x"></i> Failed';
                }
                
                document.body.removeChild(textArea);
                lucide.createIcons();
                
                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy"></i> Copy';
                    button.classList.remove('copied');
                    lucide.createIcons();
                }, 2000);
            }
        });
    });
});

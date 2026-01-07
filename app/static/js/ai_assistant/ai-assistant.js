// AI Assistant functionality for DSA Visualizer
class AIAssistant {
    constructor(context) {
        this.context = context;
        this.questionInput = document.getElementById('ai-question');
        this.askButton = document.getElementById('ask-ai-btn');
        this.responseDiv = document.getElementById('ai-response');

        this.init();
    }

    init() {
        if (this.askButton && this.questionInput) {
            this.askButton.addEventListener('click', () => this.askQuestion());
            this.questionInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.askQuestion();
                }
            });
        }
    }

    async askQuestion() {
        const question = this.questionInput.value.trim();
        if (!question) return;

        // Clear previous response and show loading
        this.responseDiv.innerHTML = '<div class="ai-loading">Thinking...</div>';
        this.askButton.disabled = true;
        const originalBtnText = this.askButton.textContent;
        this.askButton.textContent = 'Asking...';

        const maxRetries = 3;
        let attempt = 0;
        let handled = false;

        while (attempt <= maxRetries && !handled) {
            try {
                if (attempt > 0) {
                    // small status update to indicate retry
                    this.responseDiv.innerHTML = `<div class="ai-loading">Retrying... (attempt ${attempt + 1} of ${maxRetries + 1})</div>`;
                    this.askButton.textContent = `Retry ${attempt}/${maxRetries}`;
                }

                const response = await fetch('/api/ask-ai', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: question, code: this.context })
                });

                let data = null;
                try { data = await response.json(); } catch (e) { /* ignore json parse errors */ }

                if (response.ok) {
                    this.responseDiv.innerHTML = `<div class="ai-answer">${data && data.answer ? data.answer : 'No answer returned.'}</div>`;
                    handled = true;
                    break;
                }

                // If service overloaded, retry with exponential backoff
                if (response.status === 503 && attempt < maxRetries) {
                    attempt++;
                    const waitMs = 500 * Math.pow(2, attempt - 1);
                    await this._wait(waitMs);
                    continue;
                }

                // Other non-OK response: show server-provided error or generic
                const errMsg = (data && data.error) ? data.error : `Server returned ${response.status} ${response.statusText}`;
                this.responseDiv.innerHTML = `<div class="ai-error"> Error: ${errMsg}</div>`;
                handled = true;
                break;

            } catch (error) {
                console.error('AI Assistant Error:', error);
                // Network error: retry if attempts remain
                if (attempt < maxRetries) {
                    attempt++;
                    const waitMs = 500 * Math.pow(2, attempt - 1);
                    await this._wait(waitMs);
                    continue;
                }

                this.responseDiv.innerHTML = `<div class="ai-error"> Network error: ${error.message}</div>`;
                handled = true;
                break;
            }
        }

        this.askButton.disabled = false;
        this.askButton.textContent = originalBtnText || 'Ask';
    }

    _wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}


// Initialize AI Assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the data structure context from the page
    const contextMap = {
        '/stack': 'Stack data structure',
        '/queue': 'Queue data structure',
        '/linkedlist': 'Singly Linked List data structure',
        '/hashtable': 'Hash Table with Linear Probing data structure'
    };

    const currentPath = window.location.pathname;
    const context = contextMap[currentPath] || 'Data Structures';

    // Initialize the AI assistant
    new AIAssistant(context);
});
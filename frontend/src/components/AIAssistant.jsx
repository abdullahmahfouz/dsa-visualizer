import React, { useState } from 'react';
import { Bot } from 'lucide-react';

function AIAssistant({ context = 'Data Structures' }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Get context-specific placeholder examples
  const getPlaceholder = () => {
    const contextLower = context.toLowerCase();
    if (contextLower.includes('stack')) return 'e.g., How does LIFO work?';
    if (contextLower.includes('queue')) return 'e.g., What is FIFO?';
    if (contextLower.includes('linked list')) return 'e.g., How do I insert at the head?';
    if (contextLower.includes('hash')) return 'e.g., What is a collision?';
    if (contextLower.includes('binary tree') || contextLower.includes('traversal')) 
      return 'e.g., What is inorder traversal?';
    return 'e.g., How does this work?';
  };

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim(), code: context })
      });

      const data = await res.json();
      
      if (res.ok) {
        setResponse(data.answer || 'No answer returned.');
      } else {
        setResponse(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      setResponse(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      askQuestion();
    }
  };

  return (
    <div className="ai-assistant">
      <h3>
        <Bot />
        AI Assistant
      </h3>
      <p>Ask me anything about {context.toLowerCase()}!</p>
      <div className="ai-input-group">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={getPlaceholder()}
          disabled={loading}
        />
        <button onClick={askQuestion} disabled={loading}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </div>
      <div id="ai-response">
        {loading && <div className="ai-loading">Thinking...</div>}
        {response && (
          <div className={response.startsWith('Error') ? 'ai-error' : 'ai-answer'}>
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;


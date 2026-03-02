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
        setResponse('Currently not working, try again later.');
      }
    } catch (error) {
      setResponse('Currently not working, try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      askQuestion();
    }
  };

  // Simple Markdown-like formatter
  const formatResponse = (text) => {
    if (!text) return null;

    // Split by code blocks (```code```)
    const parts = text.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      // Handle Code Blocks
      if (part.startsWith('```')) {
        const codeContent = part.replace(/```(\w+)?\n?/, '').replace(/```$/, '');
        const language = part.match(/```(\w+)/)?.[1] || '';
        
        return (
          <div key={index} className="ai-code-block">
            {language && <div className="ai-code-lang">{language}</div>}
            <pre><code>{codeContent.trim()}</code></pre>
          </div>
        );
      }

      // Handle Bold (**text**) and inline code (`code`)
      // This is a simple replacement that handles common markdown patterns
      let formattedPart = part;
      
      // Inline code
      const inlineCodeParts = formattedPart.split(/(`[^`]+`)/g);
      return (
        <span key={index}>
          {inlineCodeParts.map((inlinePart, i) => {
            if (inlinePart.startsWith('`') && inlinePart.endsWith('`')) {
              return <code key={i} className="ai-inline-code">{inlinePart.slice(1, -1)}</code>;
            }
            
            // Bold text
            const boldParts = inlinePart.split(/(\*\*[^*]+\*\*)/g);
            return boldParts.map((boldPart, j) => {
              if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                return <strong key={j}>{boldPart.slice(2, -2)}</strong>;
              }
              return boldPart;
            });
          })}
        </span>
      );
    });
  };

  return (
    <div className="ai-assistant">
      <div className="ai-header">
        <Bot size={18} />
        <h3>AI Assistant</h3>
      </div>
      <p className="ai-subtitle">Ask me anything about {context.toLowerCase().includes('problem') ? 'this problem' : context.toLowerCase()}!</p>
      <div className="ai-input-group">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={getPlaceholder()}
          disabled={loading}
        />
        <button onClick={askQuestion} disabled={loading || !question.trim()}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </div>
      <div id="ai-response" className={response ? 'has-content' : ''}>
        {loading && (
          <div className="ai-loading-container">
            <div className="ai-loading-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="ai-loading-text">Analyzing...</div>
          </div>
        )}
        {response && (
          <div className={response.startsWith('Currently not working') ? 'ai-error' : 'ai-answer'}>
            {formatResponse(response)}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;


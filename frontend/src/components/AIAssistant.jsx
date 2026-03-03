import React, { useState } from 'react';
import { Bot } from 'lucide-react';

// ─── Inline renderer ────────────────────────────────────────────────────────
// Handles: **bold**, *italic*, `inline code` within a single line of text.
function renderInline(text, baseKey) {
  const parts = text.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g);
  return parts.map((part, i) => {
    const key = `${baseKey}-i${i}`;
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2)
      return <code key={key} className="ai-inline-code">{part.slice(1, -1)}</code>;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4)
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2)
      return <em key={key} className="ai-md-em">{part.slice(1, -1)}</em>;
    return part || null;
  });
}

// ─── Block renderer ──────────────────────────────────────────────────────────
// Parses a plain-text segment (no fenced code blocks) into typed blocks,
// then renders each block with the correct HTML element.
function renderTextSegment(text, segKey) {
  const lines = text.split('\n');
  const blocks = [];
  let paraLines = [];
  let listItems = [];
  let listType = null;

  const flushPara = () => {
    const content = paraLines.join(' ').trim();
    if (content) blocks.push({ type: 'p', content });
    paraLines = [];
  };
  const flushList = () => {
    if (listItems.length) {
      blocks.push({ type: listType, items: [...listItems] });
      listItems = [];
      listType = null;
    }
  };

  for (const line of lines) {
    const t = line.trim();

    // Blank line → flush current paragraph and list
    if (!t) { flushPara(); flushList(); continue; }

    const h1 = t.match(/^# (.+)$/);
    const h2 = t.match(/^## (.+)$/);
    const h3 = t.match(/^### (.+)$/);
    const hr = /^---+$/.test(t);
    const bq = t.match(/^> (.+)$/);
    const ul = t.match(/^[-*+] (.+)$/);
    const ol = t.match(/^\d+\. (.+)$/);

    if (h1 || h2 || h3) {
      flushPara(); flushList();
      if (h3)      blocks.push({ type: 'h3', content: h3[1] });
      else if (h2) blocks.push({ type: 'h2', content: h2[1] });
      else         blocks.push({ type: 'h1', content: h1[1] });
    } else if (hr) {
      flushPara(); flushList();
      blocks.push({ type: 'hr' });
    } else if (bq) {
      flushPara(); flushList();
      blocks.push({ type: 'blockquote', content: bq[1] });
    } else if (ul) {
      flushPara();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(ul[1]);
    } else if (ol) {
      flushPara();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(ol[1]);
    } else {
      flushList();
      paraLines.push(line);
    }
  }
  flushPara();
  flushList();

  return blocks.map((block, j) => {
    const k = `${segKey}-b${j}`;
    switch (block.type) {
      case 'h1': return <p key={k} className="ai-md-h1">{renderInline(block.content, k)}</p>;
      case 'h2': return <p key={k} className="ai-md-h2">{renderInline(block.content, k)}</p>;
      case 'h3': return <p key={k} className="ai-md-h3">{renderInline(block.content, k)}</p>;
      case 'hr': return <hr key={k} className="ai-md-hr" />;
      case 'blockquote':
        return (
          <blockquote key={k} className="ai-md-blockquote">
            {renderInline(block.content, k)}
          </blockquote>
        );
      case 'ul':
        return (
          <ul key={k} className="ai-md-ul">
            {block.items.map((item, m) => (
              <li key={m}>{renderInline(item, `${k}-li${m}`)}</li>
            ))}
          </ul>
        );
      case 'ol':
        return (
          <ol key={k} className="ai-md-ol">
            {block.items.map((item, m) => (
              <li key={m}>{renderInline(item, `${k}-li${m}`)}</li>
            ))}
          </ol>
        );
      case 'p':
        return <p key={k} className="ai-md-p">{renderInline(block.content, k)}</p>;
      default:
        return null;
    }
  });
}

// ─── Top-level formatter ─────────────────────────────────────────────────────
// Splits the full response on fenced code blocks first (preserving them verbatim),
// then hands every non-code segment to renderTextSegment.
function formatResponse(text) {
  if (!text) return null;

  const segments = [];
  const codeRx = /```(\w*)\n?([\s\S]*?)```/g;
  let last = 0;
  let m;

  while ((m = codeRx.exec(text)) !== null) {
    if (m.index > last) segments.push({ type: 'text', content: text.slice(last, m.index) });
    segments.push({ type: 'code', lang: m[1] || '', content: m[2].trim() });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push({ type: 'text', content: text.slice(last) });

  return segments.map((seg, i) => {
    if (seg.type === 'code') {
      return (
        <div key={i} className="ai-code-block">
          {seg.lang && <div className="ai-code-lang">{seg.lang}</div>}
          <pre><code>{seg.content}</code></pre>
        </div>
      );
    }
    return <React.Fragment key={i}>{renderTextSegment(seg.content, `s${i}`)}</React.Fragment>;
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

function AIAssistant({ context = 'Data Structures' }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const getPlaceholder = () => {
    const c = context.toLowerCase();
    if (c.includes('stack'))  return 'e.g., How does LIFO work?';
    if (c.includes('queue'))  return 'e.g., What is FIFO?';
    if (c.includes('linked list')) return 'e.g., How do I insert at the head?';
    if (c.includes('hash'))   return 'e.g., What is a collision?';
    if (c.includes('binary tree') || c.includes('traversal'))
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
      setResponse(res.ok ? (data.answer || 'No answer returned.') : 'Currently not working, try again later.');
    } catch {
      setResponse('Currently not working, try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') askQuestion(); };

  const isError = response.startsWith('Currently not working');

  return (
    <div className="ai-assistant">
      <div className="ai-header">
        <Bot size={20} />
        <h3>AI Assistant</h3>
      </div>

      <p className="ai-subtitle">
        Ask me anything about{' '}
        {context.toLowerCase().includes('problem') ? 'this problem' : context.toLowerCase()}!
      </p>

      <div className="ai-input-group">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={getPlaceholder()}
          disabled={loading}
          aria-label="Ask a question"
        />
        <button onClick={askQuestion} disabled={loading || !question.trim()}>
          {loading ? 'Asking…' : 'Ask'}
        </button>
      </div>

      {/* Response panel — only rendered when there is something to show */}
      {(loading || response) && (
        <div id="ai-response" className={response ? 'has-content' : ''}>
          {loading && (
            <div className="ai-loading-container">
              <div className="ai-loading-dots">
                <span /><span /><span />
              </div>
              <div className="ai-loading-text">Analyzing…</div>
            </div>
          )}

          {response && (
            <div className={isError ? 'ai-error' : 'ai-answer'}>
              {isError ? response : formatResponse(response)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AIAssistant;

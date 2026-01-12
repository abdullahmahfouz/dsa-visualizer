import React, { useState, useEffect } from 'react';
import { FileCode, Copy } from 'lucide-react';

// Import each data structure's code snippets
import stackSnippets from '../codeSnippets/stack.json';
import queueSnippets from '../codeSnippets/queue.json';
import linkedlistSnippets from '../codeSnippets/linkedlist.json';
import binarytreeSnippets from '../codeSnippets/binarytree.json';
import hashtableSnippets from '../codeSnippets/hashtable.json';

// Combine all snippets into one object
const codeSnippets = {
  stack: stackSnippets,
  queue: queueSnippets,
  linkedlist: linkedlistSnippets,
  binarytree: binarytreeSnippets,
  hashtable: hashtableSnippets
};

function CodeTabs({ dataStructure }) {
  const [activeLang, setActiveLang] = useState('python');
  const [copied, setCopied] = useState(false);

  const allLanguages = ['python', 'javascript', 'java', 'c++', 'c#'];
  
  const availableLanguages = allLanguages.filter(lang => 
    codeSnippets[dataStructure]?.[lang]
  );
  
  const languages = availableLanguages.length > 0 ? availableLanguages : allLanguages;
  const code = codeSnippets[dataStructure]?.[activeLang] || 'Code not available for this data structure';

  // Auto-switch to first available language if current one isn't available
  useEffect(() => {
    if (!codeSnippets[dataStructure]?.[activeLang] && availableLanguages.length > 0) {
      setActiveLang(availableLanguages[0]);
    }
  }, [dataStructure, activeLang, availableLanguages]);

  const getLanguageName = (lang) => {
    const names = {
      python: 'Python',
      javascript: 'JavaScript',
      java: 'Java',
      'c++': 'C++',
      'c#': 'C#'
    };
    return names[lang] || lang;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-section">
      <h2><FileCode /> Implementation</h2>
      
      <div className="code-tabs">
        {languages.map(lang => (
          <button
            key={lang}
            className={`tab-btn ${activeLang === lang ? 'active' : ''}`}
            onClick={() => setActiveLang(lang)}
          >
            <FileCode />
            {getLanguageName(lang)}
          </button>
        ))}
      </div>

      <div className="code-panels">
        <div className="code-panel active">
          <pre>
            <button className="copy-btn" onClick={copyToClipboard}>
              <Copy /> {copied ? 'Copied!' : 'Copy'}
            </button>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeTabs;

import { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const LANGUAGE_CONFIG = {
  python: {
    monacoLang: 'python',
    defaultCode: `def solution(nums):
    # Write your solution here
    pass
`,
  },
};

function CodeEditor({ language, code, onChange, decorations = [], onEditorMount, theme = 'vs-dark' }) {
  const config = LANGUAGE_CONFIG[language] || LANGUAGE_CONFIG.python;
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const decorationIdsRef = useRef([]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    if (onEditorMount) onEditorMount(editor, monaco);
  };

  // Update decorations when they change
  useEffect(() => {
    if (editorRef.current && monacoRef.current) {
      const editor = editorRef.current;
      const monaco = monacoRef.current;

      // Clear old decorations
      decorationIdsRef.current = editor.deltaDecorations(decorationIdsRef.current, []);

      if (decorations.length > 0) {
        const newDecorations = decorations.map(dec => ({
          range: new monaco.Range(dec.startLine, 1, dec.endLine, 1),
          options: {
            isWholeLine: true,
            className: dec.className || 'ai-code-issue-highlight',
            glyphMarginClassName: dec.glyphClassName || 'ai-code-issue-glyph',
            hoverMessage: { value: dec.hoverMessage }
          }
        }));

        decorationIdsRef.current = editor.deltaDecorations([], newDecorations);
      }
    }
  }, [decorations]);

  const handleEditorChange = (value) => {
    onChange(value || '');
  };

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
    fontLigatures: true,
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 4,
    insertSpaces: true,
    wordWrap: 'on',
    padding: { top: 16, bottom: 16 },
    glyphMargin: true,
    suggest: {
      showKeywords: true,
      showSnippets: true,
    },
  };

  return (
    <div className="code-editor-container">
      <Editor
        height="400px"
        language={config.monacoLang}
        value={code}
        theme={theme}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        options={editorOptions}
        loading={<div className="editor-loading">Loading editor...</div>}
      />
    </div>
  );
}

export { LANGUAGE_CONFIG };
export default CodeEditor;

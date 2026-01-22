import Editor from '@monaco-editor/react';

const LANGUAGE_CONFIG = {
  python: {
    monacoLang: 'python',
    defaultCode: `def solution(nums):
    # Write your solution here
    pass
`,
  },
  javascript: {
    monacoLang: 'javascript',
    defaultCode: `function solution(nums) {
    // Write your solution here

}
`,
  },
  cpp: {
    monacoLang: 'cpp',
    defaultCode: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> solution(vector<int>& nums) {
        // Write your solution here

    }
};
`,
  },
  java: {
    monacoLang: 'java',
    defaultCode: `class Solution {
    public int[] solution(int[] nums) {
        // Write your solution here

    }
}
`,
  },
  go: {
    monacoLang: 'go',
    defaultCode: `package main

func solution(nums []int) []int {
    // Write your solution here

}
`,
  },
  rust: {
    monacoLang: 'rust',
    defaultCode: `impl Solution {
    pub fn solution(nums: Vec<i32>) -> Vec<i32> {
        // Write your solution here

    }
}
`,
  },
};

function CodeEditor({ language, code, onChange, theme = 'vs-dark' }) {
  const config = LANGUAGE_CONFIG[language] || LANGUAGE_CONFIG.python;

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
        onChange={handleEditorChange}
        options={editorOptions}
        loading={<div className="editor-loading">Loading editor...</div>}
      />
    </div>
  );
}

export { LANGUAGE_CONFIG };
export default CodeEditor;

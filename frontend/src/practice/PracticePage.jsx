import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Play,
  RotateCcw,
  ChevronRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Code,
  List,
  Map,
  LayoutGrid,
  X,
  Grid3X3,
  MousePointer2,
  Layers,
  Search,
  Link,
  GitBranch,
  Network,
  Puzzle,
  ArrowUpDown,
  BookOpen,
  Clock,
  Database,
  Copy,
  Check,
  Bot,
  ShieldCheck,
  Zap
} from 'lucide-react';

// Icon mapping for roadmap sections
const sectionIcons = {
  grid: Grid3X3,
  pointer: MousePointer2,
  layers: Layers,
  search: Search,
  link: Link,
  tree: GitBranch,
  network: Network,
  puzzle: Puzzle,
  sort: ArrowUpDown
};

import CodeEditor from './CodeEditor';
import AIAssistant from '../components/AIAssistant';
import { problems, problemList, roadmap } from './problems';
import './practice.css';

function PracticePage() {
  const { problemId } = useParams();
  const navigate = useNavigate();

  // State
  const [currentProblem, setCurrentProblem] = useState(null);
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [showProblemList, setShowProblemList] = useState(!problemId);
  const [completedProblems, setCompletedProblems] = useState(() => {
    const saved = localStorage.getItem('completedProblems');
    return saved ? JSON.parse(saved) : [];
  });
  const [expandedSection, setExpandedSection] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [copiedSolution, setCopiedSolution] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewResults, setReviewResults] = useState(null);
  const [reviewError, setReviewError] = useState(null);
  const [editorDecorations, setEditorDecorations] = useState([]);

  const contentRef = useRef(null);

  // Scroll content to top when tab changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab, currentProblem]);

  // AI Code Review
  const reviewCode = async () => {
    if (!code.trim()) return;

    setIsReviewing(true);
    setReviewResults(null);
    setReviewError(null);
    setEditorDecorations([]);

    try {
      const response = await fetch('/api/code-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });

      const result = await response.json();

      if (response.ok) {
        setReviewResults(result);

        if (result.optimizations && Array.isArray(result.optimizations)) {
          const newDecorations = result.optimizations.map(opt => ({
            startLine: opt.startLine,
            endLine: opt.endLine,
            className: 'ai-code-issue-highlight',
            glyphClassName: 'ai-code-issue-glyph',
            hoverMessage: `**Issue:** ${opt.issue}\n\n**Suggestion:** ${opt.suggestion}`
          }));
          setEditorDecorations(newDecorations);
        }

        setActiveTab('ai');
      } else {
        setReviewError(result.error || `Review failed (${response.status})`);
        setActiveTab('ai');
      }
    } catch (error) {
      setReviewError('Could not reach the review service. Is the server running?');
      setActiveTab('ai');
    } finally {
      setIsReviewing(false);
    }
  };

  // Save completed problems to localStorage
  useEffect(() => {
    localStorage.setItem('completedProblems', JSON.stringify(completedProblems));
  }, [completedProblems]);

  // Load problem when ID changes
  useEffect(() => {
    if (problemId && problems[problemId]) {
      const problem = problems[problemId];
      setCurrentProblem(problem);
      setCode(problem.starterCode[language] || problem.starterCode.python);
      setOutput(null);
      setTestResults(null);
      setShowHints(false);
      setCurrentHint(0);
      setShowProblemList(false);
      window.scrollTo(0, 0); // Reset window scroll
    } else if (!problemId) {
      setShowProblemList(true);
      window.scrollTo(0, 0); // Reset window scroll on roadmap
    }
  }, [problemId]);

  // Update code when language changes
  useEffect(() => {
    if (currentProblem) {
      setCode(currentProblem.starterCode[language] || currentProblem.starterCode.python);
    }
  }, [language, currentProblem]);

  // Mark problem as completed
  const markCompleted = (problemId) => {
    if (!completedProblems.includes(problemId)) {
      setCompletedProblems([...completedProblems, problemId]);
    }
  };

  // Run code
  const runCode = async () => {
    setIsRunning(true);
    setOutput(null);
    setTestResults(null);

    try {
      const response = await fetch('/api/practice/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code })
      });

      const result = await response.json();

      setOutput({
        stdout: result.output || '',
        stderr: result.error || '',
        success: result.success
      });
    } catch (error) {
      setOutput({
        stdout: '',
        stderr: `Error: ${error.message}`,
        success: false
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Run tests
  const runTests = async () => {
    if (!currentProblem) return;

    setIsRunning(true);
    setOutput(null);
    setTestResults(null);

    try {
      const response = await fetch('/api/practice/run-tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          code,
          testCases: currentProblem.testCases,
          functionName: 'solution',
          testHarness: currentProblem.testHarness
        })
      });

      const result = await response.json();
      setTestResults(result);

      // Mark as completed if all tests pass
      if (result.allPassed) {
        markCompleted(currentProblem.id);
      }
    } catch (error) {
      setOutput({
        stdout: '',
        stderr: `Error running tests: ${error.message}`,
        success: false
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Reset code
  const resetCode = () => {
    if (currentProblem) {
      setCode(currentProblem.starterCode[language] || currentProblem.starterCode.python);
      setOutput(null);
      setTestResults(null);
    }
  };

  // Show next hint
  const showNextHint = () => {
    if (currentProblem && currentHint < currentProblem.hints.length) {
      setShowHints(true);
      setCurrentHint(prev => Math.min(prev + 1, currentProblem.hints.length));
    }
  };

  // Problem roadmap view (NeetCode style)
  if (showProblemList) {
    const totalProblems = problemList.length;
    const completedCount = completedProblems.length;
    const progressPercent = Math.round((completedCount / totalProblems) * 100);

    return (
      <div className="practice-container">
        <div className="roadmap-page">
          <div className="roadmap-header">
            <div className="roadmap-title">
              <Map size={32} />
              <div>
                <h1>DSA Roadmap</h1>
                <p>Master data structures and algorithms step by step</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* View toggle hidden as per user request to make it look like a map */}
              <div className="progress-stats">
                <div className="progress-circle">
                  <svg viewBox="0 0 36 36">
                    <path
                      className="progress-bg"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="progress-fill"
                      strokeDasharray={`${progressPercent}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="progress-text">{progressPercent}%</span>
                </div>
                <div className="progress-info">
                  <span className="completed-count">{completedCount}/{totalProblems}</span>
                  <span className="completed-label">Problems Solved</span>
                </div>
              </div>
            </div>
          </div>

          {/* NeetCode-Style Visual Map View */}
          {viewMode === 'map' && (
            <>
              <div className="roadmap-visual-map">
                {roadmap.map((section) => {
                  const sectionProblems = section.problems.map(id => problems[id]).filter(Boolean);
                  const completedInSection = sectionProblems.filter(p => completedProblems.includes(p.id)).length;
                  const sectionProgress = Math.round((completedInSection / sectionProblems.length) * 100);
                  const isExpanded = expandedSection === section.id;

                  return (
                    <div
                      key={section.id}
                      className={`map-node ${isExpanded ? 'active' : ''}`}
                      style={{ '--node-color': section.color }}
                      onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                    >
                      {completedInSection === sectionProblems.length ? (
                        <div className="map-node-badge completed">
                          <CheckCircle size={14} />
                        </div>
                      ) : completedInSection > 0 ? (
                        <div className="map-node-badge in-progress">
                          {completedInSection}
                        </div>
                      ) : null}

                      <div className="map-node-header">
                        <span className="map-node-icon">
                          {(() => {
                            const IconComponent = sectionIcons[section.icon];
                            return IconComponent ? <IconComponent size={20} /> : null;
                          })()}
                        </span>
                        <span className="map-node-title">{section.title}</span>
                      </div>
                      <p className="map-node-description">{section.description}</p>
                      <div className="map-node-progress">
                        <div className="map-node-progress-bar">
                          <div
                            className="map-node-progress-fill"
                            style={{ width: `${sectionProgress}%` }}
                          />
                        </div>
                        <span className="map-node-progress-text">
                          {completedInSection}/{sectionProblems.length}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Expanded Section Problems */}
              {expandedSection && (
                <div className="expanded-section">
                  {(() => {
                    const section = roadmap.find(s => s.id === expandedSection);
                    const sectionProblems = section.problems.map(id => problems[id]).filter(Boolean);
                    return (
                      <>
                        <div className="expanded-section-header">
                          <div className="expanded-section-title">
                            <span className="section-icon-wrapper">
                              {(() => {
                                const IconComponent = sectionIcons[section.icon];
                                return IconComponent ? <IconComponent size={24} /> : null;
                              })()}
                            </span>
                            <h3>{section.title}</h3>
                          </div>
                          <button
                            className="close-section-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedSection(null);
                            }}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="problem-grid">
                          {sectionProblems.map((problem) => {
                            const isCompleted = completedProblems.includes(problem.id);
                            return (
                              <div
                                key={problem.id}
                                className={`problem-item ${isCompleted ? 'completed' : ''}`}
                                onClick={() => navigate(`/practice/${problem.id}`)}
                              >
                                <div className={`problem-status-icon ${isCompleted ? 'done' : 'pending'}`}>
                                  {isCompleted ? (
                                    <CheckCircle size={16} />
                                  ) : (
                                    <Code size={16} />
                                  )}
                                </div>
                                <div className="problem-item-info">
                                  <div className="problem-item-title">{problem.title}</div>
                                  <div className="problem-item-meta">
                                    <span className={`problem-item-difficulty ${problem.difficulty.toLowerCase()}`}>
                                      {problem.difficulty}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight size={16} className="problem-item-arrow" />
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
            </>
          )}

          {/* List View (original) */}
          {viewMode === 'list' && (
            <div className="roadmap-container">
              {roadmap.map((section, sectionIndex) => {
                const sectionProblems = section.problems.map(id => problems[id]).filter(Boolean);
                const completedInSection = sectionProblems.filter(p => completedProblems.includes(p.id)).length;

                return (
                  <div key={section.id} className="roadmap-section">
                    {/* Connector line */}
                    {sectionIndex > 0 && <div className="roadmap-connector" />}

                    <div
                      className="section-card"
                      style={{ '--section-color': section.color }}
                    >
                      <div className="section-header">
                        <span className="section-icon">
                          {(() => {
                            const IconComponent = sectionIcons[section.icon];
                            return IconComponent ? <IconComponent size={24} /> : null;
                          })()}
                        </span>
                        <div className="section-info">
                          <h2>{section.title}</h2>
                          <p>{section.description}</p>
                        </div>
                        <div className="section-progress">
                          <span>{completedInSection}/{sectionProblems.length}</span>
                        </div>
                      </div>

                      <div className="section-problems">
                        {sectionProblems.map((problem, problemIndex) => {
                          const isCompleted = completedProblems.includes(problem.id);
                          return (
                            <div
                              key={problem.id}
                              className={`problem-node ${isCompleted ? 'completed' : ''}`}
                              onClick={() => navigate(`/practice/${problem.id}`)}
                            >
                              {/* Node connector */}
                              {problemIndex > 0 && <div className="node-connector" />}

                              <div className="node-circle">
                                {isCompleted ? (
                                  <CheckCircle size={16} />
                                ) : (
                                  <span className="node-number">{problemIndex + 1}</span>
                                )}
                              </div>
                              <div className="node-info">
                                <span className="node-title">{problem.title}</span>
                                <span className={`node-difficulty ${problem.difficulty.toLowerCase()}`}>
                                  {problem.difficulty}
                                </span>
                              </div>
                              <ChevronRight size={16} className="node-arrow" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!currentProblem) {
    return (
      <div className="practice-container">
        <div className="loading">Loading problem...</div>
      </div>
    );
  }

  return (
    <div className="practice-container">
      <div className="practice-layout">
        {/* Left Panel - Problem Description */}
        <div className="problem-panel">
          <div className="problem-header">
            <button className="back-btn" onClick={() => setShowProblemList(true)}>
              <Map size={16} /> Roadmap
            </button>
            <h1>{currentProblem.title}</h1>
            <span className={`difficulty ${currentProblem.difficulty.toLowerCase()}`}>
              {currentProblem.difficulty}
            </span>
            {completedProblems.includes(currentProblem.id) && (
              <span className="solved-badge">
                <CheckCircle size={14} /> Solved
              </span>
            )}
          </div>

          <div className="problem-tabs">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'hints' ? 'active' : ''}
              onClick={() => setActiveTab('hints')}
            >
              Hints
            </button>
            <button
              className={activeTab === 'solutions' ? 'active' : ''}
              onClick={() => setActiveTab('solutions')}
            >
              <BookOpen size={14} />
              Solutions
            </button>
            <button
              className={activeTab === 'ai' ? 'active' : ''}
              onClick={() => setActiveTab('ai')}
            >
              <Bot size={14} />
              AI Assistant
            </button>
          </div>

          <div className="problem-content" ref={contentRef}>
            {activeTab === 'description' && (
              <>
                <div className="description">
                  {currentProblem.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="examples">
                  <h3>Examples</h3>
                  {currentProblem.examples.map((example, i) => (
                    <div key={i} className="example">
                      <div className="example-label">Example {i + 1}:</div>
                      <div className="example-content">
                        <div><strong>Input:</strong> <code>{example.input}</code></div>
                        <div><strong>Output:</strong> <code>{example.output}</code></div>
                        {example.explanation && (
                          <div><strong>Explanation:</strong> {example.explanation}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="constraints">
                  <h3>Constraints</h3>
                  <ul>
                    {currentProblem.constraints.map((c, i) => (
                      <li key={i}><code>{c}</code></li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {activeTab === 'hints' && (
              <div className="hints-section">
                <div className="hints-header">
                  <Lightbulb size={20} />
                  <span>Need help? Reveal hints one at a time.</span>
                </div>
                {currentProblem.hints.slice(0, currentHint).map((hint, i) => (
                  <div key={i} className="hint">
                    <span className="hint-number">Hint {i + 1}:</span>
                    {hint}
                  </div>
                ))}
                {currentHint < currentProblem.hints.length && (
                  <button className="reveal-hint-btn" onClick={showNextHint}>
                    <Lightbulb size={14} />
                    Reveal Hint {currentHint + 1}
                  </button>
                )}
                {currentHint >= currentProblem.hints.length && (
                  <div className="all-hints-shown">All hints revealed!</div>
                )}
              </div>
            )}

            {activeTab === 'solutions' && currentProblem.solutions && (
              <div className="solutions-section">
                <div className="solutions-header">
                  <BookOpen size={20} />
                  <span>Multiple approaches with different time/space complexities</span>
                </div>
                <div className="solutions-list">
                  {Object.entries(currentProblem.solutions).map(([key, solution]) => {
                    const isExpanded = selectedSolution === key;
                    const isCopied = copiedSolution === key;

                    return (
                      <div
                        key={key}
                        className={`solution-card ${isExpanded ? 'expanded' : ''}`}
                      >
                        <div
                          className="solution-card-header"
                          onClick={() => setSelectedSolution(isExpanded ? null : key)}
                        >
                          <div className="solution-info">
                            <h4 className="solution-name">{solution.name}</h4>
                            <div className="solution-complexity">
                              <span className="complexity-badge time">
                                <Clock size={12} />
                                {solution.timeComplexity}
                              </span>
                              <span className="complexity-badge space">
                                <Database size={12} />
                                {solution.spaceComplexity}
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            size={18}
                            className={`solution-expand-icon ${isExpanded ? 'rotated' : ''}`}
                          />
                        </div>

                        {isExpanded && (
                          <div className="solution-card-body">
                            <p className="solution-description">{solution.description}</p>
                            <div className="solution-code-container">
                              <div className="solution-code-header">
                                <span>Python</span>
                                <button
                                  className="copy-solution-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigator.clipboard.writeText(solution.code);
                                    setCopiedSolution(key);
                                    setTimeout(() => setCopiedSolution(null), 2000);
                                  }}
                                >
                                  {isCopied ? (
                                    <>
                                      <Check size={14} />
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={14} />
                                      Copy
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="solution-code">
                                <code>{solution.code}</code>
                              </pre>
                            </div>
                            <button
                              className="use-solution-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCode(solution.code);
                                setActiveTab('description');
                              }}
                            >
                              <Code size={14} />
                              Use This Solution
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="ai-assistant-tab">
                {reviewError && (
                  <div className="review-error-banner">
                    <XCircle size={16} />
                    <span>{reviewError}</span>
                  </div>
                )}
                {reviewResults && (
                  <div className="ai-review-results">
                    <div className="review-header">
                      <div className="logic-score">
                        <span className="score-label">Logic Score</span>
                        <div className="score-circle">
                          <span className="score-value">{reviewResults.logicScore}</span>
                          <span className="score-total">/10</span>
                        </div>
                      </div>
                      <div className="complexity-info">
                        <div className="complexity-item">
                          <Clock size={14} />
                          <span>Time: <strong>{reviewResults.timeComplexity}</strong></span>
                        </div>
                        <div className="complexity-item">
                          <Layers size={14} />
                          <span>Space: <strong>{reviewResults.spaceComplexity}</strong></span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="review-feedback">
                      <h4>Senior Reviewer Feedback</h4>
                      <p>{reviewResults.generalFeedback}</p>
                    </div>

                    {reviewResults.optimizations && reviewResults.optimizations.length > 0 && (
                      <div className="review-optimizations">
                        <h4>Line-by-Line Optimizations</h4>
                        <div className="optimizations-list">
                          {reviewResults.optimizations.map((opt, i) => (
                            <div key={i} className="opt-card">
                              <div className="opt-card-header">
                                <span className="line-badge">Lines {opt.startLine}-{opt.endLine}</span>
                                <Zap size={14} className="zap-icon" />
                              </div>
                              <div className="opt-issue"><strong>Issue:</strong> {opt.issue}</div>
                              <div className="opt-suggestion"><strong>Suggestion:</strong> {opt.suggestion}</div>
                              {opt.improvedCode && (
                                <div className="opt-code">
                                  <pre><code>{opt.improvedCode}</code></pre>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="review-divider">
                      <span>Chat with Assistant below</span>
                    </div>
                  </div>
                )}
                <AIAssistant context={`Problem: ${currentProblem.title}\n\nDescription: ${currentProblem.description}\n\nUser's current code (${language}):\n${code}`} />
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="editor-panel">
          <div className="editor-header">
            <div className="language-selector">
              <Code size={16} />
              <span className="language-label">Python</span>
            </div>
            <div className="editor-actions">
              <button
                className="btn btn-reset"
                onClick={resetCode}
                disabled={isRunning}
                title="Reset code"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          <CodeEditor
            language={language}
            code={code}
            onChange={setCode}
            decorations={editorDecorations}
          />

          <div className="run-actions">
            <button
              className="btn btn-run"
              onClick={runCode}
              disabled={isRunning || isReviewing}
            >
              <Play size={14} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            <button
              className="btn btn-submit"
              onClick={runTests}
              disabled={isRunning || isReviewing}
            >
              <CheckCircle size={14} />
              {isRunning ? 'Testing...' : 'Submit'}
            </button>
            <button
              className={`btn btn-review ${isReviewing ? 'loading' : ''}`}
              onClick={reviewCode}
              disabled={isRunning || isReviewing}
              title="Get a Senior Code Review from Gemini"
            >
              <ShieldCheck size={14} />
              {isReviewing ? 'Reviewing...' : 'AI Review'}
            </button>
          </div>

          {/* Output Panel */}
          <div className="output-panel">
            <div className="output-header">
              <span>Output</span>
              {output && (
                <span className={`status ${output.success ? 'success' : 'error'}`}>
                  {output.success ? 'Success' : 'Error'}
                </span>
              )}
            </div>
            <div className="output-content">
              {!output && !testResults && (
                <div className="output-placeholder">
                  Run your code to see output here...
                </div>
              )}

              {output && (
                <>
                  {output.stdout && (
                    <div className="stdout">
                      <div className="output-label">stdout:</div>
                      <pre>{output.stdout}</pre>
                    </div>
                  )}
                  {output.stderr && (
                    <div className="stderr">
                      <div className="output-label">stderr:</div>
                      <pre>{output.stderr}</pre>
                    </div>
                  )}
                </>
              )}

              {testResults && (
                <div className="test-results">
                  <div className="test-summary">
                    <span className={testResults.allPassed ? 'all-passed' : 'some-failed'}>
                      {testResults.allPassed ? (
                        <><CheckCircle size={16} /> All tests passed!</>
                      ) : (
                        <><XCircle size={16} /> {testResults.summary.passed}/{testResults.summary.total} tests passed</>
                      )}
                    </span>
                  </div>
                  <div className="test-cases">
                    {testResults.results.map((result, i) => (
                      <div key={i} className={`test-case ${result.passed ? 'passed' : 'failed'}`}>
                        <div className="test-case-header">
                          {result.passed ? <CheckCircle size={14} /> : <XCircle size={14} />}
                          <span>Test Case {result.testCase}</span>
                        </div>
                        <div className="test-case-details">
                          <div><strong>Input:</strong> <code>{result.input}</code></div>
                          <div><strong>Expected:</strong> <code>{result.expected}</code></div>
                          <div><strong>Actual:</strong> <code>{result.actual || '(empty)'}</code></div>
                          {result.error && (
                            <div className="test-error"><strong>Error:</strong> {result.error}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticePage;

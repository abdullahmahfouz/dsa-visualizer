import React, { useState, useRef } from 'react';
import { FileText, CheckCircle, AlertTriangle, XCircle, Lightbulb, AlertCircle, Upload, X } from 'lucide-react';
import '../styles/page-styles/resume-reviewer.css';

// ─── Inline renderer (same pattern as AIAssistant) ────────────────────────────
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
    if (!t) { flushPara(); flushList(); continue; }
    const h2 = t.match(/^## (.+)$/);
    const h3 = t.match(/^### (.+)$/);
    const ul = t.match(/^[-*+] (.+)$/);
    const ol = t.match(/^\d+\. (.+)$/);

    if (h2 || h3) {
      flushPara(); flushList();
      blocks.push({ type: h3 ? 'h3' : 'h2', content: (h3 || h2)[1] });
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
      case 'h2': return <p key={k} className="ai-md-h2">{renderInline(block.content, k)}</p>;
      case 'h3': return <p key={k} className="ai-md-h3">{renderInline(block.content, k)}</p>;
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

// ─── Score circle helpers ─────────────────────────────────────────────────────
function getScoreColor(score) {
  if (score >= 8) return 'var(--success)';
  if (score >= 6) return 'var(--warning)';
  return 'var(--danger)';
}

function ScoreCircle({ score }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const filled = (score / 10) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="rr-score-circle">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle
          className="rr-score-circle-bg"
          cx="36" cy="36" r={radius}
        />
        <circle
          className="rr-score-circle-fill"
          cx="36" cy="36" r={radius}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - filled}
        />
      </svg>
      <span className="rr-score-number" style={{ color }}>
        {score}/10
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const MAX_CHARS = 20000;
const ACCEPTED = '.pdf,.docx,.txt';

export default function ResumeReviewer() {
  const [resumeText, setResumeText] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleResumeChange = (e) => {
    setResumeText(e.target.value);
    if (uploadedFile) setUploadedFile(null);
    if (results) setResults(null);
    if (error) setError('');
  };

  const processFile = async (file) => {
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['pdf', 'docx', 'txt'].includes(ext)) {
      setError('Unsupported file type. Please upload a PDF, DOCX, or TXT file.');
      return;
    }
    setUploading(true);
    setError('');
    setResults(null);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/resume-upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Failed to parse file.'); return; }
      setResumeText(data.text);
      setUploadedFile(file.name);
    } catch {
      setError('Network error. Make sure the server is running.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileInput = (e) => processFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    processFile(e.dataTransfer.files[0]);
  };

  const clearFile = () => {
    setUploadedFile(null);
    setResumeText('');
    setResults(null);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async () => {
    if (!resumeText.trim()) return;
    setLoading(true);
    setResults(null);
    setError('');

    try {
      const res = await fetch('/api/resume-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText, targetRole }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setResults(data);
    } catch {
      setError('Network error. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const charCount = resumeText.length;
  const nearLimit = charCount > MAX_CHARS * 0.85;

  return (
    <div className="rr-page">
      {/* Header */}
      <div className="rr-header">
        <div className="rr-header-icon">
          <FileText size={22} />
        </div>
        <div>
          <h1 className="rr-title">Resume Reviewer</h1>
          <p className="rr-subtitle">
            Get honest, brutally direct feedback from an AI with 15+ years of hiring experience.
            Paste your resume below and we'll tell you exactly what works, what doesn't, and what to fix.
          </p>
        </div>
      </div>

      {/* Layout */}
      <div className="rr-layout">
        {/* Left — Input */}
        <div className="rr-input-panel">
          <div>
            <div className="rr-panel-label">Your Resume</div>

            {/* Upload zone */}
            <div
              className={`rr-upload-zone${dragging ? ' rr-upload-dragging' : ''}`}
              onClick={() => !uploading && fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED}
                style={{ display: 'none' }}
                onChange={handleFileInput}
              />
              {uploading ? (
                <>
                  <div className="rr-spinner rr-spinner-upload" />
                  <span>Extracting text…</span>
                </>
              ) : uploadedFile ? (
                <>
                  <FileText size={18} className="rr-upload-icon-success" />
                  <span className="rr-upload-filename">{uploadedFile}</span>
                  <button
                    className="rr-upload-clear"
                    onClick={(e) => { e.stopPropagation(); clearFile(); }}
                    title="Remove file"
                  >
                    <X size={14} />
                  </button>
                </>
              ) : (
                <>
                  <Upload size={18} />
                  <span><strong>Upload resume</strong> or drag & drop</span>
                  <span className="rr-upload-hint">PDF, DOCX, or TXT</span>
                </>
              )}
            </div>

            <div className="rr-divider"><span>or paste text below</span></div>

            <textarea
              className="rr-textarea"
              placeholder={`Paste your resume text here...\n\nTip: Copy-paste from your PDF or Word document. Include all sections: contact info, summary, experience, education, skills, projects.`}
              value={resumeText}
              onChange={handleResumeChange}
              maxLength={MAX_CHARS}
              spellCheck={false}
            />
          </div>

          <div className="rr-role-row">
            <div className="rr-panel-label">Target Role (optional)</div>
            <input
              type="text"
              className="rr-role-input"
              placeholder="e.g. Backend Software Engineer, ML Intern, Frontend Developer"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
            />
          </div>

          <div className={`rr-char-count ${nearLimit ? 'rr-char-warn' : ''}`}>
            {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()} characters
          </div>

          <button
            className="rr-submit-btn"
            onClick={handleSubmit}
            disabled={loading || !resumeText.trim()}
          >
            {loading ? (
              <>
                <div className="rr-spinner" />
                Analyzing...
              </>
            ) : (
              <>
                <FileText size={16} />
                Review My Resume
              </>
            )}
          </button>
        </div>

        {/* Right — Results */}
        <div className="rr-results-panel">
          {error && (
            <div className="rr-error">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {!results && !error && (
            <div className="rr-empty">
              <div className="rr-empty-icon">
                <FileText size={48} />
              </div>
              <p>
                Paste your resume on the left and click <strong>Review My Resume</strong>.
                <br />
                You'll get an honest score, specific strengths, improvements, and detailed feedback.
              </p>
            </div>
          )}

          {results && (
            <>
              {/* Score card */}
              <div className="rr-score-card">
                <ScoreCircle score={results.overall_score} />
                <div className="rr-score-info">
                  <div className="rr-score-label">Overall Score</div>
                  <p className="rr-score-summary">{results.summary}</p>
                </div>
              </div>

              {/* Strengths + Improvements + Missing */}
              <div className="rr-cards-row">
                {/* Strengths */}
                <div className="rr-card rr-card-green">
                  <div className="rr-card-header">
                    <CheckCircle size={14} />
                    <span className="rr-card-title">Strengths</span>
                  </div>
                  <ul>
                    {results.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="rr-card rr-card-amber">
                  <div className="rr-card-header">
                    <AlertTriangle size={14} />
                    <span className="rr-card-title">Improvements</span>
                  </div>
                  <ul>
                    {results.improvements.map((imp, i) => (
                      <li key={i}>{imp}</li>
                    ))}
                  </ul>
                </div>

                {/* Missing sections */}
                {results.missing_sections && results.missing_sections.length > 0 && (
                  <div className="rr-card rr-card-red rr-card-full">
                    <div className="rr-card-header">
                      <XCircle size={14} />
                      <span className="rr-card-title">Missing / Weak Sections</span>
                    </div>
                    <ul>
                      {results.missing_sections.map((ms, i) => (
                        <li key={i}>{ms}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Actionable feedback */}
              <div className="rr-feedback-box">
                <div className="rr-feedback-header">
                  <Lightbulb size={16} />
                  <span className="rr-feedback-title">Detailed Feedback</span>
                </div>
                <div className="rr-feedback-content">
                  {renderTextSegment(results.actionable_feedback, 'feedback')}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

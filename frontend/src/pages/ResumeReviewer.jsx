import React, { useState, useRef, useEffect } from 'react';
import {
  FileText, CheckCircle, AlertTriangle, XCircle, Lightbulb, AlertCircle,
  Upload, X, Wand2, Target, Copy, Check, ChevronDown, ChevronUp,
  Zap, BookOpen, ArrowRight, Star, Sparkles, Download, RotateCcw,
  Eye, Edit3, ListChecks,
} from 'lucide-react';
import '../styles/page-styles/resume-reviewer.css';

// ─── Markdown helpers ─────────────────────────────────────────────────────────
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

// ─── Score circle (/10) ───────────────────────────────────────────────────────
function getScoreColor(score) {
  if (score >= 8) return 'var(--success)';
  if (score >= 6) return 'var(--warning)';
  return 'var(--danger)';
}

function ScoreCircle({ score }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const filled = (score / 10) * circumference;
  const color = getScoreColor(score);
  return (
    <div className="rr-score-circle">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle className="rr-score-circle-bg" cx="44" cy="44" r={radius} />
        <circle
          className="rr-score-circle-fill"
          cx="44" cy="44" r={radius}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - filled}
        />
      </svg>
      <span className="rr-score-number" style={{ color }}>{score}/10</span>
    </div>
  );
}

// ─── ATS score circle (/100) ──────────────────────────────────────────────────
function getAtsColor(score) {
  if (score >= 75) return 'var(--success)';
  if (score >= 50) return 'var(--warning)';
  return 'var(--danger)';
}

function AtsScoreCircle({ score }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const filled = (score / 100) * circumference;
  const color = getAtsColor(score);
  return (
    <div className="rr-ats-circle">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle className="rr-score-circle-bg" cx="50" cy="50" r={radius} />
        <circle
          className="rr-score-circle-fill"
          cx="50" cy="50" r={radius}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - filled}
        />
      </svg>
      <div className="rr-ats-circle-inner">
        <span className="rr-ats-number" style={{ color }}>{score}%</span>
        <span className="rr-ats-sublabel">ATS</span>
      </div>
    </div>
  );
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={`rr-copy-btn ${className}`} onClick={handleCopy} title="Copy to clipboard">
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

// ─── Bullet rewrite card ──────────────────────────────────────────────────────
function BulletRewriteCard({ rewrite, index }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="rr-rewrite-card">
      <div className="rr-rewrite-header" onClick={() => setExpanded(e => !e)}>
        <div className="rr-rewrite-badge">#{index + 1}</div>
        {rewrite.section && (
          <span className="rr-rewrite-section">{rewrite.section}</span>
        )}
        <span className="rr-rewrite-toggle">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </div>
      {expanded && (
        <div className="rr-rewrite-body">
          <div className="rr-rewrite-original">
            <div className="rr-rewrite-label rr-label-before">Before</div>
            <p className="rr-rewrite-text">{rewrite.original}</p>
          </div>
          <div className="rr-rewrite-arrow"><ArrowRight size={16} /></div>
          <div className="rr-rewrite-new">
            <div className="rr-rewrite-label-row">
              <div className="rr-rewrite-label rr-label-after">After</div>
              <CopyButton text={rewrite.rewritten} />
            </div>
            <p className="rr-rewrite-text rr-rewrite-text-new">{rewrite.rewritten}</p>
          </div>
          {rewrite.reason && (
            <div className="rr-rewrite-reason">
              <Lightbulb size={11} />
              <span>{rewrite.reason}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Resume PDF parser ────────────────────────────────────────────────────────
const BULLET_RE   = /^[•\-\*►▸▪◦‣]\s+/;
const SECTION_RE  = /^[A-Z][A-Z\s&\/\-–]{2,}:?\s*$/;
const DASHES_RE   = /^[-─═=_]{3,}\s*$/;
const DATE_RANGE  = /(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}\s*[-–—]\s*(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}|\b\d{4}\s*[-–—]\s*(?:\d{4}|Present|Current|Now|Today)\b|(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}/gi;

function extractDate(t) {
  const matches = [...t.matchAll(DATE_RANGE)];
  if (!matches.length) return { main: t, date: '' };
  const date = matches.length >= 2
    ? `${matches[0][0]} – ${matches[matches.length - 1][0]}`
    : matches[0][0];
  const main = t
    .replace(DATE_RANGE, '')
    .replace(/\s*[|•–—]\s*$/, '')
    .replace(/^\s*[|•–—]\s*/, '')
    .trim();
  return { main: main || t, date };
}

function processSection(title, rawLines) {
  const isSkills = /SKILL|TECH|TOOL|LANGUAGE|FRAMEWORK|STACK|COMPETENC|PROFICIEN/i.test(title);
  const blocks = [];
  let i = 0;

  while (i < rawLines.length) {
    const t = rawLines[i].trim();
    if (!t) { i++; continue; }

    // Bullet
    if (BULLET_RE.test(t)) {
      blocks.push({ type: 'bullet', text: t.replace(BULLET_RE, '') });
      i++; continue;
    }

    // Skills row
    if (isSkills && t.includes(',')) {
      const colonIdx = t.indexOf(':');
      if (colonIdx > 0 && colonIdx < 28) {
        const category = t.slice(0, colonIdx).trim();
        const skills   = t.slice(colonIdx + 1).split(',').map(s => s.trim()).filter(Boolean);
        blocks.push({ type: 'skill-row', category, skills });
      } else {
        blocks.push({ type: 'skill-row', category: '', skills: t.split(',').map(s => s.trim()).filter(Boolean) });
      }
      i++; continue;
    }

    // Line with date → entry header (company / school / project)
    const hasDate = DATE_RANGE.test(t);
    DATE_RANGE.lastIndex = 0; // reset global regex
    if (hasDate) {
      const { main, date } = extractDate(t);
      blocks.push({ type: 'entry-header', main, date });
      i++;
      // Peek: next non-empty, non-bullet line may be a subtitle (job title / degree)
      while (i < rawLines.length && !rawLines[i].trim()) i++;
      if (i < rawLines.length) {
        const next = rawLines[i].trim();
        if (next && !BULLET_RE.test(next) && !SECTION_RE.test(next) && !DATE_RANGE.test(next) && next.length < 90) {
          DATE_RANGE.lastIndex = 0;
          blocks.push({ type: 'subtitle', text: next });
          i++;
        }
        DATE_RANGE.lastIndex = 0;
      }
      continue;
    }

    // Short standalone line → entry header without date
    if (t.length < 72 && !t.includes(',') && !/[.!?]$/.test(t)) {
      blocks.push({ type: 'entry-header', main: t, date: '' });
      i++; continue;
    }

    blocks.push({ type: 'text', text: t });
    i++;
  }
  return blocks;
}

function parseResumeForPDF(text) {
  const lines = text.split('\n').map(l => l.trimEnd());
  let cursor = 0;
  while (cursor < lines.length && !lines[cursor].trim()) cursor++;
  const name = lines[cursor]?.trim() || '';
  cursor++;

  const contactItems = [];
  for (let j = 0; j < 6 && cursor < lines.length; j++, cursor++) {
    const t = lines[cursor].trim();
    if (!t) continue;
    if (SECTION_RE.test(t) || DASHES_RE.test(t)) break;
    // Split by pipe or bullet separators
    t.split(/\s*[|•]\s*/).map(p => p.trim()).filter(Boolean).forEach(p => contactItems.push(p));
  }

  const sections = [];
  let secTitle = null, rawLines = [];

  for (; cursor < lines.length; cursor++) {
    const raw = lines[cursor], t = raw.trim();
    if (DASHES_RE.test(t)) continue;
    if (!t) { if (rawLines.length) rawLines.push(''); continue; }
    if (SECTION_RE.test(t) || /^#{1,3}\s+/.test(t)) {
      if (secTitle !== null) sections.push({ title: secTitle, blocks: processSection(secTitle, rawLines) });
      secTitle = t.replace(/^#+\s+/, '').replace(/:$/, '').trim();
      rawLines = [];
      continue;
    }
    if (secTitle !== null) rawLines.push(raw);
  }
  if (secTitle !== null && rawLines.length) sections.push({ title: secTitle, blocks: processSection(secTitle, rawLines) });

  return { name, contactItems, sections };
}

// ─── Print CSS ────────────────────────────────────────────────────────────────
const PRINT_RESUME_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#fff;color:#1a1a1a;font-family:Georgia,"Times New Roman",serif;font-size:10.5pt;line-height:1.5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.paper{padding:.65in .75in}
.rh{padding-bottom:.3rem;border-bottom:2.5px solid #0f2044;margin-bottom:.15rem}
.rname{font-family:Montserrat,sans-serif;font-size:24pt;font-weight:800;color:#0f2044;letter-spacing:-.02em;line-height:1.1}
.rrole{font-family:Montserrat,sans-serif;font-size:11pt;font-weight:500;color:#1d4ed8;margin-top:.15rem}
.rcontact{display:flex;flex-wrap:wrap;align-items:center;font-family:Montserrat,sans-serif;font-size:8.5pt;color:#555;padding:.25rem 0 .3rem;border-bottom:1px solid #dde}
.csep{margin:0 .4rem;color:#bbb}
.rsec{margin-top:.45rem}
.rsec-title{font-family:Montserrat,sans-serif;font-size:8pt;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#0f2044;border-bottom:1.5px solid #0f2044;padding-bottom:.1rem;margin-bottom:.25rem}
.reh{display:flex;justify-content:space-between;align-items:baseline;gap:.5rem;margin-top:.35rem;margin-bottom:.03rem}
.reh-co{font-family:Montserrat,sans-serif;font-size:10.5pt;font-weight:700;color:#0f2044}
.reh-date{font-family:Montserrat,sans-serif;font-size:8.5pt;color:#666;white-space:nowrap;flex-shrink:0}
.rsub{font-size:10pt;color:#1d4ed8;font-style:italic;margin-bottom:.1rem}
.rb{display:flex;align-items:flex-start;gap:.35rem;margin:.09rem 0;padding-left:.05rem;font-size:10pt;color:#333;line-height:1.45}
.rdot{color:#1d4ed8;font-size:9pt;margin-top:.08rem;flex-shrink:0}
.rsr{display:flex;align-items:flex-start;gap:.4rem;margin:.18rem 0}
.rsr-cat{font-family:Montserrat,sans-serif;font-size:8.5pt;font-weight:700;color:#0f2044;white-space:nowrap;min-width:85px;padding-top:2px}
.rskills{display:flex;flex-wrap:wrap;gap:.2rem}
.rchip{font-family:Montserrat,sans-serif;font-size:8pt;padding:1px 6px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:3px;color:#1e40af}
.rtext{font-size:10pt;color:#333;margin:.05rem 0;line-height:1.5}
@page{size:letter;margin:0}
`;

// ─── PDF Preview modal ────────────────────────────────────────────────────────
function ResumeSection({ section }) {
  return (
    <div className="rv-section">
      <h2 className="rv-sec-title">{section.title}</h2>
      <div className="rv-sec-body">
        {section.blocks.map((block, i) => {
          switch (block.type) {
            case 'entry-header':
              return (
                <div key={i} className="rv-entry-header">
                  <span className="rv-entry-company">{block.main}</span>
                  {block.date && <span className="rv-entry-date">{block.date}</span>}
                </div>
              );
            case 'subtitle':
              return <div key={i} className="rv-entry-subtitle">{block.text}</div>;
            case 'bullet':
              return (
                <div key={i} className="rv-bullet">
                  <span className="rv-bullet-dot">▸</span>
                  <span>{block.text}</span>
                </div>
              );
            case 'skill-row':
              return (
                <div key={i} className="rv-skill-row">
                  {block.category && <span className="rv-skill-cat">{block.category}</span>}
                  <div className="rv-skills">
                    {block.skills.map((s, j) => (
                      <span key={j} className="rv-chip">{s}</span>
                    ))}
                  </div>
                </div>
              );
            case 'text':
              return <p key={i} className="rv-text">{block.text}</p>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

function ResumePDFPreview({ text, targetRole, onClose }) {
  const { name, contactItems, sections } = parseResumeForPDF(text);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handlePrint = () => {
    const printWin = window.open('', '_blank', 'width=900,height=700');
    if (!printWin) return;

    const contactHTML = contactItems
      .map((item, i) => i === 0 ? `<span>${item}</span>` : `<span class="csep">•</span><span>${item}</span>`)
      .join('');

    const blockHTML = (block) => {
      switch (block.type) {
        case 'entry-header':
          return `<div class="reh"><span class="reh-co">${block.main}</span>${block.date ? `<span class="reh-date">${block.date}</span>` : ''}</div>`;
        case 'subtitle':
          return `<div class="rsub">${block.text}</div>`;
        case 'bullet':
          return `<div class="rb"><span class="rdot">▸</span><span>${block.text}</span></div>`;
        case 'skill-row':
          return `<div class="rsr">${block.category ? `<span class="rsr-cat">${block.category}</span>` : ''}<div class="rskills">${block.skills.map(s => `<span class="rchip">${s}</span>`).join('')}</div></div>`;
        case 'text':
          return `<p class="rtext">${block.text}</p>`;
        default: return '';
      }
    };

    const sectionsHTML = sections.map(sec => `
      <div class="rsec">
        <div class="rsec-title">${sec.title}</div>
        ${sec.blocks.map(blockHTML).join('')}
      </div>`).join('');

    printWin.document.write(`<!DOCTYPE html>
<html><head><meta charset="utf-8"/><title>${name} — Resume</title><style>${PRINT_RESUME_CSS}</style></head>
<body><div class="paper">
  <div class="rh">
    <div class="rname">${name}</div>
    ${targetRole ? `<div class="rrole">${targetRole}</div>` : ''}
  </div>
  ${contactItems.length ? `<div class="rcontact">${contactHTML}</div>` : ''}
  ${sectionsHTML}
</div></body></html>`);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => { printWin.print(); printWin.close(); }, 700);
  };

  return (
    <div className="rr-pdf-modal-overlay" onClick={onClose}>
      <div className="rr-pdf-modal-shell" onClick={e => e.stopPropagation()}>
        {/* Toolbar */}
        <div className="rr-pdf-toolbar">
          <div className="rr-pdf-toolbar-left">
            <FileText size={15} />
            <span>Resume Preview</span>
            {targetRole && <span className="rr-pdf-role-badge">{targetRole}</span>}
          </div>
          <div className="rr-pdf-toolbar-right">
            <button className="rr-pdf-print-btn" onClick={handlePrint}>
              <Download size={14} /> Save as PDF
            </button>
            <button className="rr-pdf-close-btn" onClick={onClose} title="Close">
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Paper preview */}
        <div className="rr-pdf-scroll">
          <div className="rr-pdf-paper">
            {/* Header */}
            <div className="rv-header">
              <h1 className="rv-name">{name}</h1>
              {targetRole && <div className="rv-role">{targetRole}</div>}
            </div>

            {/* Contact strip */}
            {contactItems.length > 0 && (
              <div className="rv-contact">
                {contactItems.map((item, i) => (
                  <span key={i} className="rv-contact-item">
                    {i > 0 && <span className="rv-contact-sep">|</span>}
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* Sections */}
            {sections.map((sec, si) => (
              <ResumeSection key={si} section={sec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const MAX_CHARS = 20000;
const ACCEPTED  = '.pdf,.docx,.txt';

export default function ResumeReviewer() {
  // Review state
  const [resumeText, setResumeText]   = useState('');
  const [targetRole, setTargetRole]   = useState('');
  const [loading, setLoading]         = useState(false);
  const [results, setResults]         = useState(null);
  const [error, setError]             = useState('');

  // File upload state
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading]       = useState(false);
  const [dragging, setDragging]         = useState(false);
  const fileInputRef = useRef(null);

  // Tab + tailoring state
  const [activeTab, setActiveTab]         = useState('review');
  const [jobDesc, setJobDesc]             = useState('');
  const [tailorLoading, setTailorLoading] = useState(false);
  const [tailorResults, setTailorResults] = useState(null);
  const [tailorError, setTailorError]     = useState('');
  const [checkedTips, setCheckedTips]     = useState(new Set());

  // Improve state
  const [improveLoading, setImproveLoading]   = useState(false);
  const [improvedResume, setImprovedResume]   = useState('');
  const [editedResume, setEditedResume]       = useState('');
  const [changesMade, setChangesMade]         = useState([]);
  const [improveError, setImproveError]       = useState('');
  const [viewMode, setViewMode]               = useState('improved');
  const [changesExpanded, setChangesExpanded] = useState(true);

  // PDF preview state
  const [pdfPreviewOpen, setPdfPreviewOpen] = useState(false);

  // ── File handling ───────────────────────────────────────────────────────────
  const handleResumeChange = (e) => {
    setResumeText(e.target.value);
    if (uploadedFile) setUploadedFile(null);
    if (results) setResults(null);
    if (tailorResults) setTailorResults(null);
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
    setTailorResults(null);
    try {
      const form = new FormData();
      form.append('file', file);
      const res  = await fetch('/api/resume-upload', { method: 'POST', body: form });
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
    setTailorResults(null);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ── Improve submit ──────────────────────────────────────────────────────────
  const handleImprove = async () => {
    if (!resumeText.trim()) return;
    setImproveLoading(true);
    setImprovedResume('');
    setEditedResume('');
    setChangesMade([]);
    setImproveError('');
    setViewMode('improved');
    try {
      const res  = await fetch('/api/resume-improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText, targetRole }),
      });
      const data = await res.json();
      if (!res.ok) { setImproveError(data.error || 'Something went wrong.'); return; }
      setImprovedResume(data.improved_resume);
      setEditedResume(data.improved_resume);
      setChangesMade(data.changes_made || []);
    } catch {
      setImproveError('Network error. Make sure the server is running.');
    } finally {
      setImproveLoading(false);
    }
  };

  // Open PDF preview (replaces plain-text download)
  const handleDownload = () => setPdfPreviewOpen(true);

  const resetToAI = () => {
    setEditedResume(improvedResume);
    setViewMode('improved');
  };

  // ── Review submit ───────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!resumeText.trim()) return;
    setLoading(true);
    setResults(null);
    setError('');
    try {
      const res  = await fetch('/api/resume-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText, targetRole }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); return; }
      setResults(data);
      setActiveTab('review');
    } catch {
      setError('Network error. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  // ── Tailor submit ───────────────────────────────────────────────────────────
  const handleTailor = async () => {
    if (!resumeText.trim() || !jobDesc.trim()) return;
    setTailorLoading(true);
    setTailorResults(null);
    setTailorError('');
    setCheckedTips(new Set());
    try {
      const res  = await fetch('/api/resume-tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText, jobDescription: jobDesc, targetRole }),
      });
      const data = await res.json();
      if (!res.ok) { setTailorError(data.error || 'Something went wrong.'); return; }
      setTailorResults(data);
    } catch {
      setTailorError('Network error. Make sure the server is running.');
    } finally {
      setTailorLoading(false);
    }
  };

  const toggleTip = (i) => {
    setCheckedTips(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const charCount  = resumeText.length;
  const nearLimit  = charCount > MAX_CHARS * 0.85;
  const canTailor  = resumeText.trim() && jobDesc.trim();

  return (
    <div className="rr-page">
      {/* PDF preview modal */}
      {pdfPreviewOpen && (
        <ResumePDFPreview
          text={editedResume}
          targetRole={targetRole}
          onClose={() => setPdfPreviewOpen(false)}
        />
      )}

      {/* Header */}
      <div className="rr-header">
        <div className="rr-header-icon">
          <FileText size={24} />
        </div>
        <div>
          <h1 className="rr-title">Resume Reviewer</h1>
          <p className="rr-subtitle">
            Get honest, brutally direct feedback from an AI with 15+ years of hiring experience.
            Then tailor your resume to any job description with ATS optimization and AI rewrites.
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
                <><div className="rr-spinner rr-spinner-upload" /><span>Extracting text…</span></>
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
              <><div className="rr-spinner" />Analyzing...</>
            ) : (
              <><FileText size={16} />Review My Resume</>
            )}
          </button>

          {/* Tailor CTA */}
          <div className="rr-tailor-cta" onClick={() => setActiveTab('tailor')}>
            <Wand2 size={14} />
            <span>Have a job description? <strong>Tailor your resume</strong> for it.</span>
          </div>
        </div>

        {/* Right — Tabbed Results */}
        <div className="rr-results-panel">
          {/* Tab bar */}
          <div className="rr-tabs">
            <button
              className={`rr-tab${activeTab === 'review' ? ' rr-tab-active' : ''}`}
              onClick={() => setActiveTab('review')}
            >
              <BookOpen size={14} />
              Review
              {results && <span className="rr-tab-badge">{results.overall_score}/10</span>}
            </button>
            <button
              className={`rr-tab rr-tab-tailor${activeTab === 'tailor' ? ' rr-tab-active' : ''}`}
              onClick={() => setActiveTab('tailor')}
            >
              <Wand2 size={14} />
              Tailor
              {tailorResults && (
                <span className={`rr-tab-badge rr-tab-badge-ats ${tailorResults.ats_score >= 75 ? 'rr-badge-green' : tailorResults.ats_score >= 50 ? 'rr-badge-amber' : 'rr-badge-red'}`}>
                  {tailorResults.ats_score}%
                </span>
              )}
            </button>
            <button
              className={`rr-tab rr-tab-improve${activeTab === 'improve' ? ' rr-tab-active' : ''}`}
              onClick={() => setActiveTab('improve')}
            >
              <Sparkles size={14} />
              Improve
              {improvedResume && <span className="rr-tab-badge rr-badge-sparkle">ready</span>}
            </button>
          </div>

          {/* ── REVIEW TAB ── */}
          {activeTab === 'review' && (
            <>
              {error && (
                <div className="rr-error">
                  <AlertCircle size={16} />{error}
                </div>
              )}

              {!results && !error && (
                <div className="rr-empty">
                  <div className="rr-empty-icon"><FileText size={52} /></div>
                  <p>
                    Paste your resume on the left and click <strong>Review My Resume</strong>.
                    <br />
                    You'll get an honest score, specific strengths, improvements, and detailed feedback.
                  </p>
                </div>
              )}

              {results && (
                <>
                  <div className="rr-score-card">
                    <ScoreCircle score={results.overall_score} />
                    <div className="rr-score-info">
                      <div className="rr-score-label">Overall Score</div>
                      <p className="rr-score-summary">{results.summary}</p>
                    </div>
                  </div>

                  <div className="rr-cards-row">
                    <div className="rr-card rr-card-green">
                      <div className="rr-card-header">
                        <CheckCircle size={14} />
                        <span className="rr-card-title">Strengths</span>
                      </div>
                      <ul>
                        {results.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>

                    <div className="rr-card rr-card-amber">
                      <div className="rr-card-header">
                        <AlertTriangle size={14} />
                        <span className="rr-card-title">Improvements</span>
                      </div>
                      <ul>
                        {results.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
                      </ul>
                    </div>

                    {results.missing_sections && results.missing_sections.length > 0 && (
                      <div className="rr-card rr-card-red rr-card-full">
                        <div className="rr-card-header">
                          <XCircle size={14} />
                          <span className="rr-card-title">Missing / Weak Sections</span>
                        </div>
                        <ul>
                          {results.missing_sections.map((ms, i) => <li key={i}>{ms}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="rr-feedback-box">
                    <div className="rr-feedback-header">
                      <Lightbulb size={16} />
                      <span className="rr-feedback-title">Detailed Feedback</span>
                    </div>
                    <div className="rr-feedback-content">
                      {renderTextSegment(results.actionable_feedback, 'feedback')}
                    </div>
                  </div>

                  <button className="rr-tailor-prompt-btn" onClick={() => setActiveTab('tailor')}>
                    <Wand2 size={15} />
                    Tailor this resume for a specific job
                    <ArrowRight size={14} />
                  </button>
                </>
              )}
            </>
          )}

          {/* ── IMPROVE TAB ── */}
          {activeTab === 'improve' && (
            <div className="rr-improve-tab">
              {!improvedResume && !improveLoading && (
                <div className="rr-improve-intro">
                  <div className="rr-improve-intro-icon"><Sparkles size={28} /></div>
                  <div>
                    <div className="rr-improve-intro-title">AI Resume Rewriter</div>
                    <p className="rr-improve-intro-desc">
                      The AI will rewrite your entire resume — stronger verbs, quantified impact,
                      tighter bullets, and a punchy summary — while keeping all your real experience
                      intact. Download the result as a polished, print-ready PDF.
                    </p>
                  </div>
                </div>
              )}

              {!resumeText.trim() && (
                <div className="rr-tailor-warn">
                  <AlertCircle size={14} />
                  <span>Please paste or upload your resume on the left first.</span>
                </div>
              )}

              {improveError && (
                <div className="rr-error"><AlertCircle size={16} />{improveError}</div>
              )}

              {!improvedResume && (
                <button
                  className="rr-improve-btn"
                  onClick={handleImprove}
                  disabled={improveLoading || !resumeText.trim()}
                >
                  {improveLoading ? (
                    <><div className="rr-spinner rr-spinner-gold" />Rewriting your resume...</>
                  ) : (
                    <><Sparkles size={16} />Rewrite & Improve My Resume</>
                  )}
                </button>
              )}

              {/* Improved resume editor */}
              {improvedResume && (
                <>
                  {/* Toolbar */}
                  <div className="rr-improve-toolbar">
                    <div className="rr-view-toggle">
                      <button
                        className={`rr-view-btn${viewMode === 'original' ? ' rr-view-active' : ''}`}
                        onClick={() => setViewMode('original')}
                      >
                        <Eye size={12} /> Original
                      </button>
                      <button
                        className={`rr-view-btn${viewMode === 'improved' ? ' rr-view-active' : ''}`}
                        onClick={() => setViewMode('improved')}
                      >
                        <Edit3 size={12} /> Improved
                      </button>
                    </div>
                    <div className="rr-improve-actions">
                      {viewMode === 'improved' && editedResume !== improvedResume && (
                        <button className="rr-reset-btn" onClick={resetToAI} title="Reset to AI version">
                          <RotateCcw size={12} /> Reset
                        </button>
                      )}
                      <CopyButton text={editedResume} />
                      <button className="rr-download-btn" onClick={handleDownload}>
                        <Download size={13} /> Download PDF
                      </button>
                    </div>
                  </div>

                  <div className="rr-view-label">
                    {viewMode === 'original' ? (
                      <><Eye size={11} /> Original resume (read-only)</>
                    ) : (
                      <><Edit3 size={11} /> AI-improved version — edit freely, then download as PDF</>
                    )}
                  </div>

                  {viewMode === 'original' ? (
                    <textarea
                      className="rr-improve-textarea rr-improve-textarea-readonly"
                      value={resumeText}
                      readOnly
                      spellCheck={false}
                    />
                  ) : (
                    <textarea
                      className="rr-improve-textarea"
                      value={editedResume}
                      onChange={(e) => setEditedResume(e.target.value)}
                      spellCheck={false}
                      placeholder="Your improved resume will appear here..."
                    />
                  )}

                  {/* What changed */}
                  {changesMade.length > 0 && (
                    <div className="rr-changes-box">
                      <div
                        className="rr-changes-header"
                        onClick={() => setChangesExpanded(e => !e)}
                      >
                        <ListChecks size={14} />
                        <span className="rr-changes-title">What the AI Changed</span>
                        <span className="rr-changes-count">{changesMade.length} improvements</span>
                        {changesExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </div>
                      {changesExpanded && (
                        <ul className="rr-changes-list">
                          {changesMade.map((change, i) => (
                            <li key={i} className="rr-changes-item">
                              <CheckCircle size={12} className="rr-changes-icon" />
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  <button
                    className="rr-reimprove-btn"
                    onClick={() => { setImprovedResume(''); setEditedResume(''); setChangesMade([]); }}
                  >
                    <Sparkles size={13} /> Generate a New Version
                  </button>
                </>
              )}
            </div>
          )}

          {/* ── TAILOR TAB ── */}
          {activeTab === 'tailor' && (
            <div className="rr-tailor-tab">
              {!tailorResults && (
                <div className="rr-tailor-intro">
                  <div className="rr-tailor-intro-icon"><Target size={24} /></div>
                  <div>
                    <div className="rr-tailor-intro-title">ATS Optimization & Tailoring</div>
                    <p className="rr-tailor-intro-desc">
                      Paste a job description below. The AI will calculate your ATS match score,
                      find keyword gaps, rewrite weak bullets, and give you a role-specific summary.
                    </p>
                  </div>
                </div>
              )}

              {!resumeText.trim() && (
                <div className="rr-tailor-warn">
                  <AlertCircle size={14} />
                  <span>Please paste or upload your resume on the left first.</span>
                </div>
              )}

              <div className="rr-jd-section">
                <div className="rr-panel-label">Job Description</div>
                <textarea
                  className="rr-jd-textarea"
                  placeholder={`Paste the full job description here...\n\nInclude requirements, responsibilities, and qualifications. The more complete, the better the tailoring.`}
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                  spellCheck={false}
                />
              </div>

              <button
                className="rr-tailor-btn"
                onClick={handleTailor}
                disabled={tailorLoading || !canTailor}
              >
                {tailorLoading ? (
                  <><div className="rr-spinner rr-spinner-dark" />Tailoring your resume...</>
                ) : (
                  <><Wand2 size={16} />Tailor My Resume for This Role</>
                )}
              </button>

              {tailorError && (
                <div className="rr-error">
                  <AlertCircle size={16} />{tailorError}
                </div>
              )}

              {tailorResults && (
                <div className="rr-tailor-results">
                  {/* ATS Score Hero */}
                  <div className="rr-ats-hero">
                    <AtsScoreCircle score={tailorResults.ats_score} />
                    <div className="rr-ats-hero-info">
                      <div className="rr-ats-hero-label">ATS Match Score</div>
                      <p className="rr-ats-hero-summary">{tailorResults.ats_summary}</p>
                      <div className="rr-ats-hero-hint">
                        {tailorResults.ats_score >= 75 ? (
                          <><CheckCircle size={13} /> Strong match — focus on the gaps below to push higher.</>
                        ) : tailorResults.ats_score >= 50 ? (
                          <><AlertTriangle size={13} /> Moderate match — incorporate the missing keywords and rewrites below.</>
                        ) : (
                          <><XCircle size={13} /> Weak match — significant tailoring needed. Follow all suggestions below.</>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Keyword Analysis */}
                  <div className="rr-keyword-section">
                    <div className="rr-section-header">
                      <Zap size={15} />
                      <span className="rr-section-title">Keyword Analysis</span>
                    </div>
                    <div className="rr-keyword-cols">
                      <div className="rr-keyword-col">
                        <div className="rr-keyword-col-label rr-kw-present-label">
                          <CheckCircle size={12} /> Present ({tailorResults.keywords_present?.length || 0})
                        </div>
                        <div className="rr-chips">
                          {(tailorResults.keywords_present || []).map((kw, i) => (
                            <span key={i} className="rr-chip rr-chip-green">{kw}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rr-keyword-col">
                        <div className="rr-keyword-col-label rr-kw-gap-label">
                          <XCircle size={12} /> Missing ({tailorResults.keyword_gaps?.length || 0})
                        </div>
                        <div className="rr-chips">
                          {(tailorResults.keyword_gaps || []).map((kw, i) => (
                            <span key={i} className="rr-chip rr-chip-red">{kw}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills to Highlight */}
                  {tailorResults.skills_to_highlight?.length > 0 && (
                    <div className="rr-skills-section">
                      <div className="rr-section-header">
                        <Star size={15} />
                        <span className="rr-section-title">Skills to Feature Prominently</span>
                      </div>
                      <div className="rr-chips">
                        {tailorResults.skills_to_highlight.map((sk, i) => (
                          <span key={i} className="rr-chip rr-chip-blue">{sk}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Summary Rewrite */}
                  {tailorResults.summary_rewrite && (
                    <div className="rr-summary-rewrite">
                      <div className="rr-summary-rewrite-header">
                        <div className="rr-section-header">
                          <Wand2 size={15} />
                          <span className="rr-section-title">AI-Rewritten Professional Summary</span>
                        </div>
                        <CopyButton text={tailorResults.summary_rewrite} className="rr-copy-summary" />
                      </div>
                      <p className="rr-summary-rewrite-text">{tailorResults.summary_rewrite}</p>
                    </div>
                  )}

                  {/* Bullet Rewrites */}
                  {tailorResults.bullet_rewrites?.length > 0 && (
                    <div className="rr-rewrites-section">
                      <div className="rr-section-header">
                        <ArrowRight size={15} />
                        <span className="rr-section-title">Bullet Point Rewrites</span>
                        <span className="rr-section-count">{tailorResults.bullet_rewrites.length} suggested</span>
                      </div>
                      <div className="rr-rewrites-list">
                        {tailorResults.bullet_rewrites.map((rw, i) => (
                          <BulletRewriteCard key={i} rewrite={rw} index={i} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tailoring Tips Checklist */}
                  {tailorResults.tailoring_tips?.length > 0 && (
                    <div className="rr-tips-section">
                      <div className="rr-section-header">
                        <CheckCircle size={15} />
                        <span className="rr-section-title">Tailoring Action Items</span>
                        <span className="rr-tips-progress">
                          {checkedTips.size}/{tailorResults.tailoring_tips.length} done
                        </span>
                      </div>
                      <div className="rr-tips-list">
                        {tailorResults.tailoring_tips.map((tip, i) => (
                          <div
                            key={i}
                            className={`rr-tip-item${checkedTips.has(i) ? ' rr-tip-done' : ''}`}
                            onClick={() => toggleTip(i)}
                          >
                            <div className={`rr-tip-check${checkedTips.has(i) ? ' rr-tip-checked' : ''}`}>
                              {checkedTips.has(i) && <Check size={10} />}
                            </div>
                            <span className="rr-tip-text">{tip}</span>
                          </div>
                        ))}
                      </div>
                      {checkedTips.size === tailorResults.tailoring_tips.length && (
                        <div className="rr-tips-complete">
                          <CheckCircle size={14} /> All done — your resume is ready to submit!
                        </div>
                      )}
                    </div>
                  )}

                  <button className="rr-retailor-btn" onClick={() => setTailorResults(null)}>
                    <Wand2 size={14} /> Tailor for a Different Role
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

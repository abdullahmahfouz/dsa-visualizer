import { HelpCircle, Lightbulb, Info, Clock, Zap, CheckCircle } from 'lucide-react';

// Import concept data from JSON files
import stackConcepts from '../data/concepts/stack.json';
import queueConcepts from '../data/concepts/queue.json';
import linkedlistConcepts from '../data/concepts/linkedlist.json';
import binarytreeConcepts from '../data/concepts/binarytree.json';
import hashtableConcepts from '../data/concepts/hashtable.json';
import hashtableChainingConcepts from '../data/concepts/hashTableChaining.json';
import hashtableQuadraticConcepts from '../data/concepts/hashtableQuadratic.json';
import bstConcepts from '../data/concepts/bst.json';

// Map data structure names to their concept data
const conceptsData = {
  stack: stackConcepts,
  queue: queueConcepts,
  linkedlist: linkedlistConcepts,
  binarytree: binarytreeConcepts,
  hashtable: hashtableConcepts,
  hashtableChaining: hashtableChainingConcepts,
  hashtableQuadratic: hashtableQuadraticConcepts,
  bst: bstConcepts
};

function ConceptsPanel({ dataStructure }) {
  const data = conceptsData[dataStructure];

  if (!data) {
    return (
      <div className="concepts-panel">
        <p>Concepts not available for this data structure.</p>
      </div>
    );
  }

  return (
    <div className="concepts-panel">
      {/* Main Concept Box */}
      {data.concept && (
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>{data.concept.title}</span>
          </div>
          <div className="concept-content">
            <p>{data.concept.description}</p>

            {data.concept.codeExample && (
              <pre className="concept-code-example">
                <code>{data.concept.codeExample}</code>
              </pre>
            )}

            {data.concept.analogy && (
              <div className="concept-analogy">
                <Lightbulb />
                <span>{data.concept.analogy}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Properties Section */}
      {data.properties && (
        <div className="concept-box">
          <div className="concept-header">
            <Info className="icon-sm" />
            <span>{data.properties.title}</span>
          </div>
          <div className="concept-content">
            <div className="properties-grid">
              {data.properties.items.map((item, idx) => (
                <div key={idx} className="property-item">
                  <span className="property-label">{item.label}</span>
                  <span className="property-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Complexity Section */}
      {data.complexity && (
        <div className="concept-box">
          <div className="concept-header">
            <Clock className="icon-sm" />
            <span>{data.complexity.title}</span>
          </div>
          <div className="concept-content">
            <div className="complexity-table">
              {data.complexity.operations.map((op, idx) => (
                <div key={idx} className="complexity-row">
                  <span className="complexity-name">{op.name}</span>
                  {op.time && (
                    <code className="complexity-time">{op.time}</code>
                  )}
                  {op.average && (
                    <>
                      <code className="complexity-avg">{op.average}</code>
                      {op.worst && (
                        <code className="complexity-worst">{op.worst}</code>
                      )}
                    </>
                  )}
                  {op.description && (
                    <span className="complexity-desc">{op.description}</span>
                  )}
                </div>
              ))}
            </div>
            {data.complexity.note && (
              <p className="complexity-note">{data.complexity.note}</p>
            )}
          </div>
        </div>
      )}

      {/* Use Cases Section */}
      {data.useCases && (
        <div className="concept-box">
          <div className="concept-header">
            <Zap className="icon-sm" />
            <span>{data.useCases.title}</span>
          </div>
          <div className="concept-content">
            <ul className="use-cases-list">
              {data.useCases.items.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle className="icon-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Traversals Section (for trees) */}
      {data.traversals && (
        <div className="concept-box">
          <div className="concept-header">
            <Info className="icon-sm" />
            <span>{data.traversals.title}</span>
          </div>
          <div className="concept-content">
            <div className="traversals-list">
              {data.traversals.items.map((item, idx) => (
                <div key={idx} className="traversal-item">
                  <span className="traversal-name">{item.name}</span>
                  <span className="traversal-order">{item.order}</span>
                  <span className="traversal-use">{item.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Delete Cases Section (for BST) */}
      {data.deleteCases && (
        <div className="concept-box">
          <div className="concept-header">
            <Info className="icon-sm" />
            <span>{data.deleteCases.title}</span>
          </div>
          <div className="concept-content">
            <div className="delete-cases-grid">
              {data.deleteCases.items.map((item, idx) => (
                <div key={idx} className="delete-case-item">
                  <span className="case-number">{idx + 1}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison Section (for BST) */}
      {data.comparison && (
        <div className="concept-box">
          <div className="concept-header">
            <Info className="icon-sm" />
            <span>{data.comparison.title}</span>
          </div>
          <div className="concept-content">
            <div className="comparison-list">
              {data.comparison.items.map((item, idx) => (
                <div key={idx} className="comparison-item">
                  <span className="comparison-vs">vs {item.vs}</span>
                  <span className="comparison-advantage">{item.advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConceptsPanel;

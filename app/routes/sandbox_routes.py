"""
Sandbox routes — script persistence + Python execution.

POST /api/sandbox/scripts       { name, code }  → { id }
GET  /api/sandbox/scripts/<id>                  → { id, name, code, created_at }
POST /api/sandbox/run           { code }        → { snapshots, error, errorLine }
"""

import uuid
from datetime import datetime
from flask import Blueprint, request, jsonify

sandbox_bp = Blueprint('sandbox', __name__, url_prefix='/api/sandbox')

_scripts: dict = {}  # { short_id: { name, code, created_at } }


@sandbox_bp.route('/scripts', methods=['POST'])
def save_script():
    data = request.get_json(silent=True) or {}
    code = data.get('code', '')
    name = data.get('name', 'Untitled')

    if not code:
        return jsonify({'error': 'code is required'}), 400

    short_id = uuid.uuid4().hex[:8]
    _scripts[short_id] = {
        'name': name,
        'code': code,
        'created_at': datetime.utcnow().isoformat() + 'Z',
    }
    return jsonify({'id': short_id}), 201


@sandbox_bp.route('/scripts/<script_id>', methods=['GET'])
def load_script(script_id):
    script = _scripts.get(script_id)
    if script is None:
        return jsonify({'error': 'Script not found'}), 404
    return jsonify({'id': script_id, **script})


# ── Python execution ──────────────────────────────────────────────────────────

_SKIP_INJECT = ('else:', 'elif ', 'except:', 'except,', 'finally:')

_SAFE_BUILTINS = {
    'range': range, 'len': len, 'print': lambda *a, **k: None,
    'str': str, 'int': int, 'float': float, 'bool': bool,
    'list': list, 'dict': dict, 'set': set, 'tuple': tuple,
    'abs': abs, 'min': min, 'max': max, 'sum': sum,
    'enumerate': enumerate, 'zip': zip, 'map': map, 'filter': filter,
    'sorted': sorted, 'reversed': reversed,
    'isinstance': isinstance, 'type': type,
    'True': True, 'False': False, 'None': None,
    'Exception': Exception, 'RuntimeError': RuntimeError,
    'ValueError': ValueError, 'TypeError': TypeError,
    'round': round, 'pow': pow, 'divmod': divmod,
}


def _preprocess(src: str) -> str:
    """Inject __line__(n) before every executable line (preserving indentation)."""
    lines = src.split('\n')
    out = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped and not stripped.startswith('#'):
            skip = any(stripped.startswith(p) for p in _SKIP_INJECT)
            if not skip:
                indent = len(line) - len(line.lstrip())
                out.append(f'{line[:indent]}__line__({i + 1})')
        out.append(line)
    return '\n'.join(out)


@sandbox_bp.route('/run', methods=['POST'])
def run_python():
    data = request.get_json(silent=True) or {}
    code = (data.get('code') or '').strip()

    if not code:
        return jsonify({'snapshots': [], 'error': 'No code provided', 'errorLine': None})

    ITERATION_LIMIT = 500
    MAX_DS_ITEMS = 15

    snapshots: list = []
    current_line: list = [0]
    iter_count: list = [0]
    next_id: list = [1]

    state = {
        'stack': {'items': []},
        'queue': {'items': []},
        'linked_list': {'nodes': []},
    }

    def _snap(operation, ds_type, value, result, description):
        return {
            'lineNumber': current_line[0],
            'operation': operation,
            'dsType': ds_type,
            'value': value,
            'result': result,
            'state': {
                'stack': {'items': list(state['stack']['items'])},
                'queue': {'items': list(state['queue']['items'])},
                'linkedList': {'nodes': [dict(n) for n in state['linked_list']['nodes']]},
            },
            'action': operation,
            'description': description,
            'visited': [],
            'frontier': [],
        }

    class MyStack:
        def push(self, v):
            if len(state['stack']['items']) >= MAX_DS_ITEMS:
                raise RuntimeError(f'Stack overflow: cannot exceed {MAX_DS_ITEMS} items')
            state['stack']['items'].append(v)
            n = len(state['stack']['items'])
            snapshots.append(_snap('push', 'stack', v, None,
                                   f'my_stack.push({v!r}) → stack now has {n} item(s)'))

        def pop(self):
            if not state['stack']['items']:
                raise RuntimeError('my_stack.pop() called on empty stack')
            val = state['stack']['items'].pop()
            n = len(state['stack']['items'])
            snapshots.append(_snap('pop', 'stack', None, val,
                                   f'my_stack.pop() → removed {val!r}, {n} item(s) remain'))
            return val

        def peek(self):
            return state['stack']['items'][-1] if state['stack']['items'] else None

        @property
        def size(self):
            return len(state['stack']['items'])

        @property
        def is_empty(self):
            return len(state['stack']['items']) == 0

        def __repr__(self):
            return f'Stack({state["stack"]["items"]})'

    class MyQueue:
        def enqueue(self, v):
            if len(state['queue']['items']) >= MAX_DS_ITEMS:
                raise RuntimeError(f'Queue overflow: cannot exceed {MAX_DS_ITEMS} items')
            state['queue']['items'].append(v)
            n = len(state['queue']['items'])
            snapshots.append(_snap('enqueue', 'queue', v, None,
                                   f'my_queue.enqueue({v!r}) → queue now has {n} item(s)'))

        def dequeue(self):
            if not state['queue']['items']:
                raise RuntimeError('my_queue.dequeue() called on empty queue')
            val = state['queue']['items'].pop(0)
            n = len(state['queue']['items'])
            snapshots.append(_snap('dequeue', 'queue', None, val,
                                   f'my_queue.dequeue() → removed {val!r}, {n} item(s) remain'))
            return val

        def peek(self):
            return state['queue']['items'][0] if state['queue']['items'] else None

        @property
        def size(self):
            return len(state['queue']['items'])

        @property
        def is_empty(self):
            return len(state['queue']['items']) == 0

        def __repr__(self):
            return f'Queue({state["queue"]["items"]})'

    class MyLinkedList:
        def insert_head(self, v):
            if len(state['linked_list']['nodes']) >= MAX_DS_ITEMS:
                raise RuntimeError(f'Linked list overflow: cannot exceed {MAX_DS_ITEMS} nodes')
            nid = next_id[0]; next_id[0] += 1
            state['linked_list']['nodes'].insert(0, {'id': nid, 'value': v})
            n = len(state['linked_list']['nodes'])
            snapshots.append(_snap('insertHead', 'linkedList', v, None,
                                   f'my_list.insert_head({v!r}) → node added at head, {n} node(s)'))

        def insert_tail(self, v):
            if len(state['linked_list']['nodes']) >= MAX_DS_ITEMS:
                raise RuntimeError(f'Linked list overflow: cannot exceed {MAX_DS_ITEMS} nodes')
            nid = next_id[0]; next_id[0] += 1
            state['linked_list']['nodes'].append({'id': nid, 'value': v})
            n = len(state['linked_list']['nodes'])
            snapshots.append(_snap('insertTail', 'linkedList', v, None,
                                   f'my_list.insert_tail({v!r}) → node added at tail, {n} node(s)'))

        def delete(self, v):
            nodes = state['linked_list']['nodes']
            idx = next((i for i, nd in enumerate(nodes) if nd['value'] == v), -1)
            if idx == -1:
                snapshots.append(_snap('delete', 'linkedList', v, False,
                                       f'my_list.delete({v!r}) → value not found, list unchanged'))
                return False
            nodes.pop(idx)
            snapshots.append(_snap('delete', 'linkedList', v, True,
                                   f'my_list.delete({v!r}) → removed, {len(nodes)} node(s) remain'))
            return True

        def find(self, v):
            found = any(nd['value'] == v for nd in state['linked_list']['nodes'])
            snapshots.append(_snap('find', 'linkedList', v, found,
                                   f'my_list.find({v!r}) → {"found" if found else "not found"}'))
            return found

        @property
        def size(self):
            return len(state['linked_list']['nodes'])

        @property
        def is_empty(self):
            return len(state['linked_list']['nodes']) == 0

        def __repr__(self):
            return f'LinkedList({[n["value"] for n in state["linked_list"]["nodes"]]})'

    def __line__(n):
        current_line[0] = n
        iter_count[0] += 1
        if iter_count[0] > ITERATION_LIMIT:
            raise RuntimeError(
                f'Execution stopped: exceeded {ITERATION_LIMIT} iterations. '
                f'Check for infinite loops.'
            )

    namespace = {
        '__builtins__': _SAFE_BUILTINS,
        '__line__': __line__,
        'my_stack': MyStack(),
        'my_queue': MyQueue(),
        'my_list': MyLinkedList(),
    }

    try:
        exec(_preprocess(code), namespace)  # noqa: S102

        if not snapshots:
            return jsonify({
                'snapshots': [],
                'error': (
                    'No operations recorded. '
                    'Call my_stack.push(), my_queue.enqueue(), or my_list.insert_head() '
                    'to generate steps.'
                ),
                'errorLine': None,
            })

        return jsonify({'snapshots': snapshots, 'error': None, 'errorLine': None})

    except Exception as exc:  # noqa: BLE001
        return jsonify({
            'snapshots': snapshots,
            'error': str(exc),
            'errorLine': current_line[0] or None,
        })

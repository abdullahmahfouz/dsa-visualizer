"""
Graph API Routes
================
All routes related to the Graph data structure.

Blueprint = A way to organize routes in separate files
url_prefix = All routes here start with /api/graph
"""

from flask import Blueprint, jsonify, request
from ...models.graphs.graph import Graph

# Create a Blueprint
graph_bp = Blueprint('graph', __name__, url_prefix='/api/graph')

# Create graph instance - undirected by default
graph = Graph(directed=False, max_vertices=15)


@graph_bp.route("", methods=["GET"])
def get_graph():
    """
    GET /api/graph
    Returns the current graph state.
    """
    return jsonify(graph.to_dict())


@graph_bp.route("/vertex", methods=["POST"])
def add_vertex():
    """
    POST /api/graph/vertex
    Add a vertex to the graph.
    Expects: {"vertex": "A"}
    """
    data = request.json
    vertex = data.get("vertex")

    if vertex is None or str(vertex).strip() == "":
        return jsonify({"error": "No vertex provided"}), 400

    try:
        graph.add_vertex(vertex)
        return jsonify({
            "message": f"Added vertex '{vertex}'",
            **graph.to_dict()
        })
    except (ValueError, OverflowError) as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/vertex/<vertex>", methods=["DELETE"])
def remove_vertex(vertex):
    """
    DELETE /api/graph/vertex/<vertex>
    Remove a vertex and all its edges.
    """
    try:
        graph.remove_vertex(vertex)
        return jsonify({
            "message": f"Removed vertex '{vertex}'",
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/edge", methods=["POST"])
def add_edge():
    """
    POST /api/graph/edge
    Add an edge between two vertices.
    Expects: {"from": "A", "to": "B", "weight": 1}
    """
    data = request.json
    v1 = data.get("from")
    v2 = data.get("to")
    weight = data.get("weight", 1)

    if v1 is None or v2 is None:
        return jsonify({"error": "Both 'from' and 'to' vertices required"}), 400

    try:
        graph.add_edge(v1, v2, weight)
        return jsonify({
            "message": f"Added edge from '{v1}' to '{v2}'",
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/edge", methods=["DELETE"])
def remove_edge():
    """
    DELETE /api/graph/edge
    Remove an edge between two vertices.
    Expects: {"from": "A", "to": "B"}
    """
    data = request.json
    v1 = data.get("from")
    v2 = data.get("to")

    if v1 is None or v2 is None:
        return jsonify({"error": "Both 'from' and 'to' vertices required"}), 400

    try:
        graph.remove_edge(v1, v2)
        return jsonify({
            "message": f"Removed edge from '{v1}' to '{v2}'",
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/bfs/<start>", methods=["GET"])
def bfs_traversal(start):
    """
    GET /api/graph/bfs/<start>
    Perform BFS traversal from the given vertex.
    """
    try:
        result, steps = graph.bfs(start)
        return jsonify({
            "traversal": result,
            "steps": steps,
            "message": f"BFS from '{start}': {' -> '.join(result)}",
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/dfs/<start>", methods=["GET"])
def dfs_traversal(start):
    """
    GET /api/graph/dfs/<start>
    Perform DFS traversal from the given vertex.
    """
    try:
        result, steps = graph.dfs(start)
        return jsonify({
            "traversal": result,
            "steps": steps,
            "message": f"DFS from '{start}': {' -> '.join(result)}",
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/neighbors/<vertex>", methods=["GET"])
def get_neighbors(vertex):
    """
    GET /api/graph/neighbors/<vertex>
    Get all neighbors of a vertex.
    """
    try:
        neighbors = graph.get_neighbors(vertex)
        return jsonify({
            "vertex": vertex,
            "neighbors": neighbors,
            "message": f"Neighbors of '{vertex}': {[n for n, _ in neighbors]}"
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/matrix", methods=["GET"])
def get_adjacency_matrix():
    """
    GET /api/graph/matrix
    Get the adjacency matrix representation.
    """
    matrix, vertices = graph.get_adjacency_matrix()
    return jsonify({
        "matrix": matrix,
        "vertices": vertices,
        "size": len(vertices)
    })


@graph_bp.route("/clear", methods=["POST"])
def clear_graph():
    """
    POST /api/graph/clear
    Remove all vertices and edges.
    """
    graph.clear()
    return jsonify({
        "message": "Graph cleared",
        **graph.to_dict()
    })


@graph_bp.route("/dijkstra/<start>", methods=["GET"])
def dijkstra_algorithm(start):
    """
    GET /api/graph/dijkstra/<start>
    Run Dijkstra's algorithm from the given vertex.
    Optional query param: end (target vertex)
    """
    end = request.args.get('end')
    try:
        result = graph.dijkstra(start, end)
        return jsonify({
            **result,
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/mst", methods=["GET"])
def prim_mst():
    """
    GET /api/graph/mst
    Run Prim's MST algorithm.
    Optional query param: start (starting vertex)
    """
    start = request.args.get('start')
    try:
        result = graph.prim_mst(start)
        return jsonify({
            **result,
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/topological", methods=["GET"])
def topological_sort():
    """
    GET /api/graph/topological
    Run topological sort on the graph.
    """
    try:
        result = graph.topological_sort()
        return jsonify({
            **result,
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/bellman-ford/<start>", methods=["GET"])
def bellman_ford_algorithm(start):
    """
    GET /api/graph/bellman-ford/<start>
    Run Bellman-Ford algorithm from the given vertex.
    Can handle negative edge weights (unlike Dijkstra).
    """
    try:
        result = graph.bellman_ford(start)
        return jsonify({
            **result,
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/kruskal", methods=["GET"])
def kruskal_mst():
    """
    GET /api/graph/kruskal
    Run Kruskal's MST algorithm using Union-Find.
    """
    try:
        result = graph.kruskal_mst()
        return jsonify({
            **result,
            **graph.to_dict()
        })
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@graph_bp.route("/preset/<name>", methods=["POST"])
def load_preset(name):
    """
    POST /api/graph/preset/<name>
    Load a preset graph for demonstration.
    Available presets: simple, tree, cyclic, disconnected
    """
    graph.clear()

    presets = {
        "simple": {
            "vertices": ["A", "B", "C", "D", "E"],
            "edges": [("A", "B", 1), ("A", "C", 1), ("B", "D", 1), ("C", "D", 1), ("D", "E", 1)]
        },
        "tree": {
            "vertices": ["1", "2", "3", "4", "5", "6", "7"],
            "edges": [("1", "2", 1), ("1", "3", 1), ("2", "4", 1), ("2", "5", 1), ("3", "6", 1), ("3", "7", 1)]
        },
        "cyclic": {
            "vertices": ["A", "B", "C", "D"],
            "edges": [("A", "B", 1), ("B", "C", 1), ("C", "D", 1), ("D", "A", 1), ("A", "C", 1)]
        },
        "disconnected": {
            "vertices": ["A", "B", "C", "X", "Y"],
            "edges": [("A", "B", 1), ("B", "C", 1), ("X", "Y", 1)]
        },
        "complete": {
            "vertices": ["A", "B", "C", "D"],
            "edges": [("A", "B", 1), ("A", "C", 1), ("A", "D", 1), ("B", "C", 1), ("B", "D", 1), ("C", "D", 1)]
        },
        "weighted": {
            "vertices": ["A", "B", "C", "D", "E"],
            "edges": [("A", "B", 4), ("A", "C", 2), ("B", "C", 1), ("B", "D", 5), ("C", "D", 8), ("C", "E", 10), ("D", "E", 2)]
        },
        "dag": {
            "vertices": ["A", "B", "C", "D", "E", "F"],
            "edges": [("A", "B", 1), ("A", "C", 1), ("B", "D", 1), ("C", "D", 1), ("C", "E", 1), ("D", "F", 1), ("E", "F", 1)]
        }
    }

    if name not in presets:
        return jsonify({
            "error": f"Unknown preset. Available: {list(presets.keys())}"
        }), 400

    preset = presets[name]
    for v in preset["vertices"]:
        graph.add_vertex(v)
    for edge in preset["edges"]:
        if len(edge) == 3:
            graph.add_edge(edge[0], edge[1], edge[2])
        else:
            graph.add_edge(edge[0], edge[1])

    return jsonify({
        "message": f"Loaded '{name}' preset",
        **graph.to_dict()
    })

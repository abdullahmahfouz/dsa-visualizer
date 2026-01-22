"""
Graph Data Structure
====================
A graph is a non-linear data structure consisting of vertices (nodes) and edges.
Graphs are used to represent networks, relationships, and connections.

This implementation uses an adjacency list representation.

Operations:
- add_vertex(vertex): Add a vertex to the graph
- add_edge(v1, v2, weight): Add an edge between two vertices
- remove_vertex(vertex): Remove a vertex and its edges
- remove_edge(v1, v2): Remove an edge between two vertices
- get_neighbors(vertex): Get all adjacent vertices
- bfs(start): Breadth-First Search traversal
- dfs(start): Depth-First Search traversal
"""

from collections import deque


class Graph:
    def __init__(self, directed=False, max_vertices=15):
        """
        Initialize an empty graph.

        Args:
            directed: If True, creates a directed graph. Default is undirected.
            max_vertices: Maximum number of vertices allowed (default 15)
        """
        self._adjacency_list = {}
        self._directed = directed
        self._max_vertices = max_vertices

    def add_vertex(self, vertex):
        """
        Add a vertex to the graph.
        Time Complexity: O(1)

        Args:
            vertex: The vertex identifier (string or number)

        Raises:
            ValueError: If vertex already exists or max vertices reached
        """
        vertex = str(vertex)
        if vertex in self._adjacency_list:
            raise ValueError(f"Vertex '{vertex}' already exists")
        if len(self._adjacency_list) >= self._max_vertices:
            raise OverflowError(f"Maximum vertices ({self._max_vertices}) reached")
        self._adjacency_list[vertex] = []

    def add_edge(self, v1, v2, weight=1):
        """
        Add an edge between two vertices.
        Time Complexity: O(1)

        Args:
            v1: First vertex
            v2: Second vertex
            weight: Edge weight (default 1)

        Raises:
            ValueError: If either vertex doesn't exist or edge already exists
        """
        v1, v2 = str(v1), str(v2)
        if v1 not in self._adjacency_list:
            raise ValueError(f"Vertex '{v1}' does not exist")
        if v2 not in self._adjacency_list:
            raise ValueError(f"Vertex '{v2}' does not exist")

        # Check if edge already exists
        for neighbor, _ in self._adjacency_list[v1]:
            if neighbor == v2:
                raise ValueError(f"Edge from '{v1}' to '{v2}' already exists")

        self._adjacency_list[v1].append((v2, weight))

        if not self._directed:
            # For undirected graphs, add edge in both directions
            self._adjacency_list[v2].append((v1, weight))

    def remove_vertex(self, vertex):
        """
        Remove a vertex and all its edges.
        Time Complexity: O(V + E)

        Args:
            vertex: The vertex to remove

        Raises:
            ValueError: If vertex doesn't exist
        """
        vertex = str(vertex)
        if vertex not in self._adjacency_list:
            raise ValueError(f"Vertex '{vertex}' does not exist")

        # Remove all edges pointing to this vertex
        for v in self._adjacency_list:
            self._adjacency_list[v] = [
                (neighbor, weight)
                for neighbor, weight in self._adjacency_list[v]
                if neighbor != vertex
            ]

        # Remove the vertex itself
        del self._adjacency_list[vertex]

    def remove_edge(self, v1, v2):
        """
        Remove an edge between two vertices.
        Time Complexity: O(E)

        Args:
            v1: First vertex
            v2: Second vertex

        Raises:
            ValueError: If edge doesn't exist
        """
        v1, v2 = str(v1), str(v2)
        if v1 not in self._adjacency_list:
            raise ValueError(f"Vertex '{v1}' does not exist")
        if v2 not in self._adjacency_list:
            raise ValueError(f"Vertex '{v2}' does not exist")

        # Find and remove edge
        original_len = len(self._adjacency_list[v1])
        self._adjacency_list[v1] = [
            (neighbor, weight)
            for neighbor, weight in self._adjacency_list[v1]
            if neighbor != v2
        ]

        if len(self._adjacency_list[v1]) == original_len:
            raise ValueError(f"Edge from '{v1}' to '{v2}' does not exist")

        if not self._directed:
            self._adjacency_list[v2] = [
                (neighbor, weight)
                for neighbor, weight in self._adjacency_list[v2]
                if neighbor != v1
            ]

    def get_neighbors(self, vertex):
        """
        Get all neighbors of a vertex.
        Time Complexity: O(1)

        Returns:
            List of (neighbor, weight) tuples
        """
        vertex = str(vertex)
        if vertex not in self._adjacency_list:
            raise ValueError(f"Vertex '{vertex}' does not exist")
        return self._adjacency_list[vertex].copy()

    def bfs(self, start):
        """
        Perform Breadth-First Search from a starting vertex.
        Time Complexity: O(V + E)

        Args:
            start: The starting vertex

        Returns:
            List of vertices in BFS order with step information
        """
        start = str(start)
        if start not in self._adjacency_list:
            raise ValueError(f"Vertex '{start}' does not exist")

        visited = set()
        queue = deque([start])
        result = []
        steps = []

        while queue:
            current_queue = list(queue)
            vertex = queue.popleft()

            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                steps.append({
                    'vertex': vertex,
                    'action': 'visit',
                    'queue': current_queue,
                    'visited': list(visited)
                })

                for neighbor, _ in sorted(self._adjacency_list[vertex]):
                    if neighbor not in visited:
                        queue.append(neighbor)
                        steps.append({
                            'vertex': neighbor,
                            'action': 'enqueue',
                            'queue': list(queue),
                            'visited': list(visited)
                        })

        return result, steps

    def dfs(self, start):
        """
        Perform Depth-First Search from a starting vertex.
        Time Complexity: O(V + E)

        Args:
            start: The starting vertex

        Returns:
            List of vertices in DFS order with step information
        """
        start = str(start)
        if start not in self._adjacency_list:
            raise ValueError(f"Vertex '{start}' does not exist")

        visited = set()
        stack = [start]
        result = []
        steps = []

        while stack:
            current_stack = list(stack)
            vertex = stack.pop()

            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                steps.append({
                    'vertex': vertex,
                    'action': 'visit',
                    'stack': current_stack,
                    'visited': list(visited)
                })

                # Add neighbors in reverse order for consistent traversal
                for neighbor, _ in sorted(self._adjacency_list[vertex], reverse=True):
                    if neighbor not in visited:
                        stack.append(neighbor)
                        steps.append({
                            'vertex': neighbor,
                            'action': 'push',
                            'stack': list(stack),
                            'visited': list(visited)
                        })

        return result, steps

    def dijkstra(self, start, end=None):
        """
        Dijkstra's Algorithm - Find shortest paths from start vertex.
        Time Complexity: O((V + E) log V) with priority queue

        Args:
            start: The starting vertex
            end: Optional end vertex (if provided, stops when reached)

        Returns:
            Tuple of (distances dict, previous dict, steps list)
        """
        import heapq

        start = str(start)
        if start not in self._adjacency_list:
            raise ValueError(f"Vertex '{start}' does not exist")

        # Initialize distances
        distances = {v: float('infinity') for v in self._adjacency_list}
        distances[start] = 0
        previous = {v: None for v in self._adjacency_list}

        # Priority queue: (distance, vertex)
        pq = [(0, start)]
        visited = set()
        steps = []

        steps.append({
            'action': 'init',
            'current': start,
            'distances': dict(distances),
            'visited': list(visited),
            'message': f'Initialize: Set distance to {start} = 0, all others = infinity'
        })

        while pq:
            current_dist, current = heapq.heappop(pq)

            if current in visited:
                continue

            visited.add(current)

            steps.append({
                'action': 'visit',
                'current': current,
                'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                'visited': list(visited),
                'message': f'Visit {current} (distance: {current_dist})'
            })

            # If we reached the end vertex, stop
            if end and current == str(end):
                break

            # Check all neighbors
            for neighbor, weight in self._adjacency_list[current]:
                if neighbor in visited:
                    continue

                new_dist = current_dist + weight

                steps.append({
                    'action': 'check',
                    'current': current,
                    'neighbor': neighbor,
                    'edge_weight': weight,
                    'new_dist': new_dist,
                    'old_dist': distances[neighbor] if distances[neighbor] != float('infinity') else 'inf',
                    'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                    'visited': list(visited),
                    'message': f'Check edge {current}→{neighbor}: {current_dist} + {weight} = {new_dist}'
                })

                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    previous[neighbor] = current
                    heapq.heappush(pq, (new_dist, neighbor))

                    steps.append({
                        'action': 'update',
                        'current': current,
                        'neighbor': neighbor,
                        'new_dist': new_dist,
                        'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                        'visited': list(visited),
                        'message': f'Update: distance[{neighbor}] = {new_dist} (via {current})'
                    })

        # Build paths
        paths = {}
        for vertex in self._adjacency_list:
            if distances[vertex] != float('infinity'):
                path = []
                current = vertex
                while current is not None:
                    path.append(current)
                    current = previous[current]
                paths[vertex] = list(reversed(path))

        return {
            'distances': {k: v if v != float('infinity') else None for k, v in distances.items()},
            'previous': previous,
            'paths': paths,
            'steps': steps
        }

    def prim_mst(self, start=None):
        """
        Prim's Algorithm - Find Minimum Spanning Tree.
        Time Complexity: O((V + E) log V) with priority queue

        Args:
            start: Optional starting vertex (defaults to first vertex)

        Returns:
            Tuple of (MST edges, total weight, steps)
        """
        import heapq

        if not self._adjacency_list:
            raise ValueError("Graph is empty")

        vertices = list(self._adjacency_list.keys())
        start = str(start) if start else vertices[0]

        if start not in self._adjacency_list:
            raise ValueError(f"Vertex '{start}' does not exist")

        mst_edges = []
        total_weight = 0
        visited = set()
        steps = []

        # Priority queue: (weight, from_vertex, to_vertex)
        pq = [(0, None, start)]

        steps.append({
            'action': 'init',
            'current': start,
            'mst_edges': [],
            'visited': [],
            'total_weight': 0,
            'message': f'Start Prim\'s algorithm from vertex {start}'
        })

        while pq and len(visited) < len(vertices):
            weight, from_v, to_v = heapq.heappop(pq)

            if to_v in visited:
                continue

            visited.add(to_v)

            if from_v is not None:
                mst_edges.append((from_v, to_v, weight))
                total_weight += weight

            steps.append({
                'action': 'add',
                'current': to_v,
                'from': from_v,
                'weight': weight,
                'mst_edges': list(mst_edges),
                'visited': list(visited),
                'total_weight': total_weight,
                'message': f'Add vertex {to_v}' + (f' via edge {from_v}→{to_v} (weight: {weight})' if from_v else ' (starting vertex)')
            })

            # Add all edges from current vertex to unvisited vertices
            for neighbor, edge_weight in self._adjacency_list[to_v]:
                if neighbor not in visited:
                    heapq.heappush(pq, (edge_weight, to_v, neighbor))
                    steps.append({
                        'action': 'consider',
                        'current': to_v,
                        'neighbor': neighbor,
                        'weight': edge_weight,
                        'mst_edges': list(mst_edges),
                        'visited': list(visited),
                        'total_weight': total_weight,
                        'message': f'Consider edge {to_v}→{neighbor} (weight: {edge_weight})'
                    })

        return {
            'mst_edges': mst_edges,
            'total_weight': total_weight,
            'steps': steps
        }

    def bellman_ford(self, start):
        """
        Bellman-Ford Algorithm - Find shortest paths from start vertex.
        Can handle negative edge weights (unlike Dijkstra).
        Time Complexity: O(V * E)

        Args:
            start: The starting vertex

        Returns:
            Dict with distances, previous, paths, steps, and has_negative_cycle
        """
        start = str(start)
        if start not in self._adjacency_list:
            raise ValueError(f"Vertex '{start}' does not exist")

        vertices = list(self._adjacency_list.keys())

        # Initialize distances
        distances = {v: float('infinity') for v in vertices}
        distances[start] = 0
        previous = {v: None for v in vertices}
        steps = []

        steps.append({
            'action': 'init',
            'current': start,
            'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
            'iteration': 0,
            'message': f'Initialize: Set distance to {start} = 0, all others = infinity'
        })

        # Get all edges
        all_edges = []
        for v1 in self._adjacency_list:
            for v2, weight in self._adjacency_list[v1]:
                if self._directed:
                    all_edges.append((v1, v2, weight))
                else:
                    # For undirected, only add each edge once
                    edge = tuple(sorted([v1, v2]))
                    if (edge[0], edge[1], weight) not in all_edges and (edge[1], edge[0], weight) not in all_edges:
                        all_edges.append((v1, v2, weight))
                        all_edges.append((v2, v1, weight))

        # Relax all edges V-1 times
        for i in range(len(vertices) - 1):
            updated = False

            steps.append({
                'action': 'iteration_start',
                'iteration': i + 1,
                'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                'message': f'Iteration {i + 1}: Relaxing all edges'
            })

            for v1, v2, weight in all_edges:
                if distances[v1] == float('infinity'):
                    continue

                new_dist = distances[v1] + weight

                steps.append({
                    'action': 'check',
                    'from': v1,
                    'to': v2,
                    'edge_weight': weight,
                    'current_dist': distances[v2] if distances[v2] != float('infinity') else 'inf',
                    'new_dist': new_dist,
                    'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                    'iteration': i + 1,
                    'message': f'Check edge {v1}→{v2}: {distances[v1]} + {weight} = {new_dist}'
                })

                if new_dist < distances[v2]:
                    distances[v2] = new_dist
                    previous[v2] = v1
                    updated = True

                    steps.append({
                        'action': 'update',
                        'from': v1,
                        'to': v2,
                        'new_dist': new_dist,
                        'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                        'iteration': i + 1,
                        'message': f'Update: distance[{v2}] = {new_dist} (via {v1})'
                    })

            # Early termination if no updates
            if not updated:
                steps.append({
                    'action': 'early_stop',
                    'iteration': i + 1,
                    'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                    'message': f'No updates in iteration {i + 1} - algorithm converged early'
                })
                break

        # Check for negative cycles
        has_negative_cycle = False
        for v1, v2, weight in all_edges:
            if distances[v1] != float('infinity') and distances[v1] + weight < distances[v2]:
                has_negative_cycle = True
                steps.append({
                    'action': 'negative_cycle',
                    'from': v1,
                    'to': v2,
                    'message': f'Negative cycle detected via edge {v1}→{v2}'
                })
                break

        if not has_negative_cycle:
            steps.append({
                'action': 'complete',
                'distances': {k: v if v != float('infinity') else 'inf' for k, v in distances.items()},
                'message': 'Algorithm complete - no negative cycles'
            })

        # Build paths
        paths = {}
        if not has_negative_cycle:
            for vertex in vertices:
                if distances[vertex] != float('infinity'):
                    path = []
                    current = vertex
                    while current is not None:
                        path.append(current)
                        current = previous[current]
                    paths[vertex] = list(reversed(path))

        return {
            'distances': {k: v if v != float('infinity') else None for k, v in distances.items()},
            'previous': previous,
            'paths': paths,
            'steps': steps,
            'has_negative_cycle': has_negative_cycle
        }

    def kruskal_mst(self):
        """
        Kruskal's Algorithm - Find Minimum Spanning Tree using Union-Find.
        Time Complexity: O(E log E) for sorting edges

        Returns:
            Dict with mst_edges, total_weight, and steps
        """
        if not self._adjacency_list:
            raise ValueError("Graph is empty")

        vertices = list(self._adjacency_list.keys())

        # Union-Find data structure
        parent = {v: v for v in vertices}
        rank = {v: 0 for v in vertices}

        def find(v):
            if parent[v] != v:
                parent[v] = find(parent[v])  # Path compression
            return parent[v]

        def union(v1, v2):
            root1, root2 = find(v1), find(v2)
            if root1 == root2:
                return False
            # Union by rank
            if rank[root1] < rank[root2]:
                parent[root1] = root2
            elif rank[root1] > rank[root2]:
                parent[root2] = root1
            else:
                parent[root2] = root1
                rank[root1] += 1
            return True

        # Get all edges and sort by weight
        edges = []
        seen = set()
        for v1 in self._adjacency_list:
            for v2, weight in self._adjacency_list[v1]:
                edge_key = tuple(sorted([v1, v2]))
                if edge_key not in seen:
                    seen.add(edge_key)
                    edges.append((weight, v1, v2))

        edges.sort()  # Sort by weight

        mst_edges = []
        total_weight = 0
        steps = []

        steps.append({
            'action': 'init',
            'edges_sorted': [(v1, v2, w) for w, v1, v2 in edges],
            'mst_edges': [],
            'total_weight': 0,
            'message': f'Sort all {len(edges)} edges by weight'
        })

        for weight, v1, v2 in edges:
            steps.append({
                'action': 'consider',
                'from': v1,
                'to': v2,
                'weight': weight,
                'mst_edges': list(mst_edges),
                'total_weight': total_weight,
                'message': f'Consider edge {v1}—{v2} (weight: {weight})'
            })

            if find(v1) != find(v2):
                # No cycle - add edge to MST
                union(v1, v2)
                mst_edges.append((v1, v2, weight))
                total_weight += weight

                steps.append({
                    'action': 'add',
                    'from': v1,
                    'to': v2,
                    'weight': weight,
                    'mst_edges': list(mst_edges),
                    'total_weight': total_weight,
                    'message': f'Add edge {v1}—{v2} to MST (no cycle formed)'
                })
            else:
                steps.append({
                    'action': 'reject',
                    'from': v1,
                    'to': v2,
                    'weight': weight,
                    'mst_edges': list(mst_edges),
                    'total_weight': total_weight,
                    'message': f'Reject edge {v1}—{v2} (would create cycle)'
                })

            # Check if MST is complete
            if len(mst_edges) == len(vertices) - 1:
                break

        steps.append({
            'action': 'complete',
            'mst_edges': list(mst_edges),
            'total_weight': total_weight,
            'message': f'MST complete with {len(mst_edges)} edges, total weight: {total_weight}'
        })

        return {
            'mst_edges': mst_edges,
            'total_weight': total_weight,
            'steps': steps
        }

    def topological_sort(self):
        """
        Topological Sort using Kahn's Algorithm (BFS-based).
        Only works on Directed Acyclic Graphs (DAGs).
        Time Complexity: O(V + E)

        Returns:
            Tuple of (sorted vertices, steps) or error if cycle detected
        """
        if not self._directed:
            # For undirected graphs, we'll treat edges as directed for demo
            pass

        # Calculate in-degrees
        in_degree = {v: 0 for v in self._adjacency_list}
        for vertex in self._adjacency_list:
            for neighbor, _ in self._adjacency_list[vertex]:
                in_degree[neighbor] = in_degree.get(neighbor, 0) + 1

        # Queue of vertices with no incoming edges
        queue = deque([v for v in self._adjacency_list if in_degree[v] == 0])
        result = []
        steps = []

        steps.append({
            'action': 'init',
            'in_degrees': dict(in_degree),
            'queue': list(queue),
            'result': [],
            'message': 'Calculate in-degrees for all vertices'
        })

        while queue:
            vertex = queue.popleft()
            result.append(vertex)

            steps.append({
                'action': 'process',
                'vertex': vertex,
                'in_degrees': dict(in_degree),
                'queue': list(queue),
                'result': list(result),
                'message': f'Process vertex {vertex} (in-degree was 0)'
            })

            # Reduce in-degree of neighbors
            for neighbor, _ in self._adjacency_list[vertex]:
                in_degree[neighbor] -= 1

                steps.append({
                    'action': 'decrement',
                    'vertex': vertex,
                    'neighbor': neighbor,
                    'new_in_degree': in_degree[neighbor],
                    'in_degrees': dict(in_degree),
                    'queue': list(queue),
                    'result': list(result),
                    'message': f'Decrement in-degree of {neighbor} to {in_degree[neighbor]}'
                })

                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
                    steps.append({
                        'action': 'enqueue',
                        'neighbor': neighbor,
                        'in_degrees': dict(in_degree),
                        'queue': list(queue),
                        'result': list(result),
                        'message': f'Add {neighbor} to queue (in-degree became 0)'
                    })

        # Check for cycle
        if len(result) != len(self._adjacency_list):
            return {
                'sorted': None,
                'has_cycle': True,
                'steps': steps,
                'message': 'Graph has a cycle - topological sort not possible'
            }

        return {
            'sorted': result,
            'has_cycle': False,
            'steps': steps,
            'message': f'Topological order: {" → ".join(result)}'
        }

    def has_vertex(self, vertex):
        """Check if a vertex exists in the graph."""
        return str(vertex) in self._adjacency_list

    def has_edge(self, v1, v2):
        """Check if an edge exists between two vertices."""
        v1, v2 = str(v1), str(v2)
        if v1 not in self._adjacency_list:
            return False
        return any(neighbor == v2 for neighbor, _ in self._adjacency_list[v1])

    def vertex_count(self):
        """Return the number of vertices."""
        return len(self._adjacency_list)

    def edge_count(self):
        """Return the number of edges."""
        count = sum(len(neighbors) for neighbors in self._adjacency_list.values())
        return count if self._directed else count // 2

    def get_vertices(self):
        """Return a list of all vertices."""
        return list(self._adjacency_list.keys())

    def get_edges(self):
        """Return a list of all edges as (v1, v2, weight) tuples."""
        edges = []
        seen = set()

        for v1, neighbors in self._adjacency_list.items():
            for v2, weight in neighbors:
                if self._directed:
                    edges.append((v1, v2, weight))
                else:
                    edge = tuple(sorted([v1, v2]))
                    if edge not in seen:
                        seen.add(edge)
                        edges.append((v1, v2, weight))

        return edges

    def is_directed(self):
        """Return whether the graph is directed."""
        return self._directed

    def to_dict(self):
        """
        Convert graph to dictionary format for visualization.
        """
        return {
            'vertices': self.get_vertices(),
            'edges': self.get_edges(),
            'adjacency_list': {
                v: [(n, w) for n, w in neighbors]
                for v, neighbors in self._adjacency_list.items()
            },
            'directed': self._directed,
            'vertex_count': self.vertex_count(),
            'edge_count': self.edge_count()
        }

    def clear(self):
        """Remove all vertices and edges from the graph."""
        self._adjacency_list = {}

    def get_adjacency_matrix(self):
        """
        Return the adjacency matrix representation of the graph.

        Returns:
            Tuple of (matrix, vertex_list) where matrix[i][j] is the weight
            of edge from vertex_list[i] to vertex_list[j], or 0 if no edge.
        """
        vertices = sorted(self.get_vertices())
        n = len(vertices)
        vertex_index = {v: i for i, v in enumerate(vertices)}

        matrix = [[0] * n for _ in range(n)]

        for v1, neighbors in self._adjacency_list.items():
            for v2, weight in neighbors:
                i, j = vertex_index[v1], vertex_index[v2]
                matrix[i][j] = weight

        return matrix, vertices


# Example usage
if __name__ == "__main__":
    print("=== Graph Demo ===\n")

    # Create an undirected graph
    g = Graph()

    # Add vertices
    for v in ['A', 'B', 'C', 'D', 'E']:
        g.add_vertex(v)

    # Add edges
    g.add_edge('A', 'B')
    g.add_edge('A', 'C')
    g.add_edge('B', 'D')
    g.add_edge('C', 'D')
    g.add_edge('D', 'E')

    print(f"Vertices: {g.get_vertices()}")
    print(f"Edges: {g.get_edges()}")
    print(f"Neighbors of A: {g.get_neighbors('A')}")

    print(f"\nBFS from A: {g.bfs('A')[0]}")
    print(f"DFS from A: {g.dfs('A')[0]}")

    print(f"\nAdjacency Matrix:")
    matrix, vertices = g.get_adjacency_matrix()
    print(f"   {' '.join(vertices)}")
    for i, row in enumerate(matrix):
        print(f"{vertices[i]}: {row}")

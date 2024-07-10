# Intuition

1. The degree of a vertex of a graph is the number of edges incident to the vertex.
2. A leaf is a vertex of degree 1.
3. Remove all the leaves of the minimum height tree, and the remaining tree will still be the minimum height tree.
4. So for a graph, keep removing its leaves, and at the end what remains must be the root of the minimum height tree.

We start from every leaves. We let the pointers move the same speed. When two pointers meet, we keep only one of them, until the last two pointers meet or one step away we then find the roots.It is easy to see that the last two pointers are from the two ends of the longest path in the graph.

The actual implementation is similar to the BFS topological sort. Remove the leaves, update the degrees of inner vertexes. Then remove the new leaves. Doing so level by level until there are 2 or 1 nodes left. What's left is our answer!

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Use a map to keep track of the neighbours of every node. The length of the neighbours is the degree of node.
   - Use a queue to keep track of all leaves.
2. BFS Loop:
   - Start a loop while the remains nodes at least 2.
     - Remove the leaves, update the degrees of inner vertexes.
     - When internal vertexes are degree 1. Its become new leaves.

# Intuition

We perform a depth-first search from each cell containing gold, then explore all valid paths and backtrack to find the maximum gold that can be collected without revisiting cells.

- DFS to explore all paths from each staring cell.
- Mark cells as visited to avoid revisiting.
- Backtracking to explore all possible paths.
- Update the maximum gold collected at each step.

# Approach

Below it the step-by-step breakdown of the approach:

1. Iterate through the grid to find cells with gold.
2. For each cell with gold:
   - We perform a depth-first search(DFS) staring from that cell.
   - We mark the cell as visited to avoid revisiting before exploring it.
   - Explore all four directions (up、down、left、right) from the current cell.
   - In each direction, if the next cell is valid (within bounds, unvisited, and has gold), recursively call DFS from that cell.
   - Keep track of the maximum gold collected in the current path.
   - After exploring all paths, unmark the staring cell as visited to allow revisiting from other staring points.
3. Update the overall maximum gold collected if the current path's gold is greater.
4. Return the overall maximum gold collected from any staring cell.

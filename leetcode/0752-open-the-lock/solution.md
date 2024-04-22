# Intuition

We start from the initial combination "0000" and then moves to the next combinations. Basically turn up and down each of the wheels to generate possible 8 next combinations.

To avoid redundant processing, we should use a set to keep track of visited combinations. We can add all the deadends in the visited set, cause any way we don't need to try out for combinations for visited combination or the deadend ones.

# Approach

The problem can be solved using a Breadth-First Search (BFS) approach. Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Start with the initial combination "0000" and the step is 0.
   - Use a queue to keep track of the current combinations. Start by adding the initial combination and step to the queue.
   - Use a set to keep track of the visited combination for quick lookup and add deadends to the visited set.
2. BFS Loop:
   - Start a loop while the queue is not empty:
     - Dequeue a combination and step from the front of the queue.
     - If this combination matches the target, return the step.
     - Generate all possible next combinations by incrementing or decrementing each digit of the current combination (there are 8 possible next combinations for each combination).
     - Check all next combinations, and unvisited combinations to the queue, then mark them as visited to avoid redundant processing.
3. Edge Cases:
   - If the target is in deadends, return -1 immediately since the target cannot be reached.

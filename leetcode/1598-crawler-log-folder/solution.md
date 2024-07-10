# Intuition

This is a simple simulation problem. The problem can be solved using a stack to keep track of all the parent folders. We would push and pop depending on each log. All we need to return is the depth of the stack.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization: Create a stack to keep track of all the parent folders.
2. Iterate through the logs. For each log we update the stack.
   - `../`: This operation means moving to the parent folder. We pop the stack.
   - `./`: This operation means staying in the same folder. We do nothing.
   - `x/`: This operation means moving to a child folder named `x`. We push the child folder to the stack.
3. After the iteration, we return the depth of the stack.

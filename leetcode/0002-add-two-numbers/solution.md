# Intuition

The problem asks us to return the sum of two linked lists which representing two integers.

We can constructs a new linked list to represent the sum. And then iterate through two linked lists starting from the least digit. It performs digit-wise addition along with a carry value. The process continues until both input lists and the carry value are exhausted. We need to return the resulting linked list.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Initialize a placeholder node called `ans`. This node will hold the resulting linked list.
   - Initialize a pointer called `tail` and set it to `ans`. This pointer will keep track of the last node in the result list.
   - Initialize a variable called `carry` to 0. This variable will store the carry value during addition.
2. Iterate through two linked lists continues until there are no more digits in both input lists.
   - Add the current digits from l1 and l2, along with the carry value from the previous iteration, and store the sum.
   - Calculate the unit digit. Create a new node with the calculated digit as its value.
   - Update the carry variable. This gives us the carry value for the next iteration.
   - Attach the new node to the tail node of the result list.
   - Move the tail pointer to the newly added node.
   - Move to the next nodes in both l1 and l2, if they exist.
3. After the iteration, obtain the actual result list by skipping the `ans` node and return it.

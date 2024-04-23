# Intuition

The Intuition is to iterate through two linked lists, starting from the least significant digit. It performs digit-wise addition along with a carry value and constructs a new linked list to represent the sum. The process continues until both input lists and the carry value are exhausted. The resulting linked list represents the sum of the input numbers in the correct order.

# Approach

1. Initialize a placeholder node called `ans`. This node will hold the resulting linked list.
2. Initialize a pointer called tail and set it to `ans`. This pointer will keep track of the last node in the result list.
3. Initialize a variable called carry to 0. This variable will store the carry value during addition.
4. Start a loop that continues until there are no more digits in both input lists (l1 and l2).
   - Add the current digits from l1 and l2, along with the carry value from the previous iteration, and store the sum.
   - Calculate the unit digit. Create a new node with the calculated digit as its value.
   - Update the carry variable. This gives us the carry value for the next iteration.
   - Attach the new node to the tail node of the result list.
   - Move the tail pointer to the newly added node.
   - Move to the next nodes in both l1 and l2, if they exist.
5. After the loop, obtain the actual result list by skipping the `ans` node.

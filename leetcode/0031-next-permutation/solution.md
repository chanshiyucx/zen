# Intuition

# Approach

Below is the step-by-step breakdown of the approach:

1. Find the break point i, break point means the first index i from the back of the given array where `arr[i]` becomes smaller than `arr[i+1]`.
2. To find the break point, using a loop we will traverse the array backward and store index i where `arr[i]` is smaller than `arr[i+1].`
3. If a break point exists: Starting from the right of the array going left find the first element larger than the value at the break point index. Call it larger index.
   - Swap the value at larger index with the value at break point index.
   - Reverse everything on the right of the larger index.

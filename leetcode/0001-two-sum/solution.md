# Intuition

The problem asks us to find two numbers in an array that sum up to a given target value. We need to return the indices of these two numbers.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization: Create an empty map to store elements and their indices.
2. Iterate through the array. For each element nums[i], calculate the diff by subtracting it from the target: diff = target - nums[i].
   - If the diff exists in the map, we have found a solution and return.
   - If the diff does not exist in the map, add the current element nums[i] to the map with its index as the value.

# Intuition

The problem can be solved using a map.

# Approach

Below is the step-by-step breakdown of the approach:

1. Create an empty map to store elements and their indices.
2. Iterate through the array from left to right.
   - For each element nums[i], calculate the diff by subtracting it from the target: diff = target - nums[i].
     - If the diff exists in the map, we have found a solution and return.
     - If the diff does not exist in the map, add the current element nums[i] to the map with its index as the value.

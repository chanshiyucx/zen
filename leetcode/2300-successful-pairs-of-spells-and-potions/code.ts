function successCount(potions: number[], target: number): number {
  let left = -1
  let right = potions.length
  while (left + 1 < right) {
    const mid = left + ((right - left) >> 1)
    if (potions[mid] >= target) {
      right = mid
    } else {
      left = mid
    }
  }
  return potions.length - right
}

function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b)
  const pairs = spells.map((spell) => {
    const target = Math.ceil(success / spell)
    return successCount(potions, target)
  })
  return pairs
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16))

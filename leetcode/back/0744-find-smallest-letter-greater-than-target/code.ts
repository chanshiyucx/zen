function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0
  let right = letters.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (letters[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return letters[left] > target ? letters[left] : letters[0]
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"))
console.log(nextGreatestLetter(["c", "f", "j"], "c"))
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"))

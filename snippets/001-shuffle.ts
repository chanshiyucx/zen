/**
 * @description Shuffle Algorithm to Implement Array Disorder https://bost.ocks.org/mike/shuffle/
 * @param arr - Arrays to be disordered
 * @return Disordered arrays
 */
const shuffle = <T>(arr: T[]): T[] => {
  let i = arr.length
  let j: number
  while (i) {
    j = Math.floor(Math.random() * i--)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Test Case
console.log(shuffle([1, 2, 3, 4, 5, 6]))

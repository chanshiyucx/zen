function bubbleSort(arr: number[]): number[] {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr: number[]): number[] {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

function insertionSort(arr: number[]): number[] {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    let j = i - 1
    while (j >= 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = arr[i]
  }
  return arr
}

function mergeSort(arr: number[]): number[] {
  const length = arr.length
  if (length <= 1) return arr
  const pivot = Math.floor(length / 2)
  const left = mergeSort(arr.slice(0, pivot))
  const right = mergeSort(arr.slice(pivot))
  return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()!)
    } else {
      result.push(right.shift()!)
    }
  }
  return result.concat(left, right)
}

function quickSort(arr: number[]): number[] {
  const length = arr.length
  if (length <= 1) return arr
  const pivot = arr[length - 1]
  const left: number[] = []
  const right: number[] = []
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const nums = [
  23, 12, 45, 8, 25, 87, 34, 15, 88, 6, 21, 56, 77, 31, 65, 18, 27, 99, 5, 44,
]
console.log(bubbleSort(nums))
console.log(selectionSort(nums))
console.log(insertionSort(nums))
console.log(mergeSort(nums))
console.log(quickSort(nums))

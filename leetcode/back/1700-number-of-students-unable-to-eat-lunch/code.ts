function countStudents(students: number[], sandwiches: number[]): number {
  let curIndex = 0
  while (students.length > 0 && curIndex !== students.length) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift()
      students.shift()
      curIndex = 0
    } else {
      students.push(students.shift())
      curIndex++
    }
  }
  return students.length
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]))
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))

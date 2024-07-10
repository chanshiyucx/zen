function isIsomorphic(s: string, t: string): boolean {
  const map1 = new Map()
  const map2 = new Map()
  let left = 0
  while (left < s.length) {
    if (map1.has(s[left])) {
      if (map1.get(s[left]) !== t[left]) {
        return false
      }
    } else {
      map1.set(s[left], t[left])
    }

    if (map2.has(t[left])) {
      if (map2.get(t[left]) !== s[left]) {
        return false
      }
    } else {
      map2.set(t[left], s[left])
    }

    left++
  }
  return true
}

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))

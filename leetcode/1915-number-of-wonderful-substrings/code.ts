function wonderfulSubstrings(word: string): number {
  const codes: number[] = word
    .split("")
    .map((c) => c.charCodeAt(0) - "a".charCodeAt(0))

  const cnt: number[] = new Array(1 << 10).fill(0)
  cnt[0] = 1

  let ans = 0
  let xor = 0
  for (const code of codes) {
    xor ^= 1 << code
    ans += cnt[xor ^ 0]
    for (let i = 0; i < 10; i++) {
      ans += cnt[xor ^ (1 << i)]
    }
    cnt[xor]++
  }

  return ans
}

console.log(wonderfulSubstrings("aba"))
console.log(wonderfulSubstrings("aabb"))

/**
 * @description Calculating the number of bytes in a string
 * @param  str - Target string
 * @param  charset - Encoding format of the target string
 * @return The number of bytes in the target string
 */
type Charset = "utf-8" | "utf-16"

const stringByte = (str: string, charset: Charset = "utf-8") => {
  let total = 0
  let charCode: number

  if (charset === "utf-8") {
    for (let i = 0, len = str.length; i < len; i++) {
      charCode = str.codePointAt(i)

      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
        i++
      }
    }
  } else if (charset === "utf-16") {
    for (let i = 0, len = str.length; i < len; i++) {
      charCode = str.codePointAt(i)

      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
        i++
      }
    }
  }

  return total
}

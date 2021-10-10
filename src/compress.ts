/**
 * Compress the text
 *
 * @param text The text
 */
export function compress(text: string) {
  let currentChar = text[0]
  let accumulator = 1
  let compressedText = ''
  const textSize = text.length

  for (let i = 1; i < textSize; ++i) {
    const thisChar = text[i]

    if (thisChar !== currentChar) {
      compressedText +=
        accumulator > 1 ? accumulator + currentChar : currentChar

      currentChar = thisChar
      accumulator = 0
    }

    ++accumulator

    const isEnd = i === textSize - 1

    if (isEnd) {
      compressedText +=
        accumulator > 1 ? accumulator + currentChar : currentChar
    }
  }

  return compressedText
}

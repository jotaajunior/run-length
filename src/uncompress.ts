/**
 * Decodes the text
 *
 * @param text The text to decode
 */
export function uncompress(text: string) {
  let decompressedText = ''
  let accumulator = 1
  const textSize = text.length

  for (let i = 0; i < textSize; ++i) {
    const thisChar = text[i]
    const quantity = Number(thisChar)
    const isAccumulator = !isNaN(quantity)

    if (isAccumulator) {
      accumulator = quantity
      continue
    }

    decompressedText += thisChar.repeat(accumulator)
  }

  return decompressedText
}

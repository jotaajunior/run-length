import { compress } from '../src/compress'

test('Should correctly compress', () => {
  const result = ['aabb', 'ab', 'abb'].map(compress)

  expect(result).toEqual(['2a2b', 'ab', 'a2b'])
})

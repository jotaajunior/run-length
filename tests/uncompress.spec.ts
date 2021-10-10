import { uncompress } from '../src/uncompress'

test('Should correctly uncompress', () => {
  const result = ['2a2b', 'ab', 'a2b'].map(uncompress)

  expect(result).toEqual(['aabb', 'ab', 'abb'])
})

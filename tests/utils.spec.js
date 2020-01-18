const utils = require('../src/utils')

describe('validatePlacement', () => {
  it('only accepts the the PLACE command type', () => {
    const wrongType = 'MOVE 1,1,SOUTH'
    expect(() => utils.validatePlacement(wrongType)).toThrow()
  })
  it('returns the original command if all checks are passed', () => {
    const correctCommand = 'PLACE 0,0 ,EAST'
    expect(utils.validatePlacement(correctCommand)).toBe('PLACE 0,0 ,EAST')
  })
})
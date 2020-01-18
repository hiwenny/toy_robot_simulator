const utils = require('../src/utils')

describe('validatePlacement', () => {
  it('only accepts the the PLACE command type', () => {
    const wrongType = 'MOVE 1,1,SOUTH'
    expect(() => utils.validatePlacement(wrongType, {X: 1, Y: 1})).toThrow()
  })
  it('returns the original command if all checks are passed', () => {
    const correctCommand = 'PLACE 0,0,EASTs'
    expect(utils.validatePlacement(correctCommand, {X: 1, Y: 1})).toBe(correctCommand)
  })
})

describe('validateCoordinates', () => {
  it('validates the projected coordinates and rejects it if outside the max boundaries.', () => {
    expect(() => utils.validateCoordinates(2, 3, {X: 1, Y: 3})).toThrow()
    expect(() => utils.validateCoordinates(2, 3, {X: 2, Y: 2})).toThrow()
    expect(() => utils.validateCoordinates(1, 3, {X: 1, Y: 3})).not.toThrow()

  })
})
describe('getPosition', () => {
  it('returns an array of position values extracted from the command string, sanitized and normalized', () => {
    expect(utils.getPosition('COMMAND 0,0,WEST')).toEqual(['COMMAND', 0, 0, 'WEST'])
  })
})
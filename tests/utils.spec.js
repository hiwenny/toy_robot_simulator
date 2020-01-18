const utils = require('../src/utils')

describe('validatePlacement', () => {
  it('only accepts the the PLACE command type', () => {
    const wrongType = 'MOVE 1,1,SOUTH'
    expect(utils.validatePlacement(wrongType, {X: 1, Y: 1})).toBe(false)
  })
  it('returns the original command if all checks are passed', () => {
    const correctCommand = 'PLACE 0,0,EAST'
    expect(utils.validatePlacement(correctCommand, {X: 1, Y: 1})).toBe(true)
  })
})

describe('validateCoordinates', () => {
  it('validates the projected coordinates and rejects it if outside the max boundaries.', () => {
    expect(utils.validateCoordinates(2, 3, {X: 1, Y: 3})).toBe(false)
    expect(utils.validateCoordinates(2, 3, {X: 2, Y: 2})).toBe(false)
    expect(utils.validateCoordinates(1, 3, {X: 1, Y: 3})).toBe(true)

  })
})

describe('validateDirection', () => {
  it('only allows for the valid direction to be actioned on', () => {
    expect(utils.validateDirection('something')).toBe(false)
    expect(utils.validateDirection('EASTS')).toBe(false)
    expect(utils.validateDirection('EAST')).toBe(true)
  })
})


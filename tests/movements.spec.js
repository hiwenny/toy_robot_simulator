const movements = require('../src/movements')

describe('getPlacement', () => {
  it('returns an array of position values extracted from the command string, sanitized and normalized', () => {
    expect(movements.getPlacement('COMMAND 0,0,WEST')).toEqual({ X: 0, Y: 0,direction: 'WEST' })
  })
  it('returns an array of position values, plus its commandType if flagged true', () => {
    expect(movements.getPlacement('COMMAND 0,0,WEST', true)).toEqual({ commandType: 'COMMAND', X: 0, Y: 0,direction: 'WEST' })
  })
})


const movements = require('../src/movements')

describe('getPlacement', () => {
  it('returns an array of position values extracted from the command string, sanitized and normalized', () => {
    expect(movements.getPlacement('COMMAND 0,0,WEST')).toEqual(['COMMAND', 0, 0, 'WEST'])
  })
})


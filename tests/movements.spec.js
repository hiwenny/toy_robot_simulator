const movements = require('../src/movements')

describe('getPosition', () => {
  it('returns an array of position values extracted from the command string, sanitized and normalized', () => {
    expect(movements.getPosition('COMMAND 0,0,WEST')).toEqual(['COMMAND', 0, 0, 'WEST'])
  })
})
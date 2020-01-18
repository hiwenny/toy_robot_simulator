const movements = require('../src/movements')
const constants = require('../src/constants')

describe('getPlacement', () => {
  it('returns position values extracted from the command string, sanitized and normalized', () => {
    expect(movements.getPlacement('COMMAND 0,0,WEST')).toEqual({ X: 0, Y: 0,direction: 'WEST' })
  })
  it('returns position values with the additional property commandType if flag is set to true, plus its commandType if flagged true', () => {
    expect(movements.getPlacement('COMMAND 0,0,WEST', true)).toEqual({ commandType: 'COMMAND', X: 0, Y: 0,direction: 'WEST' })
  })
})

describe('setPosition', () => {
  const robotPosition = {
    X: 0,
    Y: 0,
    direction: constants.validDirections.EAST
  }
  it('acts on MOVE instruction by applying movement pattern in specified direction', () => {
    expect(movements.setPosition(robotPosition, 'MOVE')).toEqual({ ...robotPosition, X: robotPosition.X+1 })
  })
  it('returns initial robot position if passed in an invalid command', () => {
    expect(movements.setPosition(robotPosition, 'INVALID')).toEqual(robotPosition)
  })
})
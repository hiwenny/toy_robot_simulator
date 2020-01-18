const validCommands = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT'
}

const validDirections = {
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
  WEST: 'WEST'
}

const movementsMapping = {
  [validDirections.NORTH]: {
    X: 0,
    Y: 1
  },
  [validDirections.EAST]: {
    X: 1,
    Y: 0
  },
  [validDirections.SOUTH]: {
    X: 0,
    Y: -1
  },
  [validDirections.WEST]: {
    X: -1,
    Y: 0
  }
}

const rotationalMapping = {
  sequence: ['NORTH', 'EAST', 'SOUTH', 'WEST'],
  modifier: {
    [validCommands.LEFT]: -1,
    [validCommands.RIGHT]: 1
  }
}

module.exports = {
  validCommands,
  validDirections,
  movementsMapping,
  rotationalMapping
}
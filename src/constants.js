const validCommands = {
  PLACE: 'PLACE',
  MOVE: 'MOVE'
}

const validDirections = {
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
  WEST: 'WEST'
}

const directionalMapping = {
  NORTH: {
    X: 0,
    Y: 1
  },
  EAST: {
    X: 1,
    Y: 0
  },
  SOUTH: {
    X: 0,
    Y: -1
  },
  WEST: {
    X: -1,
    Y: 0
  }
}

module.exports = {
  validCommands,
  validDirections,
  directionalMapping
}
const constants = require('./constants')
const movements = require('./movements')
/**
 * Validates the initial PLACE command.
 * @param {string} command A command string
 */
function validatePlacement(command, maxBoundaries) {
  // Split the command into parts.
  const { commandType, X, Y, direction } = movements.getPlacement(command, true)
  // Validations
  if (commandType.trim() !== constants.validCommands.PLACE ||
    !validateCoordinates(X, Y, maxBoundaries) ||
    !validateDirection(direction)
  ) {
    console.warn(`Invalid ${constants.validCommands.PLACE} command`)
    return false
  }
    return true
}

/**
 * Validates the projected coordination if it's still within the boundaries.
 * @param {number} X Projected X-coordinate
 * @param {number} Y Projected Y-coordinate
 * @param {Object} maxBoundaries Maximum X and Y limits
 */
function validateCoordinates(X, Y, maxBoundaries) {
  // Validating x and y
  // TODO: validate it's a type Number
  // TODO: undefined/falsey handling, edge cases
  if (X > maxBoundaries.X) {
    console.warn(`Maximum X coordinate exceeded, please keep it under ${maxBoundaries.X+1}`)
    return false
  }
  if (Y > maxBoundaries.Y) {
    console.warn(`Maximum Y coordinate exceeded, please keep it under ${maxBoundaries.Y+1}`)
    return false
  }
  return true
}

/**
 * Validates the direction entered
 * @param {string} direction Direction of the robot
 */
// TODO: normalisation and further validation
function validateDirection(direction) {
  if (Object.keys(constants.validDirections).indexOf(direction) === -1) {
    console.warn(`Invalid direction, please choose from ${[...Object.keys(constants.validDirections)]}`)
    return false
  }
  return true
}

module.exports = {
  validatePlacement,
  validateCoordinates,
  validateDirection
}
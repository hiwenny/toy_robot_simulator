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
  if (commandType.trim() !== constants.validCommands.PLACE) throw new Error(`Commands has to start with ${constants.validCommands.PLACE}`)  
  validateCoordinates(X, Y, maxBoundaries)
  validateDirection(direction)
  return command
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
  if (X > maxBoundaries.X) throw new Error(`Maximum X coordinate exceeded, please keep it under ${maxBoundaries.X+1}`)
  if (Y > maxBoundaries.Y) throw new Error(`Maximum Y coordinate exceeded, please keep it under ${maxBoundaries.Y+1}`)
}

/**
 * Validates the direction entered
 * @param {string} direction Direction of the robot
 */
// TODO: normalisation and further validation
function validateDirection(direction) {
  if (Object.keys(constants.validDirections).indexOf(direction) === -1) throw new Error(`Invalid direction, please choose from ${[...Object.keys(constants.validDirections)]}`)
}



module.exports = {
  validatePlacement,
  validateCoordinates,
  validateDirection
}
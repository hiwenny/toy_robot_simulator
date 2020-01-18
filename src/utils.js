const validCommands = {
  PLACE: 'PLACE',
  MOVE: 'MOVE'
}
/**
 * Validates the initial PLACE command.
 * @param {string} command A command string
 */
function validatePlacement(command, maxBoundaries) {
  // Split the command into parts.
  const [commandType, X, Y, direction] = getPosition(command)
  // Validations
  if (commandType.trim() !== validCommands.PLACE) throw new Error(`Commands has to start with ${validCommands.PLACE}`)  
  validateCoordinates(X, Y, maxBoundaries)
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
  if (X > maxBoundaries.X) throw new Error(`Maximum X coordinate exceeded, please keep it under ${maxBoundaries.X+1}`)
  if (Y > maxBoundaries.Y) throw new Error(`Maximum Y coordinate exceeded, please keep it under ${maxBoundaries.Y+1}`)
}

/**
 * Function to split the line into useable position descriptors.
 * @param {string} command Command string to be split into 4 parts. Returns commandType, X, Y, and direction.
 */
// TODO: current implementation is simple as can be. This handles ideal condition:
// "PLACE X,Y,DIRECTION"
// More work needed to sanitise and normalise odd syntaxes such as:
// - "PLACEX,  Y, DIRECTION"
function getPosition(command) {
  const [commandType, positionString] = command.split(' ')
  const [X, Y, direction] = positionString.split(',')
  return [commandType, Number(X), Number(Y), direction]
}

module.exports = {
  validatePlacement,
  validateCoordinates,
  getPosition
}
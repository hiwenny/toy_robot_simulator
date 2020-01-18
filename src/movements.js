const constants = require('./constants.js')
const validations = require('./validations.js')

/**
 * Function to split the line into useable position descriptors.
 * @param {string} command Command string to be split into 4 parts. Returns commandType, X, Y, and direction.
 * @param {boolean} returnCommandType Optional flag for returning the commandType
 */
// TODO: current implementation is simple as can be. This handles ideal condition:
// "PLACE X,Y,DIRECTION"
// More work needed to sanitise and normalise odd syntaxes such as:
// - "PLACEX,  Y, DIRECTION"
function getPlacement(command, returnCommandType = false) {
  const [commandType, positionString] = command.split(' ')
  const [X, Y, direction] = positionString.split(',')
  const placement = { X: Number(X), Y: Number(Y), direction }
  if (returnCommandType) return { ...placement, commandType }
  return placement
}

/**
 * The big function that handles all existing positional functions.
 * In the future this can be split into own functions if it's grown to be more complex.
 * @param {Object} currentPosition Robot's position object
 * @param {string} command The command to be actioned on
 */
function setPosition(currentPosition, command) {
  // MOVE command behaviour.
  if (command === constants.validCommands.MOVE) {
    const movementPattern = constants.movementsMapping[currentPosition.direction]
    return {
      ...currentPosition,
      X: currentPosition.X + movementPattern.X,
      Y: currentPosition.Y + movementPattern.Y
    }
  }
  // LEFT/RIGHT: can be part of ROTATE command if needed later
  if (command === constants.validCommands.LEFT || 
      command === constants.validCommands.RIGHT) {
    // command is LEFT or RIGHT, this modifies the index of the sequence.
    // Currently there are four directions mapped as follows:
    // ['NORTH', 'EAST', 'SOUTH', 'WEST'] corresponding to index
    // [0, 1, 2, 3]
    // LEFT deducts 1 from the index, add the length to normalise it from negative value.
    // Then the new direction is the remainder.
    // console.log(constants.rotationalMapping.sequence.findIndex())
    const currentDirectionIndex = constants.rotationalMapping.sequence.findIndex(dir => dir === currentPosition.direction)
    const numberOfDirections = constants.rotationalMapping.sequence.length
    const newDirectionIndex = (currentDirectionIndex + constants.rotationalMapping.modifier[command] + numberOfDirections) % numberOfDirections
    return {
      ...currentPosition,
      direction: constants.rotationalMapping.sequence[newDirectionIndex]
    }
  }
  // REPORT command
  if (command === constants.validCommands.REPORT) {
    console.log(currentPosition)
    return currentPosition
  }
  // Handling subsequent PLACE commands
  if (command.includes(constants.validCommands.PLACE)) return getPlacement(command)
  return currentPosition
}

// This is also doable, however requires knowing the COMMAND component of each line
// if handling everything for example: PLACE X,Y,F needs PLACE
// If we make the distiction to apply this only to MOVE, LEFT, RIGHT, REPORT or
// other literal commands, then this is a cleaner way.

// const setPosition = {
//   [constants.validCommands.MOVE]: function(currentPosition) {
//     // Safeguard if for whatever reason the currentPosition is invalid
//     if (!validations.validateDirection(currentPosition.direction)) return currentPosition
//     const movementPattern = constants.movementsMapping[currentPosition.direction]
//     return {
//       ...currentPosition,
//       X: currentPosition.X + movementPattern.X,
//       Y: currentPosition.Y + movementPattern.Y
//     }
//   },
//   [constants.validCommands.REPORT]: function() {}
// }

module.exports = {
  getPlacement,
  setPosition
}
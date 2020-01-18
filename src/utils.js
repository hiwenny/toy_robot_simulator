const validCommands = {
  PLACE: 'PLACE',
  MOVE: 'MOVE'
}
/**
 * 
 * @param {string} command A command string
 */
function validatePlacement(command) {
  console.log(command)
  // Split the command into parts
  const [commandType, positionString] = command.split(' ')
  // Validating command type
  if (commandType.trim() !== validCommands.PLACE) throw new Error(`Commands has to start with ${validCommands.PLACE}`)
  return command
}

function validateCoordinates(x, y, boundaries) {
  // Validating x and y
}
module.exports = {
  validatePlacement
}
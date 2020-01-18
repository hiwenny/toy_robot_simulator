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

module.exports = {
  getPlacement
}
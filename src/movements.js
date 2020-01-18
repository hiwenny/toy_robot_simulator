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
  getPosition
}
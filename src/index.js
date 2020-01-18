// Roadmap:
// 1. Consume file
// 2. Placement validation:
// - Has to start with PLACE
// - Has to be in valid format for x, y, f
// 3. Handle movement commands: MOVE, LEFT/RIGHT
// 4. Print out current position when encountering REPORT

const fs = require('fs')
const validations = require('./validations.js')
const movements = require('./movements')
const constants = require('./constants')

/** Runtime-specific constants */
// For now the boundaries are hardcoded, but ideally this can be set as required.
// For a 5x5 surface, it's x=4 and y=4
// This can be part of the input, remember to calculate is as n-1
const boundaries = {X: 4, Y: 4}

// Loading file containing commands, removed empty lines.
const commands = fs.readFileSync(process.argv[2], 'utf8').split('\n').filter(log => !!log)

// Start with the first instance of PLACE command and skip all that came before
// It should skip the invalid PLACE command and continue down the line
const PLACEindex = commands.findIndex( command =>
  command.includes(constants.validCommands.PLACE) &&
  validations.validatePlacement(command, boundaries)
);
if (PLACEindex === -1) throw new Error(`Instructions must start with a valid ${constants.validCommands.PLACE} command`)

// First placement
let robotPosition = movements.getPlacement(commands[PLACEindex])

// Subsequent movements and placements
for(let i=PLACEindex+1; i< commands.length; i++) {
  const newPosition = movements.setPosition(robotPosition, commands[i])
  // Safeguard if invalid new placement - only update if passing validations.
  if (validations.validateCoordinates(newPosition.X, newPosition.Y, boundaries) && validations.validateDirection(newPosition.direction)) {
    robotPosition = newPosition
  }
}
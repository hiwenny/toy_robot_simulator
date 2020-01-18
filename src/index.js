// Roadmap:
// 1. Consume file
// 2. Placement validation:
// - Has to start with PLACE
// - Has to be in valid format for x, y, f
// 3. Handle movement commands: MOVE, LEFT/RIGHT
// 4. Print out current position when encountering REPORT

const fs = require('fs')
const utils = require('./utils.js')
const movements = require('./movements')

/** Runtime-specific constants */
// For now the boundaries are hardcoded, but ideally this can be set as required.
// For a 5x5 surface, it's x=4 and y=4
// This can be part of the input, remember to calculate is as n-1
const boundaries = {X: 4, Y: 4}

// Loading file containing commands, removed empty lines.
const commands = fs.readFileSync(process.argv[2], 'utf8').split('\n').filter(log => !!log)

// Start with PLACE
utils.validatePlacement(commands[0], boundaries) // if this fails, the whole program stops
let robotPosition = movements.getPlacement(commands[0])

// for(let i=1; i< commands.length; i++) {
//   console.log(commands[i])
//   movements.setPosition(robotPosition)
// }
// console.log(robotPosition)
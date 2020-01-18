// Roadmap:
// 1. Consume file
// 2. Placement validation:
// - Has to start with PLACE
// - Has to be in valid format for x, y, f
// -

const fs = require('fs')
const utils = require('./utils.js')

/** Constants */
// For now the boundaries are hardcoded, but ideally this can be set as required.
// For a 5x5 surface, it's x=4 and y=4
const boundaries = {x: 4, y: 4}

// Loading file containing commands, removed empty lines
const commands = fs.readFileSync(process.argv[2], 'utf8').split('\n').filter(log => !!log)
// console.log('commands', commands)

// First command has to be a valid PLACE command so fail fast
const placement= validatePlacement(commands[0])

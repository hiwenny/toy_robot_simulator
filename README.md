# The task
The task is to simulate the actioning of commands for a robot on a 2D surface. Full brief in the [Challenge](PROBLEM.md) document.

# Installation 
Run `npm install` to install the dependencies.

# Usage
To run using the test txt file: `npm run demo`

To use with other sources: `npm start <your-data.txt>`

# Scripts
- `npm start <your-data.txt>` for running the script against a log data as source.
- `npm run demo` to run the demo
- `npm test` to run the tests

# FAQs
- This package is written using ES6 syntax - it's recommended that you upgrade to the latest Node, or check compatibility in https://node.green/ if you run into any issues. For additional information see https://nodejs.org/en/docs/es6/.

# Project Structure
Main entry point is `index.js`, which contains the declaration of things to do.

Util functions are in `validations.js` and `movements.js`. 

`Validations.js` contains things related to checking and validating, as well as some cleaning up - add things related to data preparation here.

`Movements.js` is meant for navigations - moving, rotating, placing.

# TODO Improvements
- Better validations and sanitizations
- More test coverage for edge cases
- This puts readability at the forefront so might not be the most optimized
- Then again for more optimised performance it's better to not use Javascript
- A natively typed language would be good, for starters. Typescript is just a band-aid
- Split the setPosition function into own movement capabilities for more granular control
- Consume stdio/command-line instructions. As of now it only accepts plain text files such as .txt
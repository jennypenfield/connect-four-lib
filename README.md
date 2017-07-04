# Connect Four Library

 <a href="https://travis-ci.org/jennypenfield/connect-four-lib"><img src="https://travis-ci.org/jennypenfield/connect-four-lib.svg?branch=master" alt="build status"></a>
 <a href="https://www.npmjs.com/package/connect-four-lib"><img src="https://img.shields.io/npm/v/connect-four-lib.svg" alt="npm version"></a>
 <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

This is a project to implement the game logic for the classic game
[Connect Four].

This is a collaborative project of the students of the [The Iron Yard Houston]
24-week 2017 front-end class.

## Development Setup

Install [Yarn], then from this directory:

```sh
# install node_modules folder
yarn install

# run the test suite
yarn test
```

## API Documentation

### The Connect Four Library has three public functions:

- [`createEmptyBoard()`](#c4createEmptyBoard)
- [`gameStatus(board)`](#c4gameStatus)
- [`validBoard(board)`](#c4validBoard)

### board Array

The Connect Four board is represented as a 7x6 Array of Arrays (columns / rows).
Each element in the Array is either `null`, `'r'`, or `'y'`.

#### <a name='c4createEmptyBoard'></a>`createEmptyBoard()`

This method returns a new, empty board array. A square without a piece is
represented with `null`, so an empty board looks like this in JSON format:

```json
[
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]
```

#### <a name='c4gameStatus'></a>`gameStatus(board)`

This function accepts a game board and returns the current game status:

- If the board is not in a valid 7x6 Array format:
  - `null`
- If neither color has won and the game is still in progress:
  - `{status: 'in_progress'}`
- If neither color has won, and the game is over (the board is full):
  - `{status: 'tie'}`
- If red has won:
  - `{status: 'winner_red', coordinates: [[0, 0], [1, 0], [2, 0], [3, 0]]}`
- If yellow has won:
  - `{status: 'winner_yellow', coordinates: [[0, 3], [1, 3], [2, 3], [3, 3]]}`

In the winning cases, `coordinates` will be an array of the winning pieces
column / row coordinates.

#### <a name='c4validBoard'></a>`validBoard(board)`

Predicate function to ensure that the board format is valid.

## License

[ISC License]

[Connect Four]:https://en.wikipedia.org/wiki/Connect_Four
[The Iron Yard Houston]:https://www.theironyard.com/locations/houston
[Yarn]:https://yarnpkg.com
[ISC License]:LICENSE.md

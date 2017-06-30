# Connect Four Library [![Build Status](https://travis-ci.org/jennypenfield/connect-four-lib.svg?branch=master)]
(https://travis-ci.org/jennypenfield/connect-four-lib)

This is a project to implement the game logic for the classic game
[Connect Four].

This is a collaborative project of the students of the [The Iron Yard Houston]
front-end class.

## Development Setup

Install [Yarn], then from this directory:

```sh
# install node_modules folder
yarn install

# run the test suite
yarn test
```

## API Documentation

### Variables
#### `Connect4Lib.EMPTY_BOARD`
> Creates a 7x6 array of null elements.

### The Connect4 Library has two public methods:
* [Connect4Lib.gameStatus](#c4gameStatus)
* [Connect4Lib.validBoard](#c4validBoard)

#### <a name='c4gameStatus'></a>`Connect4Lib.gameStatus(board)`
* This method needs to receive an array (the 'board') as an argument.
* The library uses a private method to determine the board's winning coordinates.

This method returns:
* {status: 'winner_red', coordinates: coord} if there is a red winner.
* {status: 'winner_yellow', coordinates: coord} if there is a yellow winner.
* {status: 'tie'} or {status: 'in_progress'}, depending
on the current status of the game.

#### <a name='c4validBoard'></a>`Connect4Lib.validBoard(board)`
This method needs to receive an array (the 'board') as an argument.
The method returns false if the board passed is not an array, if the board does not have seven columns, or if the rows are invalid. The method returns true if preceding conditions are not met.

## License

[ISC License]

[Connect Four]:https://en.wikipedia.org/wiki/Connect_Four
[The Iron Yard Houston]:https://www.theironyard.com/locations/houston
[Yarn]:https://yarnpkg.com
[ISC License]:LICENSE.md

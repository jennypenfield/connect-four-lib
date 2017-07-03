# Connect Four Library [![Build Status](https://travis-ci.org/jennypenfield/connect-four-lib.svg?branch=master)]
(https://travis-ci.org/jennypenfield/connect-four-lib)

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

### The Connect4 Library has three public functions:
* [createEmptyBoard()](#c4createEmptyBoard)
* [gameStatus(board)](#c4gameStatus)
* [validBoard(board)](#c4validBoard)

#### <a name='c4createEmptyBoard'></a>`createEmptyBoard()`
> This method creates a 7x6 array of null elements.

#### <a name='c4gameStatus'></a>`gameStatus(board)`
>* This method needs to receive an array (the 'board') as an argument.
* The library uses a private method to determine the board's winning coordinates.

Return values:
>* {status: 'winner_red', coordinates: coord} if there is a red winner.
* {status: 'winner_yellow', coordinates: coord} if there is a yellow winner.
* {status: 'tie'} or {status: 'in_progress'}, depending
on the current status of the game.

#### <a name='c4validBoard'></a>`validBoard(board)`
> This method needs to receive an array (the 'board') as an argument.
The method returns false if the board passed is not an array, if the board does not have seven columns, or if the rows are invalid. The method returns true if preceding conditions are not met.

## License

[ISC License]

[Connect Four]:https://en.wikipedia.org/wiki/Connect_Four
[The Iron Yard Houston]:https://www.theironyard.com/locations/houston
[Yarn]:https://yarnpkg.com
[ISC License]:LICENSE.md

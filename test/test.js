/* global describe it */

const assert = require('assert')
const connect4Lib = require('../connect4-lib.js')

// -----------------------------------------------------------------------------
// Test Boards
// -----------------------------------------------------------------------------

const emptyBoard1 = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const emptyBoard2 = connect4Lib.createEmptyBoard()

const notQuiteAFullBoard = [
  ['y', 'r', 'y', 'r', 'y'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const boardInProgress = [
  ['y', 'r', 'y', 'r', 'y', null],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const missingAColumn = [
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y']
]

const tieBoard1 = [
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const boardWithInvalidSquares1 = [
  ['y', 'r', 'y', 'r', 'y', 'banana'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const boardWithInvalidSquares2 = [
  ['y', 'r', 'y', 'r', 'y', null],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 2, 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const redRowWin1 = [
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const redRowWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'r', 'y', null, null, null],
  ['y', 'r', null, null, null, null],
  ['r', 'r', null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const yellowRowWin1 = [
  ['r', 'y', 'y', 'y', 'r', null], // yellow row win from first column, fourth row
  ['y', 'r', 'r', 'y', null, null],
  ['y', 'y', 'r', 'y', null, null],
  ['r', 'r', 'r', 'y', null, null],
  ['r', null, null, null, null, null],
  ['y', null, null, null, null, null],
  ['r', null, null, null, null, null]
]

const yellowRowWin2 = [
  ['r', 'y', 'y', 'y', null, null],
  ['r', 'r', 'r', 'y', 'y', null],
  ['y', 'y', 'r', 'y', 'r', null],
  ['r', 'r', 'y', 'y', null, null], // yellow row win from fourth column, fourth row
  ['r', 'r', 'y', 'r', null, null],
  ['y', 'r', 'y', 'r', null, null],
  ['r', 'y', 'r', null, null, null]
]

const redColWin1 = [
  ['r', 'r', 'r', 'r', null, null],
  ['y', 'y', 'y', null, null, null],
  ['y', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const redColWin2 = [
  ['r', 'y', 'r', 'r', 'r', 'r'],
  ['y', 'r', 'y', 'r', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'r', 'y', null, null, null],
  ['r', 'r', 'r', null, null, null],
  ['r', 'y', 'y', null, null, null],
  ['y', 'r', 'y', 'y', null, null]
]

const yellowColWin1 = [
  ['r', 'r', 'r', null, null, null],
  ['y', 'y', 'y', 'y', null, null],
  ['r', 'r', 'y', null, null, null],
  ['r', null, null, null, null, null],
  ['r', null, null, null, null, null],
  ['y', null, null, null, null, null],
  ['y', null, null, null, null, null]
]

const yellowColWin2 = [
  ['r', 'r', 'y', 'r', 'y', 'y'],
  ['y', 'r', 'y', 'r', 'r', null],
  ['r', 'y', 'r', 'y', 'y', null],
  ['r', 'y', 'r', null, null, null],
  ['y', 'r', 'r', null, null, null],
  ['r', 'r', 'y', 'y', 'y', 'y'],
  ['y', 'r', 'y', null, null, null]
]

const redDiagWin1 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'r', 'r', null, null, null],
  ['r', 'r', 'r', null, null, null],
  ['r', 'y', null, null, null, null], // from fifth column bottom, up to the left
  ['r', 'y', null, null, null, null],
  ['y', null, null, null, null, null]
]

const redDiagWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['r', 'r', 'y', 'r', null, null], // from third column bottom, up to the right
  ['r', 'r', 'r', 'y', null, null],
  ['r', 'y', 'r', 'r', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'y', 'r', 'y', null, null]
]

const yellowDiagWin1 = [
  ['r', null, null, null, null, null],
  ['r', 'y', null, null, null, null], // from second column second row, up to the right
  ['r', 'r', 'y', null, null, null],
  ['y', 'r', 'y', 'y', null, null],
  ['y', 'y', 'r', 'r', 'y', null],
  ['y', 'r', 'y', 'r', null, null],
  [null, null, null, null, null, null]
]

const yellowDiagWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'r', 'r', 'y', null],
  ['y', 'r', 'y', 'y', null, null],
  ['r', 'r', 'y', null, null, null],
  ['r', 'y', 'y', null, null, null], // from fifth column second row, up to the left
  ['r', 'r', 'r', 'y', null, null],
  ['y', 'r', null, null, null, null]
]

const bigBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const moreThan6pieces = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

// -----------------------------------------------------------------------------
// Valid Board
// -----------------------------------------------------------------------------

function testValidBoard () {
  it('undefined is not a valid board', function () {
    assert.strictEqual(connect4Lib.validBoard(), false)
  })

  it('a string is not a valid board', function () {
    assert.strictEqual(connect4Lib.validBoard('banana'), false)
  })

  it('a number is not a valid board', function () {
    assert.strictEqual(connect4Lib.validBoard(8), false)
  })

  it('an object is not a valid board', function () {
    assert.strictEqual(connect4Lib.validBoard({}), false)
  })

  it('boards must be 7 columns, 6 deep - 1', function () {
    assert.strictEqual(connect4Lib.validBoard(notQuiteAFullBoard), false)
  })

  it('boards must be 7 columns, 6 deep - 2', function () {
    assert.strictEqual(connect4Lib.validBoard(emptyBoard1), true)
  })

  it('boards must be 7 columns, 6 deep - 3', function () {
    assert.strictEqual(connect4Lib.validBoard(tieBoard1), true)
  })

  it('boards must be 7 columns, 6 deep - 4', function () {
    assert.strictEqual(connect4Lib.validBoard(missingAColumn), false)
  })

  it('boards should not have more than 7 columns', function () {
    assert.strictEqual(connect4Lib.validBoard(bigBoard), false)
  })

  it('Columns should not have more than 6 pieces', function () {
    assert.strictEqual(connect4Lib.validBoard(moreThan6pieces), false)
  })

  it('Squares should be either "r" "y" or null 1', function () {
    assert.strictEqual(connect4Lib.validBoard(boardWithInvalidSquares1), false)
  })

  it('Squares should be either "r" "y" or null 2', function () {
    assert.strictEqual(connect4Lib.validBoard(boardWithInvalidSquares2), false)
  })
}

// -----------------------------------------------------------------------------
// gameStatus inputs
// -----------------------------------------------------------------------------

function testBadInput () {
  it('gameStatus should return null if it receives no arguments', function () {
    assert.strictEqual(connect4Lib.gameStatus(), null)
  })

  it('gameStatus should return null if the argument is "true"', function () {
    assert.strictEqual(connect4Lib.gameStatus(true), null)
  })

  it('gameStatus should return null if the argument is "null"', function () {
    assert.strictEqual(connect4Lib.gameStatus(null), null)
  })

  it('gameStatus should return null if the argument is a string', function () {
    assert.strictEqual(connect4Lib.gameStatus('banana'), null)
  })

  it('gameStatus should return null if the argument an empty object', function () {
    assert.strictEqual(connect4Lib.gameStatus({}), null)
  })

  it('gameStatus should return null if the argument is an empty array', function () {
    assert.strictEqual(connect4Lib.gameStatus([]), null)
  })

  it('gameStatus should return null if a game board is not full', function () {
    assert.strictEqual(connect4Lib.gameStatus(notQuiteAFullBoard), null)
  })

  it('gameStatus should return null if a game board has more than 7 columns', function () {
    assert.strictEqual(connect4Lib.gameStatus(bigBoard), null)
  })

  it('gameStatus should return null if a game board is false', function () {
    assert.strictEqual(connect4Lib.gameStatus(false), null)
  })

  it('gameStatus should return null if a game board is undefined', function () {
    assert.strictEqual(connect4Lib.gameStatus(undefined), null)
  })
}

// -----------------------------------------------------------------------------
// gameStatus board conditions
// -----------------------------------------------------------------------------

function testGameStatuses () {
  it('empty board in progress', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(emptyBoard1), {status: 'in_progress'})
  })

  it('board in progress', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(boardInProgress), {status: 'in_progress'})
  })

  it('tie game 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(tieBoard1), {status: 'tie'})
  })

  it('red row win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redRowWin1), {status: 'winner_red',
      coordinates: [[0, 0], [1, 0], [2, 0], [3, 0]]})
  })

  it('red row win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redRowWin2), {status: 'winner_red',
      coordinates: [[0, 1], [1, 1], [2, 1], [3, 1]]})
  })

  it('yellow row win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowRowWin1), {status: 'winner_yellow',
      coordinates: [[0, 3], [1, 3], [2, 3], [3, 3]]})
  })

  it('yellow row win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowRowWin2), {status: 'winner_yellow',
      coordinates: [[0, 3], [1, 3], [2, 3], [3, 3]]})
  })

  it('red column win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redColWin1), {status: 'winner_red',
      coordinates: [[0, 0], [0, 1], [0, 2], [0, 3]]})
  })

  it('red column win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redColWin2), {status: 'winner_red',
      coordinates: [[0, 2], [0, 3], [0, 4], [0, 5]]})
  })

  it('yellow column win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowColWin1), {status: 'winner_yellow',
      coordinates: [[1, 0], [1, 1], [1, 2], [1, 3]]})
  })

  it('yellow column win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowColWin2), {status: 'winner_yellow',
      coordinates: [[5, 2], [5, 3], [5, 4], [5, 5]]})
  })

  it('red diagonal win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redDiagWin1), {status: 'winner_red',
      coordinates: [[1, 3], [2, 2], [3, 1], [4, 0]]})
  })

  it('red diagonal win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(redDiagWin2), {status: 'winner_red',
      coordinates: [[2, 0], [3, 1], [4, 2], [5, 3]]})
  })

  it('yellow diagonal win 1', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowDiagWin1), {status: 'winner_yellow',
      coordinates: [[1, 1], [2, 2], [3, 3], [4, 4]]})
  })

  it('yellow diagonal win 2', function () {
    assert.deepStrictEqual(connect4Lib.gameStatus(yellowDiagWin2), {status: 'winner_yellow',
      coordinates: [[1, 4], [2, 3], [3, 2], [4, 1]]})
  })
}

// -----------------------------------------------------------------------------
// Test Empty Board
// -----------------------------------------------------------------------------

function testEmptyBoard () {
  it('create empty board', function () {
    assert.deepStrictEqual(emptyBoard2, emptyBoard1)
  })

  it('boards are unique objects', function () {
    let emptyBoard3 = connect4Lib.createEmptyBoard()
    let emptyBoard4 = connect4Lib.createEmptyBoard()
    assert.ok(emptyBoard3 !== emptyBoard4)
  })
}

// -----------------------------------------------------------------------------
// Run the tests
// -----------------------------------------------------------------------------

describe('validBoard', testValidBoard)
describe('Bad Input', testBadInput)
describe('Game Statuses', testGameStatuses)
describe('Create an Empty Board', testEmptyBoard)

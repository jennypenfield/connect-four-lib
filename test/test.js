/* global describe it */

var assert = require('assert')
var connectFourLib = require('../connect-four-lib.js')

// -----------------------------------------------------------------------------
// Test Boards
// -----------------------------------------------------------------------------

var emptyBoard1 = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var emptyBoard2 = connectFourLib.createEmptyBoard()

var notQuiteAFullBoard = [
  ['y', 'r', 'y', 'r', 'y'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

var boardInProgress = [
  ['y', 'r', 'y', 'r', 'y', null],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

var missingAColumn = [
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y']
]

var tieBoard1 = [
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

var boardWithInvalidSquares1 = [
  ['y', 'r', 'y', 'r', 'y', 'banana'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

var boardWithInvalidSquares2 = [
  ['y', 'r', 'y', 'r', 'y', null],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 2, 'r'],
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

var redRowWin1 = [
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var redRowWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'r', 'y', null, null, null],
  ['y', 'r', null, null, null, null],
  ['r', 'r', null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var yellowRowWin1 = [
  ['r', 'y', 'y', 'y', 'r', null], // yellow row win from first column, fourth row
  ['y', 'r', 'r', 'y', null, null],
  ['y', 'y', 'r', 'y', null, null],
  ['r', 'r', 'r', 'y', null, null],
  ['r', null, null, null, null, null],
  ['y', null, null, null, null, null],
  ['r', null, null, null, null, null]
]

var yellowRowWin2 = [
  ['r', 'y', 'y', 'y', null, null],
  ['r', 'r', 'r', 'y', 'y', null],
  ['y', 'y', 'r', 'y', 'r', null],
  ['r', 'r', 'y', 'y', null, null], // yellow row win from fourth column, fourth row
  ['r', 'r', 'y', 'r', null, null],
  ['y', 'r', 'y', 'r', null, null],
  ['r', 'y', 'r', null, null, null]
]

var redColWin1 = [
  ['r', 'r', 'r', 'r', null, null],
  ['y', 'y', 'y', null, null, null],
  ['y', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var redColWin2 = [
  ['r', 'y', 'r', 'r', 'r', 'r'],
  ['y', 'r', 'y', 'r', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'r', 'y', null, null, null],
  ['r', 'r', 'r', null, null, null],
  ['r', 'y', 'y', null, null, null],
  ['y', 'r', 'y', 'y', null, null]
]

var yellowColWin1 = [
  ['r', 'r', 'r', null, null, null],
  ['y', 'y', 'y', 'y', null, null],
  ['r', 'r', 'y', null, null, null],
  ['r', null, null, null, null, null],
  ['r', null, null, null, null, null],
  ['y', null, null, null, null, null],
  ['y', null, null, null, null, null]
]

var yellowColWin2 = [
  ['r', 'r', 'y', 'r', 'y', 'y'],
  ['y', 'r', 'y', 'r', 'r', null],
  ['r', 'y', 'r', 'y', 'y', null],
  ['r', 'y', 'r', null, null, null],
  ['y', 'r', 'r', null, null, null],
  ['r', 'r', 'y', 'y', 'y', 'y'],
  ['y', 'r', 'y', null, null, null]
]

var redDiagWin1 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'r', 'r', null, null, null],
  ['r', 'r', 'r', null, null, null],
  ['r', 'y', null, null, null, null], // from fifth column bottom, up to the left
  ['r', 'y', null, null, null, null],
  ['y', null, null, null, null, null]
]

var redDiagWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['r', 'r', 'y', 'r', null, null], // from third column bottom, up to the right
  ['r', 'r', 'r', 'y', null, null],
  ['r', 'y', 'r', 'r', null, null],
  ['y', 'y', 'y', 'r', null, null],
  ['y', 'y', 'r', 'y', null, null]
]

var yellowDiagWin1 = [
  ['r', null, null, null, null, null],
  ['r', 'y', null, null, null, null], // from second column second row, up to the right
  ['r', 'r', 'y', null, null, null],
  ['y', 'r', 'y', 'y', null, null],
  ['y', 'y', 'r', 'r', 'y', null],
  ['y', 'r', 'y', 'r', null, null],
  [null, null, null, null, null, null]
]

var yellowDiagWin2 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'r', 'r', 'y', null],
  ['y', 'r', 'y', 'y', null, null],
  ['r', 'r', 'y', null, null, null],
  ['r', 'y', 'y', null, null, null], // from fifth column second row, up to the left
  ['r', 'r', 'r', 'y', null, null],
  ['y', 'r', null, null, null, null]
]

var bigBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var moreThan6pieces = [
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
    assert.strictEqual(connectFourLib.validBoard(), false)
  })

  it('a string is not a valid board', function () {
    assert.strictEqual(connectFourLib.validBoard('banana'), false)
  })

  it('a number is not a valid board', function () {
    assert.strictEqual(connectFourLib.validBoard(8), false)
  })

  it('an object is not a valid board', function () {
    assert.strictEqual(connectFourLib.validBoard({}), false)
  })

  it('boards must be 7 columns, 6 deep - 1', function () {
    assert.strictEqual(connectFourLib.validBoard(notQuiteAFullBoard), false)
  })

  it('boards must be 7 columns, 6 deep - 2', function () {
    assert.strictEqual(connectFourLib.validBoard(emptyBoard1), true)
  })

  it('boards must be 7 columns, 6 deep - 3', function () {
    assert.strictEqual(connectFourLib.validBoard(tieBoard1), true)
  })

  it('boards must be 7 columns, 6 deep - 4', function () {
    assert.strictEqual(connectFourLib.validBoard(missingAColumn), false)
  })

  it('boards should not have more than 7 columns', function () {
    assert.strictEqual(connectFourLib.validBoard(bigBoard), false)
  })

  it('Columns should not have more than 6 pieces', function () {
    assert.strictEqual(connectFourLib.validBoard(moreThan6pieces), false)
  })

  it('Squares should be either "r" "y" or null 1', function () {
    assert.strictEqual(connectFourLib.validBoard(boardWithInvalidSquares1), false)
  })

  it('Squares should be either "r" "y" or null 2', function () {
    assert.strictEqual(connectFourLib.validBoard(boardWithInvalidSquares2), false)
  })
}

// -----------------------------------------------------------------------------
// gameStatus inputs
// -----------------------------------------------------------------------------

function testBadInput () {
  it('gameStatus should return null if it receives no arguments', function () {
    assert.strictEqual(connectFourLib.gameStatus(), null)
  })

  it('gameStatus should return null if the argument is "true"', function () {
    assert.strictEqual(connectFourLib.gameStatus(true), null)
  })

  it('gameStatus should return null if the argument is "null"', function () {
    assert.strictEqual(connectFourLib.gameStatus(null), null)
  })

  it('gameStatus should return null if the argument is a string', function () {
    assert.strictEqual(connectFourLib.gameStatus('banana'), null)
  })

  it('gameStatus should return null if the argument an empty object', function () {
    assert.strictEqual(connectFourLib.gameStatus({}), null)
  })

  it('gameStatus should return null if the argument is an empty array', function () {
    assert.strictEqual(connectFourLib.gameStatus([]), null)
  })

  it('gameStatus should return null if a game board is not full', function () {
    assert.strictEqual(connectFourLib.gameStatus(notQuiteAFullBoard), null)
  })

  it('gameStatus should return null if a game board has more than 7 columns', function () {
    assert.strictEqual(connectFourLib.gameStatus(bigBoard), null)
  })

  it('gameStatus should return null if a game board is false', function () {
    assert.strictEqual(connectFourLib.gameStatus(false), null)
  })

  it('gameStatus should return null if a game board is undefined', function () {
    assert.strictEqual(connectFourLib.gameStatus(undefined), null)
  })
}

// -----------------------------------------------------------------------------
// gameStatus board conditions
// -----------------------------------------------------------------------------

function testGameStatuses () {
  it('empty board in progress', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(emptyBoard1), {status: 'in_progress'})
  })

  it('board in progress', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(boardInProgress), {status: 'in_progress'})
  })

  it('tie game 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(tieBoard1), {status: 'tie'})
  })

  it('red row win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redRowWin1), {status: 'winner_red',
      coordinates: [[0, 0], [1, 0], [2, 0], [3, 0]]})
  })

  it('red row win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redRowWin2), {status: 'winner_red',
      coordinates: [[0, 1], [1, 1], [2, 1], [3, 1]]})
  })

  it('yellow row win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowRowWin1), {status: 'winner_yellow',
      coordinates: [[0, 3], [1, 3], [2, 3], [3, 3]]})
  })

  it('yellow row win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowRowWin2), {status: 'winner_yellow',
      coordinates: [[0, 3], [1, 3], [2, 3], [3, 3]]})
  })

  it('red column win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redColWin1), {status: 'winner_red',
      coordinates: [[0, 0], [0, 1], [0, 2], [0, 3]]})
  })

  it('red column win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redColWin2), {status: 'winner_red',
      coordinates: [[0, 2], [0, 3], [0, 4], [0, 5]]})
  })

  it('yellow column win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowColWin1), {status: 'winner_yellow',
      coordinates: [[1, 0], [1, 1], [1, 2], [1, 3]]})
  })

  it('yellow column win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowColWin2), {status: 'winner_yellow',
      coordinates: [[5, 2], [5, 3], [5, 4], [5, 5]]})
  })

  it('red diagonal win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redDiagWin1), {status: 'winner_red',
      coordinates: [[1, 3], [2, 2], [3, 1], [4, 0]]})
  })

  it('red diagonal win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(redDiagWin2), {status: 'winner_red',
      coordinates: [[2, 0], [3, 1], [4, 2], [5, 3]]})
  })

  it('yellow diagonal win 1', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowDiagWin1), {status: 'winner_yellow',
      coordinates: [[1, 1], [2, 2], [3, 3], [4, 4]]})
  })

  it('yellow diagonal win 2', function () {
    assert.deepStrictEqual(connectFourLib.gameStatus(yellowDiagWin2), {status: 'winner_yellow',
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
    var emptyBoard3 = connectFourLib.createEmptyBoard()
    var emptyBoard4 = connectFourLib.createEmptyBoard()
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

// connect-four-lib.js - game logic for the classic game Connect Four
// v3.0.1
// https://github.com/jennypenfield/connect-four-lib
//
// Copyright (c) 2017, Jenny Penfield and other contributors
// Released under the ISC license
// https://github.com/jennypenfield/connect-four-lib/blob/master/LICENSE.md

// toggle this to run the asserts
var RUN_ASSERTS = false

var NUM_COLS = 7
var NUM_ROWS = 6

function createEmptyBoard () {
  var board = []
  for (var colIdx = 0; colIdx < NUM_COLS; colIdx++) {
    var column = []
    for (var rowIdx = 0; rowIdx < NUM_ROWS; rowIdx++) {
      column.push(null)
    }
    board.push(column)
  }
  return board
}

// returns the status of the game:
// - red won? yellow won? tied?
// - what squares are the winning position?
// - returns null if the board passed in is not valid
function gameStatus (board) {
  // return null if a valid board was not passed in
  if (!validBoard(board)) return null

  // check for any winners
  var allPossibleWinningCoords = generateCoords(board)
  for (var i = 0; i < allPossibleWinningCoords.length; i++) {
    var coord = allPossibleWinningCoords[i]
    var squareResult = checkCoord(board, coord)
    if (squareResult === 'r') {
      return {status: 'winner_red', coordinates: coord}
    } else if (squareResult === 'y') {
      return {status: 'winner_yellow', coordinates: coord}
    }
  }

  // if there are no winners and the board is full, return a tie
  if (isBoardFull(board)) {
    return {status: 'tie'}
  // else the game is still in progress
  } else {
    return {status: 'in_progress'}
  }
}

function isBoardFull (board) {
  for (var colIdx = 0; colIdx < board.length; colIdx++) {
    for (var rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
      if (board[colIdx][rowIdx] === null) {
        return false
      }
    }
  }

  return true
}

if (RUN_ASSERTS) {
  console.assert(!isBoardFull(emptyBoard))
}

// given a board and a coordinate, check if there is a winning combination
// on the coordinate squares
// returns 'r', 'y', or null
function checkCoord (board, coord) {
  var c0 = coord[0]
  var c1 = coord[1]
  var c2 = coord[2]
  var c3 = coord[3]

  var x0 = c0[0]
  var x1 = c1[0]
  var x2 = c2[0]
  var x3 = c3[0]

  var y0 = c0[1]
  var y1 = c1[1]
  var y2 = c2[1]
  var y3 = c3[1]

  if (board[x0][y0] === 'r' &&
      board[x1][y1] === 'r' &&
      board[x2][y2] === 'r' &&
      board[x3][y3] === 'r') {
    return 'r'
  }

  if (board[x0][y0] === 'y' &&
      board[x1][y1] === 'y' &&
      board[x2][y2] === 'y' &&
      board[x3][y3] === 'y') {
    return 'y'
  }

  return null
}

// given a board, returns an array of all the possible winning coordinates
// coordinates look like:
// [[0, 0], [0, 1], [0, 2], [0, 3]]
// [[5, 2], [5, 3], [5, 4], [5, 5]]
function generateCoords (board) {
  var allCoords = []

  for (var colIdx = 0; colIdx < board.length; colIdx++) {
    for (var rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
      var coordsForThisSquare = coordsForSquare(colIdx, rowIdx)
      allCoords = allCoords.concat(coordsForThisSquare)
    }
  }

  // remove invalid coords
  var validCoords = allCoords.filter(validCoord)

  // TODO: remove duplicate coordinates here

  return validCoords
}

// returns an array of all of the possible winning coordinates that start on this square
// NOTE: even returns "impossible" coordinates
function coordsForSquare (x, y) {
  var straightUp = [[x, y], [x, y + 1], [x, y + 2], [x, y + 3]]
  var topRight = [[x, y], [x + 1, y + 1], [x + 2, y + 2], [x + 3, y + 3]]
  var straightRight = [[x, y], [x + 1, y], [x + 2, y], [x + 3, y]]
  var bottomRight = [[x, y], [x + 1, y - 1], [x + 2, y - 2], [x + 3, y - 3]]
  var straightDown = [[x, y], [x, y - 1], [x, y - 2], [x, y - 3]]
  var bottomLeft = [[x, y], [x - 1, y - 1], [x - 2, y - 2], [x - 3, y - 3]]
  var straightLeft = [[x, y], [x - 1, y], [x - 2, y], [x - 3, y]]
  var topLeft = [[x, y], [x - 1, y + 1], [x - 2, y + 2], [x - 3, y + 3]]

  return [straightUp, topRight, straightRight, bottomRight,
    straightDown, bottomLeft, straightLeft, topLeft]
}

// is this coordinate valid?
function validCoord (coord) {
  return validSquareCoords(coord[0]) &&
         validSquareCoords(coord[1]) &&
         validSquareCoords(coord[2]) &&
         validSquareCoords(coord[3])
}

if (RUN_ASSERTS) {
  console.assert(validCoord([[0, 0], [1, 1], [2, 2], [3, 3]]))
  console.assert(!validCoord([[-1, -1], [0, 0], [1, 1], [2, 2]]))
}

// does this square exist on the board?
function validSquareCoords (sq) {
  var x = sq[0]
  var y = sq[1]

  return x >= 0 && x < NUM_COLS &&
         y >= 0 && y < NUM_ROWS
}

// predicate function to check whether the board is formatted correctly
function validBoard (board) {
  // board must be an Array
  if (!Array.isArray(board)) return false

  // board must have 7 columns
  if (board.length !== NUM_COLS) return false

  // rows must be valid
  for (var i = 0; i < board.length; i++) {
    if (!validRow(board[i])) return false
  }

  return true
}

function validRow (row) {
  // row must be an Array
  if (!Array.isArray(row)) return false

  // row must have 6 squares
  if (row.length !== NUM_ROWS) return false

  // squares must be valid
  for (var i = 0; i < row.length; i++) {
    if (!validSquare(row[i])) return false
  }

  return true
}

function validSquare (sq) {
  return sq === 'r' || sq === 'y' || sq === null
}

module.exports = {
  createEmptyBoard: createEmptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}

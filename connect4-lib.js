// an empty board is represented as an array of arrays
const emptyBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const NUM_COLS = 7
const NUM_ROWS = 6

// returns the status of the game:
// - red won? yellow won? tied?
// - what squares are the winning position?
// - returns null if the board passed in is not valid
function gameStatus (board) {
  // gameStatus should return null if it receives no arguments
  // should return null if a game board is not passed to it
  if (!validBoard(board)) return null

  // Check for row winners
  if (checkRowWinner(board) === 'r') return {winner: 'winner_red', coordinates: winnerCoordinates}
  if (checkRowWinner(board) === 'y') return {winner: 'winner_yellow', coordinates: winnerCoordinates}

  if (checkColumnWinner(board) === 'r') return {winner: 'winner_red', coordinates: winnerCoordinates}
  if (checkColumnWinner(board) === 'y') return {winner: 'winner_yellow', coordinates: winnerCoordinates}

  // checkColumnWinner(board)
  // checkDiagonalWinner(board)
  //
  // // if there is no winners and board is full return tie
  if (isBoardFull(board)) return 'tie'
  //
  // // if there is no winners and board is NOT full return 'in_progress'
  if (!isBoardFull(board)) return 'in_progress'
}

function isBoardFull (board) {
  for (let colIndex = 0; colIndex < board.length; colIndex++) {
    for (let rowIndex = 0; rowIndex < board[colIndex].length; rowIndex++) {
      if (board[colIndex][rowIndex] === null) {
        return false
      }
    }
  }
  return true
}

let winnerCoordinates = []

function checkRowWinner (board) {
  // should return null || 'r' || 'y'
  const NUM_COLS = board.length
  const NUM_ROWS = board[0].length

  // traverses board array thru gameboard rows (represented as columns in the array)
  for (let rowIndex = 0; rowIndex < NUM_ROWS; rowIndex++) {
    for (let colIndex = 0; colIndex < NUM_COLS - 3; colIndex++) {
      if (board[colIndex + 1][rowIndex] === board[colIndex][rowIndex] &&
        board[colIndex + 2][rowIndex] === board[colIndex][rowIndex] &&
        board[colIndex + 3][rowIndex] === board[colIndex][rowIndex]) {
        winnerCoordinates =
        [[colIndex][rowIndex],
          [colIndex + 1][rowIndex],
          [colIndex + 2][rowIndex],
          [colIndex + 3][rowIndex]]
        return board[colIndex][rowIndex] // returns 'r' or 'y'
      }
    }
  }
  return null
}

function checkColumnWinner (board) {
  // TODO: should return null || 'winner_red' || 'winner_yellow'
  const NUM_COLS = board.length
  const NUM_ROWS = board[0].length

  for (let colIndex = 0; colIndex < NUM_COLS; colIndex++) {
    for (let rowIndex = 0; rowIndex < NUM_ROWS - 3; rowIndex++) {
      if (board[colIndex][rowIndex + 1] === board[colIndex][rowIndex] &&
        board[colIndex][rowIndex + 2] === board[colIndex][rowIndex] &&
        board[colIndex][rowIndex + 3] === board[colIndex][rowIndex]) {
        winnerCoordinates =
        [[colIndex][rowIndex],
          [colIndex][rowIndex + 1],
          [colIndex][rowIndex + 2],
          [colIndex][rowIndex + 3]]
        return board[colIndex][rowIndex]
      }
    }
  }
  return null
}

function checkDiagonalWinner () {
  // TODO: should return null || 'winner_red' || 'winner_yellow'
}

// predicate function to check whether the board is formatted correctly
function validBoard (board) {
  // board must be an Array
  if (!Array.isArray(board)) return false

  // board must have 7 columns
  if (board.length !== NUM_COLS) return false

  // rows must be valid
  for (let i = 0; i < board.length; i++) {
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
  for (let i = 0; i < row.length; i++) {
    if (!validSquare(row[i])) return false
  }

  return true
}

function validSquare (sq) {
  return sq === 'r' || sq === 'y' || sq === null
}

module.exports = {
  EMPTY_BOARD: emptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}

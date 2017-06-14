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

function checkColumnWinner () {
  // TODO: should return null || 'winner_red' || 'winner_yellow'
}

function checkDiagonalWinner () {
  // TODO: should return null || 'winner_red' || 'winner_yellow'

}

// returns true or false
function validBoard (board) {
  // checks if is not an Array or undenied

  if (!board) return false
  if (board.constructor === Array) {
    // checks for row/pices lenght
    if (board.length === 7 && board[0].length === 6 && board[1].length === 6 &&
                              board[2].length === 6 && board[3].length === 6 &&
                              board[4].length === 6 && board[5].length === 6) {
      return true
    }
  }
  return false
}

module.exports = {
  EMPTY_BOARD: emptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}

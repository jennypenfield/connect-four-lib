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
  if (!isGoodInput(board)) return null

  // if there is a winner should return 'winner_red' || 'winner_yellow'
  if (checkRowWinner()) return checkRowWinner()
  if (checkColumnWinner()) return checkColumnWinner()
  if (checkDiagonalWinner()) return checkDiagonalWinner()

  // if there is no winners and board is full return tie
  if (isBoardFull) return 'tie'

  // if there is no winners and board is NOT full return 'in_progress'
  if (!isBoardFull) return 'in_progress'
}

function isBoardFull () {
  // TODO: return true or false
}

function isGoodInput (input) {
  if (!input) return false
}

function checkRowWinner () {
  // TODO: should return null || 'winner_red' || 'winner_yellow'

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
  if (typeof board === 'undefined' || board.constructor !== Array) return false

  // checks for row/pices lenght
  if (board.length === 7 && board[0].length === 6 && board[1].length === 6 &&
                            board[2].length === 6 && board[3].length === 6 &&
                            board[4].length === 6 && board[5].length === 6) {
    return true
  }
  return false
}

module.exports = {
  EMPTY_BOARD: emptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}

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
  // TODO: write me
}

// returns true or false
function validBoard (board) {
  // checks if is not an Array or undenied
  if (typeof board === 'undefined' || board.constructor !== Array) return false

  if (board.length === 7) {
    for (var i = 0; i < board.length; i++) {
      if (board[i].length === 6) {
        return true
      } else {
        return false
      }
    }
  }
  return false
}

module.exports = {
  EMPTY_BOARD: emptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}

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

  // if there is a winner should return 'winner_red' || 'winner_yellow'
  let rowValue = checkRowWinner(board)
  if (rowValue === 'r') return 'winner_red'
  if (rowValue === 'y') return 'winner_yellow'

  checkColumnWinner()
  checkDiagonalWinner()

  // if there is no winners and board is full return tie
  if (isBoardFull(board)) return 'tie'

  // if there is no winners and board is NOT full return 'in_progress'
  if (!isBoardFull(board)) return 'in_progress'
}

function isBoardFull (board) {
  for (let i = 0; i < board.length; i++) {
    for (let i2 = 0; i2 < board[i].length; i2++) {
      if (board[i][i2] === null) {
        return false
      }
    }
  }
  return true
}

function checkRowWinner (board) {
  // should return null || 'winner_red' || 'winner_yellow'
  // this are the posible winning convination for row
  const lines = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5]
  ]

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      const [a, b, c, d] = lines[i]

      if (board[i][a] === board[i][b] && board[i][b] === board[i][c] && board[i][c] === board[i][d]) {
        if (board[i][a] !== null) return board[i][a]
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

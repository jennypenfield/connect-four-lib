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
  // if (!validBoard(board)) return null

  // if there is a winner should return 'winner_red' || 'winner_yellow'
  // let rowValue = checkRowWinner(board)
  // if (rowValue === 'r') return 'winner_red'
  // if (rowValue === 'y') return 'winner_yellow'
  if (checkRowWinner(board) !== null) return checkRowWinner(board)

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

function checkRowWinner (board) {
  // should return null || 'winner_red' || 'winner_yellow'
  // this are the possible winning combination for row
  let isLastCountRed = false
  let isLastCountYellow = false
  let countRed = 0
  let countYellow = 0
  let coordinateArray = []

  for (let colIndex = 0; colIndex < board.length; colIndex++) {
    for (let rowIndex = 0; rowIndex < board[colIndex].length; rowIndex++) {
      if (board[rowIndex][colIndex] === 'r') {
        if (isLastCountRed || rowIndex === 0) {
          countRed++
        } else if (!isLastCountRed) {
          coordinateArray = []
          countRed = 1
        }
        coordinateArray.push([colIndex][rowIndex])
        isLastCountRed = true
        isLastCountYellow = false
      } else if (board[rowIndex][colIndex] === 'y') {
        if (isLastCountYellow || rowIndex === 0) {
          countYellow++
        } else if (!isLastCountYellow) {
          coordinateArray = []
          countYellow = 1
        }
        coordinateArray.push([colIndex][rowIndex])
        isLastCountYellow = true
        isLastCountRed = false
      }
    }
    if (countRed === 4) {
      return {winner: 'winner_red', coordinates: coordinateArray}
    }
    if (countYellow === 4) {
      return {winner: 'winner_yellow', coordinates: coordinateArray}
    }
    countRed = 0
    countYellow = 0
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

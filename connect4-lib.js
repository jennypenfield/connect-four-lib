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

const redDiagWin1 = [
  ['r', 'r', 'y', 'y', null, null],
  ['y', 'y', 'y', [1,4], null, null],
  ['y', 'r', [2,3], null, null, null],
  ['r', [3,1], 'r', null, null, null],
  [[4,0], 'y', null, null, null, null], // from fifth column bottom, up to the left
  ['r', 'y', null, null, null, null],
  ['y', null, null, null, null, null]
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

  checkColumnWinner(board)
  createDiagonalCoordinates(board)
  checkDiagonalWinner(board)


  // if there is no winners and board is full return tie
  if (isBoardFull(board)) return 'tie'

  // if there is no winners and board is NOT full return 'in_progress'
  if (!isBoardFull(board)) return 'in_progress'
}

function isBoardFull (board) {
  for (let i1 = 0; i1 < board.length; i1++) {
    for (let i2 = 0; i2 < board[i1].length; i2++) {
      if (board[i1][i2] === null) {
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
  console.log('hello')

}

const NUM_COLUMNS = 7
const NUM_ROWS = 6

// [[0,0], [1, 1], [2, 2], [3, 3]]
// [[2, 3], [3, 4], [4, 5], [5, 6]]
function isValidSquare (colIdx, rowIdx) {
  return colIdx >= 0 &&
         colIdx < NUM_COLUMNS &&
         rowIdx >= 0 &&
         rowIdx < NUM_ROWS
}

function isArray (Array) {
  if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
    }
  }
}

// are these coordinates a valid diagonal?
function isValidDiagonal (coords) {
  return isArray(coords) &&
         coords.length === 4 &&
         isValidSquare(coords[0]) &&
         isValidSquare(coords[1]) &&
         isValidSquare(coords[2]) &&
         isValidSquare(coords[3])
}

function isDuplicate (item, index, arr) {
  return arr.indexOf(item) == index
}

console.assert(!isValidDiagonal([[0,0], [0, 1], [2, 2], [3, 3]]))
console.assert(!isValidDiagonal([[-1,-1], [0, 0], [1, 1], [2, 2]]))
console.assert(!isValidDiagonal([[0,0], [1, 1], [2, 2], [3, 3]]))

// returns an array of all the diagonal coordinates
function createDiagonalCoordinates (board) {
  let diagonals = []
  for (let colIdx = 0; colIdx < board.length; colIdx++) {
    let column = board[colIdx]
    for (let rowIdx = 0; rowIdx < column.length; rowIdx++) {
      diagonals.push(createDiagonalsForSquare(colIdx, rowIdx))
    }
  }
  // Removing duplicates and only keeping valid diagnal coordinates.
  diagonals.filter(isValidDiagonal)
  diagonals.filter(isDuplicate)
  let flattened = diagonals.reduce(function (a, b) {
    console.log(a.concat(b))
    return a.concat(b)
  })
}

let diagonalArr = createDiagonalCoordinates(board)


function checkDiagonalWinner (diagonalArr) {
  console.log(diagonalArr)
  for (let i = 0; i < diagonalArr.length; i++) {
  }

}

// for a given square X, Y, return all four diagonals originating from it
function createDiagonalsForSquare (column, row) {
  let topRight = [[column, row], [column - 1, row + 1], [column - 2, row + 2], [column - 3, row + 3]]
  let topLeft = [[column, row], [column - 1, row - 1], [column - 2, row - 2], [column - 3, row - 3]]
  let bottomLeft = [[column, row], [column + 1, row - 1], [column + 2, row - 2], [column + 3, row - 3]]
  let bottomRight = [[column, row], [column + 1, row + 1], [column + 2, row + 2], [column + 3, row + 3]]
  //console.log('topRight:' + topRight, 'topLeft:' + topLeft, 'bottomLeft:' + bottomLeft, 'bottomRight:' + bottomRight)
  return [topRight, topLeft, bottomLeft, bottomRight]
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

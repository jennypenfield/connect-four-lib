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
  checkDiagonalWinner(board)


  if (checkDiagonalWinner(board) === 'r') return 'winner_red'
  if (checkDiagonalWinner(board) === 'y') return 'winner_yellow'


  // gameStatus should return null if it receives no arguments
  // should return null if a game board is not passed to it
  if (!validBoard(board)) return null
  // if there is a winner should return 'winner_red' || 'winner_yellow'
  let rowValue = checkRowWinner(board)
  if (rowValue === 'r') return 'winner_red'
  if (rowValue === 'y') return 'winner_yellow'

  // // checkColumnWinner(board)

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
function isValidDiagonal (col) {

  for (var i = 0; i < col.length; i++) {
    // return isValidSquare(col[i][0], col[i][1])
    return col[i][0] >= 0 &&
           col[i][0] < NUM_COLUMNS &&
           col[i][1] >= 0 &&
           col[i][1] < NUM_ROWS
  }


        // return isValidSquare(coords[0][1]) &&
        //        isValidSquare(coords[0][1]) &&
        //        isValidSquare(coords[0][1]) &&
        //        isValidSquare(coords[0][1])
  }

function isDuplicate (item, index, arr) {
  return arr.indexOf(item) == index
}

// console.assert(!isValidDiagonal([[0,0], [0, 1], [2, 2], [3, 3]]))
// console.assert(!isValidDiagonal([[-1,-1], [0, 0], [1, 1], [2, 2]]))
// console.assert(!isValidDiagonal([[0,0], [1, 1], [2, 2], [3, 3]]))

function flat(a, b) {
  return a.concat(b)
}


// returns an array of all the diagonal coordinates
function createDiagonalCoordinates (board) {
  let diagonals = []
  for (let colIdx = 0; colIdx < board.length; colIdx++) {
    let column = board[colIdx]
    for (let rowIdx = 0; rowIdx < column.length; rowIdx++) {
      diagonals.push(createDiagonalsForSquare(colIdx, rowIdx))
    }
  }
  let flatDiagonals = diagonals.reduce(flat)

  // let filterDiagonalArr = flatDiagonals.filter(isValidDiagonal)
  // console.log('F', filterDiagonalArr)

  // Removing duplicates and only keeping valid diagnal coordinates.
  // let validdiagonals = diagonals
  // console.log(validdiagonals)
  // let removeDuplicates = validdiagonals.filter(isDuplicate)

  // console.log(diagonalArr)
  return flatDiagonals
}


function checkDiagonalWinner (board) {
  let diagonal = createDiagonalCoordinates(board)
  // console.log(diagonal)
  for (let i = 0; i < diagonal.length; i++) {
    let a0 = diagonal[i][0][0]
    let a1 = diagonal[i][0][1]
    let b0 = diagonal[i][1][0]
    let b1 = diagonal[i][1][1]
    let c0 = diagonal[i][2][0]
    let c1 = diagonal[i][2][1]
    let d0 = diagonal[i][3][0]
    let d1 = diagonal[i][3][1]

    // console.log(board[a0,a1])

    for (var j = 0; j < board.length; j++) {
      // console.log(board[j][a0,a1])
      if (board[j][a0,a1]) {
        if (board[j][a0,a1] === board[j][b0,b1] &&
            board[j][a0,a1] === board[j][c0,c1] &&
            board[j][a0,a1] === board[j][d0,d1]) {
        console.log('win', board[j][a0,a1])
        return board[j][a0,a1]
        }
      }
    }
  }
}

// for a given square X, Y, return all four diagonals originating from it
function createDiagonalsForSquare (column, row) {
  let topRight = [[column, row], [column - 1, row + 1], [column - 2, row + 2], [column - 3, row + 3]]
  let topLeft = [[column, row], [column - 1, row - 1], [column - 2, row - 2], [column - 3, row - 3]]
  let bottomLeft = [[column, row], [column + 1, row - 1], [column + 2, row - 2], [column + 3, row - 3]]
  let bottomRight = [[column, row], [column + 1, row + 1], [column + 2, row + 2], [column + 3, row + 3]]
  return [topRight, topLeft, bottomLeft, bottomRight]
}

// returns true or false
function validBoard (board) {
  // checks if is not an Array or undenied
  if (!board) return false
  if (board.constructor === Array) {
    // checks for row/pices length
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

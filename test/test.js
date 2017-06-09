const assert = require('assert');
const connect4Lib = require('../connect4-lib.js');

//------------------------------------------------------------------------------
// Boards
//------------------------------------------------------------------------------

const tieBoard1 = [
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['y', 'r', 'y', 'r', 'y', 'r'],
  ['y', 'r', 'y', 'r', 'y', 'r']
  ['r', 'y', 'r', 'y', 'r', 'y'],
  ['y', 'r', 'y', 'r', 'y', 'r']
]

const redRowWin1 = [
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', 'y', null, null, null, null],
  ['r', null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const redColWin1 = [
  ['r', 'r', 'r', 'r', null, null],
  ['y', 'y', 'y', null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

//------------------------------------------------------------------------------
// Run the tests
//------------------------------------------------------------------------------

function testGameStatuses () {
  it('empty board in progress', function() {
    assert.equal(connect4Lib.gameStatus(connect4Lib.EMPTY_BOARD), 'in_progress');
  });

  it('tie game 1', function() {
    assert.equal(connect4Lib.gameStatus(tieBoard1), 'tie');
  });

  it('red row win 1', function() {
    assert.equal(connect4Lib.gameStatus(redRowWin1), 'winner_red');
  });

  it('red column win 1', function() {
    assert.equal(connect4Lib.gameStatus(redColWin1), 'winner_red');
  });

  // TODO: add many more test cases here
}

describe('Game Statuses', testGameStatuses);

function processGuess (board, row, col){
  const cell = board[row][col];
  cell.hit = true;
  
}
function checkWin(board){
  return board.flat().every(cell => cell.type === 'empty' || cell.hit);
}


module.exports = {processGuess, checkWin};
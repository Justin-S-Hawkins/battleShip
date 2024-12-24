function placeShip (board, length, type){
  const size = board.length;
  let placed = false;

  while(!placed){
      const direction = Math.random() > 0.5 ? 'horizontal': 'vertical';
      const row = Math.floor(Math.random() * size);
      const col = Math.floor (Math.random() * size);
  
      const positions =[];
      for (let i = 0; i < length; i++){
          const r = direction === 'horizontal' ? row: row + i;
          const c = direction === 'horizontal' ? col + i : col;

          if ( r >= size || c >= size || board[r][c].type !== 'empty'){
              break;
          }
          positions.push({row: r, col: c});       
      }

      if (positions.length === length){
          positions.forEach(({row,col}) => {
          board[row][col] = {type, hit : false};
          });
          placed = true;
      };
  };
};

function populateBoard( board, largeCount, smallCount){
    for (let i =0; i < largeCount; i++){
        placeShip(board,3,'large');
    };
    for (let i = 0; i < smallCount; i++){
        placeShip(board,2,'small');
    };
  };
module.exports = {placeShip, populateBoard};
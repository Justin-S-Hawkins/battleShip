function createBoard ( size){
  const board = [];
  for ( let i = 0; i < size; i ++){
      const row = [];
      for (let  j = 0; j < size; j++){
          row.push({type:'empty',hit: false}); 
      }
      board.push(row);
  }
  return board
}

function renderBoard(board, debug = false){
  console.clear()
  const display = board.map(row =>
      row.map(cell=> {
          if (debug || cell.hit){
              if ( cell.type === 'large') return '🔵';
               if ( cell.type === 'small') return '🟠'; 
                if ( cell.type === 'empty') return '❗';
          }
          return '-'; 
      })
  );

  console.table(
      display.reduce((acc,row,index)=>{
          acc[String.fromCharCode(65+ index)] = row ;
          return acc;
      },{})
  );
}

module.exports = {createBoard, renderBoard}
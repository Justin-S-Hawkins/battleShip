const readlineSync = require('readline-sync');
const {createBoard, renderBoard} = require('./board');
const {placeShip, populateBoard} = require('./ships');
const {greeting, handleGuess} = require('./utilites');
const {processGuess, checkWin} = require('./game');

function startGame(size){
    const shipCounts= {
        4: { large:1, small: 1},
        5: { large:1, small: 2},
        6: { large:2, small: 2},
    };
    const { large,small} = shipCounts[size];
    const board = createBoard(size);

    populateBoard(board,large,small);

    while(true){
        console.clear();
        renderBoard(board,false);
        const { row , col} = handleGuess(board);
        processGuess(board,row,col)

        if (checkWin(board)){
            console.clear();
            renderBoard(board,true);
            console.log(
                 `
\\$$\   $$  |                         $$ | $\\  $$ |\\__|                $$ |$$ |
 \\$$\ $$  /$$$$$$\\  $$\\   $$\\        $$ |$$$\\ $$ |$$\\ $$$$$$$\\        $$ |$$ |
  \\$$$$  /$$  __$$\\ $$ |  $$ |      $$ $$ $$\\$$ |$$ |$$  __$$\\       $$ |$$ |
   \\$$  / $$ /  $$ |$$ |  $$ |      $$$$  _$$$$ |$$ |$$ |  $$ |      \\__|\\__|
    $$ |  $$ |  $$ |$$ |  $$ |      $$$  / \\$$$ |$$ |$$ |  $$ |              
    $$ |  \\$$$$$$  |\\$$$$$$  |      $$  /   \\$$ |$$ |$$ |  $$ |      $$\\ $$\\ 
    \\__|   \\______/  \\______/       \\__/     \\__|\\__|\\__|  \\__|      \\__|\\__|`
            )
            break;
        }
    }

}

const size = greeting();
startGame(size);





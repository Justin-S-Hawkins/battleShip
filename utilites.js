const readlineSync = require('readline-sync');
const options = ['4x4','5x5','6x6'];

function greeting (){
    console.clear()
    console.log('Welcome to Battle Ship! 🚢\nselect your Grid size')
    const grid = readlineSync.keyInSelect(options, 'Choose your board size!')
   if(options[grid] ==='4x4') return 4;
   if(options[grid] ==='5x5') return 5;
   if(options[grid] ==='6x6') return 6;
}

function handleGuess(board){
    const size =  board.length;
    const validPattern = /^[A-Z]\d+$/i;
    let guess = '';
    while(true){
        guess = readlineSync.question('Enter Your Guess (for example: A1, B3 etc..:').toUpperCase();
        if (!validPattern.test((guess))){
            console.log('Invalid input! Try Again!');
            continue;
        }
        const row = guess.charCodeAt(0)-65;
        const col = parseInt(guess.substring(1));

        if ( row < 0 || row >= size || col < 0 || col >= size){
           console.log('Out Of Bounds! guess within the board please !!');
           continue;
        }

       if (board[row][col].hit){
        console.log('You already hit that one! Awsome Job! Try another spot! ')
        continue;
       }
       return { row, col};
    }
}


module.exports = {greeting, handleGuess};
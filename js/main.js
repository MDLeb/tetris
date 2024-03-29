const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

//ctx.fillStyle = 'red';
//ctx.fillRect(COLS-1, ROWS-1, 1, 1); // x=0...COLS-1 y=0...ROWS-1  

class Game {
    constructor() {
        this.board = new Board(ctx);
        this.isOver = false;
    }
    start() {
       this.board.play();
    }
}

let game = new Game;
game.start();
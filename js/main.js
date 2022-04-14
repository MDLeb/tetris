const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


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
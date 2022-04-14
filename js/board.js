const colors = ['red', 'grey', 'blue', 'orange', 'yellowgreen', 'magenta', ]

class Board { 
   constructor(ctx) {
       let arr = [];
       for(let i = 0; i < ROWS; i++){
           let row = [];
           for(let j = 0; j < COLS; j++){
                row.push(0);
           }
           arr.push(row);
       }
    this.boardMatrix = arr;
    this.ctx = ctx;
    this.flag = true;
   }
  
   play(){
       this.checkBoardState();
       if(!this.flag) return this.writeOnBoard();
       let currentFig = this.addFigure();
       let figStatus = this.checkState(currentFig);
       window.addEventListener('keydown', (event) => {
           this.controls(event, currentFig);
        }, true);
       let interval = setInterval(()=>{//интервал автоматического движения фигуры
            if(figStatus){
                this.moveFigure(currentFig, currentFig.currentX, currentFig.currentY+1);
                //console.table(this.boardMatrix);
                figStatus = this.checkState(currentFig); 

            }else{
                clearInterval(interval);
                currentFig = null;
                window.removeEventListener('keydown', (event) => {
                    this.controls(event, currentFig); 
                }, true);
                this.play();//рекурсия
            }
            this.drawBlocks(this.boardMatrix);
        }, 100);
   }
   writeOnBoard(){
        document.getElementsByClassName('game-over')[0].classList.toggle('active');
   }
   controls(event, currentFig) {
        switch(event.code) {//надо добавить еще ускорение вниз
            case 'ArrowRight': 
                this.clearFigure(currentFig);
                currentFig.currentX++;
                this.moveFigure(currentFig, currentFig.currentX, currentFig.currentY);
                break;
            case 'ArrowLeft': 
                this.clearFigure(currentFig);
                currentFig.currentX--;
                this.moveFigure(currentFig, currentFig.currentX, currentFig.currentY);
                break;
            case 'ArrowUp': 
                this.clearFigure(currentFig);
                currentFig.matrix = currentFig.rotate(currentFig.matrix);
                this.moveFigure(currentFig, currentFig.currentX, currentFig.currentY);
            break;
        };
    }
    checkBoardState(){
        this.boardMatrix[0].forEach((val) => {
            if(val) this.flag = false;
        });
        this.boardMatrix.forEach((row, index) => {
            if(!row.includes(0)) {
                this.boardMatrix.splice(index, 1);
                let newRow = [];
                for(let i = 0; i < COLS; i++){
                    newRow.push(0);
                }
                this.boardMatrix.unshift(newRow);
            }
        })
    }
    addFigure() {
        let figType = Math.floor(Math.random() * 6);
        let figure = new Figure(Figures[figType]);
        this.addMatrix(figure);
        return figure;
    }
    checkState(figure) {//надо исправить, перезаписывает углы там где у фигуры есть нули в матрице
        let checkFig = figure.matrix[figure.matrix.length-1];// нижние клетки матрицы фигуры
        let checkBoard = [];// клетки доски следующего ряда под матрицой фигуры
        for(let i = 0; i < checkFig.length; i++) {
            checkBoard.push(this.boardMatrix[figure.currentY+figure.matrix.length][figure.currentX+i]);
        }
        for(let k = 0; k < checkBoard.length; k++) {
            if (checkBoard[k] >= 1 && checkFig[k] >=1) {
                return false;
            }else if((figure.currentY+figure.matrix.length+2) > ROWS) {
                return false
            }
        }
        return true;
    }
    moveFigure(figure, x, y) {//надо добавить проверку на возможность перемещения за края
       this.clearFigure(figure);
       figure.currentX = x;
       figure.currentY = y;
       this.addMatrix(figure);
    }
    addMatrix(figure){
        for(let i = figure.matrix.length-1; i >= 0; i--) {
            for (let j = 0; j < figure.matrix[0].length; j++) {
                this.boardMatrix[figure.currentY+i][figure.currentX+j] = figure.matrix[i][j];
            }
        }    
    }
    clearFigure(figure) {
        for(let i = figure.matrix.length-1; i >= 0; i--) {
            for (let j = 0; j < figure.matrix[0].length; j++) {
                this.boardMatrix[figure.currentY+i][figure.currentX+j] = 0;
            }
        }  
    }
    drawBlocks(board) {
        for(let i = 0; i < COLS; i++) {
            for (let j = 0; j < ROWS; j++) {
                if(board[j][i]) {
                   ctx.fillStyle = colors[board[j][i]-1];
                   ctx.strokeStyle = 'red';
                   ctx.fillRect(i, j, 1, 1);
                }else if(board[j][i] == 0) {
                    ctx.clearRect(i, j, 1, 1);
                }
                //requestAnimationFrame??????
            }
        }   
    }
   
}


let dot = BLOCK_SIZE;

const Figures = [
    {   
        name: 'I',
        matrix:[//???
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
    },
    {   
        name: 'O',
        matrix:[
            [2, 2],
            [2, 2]
        ],        
    },
    {   
        name: 'T',
        matrix:[
            [3, 3, 3],
            [0, 3, 0]
        ],
    },
    {   
        name: 'S',
        matrix:[
            [0, 4, 4],
            [4, 4, 0],
        ],
    },
    {   
        name: 'Z',
        matrix:[
            [5, 5, 0],
            [0, 5, 5]
        ],
    },
    {   
        name: 'J',
        matrix:[
            [0, 6, 0],
            [0, 6, 0],
            [6, 6, 0]
        ],
    },
    {   
        name: 'L',
        matrix:[
            [0, 7, 0],
            [0, 7, 0],
            [0, 7, 7],
        ],
    },
]

class Figure {
    figureType;
    constructor(figureType){
        this.figureType = figureType;
        this.color = figureType.color;
        this.matrix = figureType.matrix;  
        this.emptyMatrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        this.currentX = 3;
        this.currentY = 0;

        
    }
    
    rotate(matrix) {
        const N = matrix.length - 1;
        const result = matrix.map((row, i) =>
          row.map((val, j) => matrix[N - j][i])
        );
        return result;
      }
}

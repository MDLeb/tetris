let dot = BLOCK_SIZE;

const Figures = [
    {   
        name: 'I',
        matrix:[
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        color: 'red',

    },
    {   
        name: 'O',
        matrix:[
            [1, 1],
            [1, 1]
        ],        
        color: 'grey',

    },
    {   
        name: 'T',
        matrix:[
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        color: 'orange',

    },
    {   
        name: 'S',
        matrix:[
            [0, 1, 1],
            [0, 1, 0],
            [1, 1, 0]
        ],
        color: 'magenta',

    },
    {   
        name: 'Z',
        matrix:[
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        color: 'yellow',

    },
    {   
        name: 'J',
        matrix:[
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        color: 'green',

    },
    {   
        name: 'L',
        matrix:[
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        color: 'blue',

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

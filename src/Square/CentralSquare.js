import { Square } from './Square';

function CentralSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

CentralSquare.prototype = Object.create(Square.prototype);

CentralSquare.prototype.getRivalTokensAround = function() {
    let rivalTokensAround = [];
    let currentPlayer = this.board.currentPlayer;
    let row = this.row;
    let col = this.col;
    let squares = this.board.squares;
    // console.log(squares[row-1][col-1].token.player)
    if (squares[row-1][col-1].token != null  &&  squares[row-1][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col-1].token);
    }

    if (squares[row-1][col].token != null  &&  squares[row-1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col].token);
    }

    if (squares[row-1][col+1].token != null  &&  squares[row-1][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col+1].token);
    }

    if (squares[row][col+1].token != null  &&  squares[row][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row][col+1].token);
    }  

    if (squares[row+1][col+1].token != null  &&  squares[row+1][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col+1].token);
    }
    
    if (squares[row+1][col].token != null  &&  squares[row+1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col].token);
    }

    if (squares[row+1][col-1].token != null  &&  squares[row+1][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col-1].token);
    } 

    if (squares[row][col-1].token != null  &&  squares[row][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row][col-1].token);
    }

    return rivalTokensAround;
}

export { CentralSquare };
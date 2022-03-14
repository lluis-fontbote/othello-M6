import { Square } from './Square';

function LeftSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

LeftSquare.prototype = Object.create(Square.prototype);

/**
 * Checks how many rival tokens there are around the square
 * @param {Player} currentPlayer 
 * @returns array of Tokens
 */
LeftSquare.prototype.getRivalTokensAround = function() {
    let rivalTokensAround = [];
    let currentPlayer = this.board.currentPlayer;
    let row = this.row;
    let col = this.col;
    let squares = this.board.squares;
    
    // one square up
    if (squares[row-1][col].token != null  &&  squares[row-1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col].token);
    }

    // one square up and one right
    if (squares[row-1][col+1].token != null  &&  squares[row-1][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col+1].token);
    }

    // one square right
    if (squares[row][col+1].token != null  &&  squares[row][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row][col+1].token);
    }  

    // one square down and one right
    if (squares[row+1][col+1].token != null  &&  squares[row+1][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col+1].token);
    }
    
    // one square down
    if (squares[row+1][col].token != null  &&  squares[row+1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col].token);
    }

    return rivalTokensAround;
}

export { LeftSquare };
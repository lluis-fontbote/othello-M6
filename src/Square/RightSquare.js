import { Square } from './Square';

function RightSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

RightSquare.prototype = Object.create(Square.prototype);

/**
 * Checks how many rival tokens there are around the square
 * @param {Player} currentPlayer 
 * @returns array of Tokens
 */
RightSquare.prototype.getRivalTokensAround = function() {
    let rivalTokensAround = [];
    let currentPlayer = this.board.currentPlayer;
    let row = this.row;
    let col = this.col;
    let squares = this.board.squares;
    
    // one square up and one left
    if (squares[row-1][col-1].token != null  &&  squares[row-1][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col-1].token);
    }

    // one square up
    if (squares[row-1][col].token != null  &&  squares[row-1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row-1][col].token);
    }
    
    // one square down
    if (squares[row+1][col].token != null  &&  squares[row+1][col].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col].token);
    }

    // one square down and one left
    if (squares[row+1][col-1].token != null  &&  squares[row+1][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row+1][col-1].token);
    } 

    // one square left
    if (squares[row][col-1].token != null  &&  squares[row][col-1].token.player != currentPlayer) {
        rivalTokensAround.push(squares[row][col-1].token);
    }

    return rivalTokensAround;
}

export { RightSquare };
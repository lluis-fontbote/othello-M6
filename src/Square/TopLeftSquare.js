import { Square } from './Square';

function TopLeftSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

TopLeftSquare.prototype = Object.create(Square.prototype);

/**
 * Checks how many rival tokens there are around the square
 * @param {Player} currentPlayer 
 * @returns array of Tokens
 */
TopLeftSquare.prototype.getRivalTokensAround = function() {
    let rivalTokensAround = [];
    let currentPlayer = this.board.currentPlayer;
    let row = this.row;
    let col = this.col;
    let squares = this.board.squares;
    
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

export { TopLeftSquare };
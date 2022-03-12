import { Square } from './Square';

function BottomLeftSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
    this.html.addEventListener('click', this.placeToken);
}

BottomLeftSquare.prototype = Object.create(Square.prototype);

/**
 * Checks how many rival tokens there are around the square
 * @param {Player} currentPlayer 
 * @returns array of Tokens
 */
BottomLeftSquare.prototype.getRivalTokensAround = function() {
    let rivalTokensAround = [];
    let currentPlayer = this.board.currentPlayer;
    let row = this.row;
    let col = this.col;

    if (this.board.squares[row-1][col].token != null  &&  this.board.squares[row-1][col].token.player != currentPlayer) {
        rivalTokensAround.push(this.board.squares[row-1][col].token);
    }
    
    if (this.board.squares[row-1][col+1].token != null  &&  this.board.squares[row-1][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(this.board.squares[row-1][col+1].token);
    }

    if (this.board.squares[row][col+1].token != null  &&  this.board.squares[row][col+1].token.player != currentPlayer) {
        rivalTokensAround.push(this.board.squares[row][col+1].token);
    }

    console.log(rivalTokensAround);

    return rivalTokensAround;
    
}

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { BottomLeftSquare };
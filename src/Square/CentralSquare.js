import { Square } from './Square';

function CentralSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

CentralSquare.prototype = Object.create(Square.prototype);

CentralSquare.prototype.checkMovement = function() {

    // (this.squares[row-1][col-1] == null  ||  this.squares[row-1][col-1].color == currentUserColor)  
    // (this.squares[row-1][col] == null  ||  this.squares[row-1][col].color == currentUserColor)  
    // (this.squares[row-1][col+1] == null  ||  this.squares[row-1][col+1].color == currentUserColor)  
    // (this.squares[row][col+1] == null  ||  this.squares[row][col+1].color == currentUserColor)  
    // (this.squares[row+1][col+1] == null  ||  this.squares[row+1][col+1].color == currentUserColor)  
    // (this.squares[row+1][col] == null  ||  this.squares[row+1][col].color == currentUserColor)  
    // (this.squares[row+1][col-1] == null  ||  this.squares[row+1][col-1].color == currentUserColor)  
    // (this.squares[row][col-1] == null  ||  this.squares[row][col-1].color == currentUserColor)

}

// TopLeftSquare.prototype.isValid = function() {

// }

export { CentralSquare };
import { Square } from './Square';

function LeftSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

LeftSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { LeftSquare };
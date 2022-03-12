import { Square } from './Square';

function BottomSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

BottomSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { BottomSquare };
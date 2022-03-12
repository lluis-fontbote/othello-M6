import { Square } from './Square';

function BottomRightSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

BottomRightSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { BottomRightSquare };
import { Square } from './Square';

function RightSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

RightSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { RightSquare };
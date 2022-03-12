import { Square } from './Square';

function TopLeftSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

TopLeftSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { TopLeftSquare };
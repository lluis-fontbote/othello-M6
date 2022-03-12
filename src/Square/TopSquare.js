import { Square } from './Square';

function TopSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

TopSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { TopSquare };
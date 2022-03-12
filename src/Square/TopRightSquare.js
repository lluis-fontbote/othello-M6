import { Square } from './Square';

function TopRightSquare(row, col, squareSize, board) {

    Square.call(this, row, col, squareSize, board);
}

TopRightSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { TopRightSquare };
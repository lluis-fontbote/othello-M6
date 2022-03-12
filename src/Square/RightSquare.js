import { Square } from './Square';

function RightSquare(row, col, squareSize) {

    Square.call(this, row, col, squareSize);
    this.html.addEventListener('click', this.placeToken);
}

RightSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { RightSquare };
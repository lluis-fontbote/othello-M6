import { Square } from './Square';

function TopSquare(row, col, squareSize) {

    Square.call(this, row, col, squareSize);
    this.html.addEventListener('click', this.placeToken);
}

TopSquare.prototype = Object.create(Square.prototype);

// TopLeftSquare.prototype.placeToken = function() {

//     if 

// }

// TopLeftSquare.prototype.isValid = function() {

// }

export { TopSquare };
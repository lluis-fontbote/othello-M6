import { Token } from "./Token";
import { TopLeftSquare } from "./Square/TopLeftSquare";
import { TopRightSquare } from "./Square/TopRightSquare";
import { TopSquare } from "./Square/TopSquare";
import { BottomLeftSquare } from "./Square/BottomLeftSquare";
import { BottomRightSquare } from "./Square/BottomRightSquare";
import { BottomSquare } from "./Square/BottomSquare";
import { LeftSquare } from "./Square/LeftSquare";
import { RightSquare } from "./Square/RightSquare";
import { CentralSquare } from "./Square/CentralSquare";

function Board(dimensions, blackPlayer, whitePlayer) {
    // Properties
    this.dimensions = dimensions;
    this.squares = [];
    this.html = document.getElementById('board');
    this.squareSize = (100 / this.dimensions);
    this.blackPlayer = blackPlayer;
    this.whitePlayer = whitePlayer;
    this.currentPlayer = null;
    this.tornsSeguitsSenseTirar = 0;

    // Generate HTML and fill array of squares
    for (let row = 0;  row < this.dimensions;  row++) {
        let filaArray = [];
        let filaHTML = document.createElement('div');
        filaHTML.classList.add('fila');
        filaHTML.style = `width:100%; height:${this.squareSize}%;`;

        for (let col = 0;  col < this.dimensions;  col++) {
            let square;
            if (row == 0) {
                if (col == 0) {
                    square = new TopLeftSquare(row, col, this.squareSize, this);
                } else if (col == this.dimensions -1) {
                    square = new TopRightSquare(row, col, this.squareSize, this);
                } else {
                    square = new TopSquare(row, col, this.squareSize, this);
                }
            } else if (row == this.dimensions -1) {
                if (col == 0) {
                    square = new BottomLeftSquare(row, col, this.squareSize, this);
                } else if (col == this.dimensions -1) {
                    square = new BottomRightSquare(row, col, this.squareSize, this);
                } else {
                    square = new BottomSquare(row, col, this.squareSize, this);
                }
            } else if (col == 0) {
                square = new LeftSquare(row, col, this.squareSize, this);
            } else if (col == this.dimensions -1) {
                square = new RightSquare(row, col, this.squareSize, this);
            } else {
                square = new CentralSquare(row, col, this.squareSize, this);
            }

            filaHTML.appendChild(square.html);
            filaArray.push(square);
        }
        
        this.html.appendChild(filaHTML);
        this.squares.push(filaArray);
    }
    
    // Place first 4 tokens
    this.placeToken(this.dimensions / 2 - 1,  this.dimensions / 2 - 1, this.whitePlayer);
    this.placeToken(this.dimensions / 2 - 1, this.dimensions / 2, this.blackPlayer);
    this.placeToken(this.dimensions / 2, this.dimensions / 2 - 1, this.blackPlayer);
    this.placeToken(this.dimensions / 2, this.dimensions / 2, this.whitePlayer);


    // Iniciem el torn calculant les tirades possibles
    this.changeTurn();
}

Board.prototype.placeToken = function(row, col, player) {
    let token = new Token(player, this.squares[row][col]);
    this.squares[row][col].token = token;
    document.getElementById(`${row}-${col}`).appendChild(token.html);
}

Board.prototype.changeTurn = function() {
    this.currentPlayer == this.blackPlayer ?  this.currentPlayer = this.whitePlayer : this.currentPlayer = this.blackPlayer;

    this.currentPlayer.calculateMovementsAvailable();
    if (this.currentPlayer.movementsAvailable.length > 0) {
        this.tornsSeguitsSenseTirar = 0;
        this.showMovementAvailable();

    } else if (this.currentPlayer.movementsAvailable == 0  &&  this.tornsSeguitsSenseTirar == 0) {
        this.tornsSeguitsSenseTirar++;
        this.changeTurn();
    
    } else {
        this.endGame();
    }
}

Board.prototype.showMovementAvailable = function() {
    for (let movement of this.currentPlayer.movementsAvailable) {
        let hint = document.createElement('div');
        hint.classList.add('hint');
        movement.casella.html.appendChild(hint);
    }
}

Board.prototype.endGame = function() {
    console.log('endgame')
}


export { Board };
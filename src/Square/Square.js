import { Token } from "../Token";

function Square(row, col, squareSize, board) {

    this.html = document.createElement('div');
    this.html.classList.add('casella');
    this.html.style = `width:${squareSize}%; height:100%;`;
    this.html.dataset.row = row;
    this.html.dataset.col = col;
    this.html.id = `${row}-${col}`;
    
    this.row = row;
    this.col = col;
    this.token = null;
    this.board = board;

    this.html.object = this;

    this.html.addEventListener('click', this.handleClick);

}

/**
 * Mira si el jugador que té el torn pot tirar aquí.
 * - Si és així, col·loca el token a la casella 
 * , dona la volta als tokens que toqui i canvia de torn
 * - Si no pot, s'avisa a l'usuari
 */
Square.prototype.handleClick = function() {
    let movement = this.object.board.currentPlayer.canMoveHere(this.object);
        if (movement != false) {
            this.object.token = new Token(this.object.board.currentPlayer, this.object);
            
            // Ens carreguem els hints abans d'insertar els tokens
            for (let hint of document.querySelectorAll('.hint')) {
                hint.remove();
                
            }

            this.appendChild(this.object.token.html);
            for (let tokenToFlip of movement.tokensToFlip) {
                tokenToFlip.flip();
            }
            this.object.board.changeTurn();
        } else {
            let casella = this;
            this.style.backgroundColor = 'red';
            setTimeout(function() {
                casella.style.backgroundColor = `rgb(96, 158, 4)`;
            }, 250, casella)
        }
}

/**
 * Comprova si, seguint la direcció en què s'ha trobat el token rival,
 * es troba una casella buida on el jugador que té el torn pugui col·locar
 * la fitxa per a fer bocata
 * @param {Token} token 
 * @returns null | movement
 */
Square.prototype.esPotFerBocata = function(rivalToken) {
    let rowDiff = rivalToken.square.row - this.row;
    let colDiff = rivalToken.square.col - this.col;
    let movement = {
        casella: null,
        tokensToFlip: [
            rivalToken
        ]
    };

    for (let i = this.row + (rowDiff * 2), j = this.col + (colDiff * 2);  
         i >= 0  &&  i < this.board.dimensions  &&  j >= 0  &&  j < this.board.dimensions;  
         i += rowDiff, j += colDiff) 
    {
        if (this.board.squares[i][j].token == null) {
            // console.log('casellaValida= '  + i +'-'+j);
            movement.casella = this.board.squares[i][j];
            return movement;
        
        } else if (this.board.squares[i][j].token.player != this.board.currentPlayer) {
            movement.tokensToFlip.push(this.board.squares[i][j].token);
        
        } else {
            return null
        } 
    } 

    return null;
    
}

/**
 * Checks how many rival tokens there are around the square
 * @param {Player} currentPlayer 
 * @returns array of Tokens
 */
Square.prototype.getRivalTokensAround = function() {
    //* Different implementation depending on child object
}

export { Square };
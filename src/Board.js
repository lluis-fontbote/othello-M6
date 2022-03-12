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
    this.currentPlayer = this.blackPlayer;

    console.log(this);
    // Generate HTML and fill array of squares with null values
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


            // let square = new Square()
            // let square = document.createElement('div');
            // square.classList.add('casella');
            // square.style = `width:${this.squareSize}%; height:100%;`;
            // square.dataset.row = row;
            // square.dataset.col = col;
            // square.id = `${row}-${col}`;

            filaHTML.appendChild(square.html);
            filaArray.push(square);
        }
        
        this.html.appendChild(filaHTML);
        this.squares.push(filaArray);
    }
    
    // Place first 4 tokens
    // Caldria fer subclasses i que cadascuna cridés el mètode setFirst4Tokens(),
    // I es colocarien el tokens en caselles diferents depenent de si el tauler és 8x8, 10x10 o 
    // segurament placeToken no hauria de ser un mètode de Board sinó de Square
    this.placeToken(3, 3, 'white', this.whitePlayer);
    this.placeToken(3, 4, 'black', this.blackPlayer);
    this.placeToken(4, 3, 'black', this.blackPlayer);
    this.placeToken(4, 4, 'white', this.whitePlayer);
}

Board.prototype.placeToken = function(row, col, color) {
    // let targetSquare = this.squares[row][col];
    // if (this.movementIsValid(targetSquare, color)) {
    //     // clau: posició de this i de rivalToken.square per saber la direcció cap a on buscar bocata
    //     targetSquare.flipRivalTokensBetweenThisAnd(tokenBocata);
    //     //! això hauria de retornar l'objecte flippedTokens, amb tots els tokens q ha girat.
    //     //! Caldria llavors cridar les funcions getRivalTokensAround() i getBocatas 
    //     //! per si al girar han sorgit nous bocates
    //     //! Cada vegada que es gira una fitxa pot haver noves fitxes que s'hagin de girar.
    //     //! Caldria tenir un comptador de fitxes girades, i fins q no estigui a 0 no canviar el torn
    //     // aplica token.flip() en tots els tokens rivals situats en mig
    //     targetSquare.setToken(currentUserColor);
        
    //     this.revisarFitxesGirades();
    // }


    let token = new Token(color);
    this.squares[row][col].token = token;
    document.getElementById(`${row}-${col}`).appendChild(token.html);
}

/**
 * Checks if the given movement is legal
 * @param {number} row 
 * @param {number} col 
 * @param {string} color 
 */
// Board.prototype.movementIsValid = function(targetSquare, currentUserColor) {
    // let targetSquare = this.squares[row][col];
    // console.log(this.squares[row][col+1])
    // console.log(this.squares[row+1][col+1])

    // 2- Comprovar que l'usuari pot efectuar la jugada. Condicions:
        // 2.1 Alguna de les caselles del voltant tenen fitxa rival
        // 2.2 Per cadascuna de les q hagi trobat caldrà que llavors busqui la fitxa del propi color amb la qual fer el bocata
        //     Per fer-ho: seguir la direcció en què he trobat la fitxa enemiga fins que trobi fitxa pròpia (pot tirar) 
        //     o casella buida o s'acabi el tauler (no pot tirar)
        // 2.3 Si trobo fitxa pròpia per a bocata, girar totes les fitxes rivals embotides. I crear new Token i col·locar-la on deia l'usuari
        // 2.4 Si aquesta no ha acabat, acabar cerca de fitxes rivals al voltant de la nova fitxa col·locada
        // 2.5 Repetir cerca de fitxes rivals, ara al voltant de cadascuna de les fitxes voltejades. 
        //     I així recursivament   
    
    // 3 - Canviar torn, tant si no pot tirar com si ja ho ha fet
    // 4- Si cap dels dos jugadors ha pogut tirar, acabar partida 

   
    //? Alguna de les caselles del voltant tenen fitxa rival ?
    // let rivalTokensAround = targetSquare.getRivalTokensAround();
    // if (rivalTokensAround == 0) {   
    //     return false;

    // } else {
    //     //? Hi ha bocates possibles ?
    //     //* Si és així els retornem
        

    //     let bocates = [];
    //     for (let rivalToken of rivalTokensAround) {
    //         let bocata = targetSquare.findBocata(rivalToken);
    //         //? bocata podria ser un objecte que contingués totes les caselles a girar
    //         if (bocata != null) {
    //             bocates.push(bocata);
    //         }
    //         if (tokenBocata != null) {
    //             // clau: posició de this i de rivalToken.square per saber la direcció cap a on buscar bocata
    //             this.flipRivalTokensBetweenThisAnd(tokenBocata);
    //             // aplica token.flip() en tots els tokens rivals situats en mig
    //             targetSquare.setToken(currentUserColor);

    //         }

    //     }
    // }
    

        

// }

export { Board };
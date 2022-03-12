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

    this.html.square = this;
    this.html.addEventListener('click', this.checkMovement);
}

Square.prototype.getRivalTokensAround = function() {
    //* Different implementation depending on child object
    // Per a no sortir-se de l'array:
        // No mirar a l'esquerra (-1) de la columna 0
        // No mirar una fila amunt (-1) de a¡la fila 0
        // No mirar una columna a la dreta (+1) de la columna row.length -1 / dimensions -1
        // No mirar una fila a sota (+1) de la fila squares.length -1 / dimensions -1
        return false;
}

Square.prototype.checkMovement = function(e) {

    //* 1- Està buida?
    console.log(this.square);
    if (this.square.token === null) {
        console.log('hola');
        //* 2- Té alguna fitxa rival a les caselles del voltant?
        // console.log(Square);
        let rivalTokensAround = this.square.getRivalTokensAround();
        console.log(rivalTokensAround);
        // if (rivalTokensAround > 0) {
        //     //* 3- Hi ha fitxes del jugador que fa el moviment
        //     //* per a fer bocata?
        //     let bocates = [];
        //     for (let rivalToken of rivalTokensAround) {
                
        //     }
        // }
    } else {
        alert('No pots moure. La casella està ocupada');
        console.log(this);
    }

}

// Square.prototype.place = function(token) {
//     this.token = token
//     document.getElementById
// }

export { Square };
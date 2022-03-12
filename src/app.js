import { Board } from "./Board";
import { Player } from "./Player";
import { Token } from "./Token";

// Modal d'inici pregunta el nom als usuaris
const modalInici = new bootstrap.Modal(document.getElementById('modalInici'));
let form = document.getElementById('formInici');
modalInici.toggle();

let botoComencar = document.getElementById('botoComencar');
botoComencar.addEventListener('click', function(e) {
    e.preventDefault();
    form.reportValidity();

    // Es comprova que l'usuari hagi omplert tots els camps del form
    // Si és així, es generen el tauler i els jugadors
    if (form.checkValidity()) {

        var blackPlayer = new Player(document.querySelector('input[name=blackPlayerInput]').value);
        document.getElementById('blackPlayerName').innerText = blackPlayer.name;
        document.getElementById('blackPlayerScore').innerText = blackPlayer.score;
        
        var whitePlayer = new Player(document.querySelector('input[name=whitePlayerInput]').value);
        document.getElementById('whitePlayerName').innerText = whitePlayer.name;
        document.getElementById('whitePlayerScore').innerText = whitePlayer.score;

        let mida = document.querySelector('input[name=midaTauler]:checked').value;
        var tauler = new Board(mida, blackPlayer, whitePlayer);

        modalInici.hide();
    }

    

    // function play() {
        // Creem i coloquem les primeres fitxes: /
    
    
    
        // let squares = [];
    
        // // Blanca a 3-3 (27), negra a 3-4 (28), negra a 4-3 (35) i blanca a 4-4 (36)
        // new Token('white', 3, 3);
        // new Token('black', 3, 4);
        // new Token('black', 4, 3);
        // new Token('white', 4, 4);
        
        // let squares = document.getElementsByClassName('casella');
        // console.log('ola');
        // for (let square of squares) {
        //     console.log('que ase');
        //     square.addEventListener('click', move);
        // }
        // event listener sobre el tauler
    
        // on click:
        // 1- Comprovar que sigui el torn de l'usuari q ha fet el clic ??
        //    Res, es juga en un sol PC, es dona per fet q el clic és sempre de l'usuari que té el torn
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
    // }
    
    // function move(e) {
        // puc resumir-ho tot en el mètode if (square[i][j].isValidMove())

        // let row = parseInt(e.target.dataset.row);
        // let col = parseInt(e.target.dataset.col);
        
        // if (tauler.isValid(row, col, 'black')) {
        //     alert('vàlid');
        // }
        // tauler.square[e.dataset.row][e.dataset.col]
        // if (tauler.square[e.dataset.row][e.dataset.col].isAValidMovement()) {
        // if (tauler.isAValidMovement(row, col)) {
        //     console.log('vàlid');
        // } else {
        //     console.log('no vàlid')
        // }

        // submètodes/condicions del mètode
    
        // 2.0 La casella és buida
        // square[i][j].isEmpty()
    
        // 2.1 Alguna de les caselles del voltant tenen fitxa rival
        // (square[i][j].hasRivalTokenAround())
        // square[i][j].findRivalTokensAround()
    
        // 2.2 Per cadascuna de les q hagi trobat caldrà que llavors busqui la fitxa del propi color amb la qual fer el bocata
        //     Per fer-ho: seguir la direcció en què he trobat la fitxa enemiga fins que trobi fitxa pròpia (pot tirar) 
        //     o casella buida o s'acabi el tauler (no pot tirar)
        // (square[i][j].potFerBocata())
    
        // realment el mètode move() pròpiament seria aquest:
        // for each squaresBocata as squareBocata found ->
            // for each square between squares[i][j] i squareBocata
            // square.token.flip()
        
        // Canviar torn
        // changeTurn()
        // canPlayerMove() ? move() : changeTurn() (canPlayerMove() ? move() : endGame())
    
    
    //     console.log(e.target.id);
    // }

});
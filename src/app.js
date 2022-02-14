import { Board } from "./Board";
import { Player } from "./Player";

// Modal d'inici pregunta el nom als usuaris
const modalInici = new bootstrap.Modal(document.getElementById('modalInici'));
let form = document.getElementById('formInici');
modalInici.toggle();

let botoComencar = document.getElementById('botoComencar');
botoComencar.addEventListener('click', function(e) {
    e.preventDefault();
    form.reportValidity();

    if (form.checkValidity()) {
        let mida = document.querySelector('input[name=midaTauler]:checked').value;
        let tauler = new Board(mida);
        document.getElementById('board').innerHTML = tauler.getHTML();

        let blackPlayer = new Player(document.querySelector('input[name=blackPlayerInput]').value);
        document.getElementById('blackPlayerName').innerText = blackPlayer.name;
        document.getElementById('blackPlayerScore').innerText = blackPlayer.score;
        
        let whitePlayer = new Player(document.querySelector('input[name=whitePlayerInput]').value);
        console.log(whitePlayer);
        console.log(whitePlayer.__proto__);
        document.getElementById('whitePlayerName').innerText = whitePlayer.name;
        document.getElementById('whitePlayerScore').innerText = whitePlayer.score;

        modalInici.hide();
    }
});
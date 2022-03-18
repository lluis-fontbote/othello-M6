import { Board } from "./Board";
import { Player } from "./Player";

document.addEventListener('DOMContentLoaded', init);

function init() {
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
        // A partir d'aquí la lògica del joc resideix en els mètodes dels diferents objectes i majoritàriament
        // al tauler
        if (form.checkValidity()) {

            var blackPlayer = new Player(document.querySelector('input[name=blackPlayerInput]').value, 'black');
            document.getElementById('blackPlayerName').innerText = blackPlayer.name;
            document.getElementById('blackPlayerScore').innerText = blackPlayer.score;
            
            var whitePlayer = new Player(document.querySelector('input[name=whitePlayerInput]').value, 'white');
            document.getElementById('whitePlayerName').innerText = whitePlayer.name;
            document.getElementById('whitePlayerScore').innerText = whitePlayer.score;

            let mida = document.querySelector('input[name=midaTauler]:checked').value;
            new Board(mida, blackPlayer, whitePlayer);

            modalInici.hide();
        }
    });
}

document.getElementById('playAgainBtn').addEventListener('click', function() {
    window.location.reload();
});
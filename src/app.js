import { Board } from "./Board";

// Modal d'inici pregunta el nom als usuaris
const modalInici = new bootstrap.Modal(document.getElementById('modalInici'));
modalInici.toggle();

let form = document.getElementById('formInici');

let botoComencar = document.getElementById('botoComencar');
botoComencar.addEventListener('click', function(e) {
    e.preventDefault();
    form.reportValidity();

    if (form.checkValidity()) {
        let mida = document.querySelector('input[name=midaTauler]:checked').value;
        let tauler = new Board(mida);
        document.getElementById('board').innerHTML = tauler.generate();
        modalInici.hide();
    }
});
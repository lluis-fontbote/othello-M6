const blackPlayer = 'Pepe';
const whitePlayer = 'Miguel';
const board = 8;

function generateBoard() {
    let acumulatTauler = `` ;
    let numCasella = 0;
    for (let i = 0;  i < board;  i++) {
        acumulatTauler += `<div class="fila">`;
        for (let j = 0;  j < board;  j++) {
            acumulatTauler += `<div class="casella" id="${numCasella}"></div>`;
            numCasella++;
        }
        acumulatTauler += `</div>`;
    }
    document.getElementById('board').innerHTML = acumulatTauler;
}

generateBoard()

// Modal d'inici pregunta el nom als usuaris
const modalInici = new bootstrap.Modal(document.getElementById('modalInici'));
modalInici.toggle();
let form = document.getElementById('formInici');

let botoComencar = document.getElementById('botoComencar');
botoComencar.addEventListener('click', function(e) {
    e.preventDefault();
    form.reportValidity();
    console.log(form.checkValidity());
    // modalInici.hide();
})
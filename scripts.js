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

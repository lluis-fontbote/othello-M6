function Board(dimensions) {
    this.dimensions = dimensions;
}

Board.prototype.getHTML = function() {
    let acumulatTauler = `` ;
    let numCasella = 0;
    let midaCaselles = (100 / this.dimensions);

    for (let i = 0;  i < this.dimensions;  i++) {
        acumulatTauler += `<div class="fila" style="width:100%; height:${midaCaselles}%;">`;
        for (let j = 0;  j < this.dimensions;  j++) {
            acumulatTauler += `<div class="casella" style="width:${midaCaselles}%; height:100%;" 
                                id="${numCasella}"></div>`;
            numCasella++;
        }
        acumulatTauler += `</div>`;
    }
    return acumulatTauler;
}

export { Board };
function Player(name, color) {

    this.name = name;
    this.color = color;
    this.score = 0;
    this.tokens = [];
    this.movementsAvailable = [];
}

/**
 * Calcula els moviments que pot fer el jugador que té el torn
 */
Player.prototype.calculateMovementsAvailable = function() {
    this.movementsAvailable = [];
    for (let ownToken of this.tokens) {
        let rivalTokensAround = ownToken.square.getRivalTokensAround();
        if (rivalTokensAround.length > 0) {
            for (let rivalToken of rivalTokensAround) {
                let movement = ownToken.square.esPotFerBocata(rivalToken);
                if (movement != null) {

                    // Si algun moviment ja existent a l'array movementsAvailable té com a casella que
                    // fa el bocata la mateixa que el movement, en comptes de pushejar movement a l'array
                    // barrejem els tokensToFlip de movement amb els del moviment existent ja a l'array
                    let existingMovementWithSameSquareToClick = this.movementsAvailable.find(element => element.casella == movement.casella);
                    if (existingMovementWithSameSquareToClick == undefined) {
                        this.movementsAvailable.push(movement);
                    
                    } else {
                        existingMovementWithSameSquareToClick.tokensToFlip = existingMovementWithSameSquareToClick.tokensToFlip.concat(movement.tokensToFlip);
                    }
                }
            }
        }
    }
}

/**
 * Comprova si el jugador pot moure a la casella
 * @param {Square} square 
 * @returns false | movement
 */
Player.prototype.canMoveHere = function(square) {
    for (let i = 0;  i < this.movementsAvailable.length;  i++) {
        if (this.movementsAvailable[i].casella === square) {
            return this.movementsAvailable[i];
        }
    }

    return false;
}

export { Player };
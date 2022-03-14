function Token(player, square) {
    this.player = player;
    this.player.tokens.push(this);
    this.square = square;

    this.html = document.createElement('div');
    this.html.classList.add(`token`, `token--${this.player.color}`);
    this.html.object = this;
}

/**
 * Canvia el propietari i el color del token
 */
Token.prototype.flip = function() {
    let oldColor = this.player.color;
    this.player.tokens.splice(this.player.tokens.indexOf(this), 1);
    this.player = this.square.board.currentPlayer;
    this.player.tokens.push(this);
    this.html.classList.replace(`token--${oldColor}`, `token--${this.player.color}`);
}

export { Token };
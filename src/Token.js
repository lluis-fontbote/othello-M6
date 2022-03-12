function Token(color, player) {

    this.color = color;
    this.player = player;
    // this.square = square;
    this.html = document.createElement('div');
    
    // this.html.dataset.square = this.square;
    this.html.classList.add(`token`, `token--${this.color}`);
    // document.getElementById(this.square.id).appendChild(this.html);
}

Token.prototype.flip = function() {

    let oldColor;
    
    if (this.color == 'white') {
        oldColor = 'white';
        this.color = 'black';
    } else {
        oldColor = 'black';
        this.color = 'white';
    }

    let div = document.querySelector(`div[data-id="${this.position}"]`);
    div.classList.replace(`token--${oldColor}`, `token--${this.color}`);
}

export { Token };
class Negociacoes {
    constructor() {
        this._neogociacoes = [];
    }
    adiciona(negociacao) {
        this._neogociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._neogociacoes);
    }
}

class Negociacoes {

    private _neogociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {
        this._neogociacoes.push(negociacao)
    }

    paraArray(): Negociacao[] {
        return [].concat(this._neogociacoes)
    }
}
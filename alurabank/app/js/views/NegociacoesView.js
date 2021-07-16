class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(Negociacao => `
                        <tr>
                            <td>${Negociacao.data.getDate()}/${Negociacao.data.getMonth() + 1}/${Negociacao.data.getFullYear()}</td>
                            <td>${Negociacao.quantidade}</td>
                            <td>${Negociacao.valor}</td>
                            <td>${Negociacao.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>  
        `;
    }
}

class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    adicionarDependentes(cliente) {
        this._dependentes.push(cliente);
    }
    listarDependentes() {
        return this._dependentes;
    }
    pesquisarDependente(cpf) {
        return this._dependentes.find(cliente => cliente.cpf === cpf);
    }
    removerDependente(cpf) {
        const cliente = this.pesquisarDependente(cpf);
        if (cliente) {
            const indexDepen = this._dependentes.indexOf(cliente);
            this._dependentes.splice(indexDepen, 1);
        }
    }
}

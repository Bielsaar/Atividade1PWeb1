class Cliente {

    private _nome:string;
    private _cpf:string;
    private _conta:Conta;

    constructor(nome: string, cpf: string, conta:Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome:string) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    get conta() {
        return this._conta;
    }

    toString(){
        return `Nome: ${this._nome}
        - CPF: ${this._cpf}
        - Conta: ${this._conta}.`
    }
}
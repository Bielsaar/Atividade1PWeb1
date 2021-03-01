class ClienteEspecial extends Cliente {
    
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta:Conta) {
        super(nome,cpf,conta);
        this._dependentes = new Array<Cliente>();
    }

    adicionarDependentes(cliente: Cliente){
        this._dependentes.push(cliente);
    }

    listarDependentes(): Array<Cliente> {
        return this._dependentes;
    }

    pesquisarDependente(cpf:string): Cliente{
        return this._dependentes.find(
            cliente => cliente.cpf === cpf 
        );
    }

    removerDependente(cpf:string){
        const cliente = this.pesquisarDependente(cpf);
        if(cliente){
            const indexDepen = this._dependentes.indexOf(cliente);
            this._dependentes.splice(indexDepen,1);
        }
    }
}
class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        if (cliente) {
            //Resolvi deixar sem a verificação de index,
            //pois caso não houvesse, não iria entrar, e o mesmo vale
            //para o seu indece(que será no minimo 0, que é o primeiro índice) 
            const indexCliente = this.clientes.indexOf(cliente);
            this.clientes.splice(indexCliente, 1);
        }
    }
}

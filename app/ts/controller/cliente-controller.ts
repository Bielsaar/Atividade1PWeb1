class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private contas: Contas;

    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCPF =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = 
            <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value,
            this.inputCPF.value,
            this.contas.pesquisar(this.inputConta.value));

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            clientes => {
                this.inserirClienteNoHTML(clientes);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.getElementById('vai').appendChild(elementoP);
    }


}

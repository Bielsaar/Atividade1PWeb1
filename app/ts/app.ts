let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();


const clientes2 = new Clientes();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cli1 = new Cliente('Gabriel','12332457141',c1);
const cli2 = new Cliente('Maira', '66655549865', p1);
const cli3 = new Cliente('Ranna', '32165487658', cb1);
//teste direto (ponto 3)
clientes2.inserir(cli1);
clientes2.inserir(cli2);
clientes2.inserir(cli3);

console.log(clientes2.listar());
clientes2.remover('66655549865');
console.log(clientes2.pesquisar('32165487658'));
console.log(clientes2.pesquisar('66655549865'));//Pesquisa o removido


console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

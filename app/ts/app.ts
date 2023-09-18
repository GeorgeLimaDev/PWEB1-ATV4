let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//Criando Pessoas:
const pessoa1 = new Pessoa('George', 29, new Date(1993, 11, 21));
const pessoa2 = new PessoaFisica('Moises', 67, new Date(1955, 11, 11), '12345678900');
const pessoa3 = new PessoaJuridica('Maria Incorporations', 56, new Date(1956, 10, 21), '98765432100');

console.log(pessoa1.toString());
console.log(pessoa2.toString());
console.log(pessoa3.toString());

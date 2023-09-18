class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        super.nome += ' - P. Jurídica';
    }
    get cpf() {
        return this._cnpj;
    }
}

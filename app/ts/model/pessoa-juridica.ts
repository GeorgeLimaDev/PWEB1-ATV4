class PessoaJuridica extends Pessoa {

    private _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string){
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        super.nome += ' - P. Jurídica'
    }

    get cpf(): string {
        return this._cnpj;
    }

}

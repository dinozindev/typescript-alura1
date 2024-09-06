// modelo que armazena de forma privada uma lista de negociações.
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // toda vez que o método adiciona() é chamado, um push da instância Negociacao passada como argumento é feito para dentro do array negociacoes. 
    adicionaNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // toda vez que o método lista() for chamado, retorna a lista de negociacoes, mas que não pode ser modificada. 
    lista() {
        return this.negociacoes;
    }
}

import { Negociacao } from "./negociacao.js";


// modelo que armazena de forma privada uma lista de negociações.
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    // toda vez que o método adiciona() é chamado, um push da instância Negociacao passada como argumento é feito para dentro do array negociacoes. 
    adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // toda vez que o método lista() for chamado, retorna a lista de negociacoes, mas que não pode ser modificada. 
    lista(): ReadonlyArray<Negociacao>  {
        return this.negociacoes;
    }
}

import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

// classe responsável pelo controle dos valores submetidos nos inputs da negociação, aplicando-os em uma nova instância de Negociacao.  
export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    // quando uma instância é criada, armazena nas propriedades os inputs correspondentes a cada id. 
    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    // quando o form é submetido, a function adiciona() é invocada, retornando a nova instância de Negociacao dentro da const negociacao. 
    adiciona(): void {
      const negociacao = this.criaNegociacao()
      // chama o método adicionaNegociacao() da classe Negociacoes passando como argumento a instância negociacao. 
      this.negociacoes.adicionaNegociacao(negociacao);
      console.log(this.negociacoes.lista())
      // chama o método limparFormulario após o envio do form. 
      this.limparFormulario()
    }
     
    criaNegociacao(): Negociacao {
      const exp = /-/g;
      // cria uma nova data, usando como base a data inserida no input, substituindo os traços por vírgulas (padrão para a construção de uma instância de Date)
      const date = new Date(this.inputData.value.replace(exp, ","))
      // retorna a string como um número inteiro.
      const quantidade = parseInt(this.inputQuantidade.value)
      // retorna a string como um número com casas decimais.
      const valor = parseFloat(this.inputValor.value)
      // cria e retorna uma nova instância de Negociacao, usando como argumentos a data, quantidade e valor inseridos nos inputs.  
      return new Negociacao(date, quantidade, valor)
    }

    // após o submit do form, limpa todos os inputs e retorna o foco para o input de data. 
    limparFormulario(): void {
      this.inputData.value = "";
      this.inputQuantidade.value = "";
      this.inputValor.value = "";
      this.inputData.focus();
    }
    
}
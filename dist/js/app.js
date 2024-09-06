import { NegociacaoController } from "./controllers/negociacao-controller.js";
// armazena o formulário na const form
const form = document.querySelector(".form");
// armazena na const controller uma nova instância do controller da negociação
const controller = new NegociacaoController();
// quando o form for submetido, evita a atualização da página e invoca o método adiciona() da instância controller.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
});

import { atualizarLista, limparFormulario, preencherFormulario } from './dom.js';
import { carregarLeituras, adicionarLeitura, removerLeitura, editarLeitura } from './leituras.js';

let leituras = carregarLeituras();
atualizarLista(leituras);





document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = document.getElementById('inputTitulo').value;
    const autor = document.getElementById('inputAutor').value;
    const data = document.getElementById('inputData').value;
    const status = document.getElementById('inputStatus').value;

    adicionarLeitura(titulo, autor, data, status);
    atualizarLista(carregarLeituras());
    limparFormulario();
});

window.removerLeitura = (index) => {
    removerLeitura(index);
    atualizarLista(carregarLeituras());
};

window.editarLeitura = (index) => {
    const leitura = editarLeitura(index);
    preencherFormulario(leitura);
    atualizarLista(carregarLeituras());
};
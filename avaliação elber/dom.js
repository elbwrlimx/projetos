// Função para atualizar a exibição da lista de leituras
export function atualizarLista(leituras) {
    const listaLeituras = document.getElementById('listaLeituras');
    listaLeituras.innerHTML = ''; // Limpa a lista atual

    // Percorre o array de leituras e cria os itens da lista
    leituras.forEach((leitura, index) => {
        const item = document.createElement('li');
        item.className = 'itemLivro';

        // Conteúdo do item da lista
        item.innerHTML = `
            <div>
                <strong>${leitura.titulo}</strong> - ${leitura.autor}<br>
                <small>Data: ${leitura.data} | Status: ${leitura.status}</small>
            </div>
            <div>
                <button class="edit-btn" onclick="editarLeitura(${index})">Editar</button>
                <button onclick="removerLeitura(${index})">Remover</button>
            </div>
        `;

        listaLeituras.appendChild(item);
    });
}


export function limparFormulario() {
    document.getElementById('form').reset();
}

export function preencherFormulario(leitura) {
    document.getElementById('inputTitulo').value = leitura.titulo;
    document.getElementById('inputAutor').value = leitura.autor;
    document.getElementById('inputData').value = leitura.data;
    document.getElementById('inputStatus').value = leitura.status;
}
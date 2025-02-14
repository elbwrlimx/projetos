document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado!');
    let listadeTarefas = [];
    const form = document.getElementById('form');
    const inputTarefa = document.getElementById('input'); // Renomeei para inputTarefa para ficar claro

    function adicionarTarefa(tarefa) {
        if (tarefa === "") {
            return window.alert('Digite uma tarefa!');
        }
        listadeTarefas.push(tarefa);
        console.log(listadeTarefas);
        inputTarefa.value = '';
        atualizarListaTarefas(); // Chama a função para atualizar a lista na tela
    }

    function atualizarListaTarefas() {
        const lista = document.getElementById('lista-tarefas');
        lista.innerHTML = ''; // Limpa a lista antes de atualizar

        listadeTarefas.forEach((tarefa, index) => {
            const item = document.createElement('li');
            item.textContent = tarefa;

            // Adiciona um botão para remover a tarefa
            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.addEventListener('click', () => {
                listadeTarefas.splice(index, 1); // Remove a tarefa da lista
                atualizarListaTarefas(); // Atualiza a lista na tela
            });

            item.appendChild(botaoRemover); // Adiciona o botão ao item da lista
            lista.appendChild(item); // Adiciona o item à lista
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarTarefa(inputTarefa.value); // Passa o valor do input para a função
        console.log('ok');   
    });  
});
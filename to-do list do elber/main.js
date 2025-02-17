document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado!');
    let listadeTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const form = document.getElementById('form');
    const inputTitulo = document.getElementById('input-titulo');
    const inputDescricao = document.getElementById('input-descricao');
    const lista = document.getElementById('lista-tarefas');

    function salvarTarefas() {
        localStorage.setItem('tarefas', JSON.stringify(listadeTarefas));
    }

    function adicionarTarefa(titulo, descricao) {
        if (titulo === "" || descricao === "") {
            return window.alert('Preencha todos os campos!');
        }

        const tarefa = {
            titulo: titulo,
            descricao: descricao,
            concluida: false
        };

        listadeTarefas.push(tarefa);
        salvarTarefas();
        inputTitulo.value = '';
        inputDescricao.value = '';
        atualizarListaTarefas();
    }

    function atualizarListaTarefas() {
        lista.innerHTML = '';
    
        listadeTarefas.forEach((tarefa, index) => {
            const item = document.createElement('li');
            const divTarefa = document.createElement('div');
            divTarefa.classList.add('tarefa');
    
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarefa.concluida;
            checkbox.addEventListener('change', () => {
                tarefa.concluida = checkbox.checked;
                if (tarefa.concluida) {
                    divTarefa.classList.add('concluida');
                } else {
                    divTarefa.classList.remove('concluida');
                }
                salvarTarefas();
            });
    
            const divConteudo = document.createElement('div');
            divConteudo.classList.add('conteudo');
    
            const tituloTarefa = document.createElement('h3');
            tituloTarefa.textContent = tarefa.titulo;
    
            const descricaoTarefa = document.createElement('p');
            descricaoTarefa.textContent = tarefa.descricao;
    
            divConteudo.appendChild(tituloTarefa);
            divConteudo.appendChild(descricaoTarefa);
    
            // Botão de lixeira
            const botaoLixeira = document.createElement('button');
            botaoLixeira.classList.add('delete-btn');
            botaoLixeira.innerHTML = '<i class="fas fa-trash"></i>'; // Ícone do Font Awesome
            botaoLixeira.addEventListener('click', () => {
                listadeTarefas.splice(index, 1); // Remove a tarefa da lista
                salvarTarefas();
                atualizarListaTarefas(); // Atualiza a lista após remover
            });
    
            divTarefa.appendChild(checkbox);
            divTarefa.appendChild(divConteudo);
            divTarefa.appendChild(botaoLixeira); // Adiciona o botão de lixeira
    
            item.appendChild(divTarefa);
            lista.appendChild(item);
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarTarefa(inputTitulo.value, inputDescricao.value);
    });

    atualizarListaTarefas();
});
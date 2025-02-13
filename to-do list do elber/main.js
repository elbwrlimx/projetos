document.addEventListener('DOMContentLoaded', function () {
    let listadeTarefas = [];
    const form = document.getElementById('form');
    const inputTarefa = document.getElementById('input'); // Renomeei para inputTarefa para ficar claro

    function adicionarTarefa(tarefa) {
        listadeTarefas.push(tarefa);
        if (tarefa === "") return window.alert('Digite uma tarefa!');
        console.log(listadeTarefas);
        inputTarefa.value = '';
        
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarTarefa(inputTarefa.value); // Passa o valor do input para a função
        console.log('ok');   
    });            
});
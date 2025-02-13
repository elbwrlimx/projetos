document.addEventListener('DOMContentLoaded', function () {
    let listadeTarefas = [];
    const form = document.getElementById('form');
    const tarefa = document.getElementById('input');

    function adicionarTarefa(tarefa) {
        listadeTarefas.push(tarefa);
        console.log(listadeTarefas);
        

    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarTarefa(tarefa.value);
        console.log('ok');   
    });            
});
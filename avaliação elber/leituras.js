
let leituras = [];

export function carregarLeituras() {
    const leiturasSalvas = localStorage.getItem('leituras');
    if (leiturasSalvas) {
        leituras = JSON.parse(leiturasSalvas);
    }
    return leituras;
}

function salvarLeituras() {
    localStorage.setItem('leituras', JSON.stringify(leituras));
}

export function adicionarLeitura(titulo, autor, data, status) {
    const novaLeitura = {
        titulo: titulo,
        autor: autor,
        data: data,
        status: status
    };
    leituras.push(novaLeitura);
    salvarLeituras();
}

export function removerLeitura(index) {
    leituras.splice(index, 1);
    salvarLeituras();
}

export function editarLeitura(index) {
    const leitura = leituras[index];
    removerLeitura(index); 
}
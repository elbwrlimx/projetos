// Função para atualizar o relógio
function atualizarRelogio() {
  const horasElemento = document.getElementById('horas');
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  horasElemento.textContent = `${horas}:${minutos}:${segundos}`;
}

// Função para alternar entre modo claro e escuro
function alternarModo() {
  const body = document.body;
  const botao = document.getElementById('toggleModo');

  if (body.classList.contains('modo-escuro')) {
    body.classList.remove('modo-escuro'); // Remove o modo escuro
    botao.textContent = 'Modo Escuro';
    localStorage.setItem('modo', 'claro');
  } else {
    body.classList.add('modo-escuro'); // Adiciona o modo escuro
    botao.textContent = 'Modo Claro';
    localStorage.setItem('modo', 'escuro');
  }
}

// Verifica o modo salvo no localStorage ao carregar a página
function carregarModoSalvo() {
  const modoSalvo = localStorage.getItem('modo');
  const body = document.body;
  const botao = document.getElementById('toggleModo');

  if (modoSalvo === 'escuro') {
    body.classList.add('modo-escuro');
    botao.textContent = 'Modo Claro';
  } else {
    body.classList.add('modo-claro');
    botao.textContent = 'Modo Escuro';
  }
}

// Configura o relógio e o modo ao carregar a página
window.onload = () => {
  carregarModoSalvo();
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);

  // Adiciona o evento de clique ao botão
  document.getElementById('toggleModo').addEventListener('click', alternarModo);
};
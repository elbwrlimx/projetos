function atualizarRelogio() {
    const horasElemento = document.getElementById('horas');
  
    // Obtém a hora atual
    const horarioAtual = new Date();
  
    // Formata as horas, minutos e segundos para sempre ter 2 dígitos
    const horas = String(horarioAtual.getHours()).padStart(2, '0');
    const minutos = String(horarioAtual.getMinutes()).padStart(2, '0');
    const segundos = String(horarioAtual.getSeconds()).padStart(2, '0');
  
    // Atualiza o conteúdo do elemento com a hora formatada
    horasElemento.textContent = `${horas}:${minutos}:${segundos}`;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);
  
  // Chama a função uma vez para evitar o delay inicial
  atualizarRelogio();
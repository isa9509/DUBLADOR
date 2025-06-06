const botao = document.querySelector('.butaoMenu');
const barra = document.querySelector('.barra');

botao.addEventListener('click', () => {
    barra.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    
})
const imagens = document.querySelectorAll('.carrossel img');
let index = 0;

function trocarImagem() {
  imagens[index].classList.remove('ativo'); // esconde a imagem atual
  index = (index + 1) % imagens.length;     // próximo índice, loop infinito
  imagens[index].classList.add('ativo');    // mostra a próxima imagem
}
setInterval(trocarImagem, 1);

document.addEventListener("DOMContentLoaded", () => {
      const tempoSpan = document.getElementById("tempo");

      if (tempoSpan) {
        let segundos = 0;
        setInterval(() => {
          segundos++;
          tempoSpan.textContent = segundos;
        }, 1000);
      }
    }); // atualiza a cada 1 segundo

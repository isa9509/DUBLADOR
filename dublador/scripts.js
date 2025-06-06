const botao = document.querySelector('.butaoMenu');
const barra = document.querySelector('.barra');

botao.addEventListener('click', () => {
    barra.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    
})
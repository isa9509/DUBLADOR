const botao = document.querySelector('.butaoMenu');
const barra = document.querySelector('.barra');

botao.addEventListener('click', () => {
    barra.classList.toggle('ativo');
    botao.classList.toggle('ativo');
});
const grid = document.querySelector('.grid');

const cardNames = [
  'dlulamolusco',
  'chave',
  'scooby',
  'simpons',
];

const dubladorInfo = {
  dlulamolusco: 'Você acertou o Lula Molusco! Voz por Carlos Seidl.',
  chave: 'Você encontrou o Chaves! Dublado por Marcelo Gastaldi.',
  scooby: 'Scooby-Doo acertado! Voz clássica de Orlando Drummond.',
  simpons: 'Simpsons na área! Dublado por Wendel Bezerra.',
};

let cards = [...cardNames, ...cardNames];
cards.sort(() => Math.random() - 0.5);

function createCard(name) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('face', 'front');
  const frontImg = document.createElement('img');
  frontImg.src = `./img/${name}.png`;
  frontImg.alt = name;
  frontImg.style.width = '100%';
  frontImg.style.height = '100%';
  frontImg.style.objectFit = 'cover';
  front.appendChild(frontImg);

  const back = document.createElement('div');
  back.classList.add('face', 'back');
  const backImg = document.createElement('img');
  backImg.src = './img/what.png'; // imagem padrão do verso
  backImg.alt = '';
  backImg.style.width = '100%';
  backImg.style.height = '100%';
  backImg.style.objectFit = 'cover';
  back.appendChild(backImg);

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', flipCard);

  return card;
}

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    const name = firstCard.dataset.name;
    const mensagem = dubladorInfo[name] || 'Par encontrado!';
    showMessage(mensagem);
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

cards.forEach(name => {
  const cardElement = createCard(name);
  grid.appendChild(cardElement);
});

function showMessage(texto) {
  const popup = document.getElementById('mensagem-popup');
  const textoEl = document.getElementById('mensagem-texto');
  const fecharBtn = document.getElementById('fechar-popup');

  textoEl.textContent = texto;
  popup.style.display = 'flex';

  fecharBtn.onclick = () => {
    popup.style.display = 'none';
  };

  setTimeout(() => {
    popup.style.display = 'none';
  }, 5000);
}
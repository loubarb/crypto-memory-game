const playCard = document.querySelectorAll('.play-card');
let flippedCard = false;
let firstCard, secondCard;
let boardLock = false;

function handleCardFlip() {
  if (boardLock) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  flippedCard = false;

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.coin === secondCard.dataset.coin) {
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', handleCardFlip);
  secondCard.removeEventListener('click', handleCardFlip);
  resetBoard();
}

function unflipCards() {
  boardLock = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    boardLock = false;
    resetBoard();
  }, 1200)
}

function resetBoard() {
  let flippedCard = false;
  let boardLock = false;
  let firstCard = null;
  let secondCard = null;
}

function shuffle() {
  playCard.forEach((card) => {
    let randomSpot = Math.floor(Math.random() * 18);
    card.style.order = randomSpot;
  })
};

shuffle();

playCard.forEach((card) => {
  card.addEventListener('click', handleCardFlip)
})
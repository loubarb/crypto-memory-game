const playCard = document.querySelectorAll('.play-card');
let flippedCard = false;
let firstCard, secondCard;

function handleCardFlip() {
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
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1200)
}

playCard.forEach((card) => {
  card.addEventListener('click', handleCardFlip)
})
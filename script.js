const playCard = document.querySelectorAll('.play-card');


function handleCardFlip() {
  this.classList.toggle('show');
}

playCard.forEach((card) => {
  card.addEventListener('click', handleCardFlip)
})

// playCard.addEventListener('click', handleCardFlip)
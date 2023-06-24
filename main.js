/*----- constants -----*/
const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F']

/*----- state variables -----*/

let flippedCards = [];
let matchedCards = [];
let attempts = 0;

/*----- cached elements  -----*/


const messageWin = document.querySelector('h2');
const playAgain = document.querySelector('.btn');
const cardChooser = document.querySelectorAll('.card');
const messageLost = document.querySelector('h3');



/*----- event listeners -----*/
const button = document.querySelector(".btn")

button.addEventListener('click', () => {
  console.log('button clicked');
})

cardChooser.forEach(cards => cards.addEventListener('click', flipCard));





/*----- functions -----*/
init();

function init() {
  flippedCards = [],
    matchedCards = [],
    cardChooser.forEach(cards => {
      cards.classList.remove('flipped', 'matched', 'highlight');  // want to have flip and match cards removed after restarting game.);
    });
    cardShuffle();  //want to add a card shuffle
}


function cardShuffle() {
  //add a for loop to make a card shuffle use math.floor and math random
  for(let i = cardChooser.length - 1; i > 0, i--;) {
    const shuffle = Math.floor(Math.random() * (i + 1));
    [cardChooser[i].innerHTML, cardChooser[shuffle].innerHTML] = [cardChooser[shuffle].innerHTML, cardChooser[i].innerHTML];
    [cardChooser[i].dataset.card, cardChooser[shuffle].dataset.card] = [cardChooser[shuffle].dataset.card, cardChooser[i].dataset.card];
  }
}


//Add a flip card function
function flipCard(event) {
  console.log(event.target)
  const clickedCard = event.target;
  if (clickedCard.classList.contains('flipped') || matchedCards.includes(clickedCard)) {
    return;
  }
  highlight(clickedCard);
  flippedCards.push(clickedCard)
  highlight(clickedCard);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}


// const highlight = (cards) => {
  function highlight(cards) {
  cards.classList.add('flipped'); //'highlight');
};

//Add a match function for when cards match to their pair.


function checkMatch() {
  let [card1, card2] = flippedCards;


  const card1Data = card1.getAttribute('data-card'); //to pull the cards "data-card=()"
  const card2Data = card2.getAttribute('data-card');



  // if (flippedCards.length === 2) {
  if (card1Data === card2Data) {

    flippedCards.forEach((clickedCard) => {
      clickedCard.classList.remove('flipped');
      clickedCard.classList.add('matched');
    });
    matchedCards.push(card1, card2);
    resetCards();
    gameEnds();
  } else {

    setTimeout(() => {

      flippedCards.forEach((clickedCard) => {

        clickedCard.classList.remove('flipped')

      });
      resetCards();
      lostGame();
    }, 500);
    attempts++;
  }
}
function resetCards() {
  flippedCards = [];
}

function gameEnds() {
  console.log('Hello')
  if (matchedCards.length === cardChooser.length) {
    const messageWin = document.querySelector('h2');
    messageWin.innerHTML = 'You matched all the pairs!';
  }
}

function lostGame() {
  if (attempts >= 4) {
    // if (flippedCards.length === 2) {
    flippedCards.forEach(clickedCard => {
      clickedCard.classList.remove('flipped')
    });
    resetCards();
    const messageLost = document.querySelector('h3')
    messageLost.innerHTML = '4 attempts used try again!';
  }
}
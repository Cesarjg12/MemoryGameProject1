/*----- constants -----*/
const cards = [ 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F']

/*----- state variables -----*/

let flippedCards = [];
let matchedCards = [];
let attempts = 0;

/*----- cached elements  -----*/


const messageWin = document.querySelector('h2');
const playAgain = document.querySelector('.btn');
const cardChooser = document.querySelectorAll('.card');
const messageLost = document.querySelector('h3');
const cardBack = document.querySelectorAll('.back-card');



/*----- event listeners -----*/
const button = document.querySelector(".btn")

button.addEventListener('click', ()=> {
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
  // cardShuffle();  //want to add a card shuffle
}


// function cardShuffle() {
//   //add a for loop to make a card shuffle use math.floor and math random
//   for(let i = cardChooser.length - 1; i > 0, i--;) {
//     const shuffle = math.floor(math.random() * (i + 1));
//   }
//   return i
// }


//Add a flip card function
function flipCard(event) {
  // console.log(event.target)
  const clickedCard = event.target;
  if (clickedCard.classList.contains('flipped') || matchedCards.includes(clickedCard)) {
    return;
  }
const cardData = clickedCard.dataset.card;

const cardBack = clickedCard.nextElementSibling;
clickedCard.classList.add('flipped');
cardBack.classList.add('flipped');

  // highlight(clickedCard);
  flippedCards.push(cardData)
  highlight(clickedCard);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}


const highlight = (cards) => {
cards.classList.add('flipped'); //'highlight');
};

//Add a match function for when cards match to their pair.


function checkMatch() {
  let [card1, card2] = flippedCards;
  // card1 = card1.getAttribute('data-card'); //to pull the cards "data-card=()"
  // card2 = card2.getAttribute('data-card');

  const frontCard1 = clickedCard;
  const frontCard2 = cardBack.previousElementSibling;


// if (flippedCards.length === 2) {
  if (frontCard1.dataset.card === frontCard2.dataset.card) {
  // if (card1 === card2){
    card1.classList.remove('flipped');
    card1.classList.add('matched');
    card2.classList.remove('flipped');
    card2.classList.add('matched');
    
    // flippedCards.forEach((clickedCard) => {
    //   clickedCard.classList.remove('flipped');
    //   clickedCard.classList.add('matched');
    // });
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

function gameEnds(){
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
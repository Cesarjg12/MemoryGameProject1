/*----- constants -----*/
const cards = [ 'A', 'A', 'B', 'B']

/*----- state variables -----*/

let flippedCards = [];
let matchedCards = [];

/*----- cached elements  -----*/


const messageWin = document.querySelector('.board');
const playAgain = document.querySelector('.btn');
const cardChooser = document.querySelectorAll('.card');




/*----- event listeners -----*/
const button = document.querySelector(".btn")

button.addEventListener('click', ()=> {
  console.log('button clicked');
})
cardChooser.forEach(card = card.addEventListener('click', flipCard));





/*----- functions -----*/
init();

function init() {
  flippedCards = [],
  matchedCards = [],
  cardChooser.forEach(card => {
    card.classList.remove('flipped', 'matched')  // want to have flip and match cards removed after restarting game.);
    });
  cardShuffle();  //want to add a card shuffle
}


function cardShuffle() {
  //add a for loop to make a card shuffle use math.floor and math random
  for(let i = cardChooser.length - 1; i > 0, i--) {
    const shuffle = math.floor(math.random() * (i + 1));
  }
  return i
}


//Add a flip card function
function flipCard() {
  if (card.classList.contains('flipped') || matchedCards.includes(card)) {
    return;
  }
  highlight(card);
  flippedCards.push(card)

  if (flippedCards.length === 2) {
    checkMatch()
  }
}


const highlight = (card) => {
  card.classList.add('flipped', 'highlight');
};

//Add a match function for when cards match to their pair.
function matchedCards() {
  const [card1, card2] = flippedCards;
  const card1 = card1.getAttribute('data-card'); //to pull the cards "data-card=()"
  const card2 = card2.getAttribute('data-card');

//Make sures the cards are matched by the correct data-card using a classList to call upon it.
  
if (card1 === card2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards.push(card1, card2)
  }
  if (matchedCards.length === cardChooser.length){
    
  }
  
}














// //Render a function to show result if  win or have the cards go back, and allow player to reinitialize matching cards.

// function renderMessage () {
//     if (winner === 'T') {
//         message.innerHTML = '';
//     } else if (winner) {
//         message.innerHTML = '';
//     }
// }
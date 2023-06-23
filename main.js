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
  console.log(event.target)
  const clickedCard = event.target
  if (clickedCard.classList.contains('flipped') || matchedCards.includes(clickedCard)) {
    return;
  }
  // highlight(clickedCard);
  flippedCards.push(clickedCard)
  highlight(clickedCard);

  if (flippedCards.length === 2) {
    checkMatch()
  }
}


const highlight = (cards) => {
cards.classList.add('flipped'); //'highlight');
};

//Add a match function for when cards match to their pair.


function checkMatch() {
  let [card1, card2] = flippedCards;
  card1 = card1.getAttribute('data-card'); //to pull the cards "data-card=()"
  card2 = card2.getAttribute('data-card');



if (flippedCards.length === 2) {
  if (card1 === card2){
    
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
      
    }, 500);
    
  }
}
}
function resetCards() {
    flippedCards = [];
  }

function gameEnds(){
console.log('Hello')
  if (matchedCards.length === cardChooser.length) {
  return alert("You matched all the pairs!");
   }
}
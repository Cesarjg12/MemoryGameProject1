/*----- constants -----*/

//const for cards and their win and null option.

const cards = {
  '1': //card pair matches
  'null': //card not matching pair
}
//Const for when card 1 a matches card 2 a, card 3 b matches card 4 b. 
const wins [
  ['box 1', 'box 2'],
  ['box 3', 'box 4']
];



/*----- state variables -----*/
//this allows the player to interact with board, get a result back and return with a matching pair.
let board, turn, winner;
let flippedCards = [];
let matchedCards = [];

/*----- cached elements  -----*/
//This will use our variables h1 and button to show the text of h1 and button.

const messageWin = document.querySelector('.board');
const playAgain = document.querySelector('button');
const cardChooser = document.querySelectorAll('.card');

/*----- event listeners -----*/

//To grab our board and make it have a 'click'
//To add an eventlistener on our button
document.getElementById('board').addEventListener('click', playerTurn)
playAgain.addEventListener('click', init)


//Card choser allows us to run a for loop with card clicks (At least thats the idea)
cardChooser.forEach(function(card) {
  card.addEventListener('click', cardClickHandler);
});

/*----- functions -----*/

//Not really player turn but a way to have a match pair "end the session of the first card selected
// may not even need this tbh"
function playerTurn(event){

}

//Initialize the game
function init(){


}

function cardClickHandler() {
  const currentCard = this;
  if (currentCard.classList.contains('matched')){
    return; 'Matching pair'
  }
  if (flippedCards.length < 2) {
    flipCard(currentCard);
    flippedCards.push(currentCard);
    
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 60);
    }
  }
}

function flipCard(card) {
  card.classList.toggle('flipped');
}

function checkMatch() {
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];

  if (card1 === card2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards.push(card1, card2);

    if (matchedCards.length === cards.length) {
      showMessage('Nice! Matching Pair');
    }
  } else {
    flipCard(card1);
    flipCard(card2);
  }
  flippedCards = [];
}

// function pickCardWinner() {
//   for () {
//     if ()
//       return();
       
//   } else () {
  
//   } return();
//   });




//Winner function: 

//Render a function to show result if  win or have the cards go back, and allow player to reinitialize matching cards.

function renderMessage () {
    if (winner === 'T') {
        message.innerHTML = '';
    } else if (winner) {
        message.innerHTML = '';
    }
}

/*----- constants -----*/
const cards = [ 'A', 'A', 'B', 'B']
let flippedCards = [];
let matchedCards = [];

/*----- state variables -----*/



/*----- cached elements  -----*/


const messageWin = document.querySelector('.board');
const playAgain = document.querySelector('.btn');
const cardChooser = document.querySelectorAll('.card');




/*----- event listeners -----*/
const button = document.querySelector(".btn")

button.addEventListener('click', ()=> {
  console.log('button clicked');
})






/*----- functions -----*/
init();

function init() {
  flippedCards = [],
  matchedCards = [],
  (array).forEach(card => {
    card.classList.remove(// want to have flip and match cards removed after restarting game.);
    
  });
  cardShuffle();  //want to add a card shuffle
}

function cardShuffle() {
  //add a for loop to make a card shuffle use math.floor and math random
  for(let i =)
}


//Add a flip card function
function flipCard() {

}

//Add a match function for when cards match to their pair.
function matchedCards() {
  
}














// //Render a function to show result if  win or have the cards go back, and allow player to reinitialize matching cards.

// function renderMessage () {
//     if (winner === 'T') {
//         message.innerHTML = '';
//     } else if (winner) {
//         message.innerHTML = '';
//     }
// }
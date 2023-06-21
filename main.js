/*----- constants -----*/
const cards = [ 'A', 'A', 'B', 'B']
let flippedCards = [];
let matchedCards = [];

/*----- state variables -----*/



/*----- cached elements  -----*/


const messageWin = document.querySelector('.board');
const playAgain = document.querySelector('button');
const cardChooser = document.querySelectorAll('.card');




/*----- event listeners -----*/
const button = document.querySelector(".btn")

button.addEventListener('click', ()=> {
  console.log('button clicked');
})






/*----- functions -----*/
init();

function init() {
  board = [
    [0,0],
    [0,0],
    [0,0],
    [0,0]
  ];
  turn = 1;
  winner= null;
  render();
}


















// //Render a function to show result if  win or have the cards go back, and allow player to reinitialize matching cards.

// function renderMessage () {
//     if (winner === 'T') {
//         message.innerHTML = '';
//     } else if (winner) {
//         message.innerHTML = '';
//     }
// }
/*----- constants -----*/

//const for cards and their win and null option.

const cards = {
  '1': //card pair matches
  'null': //card not matching pair
}
//Const for when card 1 a matches card 2 a, card 3 b matches card 4 b. 
const wins [
  ['box1', 'box2'],
  ['box3', 'box4']
];



/*----- state variables -----*/
//this allows the player to interact with board, get a result back and return with a matching pair.


/*----- cached elements  -----*/
//This will use our variables h1 and button to show the text of h1 and button.

const messageWin = document.querySelector('.board');
const playAgain = document.querySelector('button');
const cardChooser = document.querySelectorAll('.card');

/*----- event listeners -----*/







/*----- functions -----*/














//Render a function to show result if  win or have the cards go back, and allow player to reinitialize matching cards.

function renderMessage () {
    if (winner === 'T') {
        message.innerHTML = '';
    } else if (winner) {
        message.innerHTML = '';
    }
}

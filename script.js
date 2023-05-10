/*----- constants -----*/

/*----- app's state (variables) -----*/
let board // Where all the cards appear to be acted upon
let victory //When all cards are matched, the player wins!

/*-------CARD FACES------------*/
let frontImg = document.querySelector('front')
let backImg = document.querySelector('back')

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')
let cardEl = document.querySelectorAll('.card')
/*----- functions -----*/
const start = () => {
  board = document.getElementById('board')
  board = [[null, null, null, null]]
  victory = null

  // renderBoard()
}

// const renderBoard = () => {
//   board.forEach(function () {})
// }

const cardFlip = (idx) => {
  console.log('CARD FLIP!')
  // cardEl.style.transform = rotateY(180deg)
  // cardEl.classList.remove('front')
  cardEl[idx].classList.add('cardBack')
  checkMatch()
}

const checkMatch = () => {
  if (cardFlip.target === cardFlip.target) {
    messageEl.innerText = "It's a Match!"
  } else if (cardFlip.target !== cardFlip.target) {
    messageEl.innerText = 'No bueno. Una vez mas!'
  }
}

start() // 1st to finish
// renderBoard() //2nd to finish
// cardFlip() //3rd to finish
// checkMatch() //4th to finish

/*-----------VICTORY LOGIC!-------------*/
console.log(cardEl)
/*----- event listeners -----*/
cardEl.forEach((el, index) => {
  el.addEventListener('click', () => {
    cardFlip(index)
  })
})
document.querySelector('button').addEventListener('click', start)

// cardOne.addEventListener('click', cardFlip)
// cardTwo.addEventListener('click', cardFlip)
// cardThree.addEventListener('click', cardFlip)
// cardFour.addEventListener('click', cardFlip)

/*-----------WORKS CITED------------*/
//

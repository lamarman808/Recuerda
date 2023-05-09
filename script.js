/*----- constants -----*/
//const AUDIO = new Audio(
//REPLACE WITH REMEMBER ME LULLABY DURING GAMEPLAY!)
//Upon Victory: Chage to MIGUEL DUO VERSION!

/*----- app's state (variables) -----*/
let board // Where all the cards appear to be acted upon
let victory //When all cards are matched, the player wins!

/*-------CARD FACES------------*/
let frontImg = document.querySelector('front')
let backImg = document.querySelector('back')

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')
let cardEl = document.getElementById('card-1')

/*----- functions -----*/
const start = () => {
  board = [[0, 0, 0, 0][(0, 0, 0, 0)][(0, 0, 0, 0)]]
  frontImg.style.opacity = 1
  backImg.style.opacity = 0

  renderBoard()
}

const renderBoard = () => {
  board.forEach(function (colArr, rowArr) {})
}

const cardFlip = () => {
  cardEl.classList.toggle('cardBack')
  //   while ((frontImg = front.evt.target.style.opacity = 1)) {
  //     backImg = back.style.evt.target.opacity = 0
  //   }
  //   while ((frontImg = front.evt.target.style.opacity = 0)) {
  //     backImg = back.style.evt.target.opacity = 1
  //   }
}

const checkMatch = () => {
  if (cardFlip.target === cardFlip.target) {
    messageEl.innerHTML = "It's a Match!"
  } else if (cardFlip.target !== cardFlip.target) {
    messageEl.innerHTML = 'No bueno. Una vez mas!'
  }
}

start() // 1st to finish
renderBoard() //2nd to finish
cardFlip() //3rd to finish
checkMatch() //4th to finish

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', start)
cardEl.addEventListener('click', cardFlip)

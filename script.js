/*----- constants -----*/
//const AUDIO = new Audio(
//REPLACE WITH REMEMBER ME LULLABY DURING GAMEPLAY!)
//Upon Victory: Chage to MIGUEL DUO VERSION!
const cardImg = {
  purple: { img: 'imgs/FILE NAME.png', matches: 'imgs/FILE NAME.png' },
  red: { img: 'imgs/FILE NAME.png', matches: 'imgs/FILE NAME.png' },
  blue: { img: 'imgs/FILE NAME.png', matches: 'imgs/FILE NAME.png' }
}

/*----- app's state (variables) -----*/
let victory //When all cards are matched, the player wins!
let front //What the player sees initially: Remember THIS!
let back //Matching image/color

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')
const cardEl = document.getElementById('card-1')

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', start)
cardEl.addEventListener('click', cardFlip)

/*----- functions -----*/
const start = () => {}

const renderBoard = () => {}

const cardFlip = () => {}

const checkMatch = () => {}

start()
renderBoard()
cardFlip()
checkMatch()

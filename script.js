/*----- constants -----*/
//const AUDIO = new Audio(
//REPLACE WITH REMEMBER ME LULLABY DURING GAMEPLAY!)
//Upon Victory: Chage to MIGUEL DUO VERSION!
const cardImg = {
  front: { img: 'image.png', matches: 'imgs/FILE NAME.png' },
  back: {
    img: 'https://www.looper.com/img/gallery/the-big-clue-everyone-missed-early-in-disney-pixars-coco/l-intro-1629645917.jpg',
    matches: 'imgs/FILE NAME.png'
  }
}

/*----- app's state (variables) -----*/
let board // Where all the cards appear to be acted upon
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
const start = () => {
  board = [0]
}

const renderBoard = () => {} //includes front element

const cardFlip = () => {} //includes front element

const checkMatch = () => {} //includes front element

start() // 1st to finish
renderBoard() //2nd to finish
cardFlip() //3rd to finish
checkMatch() //4th to finish

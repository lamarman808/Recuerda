/*----- constants -----*/
//const AUDIO = new Audio(
//REPLACE WITH REMEMBER ME LULLABY DURING GAMEPLAY!)
//Upon Victory: Chage to MIGUEL DUO VERSION!
// const cardImg = {
//   front: { img: 'COCO_PICS/Coco Y Paco.jpeg' },
//   back: { img: 'COCO_PICS/Skull Mami.jpeg' }
// }
let cardEl = document.getElementById('card-1') = {
  front: { img: 'COCO_PICS/Coco Y Paco.jpeg' },
  back: { img: 'COCO_PICS/Paco Plays.png' }
}

/*----- app's state (variables) -----*/
let board // Where all the cards appear to be acted upon
let victory //When all cards are matched, the player wins!
let front //What the player sees initially: Remember THIS!
let back //Matching image/color

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')


/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', start)
cardEl.addEventListener('click', cardFlip)

/*----- functions -----*/
const start = () => {
  cardEl.style = "background-image: back" 
}

const renderBoard = () => {} //includes front element

const cardFlip = () => {
  cardEl = back
} //includes front element

const checkMatch = () => {} //includes front element

start() // 1st to finish
renderBoard() //2nd to finish
cardFlip() //3rd to finish
checkMatch() //4th to finish

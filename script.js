/*----- constants -----*/
const cocoPics = {
  c1: { img: 'COCO_PICS/cocoypaco.png', matches: 'c7' },
  c2: { img: 'COCO_PICS/headlesshector.png', matches: 'c8' },
  c3: { img: 'COCO_PICS/pacoplays.png', matches: 'c9' },
  c4: { img: 'COCO_PICS/pacopose.png', matches: 'c10' },
  c5: { img: 'COCO_PICS/skullmami.png', matches: 'c11' },
  c6: { img: 'COCO_PICS/pacoyhector.png', matches: 'c12' },
  c7: { img: 'COCO_PICS/cocoypaco.png', matches: 'c1' },
  c8: { img: 'COCO_PICS/headlesshector.png', matches: 'c2' },
  c9: { img: 'COCO_PICS/pacoplays.png', matches: 'c3' },
  c10: { img: 'COCO_PICSs/pacopose.png', matches: 'c4' },
  c11: { img: 'COCO_PICSs/skullmami.png', matches: 'c5' },
  c12: { img: 'COCO_PICSs/pacoyhector.png', matches: 'c6' }
}

console.log(cocoPics)

/*----- app's state (variables) -----*/
let board // Where all the cards appear to be acted upon
let victory //When all cards are matched, the player wins!

/*-------CARD FACES------------*/
// let frontImg = document.querySelector('front')
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
  // cardEl.style.transform = rotateY(180deg)
  // cardEl.classList.remove('front')
  cardEl[idx].classList.toggle('cardBack')
  checkMatch()
}

start() // 1st to finish
// renderBoard() //2nd to finish

/*-----------VICTORY LOGIC!-------------*/
const checkMatch = () => {
  //   if (cardFlip.target === cardFlip.target) {
  //     messageEl.innerText = "It's a Match!"
  //   } else if (cardFlip.target !== cardFlip.target) {
  //     messageEl.innerText = 'No bueno. Una vez mas!'
  //   }
  // }
  if (cardFlip.target === cardFlip.target) {
    messageEl.innerText = "It's a Match!"
  } else if (cardFlip.target !== cardFlip.target) {
    messageEl.innerText = 'No bueno. Una vez mas!'
  }
}

/*----- event listeners -----*/
// For Loop Required to iterate through the Array of CARD ELEMENTS to select which in the Index receives the CLICK event!
cardEl.forEach((el, index) => {
  el.addEventListener('click', () => {
    cardFlip(index)
  })
})
document.querySelector('button').addEventListener('click', start)

/*-----------WORKS CITED------------*/
//

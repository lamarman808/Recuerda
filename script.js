/*----- App's State (variables) -----*/
let board
let matches = 0
let clicks = 1

/*-------CARD FACES------------*/
// let frontImg = document.querySelector('front')
let backImg = document.querySelector('back')

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')
let cardEl = document.querySelectorAll('.card')
let firstImg
let secondImg
let firstSrc
let secondSrc
/*----- functions -----*/
const start = () => {
  clicks = 1
  matches = 0
  cardFlip()
}

const cardFlip = (idx) => {
  if (clicks === 1) {
    cardEl[idx].classList.toggle('cardBack')
    firstImg = document.querySelector(`#card-${idx} > img`)
    firstSrc = firstImg.src.slice(32, 34)
    clicks++
    // console.log(clicks)
  } else if (clicks === 2) {
    cardEl[idx].classList.toggle('cardBack')
    secondImg = document.querySelector(`#card-${idx} > img`)
    secondSrc = secondImg.src.slice(32, 34)
    clicks--
    if (firstSrc === secondSrc) {
      messageEl.innerText = "It's a Match!"
      matches++
      clicks = 1
      if (matches === 6) {
        messageEl.innerText = 'GANADOR!'
        clicks = 1
      }
    } else if (firstSrc !== secondSrc) {
      messageEl.innerText = 'No bueno. Una vez mas!'
      clicks = 1
      cardFlip()
    }
  }
}

/*---------------NO EXTRA CLICKS!--------------*/
const stopClick = () => {
  if (clicks === 2) {
    el.removeEventListener('click', cardFlip())
  }
}

/*-----------WIN LOGIC!-------------*/

/*----- event listeners -----*/
// For Loop thar iterates through the Array of CARD ELEMENTS to select which in the Index receives the CLICK event!
cardEl.forEach((el, index) => {
  el.addEventListener('click', () => {
    cardFlip(index)
  })
})
document.querySelector('button').addEventListener('click', start)

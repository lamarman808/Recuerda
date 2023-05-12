/*----- App's State (variables) -----*/
let matches = 0
let clicks = 1

/*-------CARD FACES------------*/
let frontImg = document.querySelector('front')
let backImg = document.querySelector('back')

/*----- cached element references -----*/
const messageEl = document.querySelector('h1')
let cardEl = document.querySelectorAll('.card')
let firstImg
let secondImg
let firstSrc
let secondSrc
let firstFlip
/*----- functions -----*/
// const shuffleCards = () => {
//   let currentIndex = cards.length,
//     randomIndex,
//     temporaryValue
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1
//     temporaryValue = cards[currentIndex]
//     cards[currentIndex] = cards[randomIndex]
//     cards[randomIndex] = temporaryValue
//   }
// }
const start = () => {
  window.location.reload()
}

const cardFlip = (idx) => {
  if (clicks === 1) {
    firstFlip = cardEl[idx]
    firstFlip.classList.toggle('cardBack')
    firstImg = document.querySelector(`#card-${idx} > img`)
    firstSrc = firstImg.src.slice(32, 34)
    clicks++
  } else if (clicks === 2) {
    cardEl[idx].classList.toggle('cardBack')
    secondImg = document.querySelector(`#card-${idx} > img`)
    secondSrc = secondImg.src.slice(32, 34)
    clicks--
    if (firstSrc === secondSrc) {
      messageEl.innerText = "It's a Match!"
      setTimeout(() => {
        messageEl.innerText = 'Recordar es Entender!'
      }, 3000)
      stopClick()
      matches++
      clicks = 1

      /*-----------WIN LOGIC!-------------*/
      if (matches === 6) {
        messageEl.innerText = 'GANADOR!'
        stopClick()
        clicks = 1
      }
    } else if (firstSrc !== secondSrc) {
      messageEl.innerText = 'No bueno. Una vez mas!'
      setTimeout(() => {
        firstFlip.classList.toggle('cardBack')
        cardEl[idx].classList.toggle('cardBack')
        clicks = 1
        messageEl.innerText = 'Recordar es Entender!'
      }, 2000)
    }
  }
}

/*---------------NO EXTRA CLICKS!--------------*/
const stopClick = () => {
  if (clicks === 2) {
    firstSrc.removeEventListener('click', cardFlip)
    secondSrc.removeEventListener('click', cardFlip)
  }
}

/*----- event listeners -----*/
// For Loop thar iterates through the Array of CARD ELEMENTS to select which in the Index receives the CLICK event!
cardEl.forEach((el, index) => {
  el.addEventListener('click', () => {
    cardFlip(index)
  })
})
document.querySelector('button').addEventListener('click', start)

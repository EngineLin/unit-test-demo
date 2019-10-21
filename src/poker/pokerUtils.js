import { compose } from 'ramda'

export const takeNumber = hands => hands.map(item => item.split('')[1])

export const takeColor = hands => hands.map(item => item.split('')[0])

export const sortNumber = hands => hands.sort((a, b) => b - a)

export const takeMaxNumber = hands => hands[0]

export const cardToNumber = card => {
  switch (card) {
    case 'T':
      return 10
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    default:
      return card
  }
}

export const numberToCard = number => {
  switch (number) {
    case 10:
      return 'T'
    case 11:
      return 'J'
    case 12:
      return 'Q'
    case 13:
      return 'K'
    default:
      return number
  }
}

export const checkCardSummaryNumber = hands => {
  const newHands = {}
  hands.forEach(number => {
    if (newHands[number]) {
      newHands[number] += 1
    } else {
      newHands[number] = 1
    }
  })
  return newHands
}

export const checkPairNumber = hands => {
  let pairNumber = 0
  for(let i in hands) {
    if (hands[i] === 2) pairNumber++
  }
  return pairNumber
}

export const checkThreeNumber = hands => {
  let threeNumber = 0
  for(let i in hands) {
    if (hands[i] === 3) threeNumber = i
  }
  return threeNumber
}

export const getPairNumber = hands => {
  let pairNumber = []
  for(let i in hands) {
    if (hands[i] === 2) pairNumber.push(i)
  }
  return pairNumber
}

export const getPairArray = hands => {
  const pair = compose(
    getPairNumber,
    checkCardSummaryNumber,
    sortNumber,
    hands => hands.map(cardToNumber),
    takeNumber
  )
  return pair(hands)
}

export const isFlush = hands => {
  let isSame = true
  hands.reduce((oldVal, newVal) => {
    if(oldVal !== newVal && isSame && oldVal !== 'g') {
      isSame = false
    }
    return newVal
  }, 'g')
  return isSame
}

export const getColor = compose(
  x => x[0],
  takeColor
)
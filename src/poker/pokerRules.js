import * as utils from './pokerUtils'
import { compose } from 'ramda'

export const takeMaxNumber = hands => {
  const takeHighNumber = compose(
    utils.numberToCard,
    utils.takeMaxNumber,
    utils.sortNumber,
    hands => hands.map(utils.cardToNumber),
    utils.takeNumber
  )
  const highNumber = takeHighNumber(hands)
  return `high ${highNumber}`
}

export const isPair = hands => {
  const pair = compose(
    utils.checkPairNumber,
    utils.checkCardSummaryNumber,
    utils.sortNumber,
    hands => hands.map(utils.cardToNumber),
    utils.takeNumber
  )
  return pair(hands)
}

export const isThree = hands => {
  const three = compose(
    utils.checkThreeNumber,
    utils.checkCardSummaryNumber,
    utils.sortNumber,
    hands => hands.map(utils.cardToNumber),
    utils.takeNumber
  )
  return three(hands)
}

export const isFlush = hands => {
  const flush = compose(
    utils.isFlush,
    utils.takeColor
  )
  return flush(hands)
}
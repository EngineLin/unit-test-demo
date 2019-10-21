import * as pokerRules from './pokerRules'
import * as utils from './pokerUtils'

const pokerPaser = hands => {
  if (pokerRules.isFlush(hands)) return `${utils.getColor(hands)} flush`
  if (pokerRules.isPair(hands) === 1) return `a ${utils.getPairArray(hands)[0]} pair`
  if (pokerRules.isPair(hands) === 2) return `${utils.getPairArray(hands)[0]}, ${utils.getPairArray(hands)[1]} pair`
  if (pokerRules.isThree(hands)) return `is ${pokerRules.isThree(hands)} three`
  return pokerRules.takeMaxNumber(hands)
}

export default pokerPaser
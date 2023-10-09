import parse from "html-react-parser";

import * as regExp from '../constants/regexpPatterns'

const replaceTrademark = (text) => {
  return parse(text.replace(regExp.TRADE_MARKS, '<sup className="trademark">$&</sup>'))
}

export const htmlSerializer = {
  paragraph: ({text}) => replaceTrademark(text),
  heading1: ({text}) =>  replaceTrademark(text),
  heading2: ({text}) =>  replaceTrademark(text),
  heading3: ({text}) =>  replaceTrademark(text),
  heading4: ({text}) =>  replaceTrademark(text),
  heading5: ({text}) =>  replaceTrademark(text),
  heading6: ({text}) =>  replaceTrademark(text),
}
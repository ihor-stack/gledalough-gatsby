import { css } from 'styled-components'
import { COLOR, FONT } from './index'
// import ic_arrow from '../assets/ic_arrow.png';

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
}

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {},
)

export const gutterWidth = '10vw'
export const gutterWidthMobile = '10vw'

export const gutter = css`
  padding-left: ${gutterWidthMobile};
  padding-right: ${gutterWidthMobile};
  ${respondTo.sm`
        padding-left: ${gutterWidth};
        padding-right: ${gutterWidth};
    `}
`
export const gutterMobile = css`
  padding-left: ${gutterWidthMobile};
  padding-right: ${gutterWidthMobile};
`
export const gutterLeft = css`
  padding-left: ${gutterWidth};
`
export const gutterRight = css`
  padding-right: ${gutterWidth};
`

export const buttonBlank = css`
  padding: 0.5rem 1.6rem;
  background: none;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  font-family: ${FONT.monospace};
  font-weight: 400;
  font-style: 'normal';
  text-transform: uppercase;
`

export const buttonRounded = css`
  padding: 0.5rem 1.6rem;
  background: none;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  font-family: ${FONT.monospace};
  font-weight: 400;
  font-style: 'normal';
  text-transform: uppercase;
  border: 1px solid ${COLOR.black};
  border-radius: 1.6rem;
`

export const linkUnderlined = css`
  color: ${COLOR.black};
  padding: 0.5rem 0.2rem;
  margin: 0 auto;
  background: none;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  font-family: ${FONT.monospace};
  font-weight: 400;
  font-style: 'normal';
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid ${COLOR.black};
  position: relative;
  &:after {
    content: '>';
    position: absolute;
    font-size: 1.25rem;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const sansNormal = css`
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-size: 1rem;
  line-height: 1.3rem;
  font-weight: 400;
  font-style: 'normal';
  letter-spacing: 0.02rem;
`
// ${respondTo.xs`
//     font-size: 1.2rem;
//     line-height: 1.5rem;
// `}
// ${respondTo.sm`
//     font-size: 1.4rem;
//     line-height: 1.7rem;
// `}

export const headingMedium = css`
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 500;
  font-style: 'normal';
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`

export const headingLarge = css`
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 500;
  font-style: 'normal';
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  ${respondTo.xs`
        font-size: 1.4rem;
        line-height: 1.4rem;
    `}
  ${respondTo.sm`
        font-size: 1.6rem;
        line-height: 1.6rem;
    `}
`

export const titleMedium = css`
  color: ${COLOR.black};
  font-family: ${FONT.serif};
  font-weight: 400;
  font-style: 'normal';
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  ${respondTo.xs`
      font-size: 1.8rem;
      line-height: 2.0rem;
    `}
  ${respondTo.sm`
      font-size: 2rem;
      line-height: 2.2rem;
    `}
`

export const titleLarge = css`
  color: ${COLOR.black};
  font-family: ${FONT.serif};
  font-weight: 400;
  font-style: 'normal';
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: 0.1rem;
  ${respondTo.xs`
        font-size: 2.2rem;
        line-height: 2.6rem;
    `}
  ${respondTo.sm`
        font-size: 2.8rem;
        line-height: 3rem;
    `}
`

export const titleLargest = css`
  color: ${COLOR.black};
  font-family: ${FONT.serif};
  font-weight: 400;
  font-style: 'normal';
  font-size: 3rem;
  line-height: 3.2rem;
  letter-spacing: 0.1rem;
  ${respondTo.xs`
        font-size: 3.6rem;
        line-height: 3.8rem;
    `}
  ${respondTo.sm`
        font-size: 4rem;
        line-height: 4.2rem;
    `}
`

export const titleMono = css`
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  font-family: ${FONT.monospace};
  font-weight: 400;
  font-style: 'normal';
  text-transform: uppercase;
`

export const heroTitleText = css`
  color: ${COLOR.black};
  font-family: ${FONT.serif};
  font-weight: 400;
  font-style: 'normal';
  font-size: 1.3rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  ${respondTo.xs`
        font-size: 1.6rem;
        line-height: 1.8rem;
        letter-spacing: 0.1rem;
    `}
  ${respondTo.sm`
        font-size: 1.8rem;
        line-height: 2.0rem;
        letter-spacing: 0.1rem;
    `}
    ${respondTo.md`
        font-size: 2rem;
        line-height: 2.4rem;
        letter-spacing: 0.1rem;
    `}
`

import { css } from 'styled-components';
import { COLOR, FONT } from './index';
// import ic_arrow from '../assets/ic_arrow.png';

export const gutterWidth = '12.5vw';

export const gutter = css`
    padding-left: ${gutterWidth};
    padding-right: ${gutterWidth};
`;
export const gutterLeft = css`
    padding-left: ${gutterWidth};
`;
export const gutterRight = css`
    padding-right: ${gutterWidth};
`;

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
`;

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
`;

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
    &:after {
        content:' >';
    }
`;

export const sansNormal = css`
    color: ${COLOR.black};
    font-family: ${FONT.sans};
    font-size: 1.3rem;
    line-height: 1.5rem;
    font-weight: 400;
    font-style: 'normal';
    letter-spacing: 0.1rem;
`;

export const headingLarge = css`
    color: ${COLOR.black};
    font-family: ${FONT.sans};
    font-size: 1.6rem;
    font-weight: 500;
    font-style: 'normal';
    letter-spacing: 0.4rem;
    text-transform: uppercase;
`;

export const titleMedium = css`
    color: ${COLOR.black};
    font-family: ${FONT.serif};
    font-weight: 400;
    font-style: 'normal';
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: 0.1rem;
`;

export const titleLarge = css`
    color: ${COLOR.black};
    font-family: ${FONT.serif};
    font-weight: 400;
    font-style: 'normal';
    font-size: 2.8rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
`;

export const titleLargest = css`
    color: ${COLOR.black};
    font-family: ${FONT.serif};
    font-weight: 400;
    font-style: 'normal';
    font-size: 4rem;
    line-height: 4.2rem;
    letter-spacing: 0.1rem;
`;

export const titleMono = css`
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
    font-family: ${FONT.monospace};
    font-weight: 400;
    font-style: 'normal';
    text-transform: uppercase;
`;

export const heroText = css`
    color: ${COLOR.black};
    font-family: ${FONT.serif};
    font-weight: 400;
    font-style: 'normal';
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
`;


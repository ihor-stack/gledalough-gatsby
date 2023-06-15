import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { respondTo, gutter, sansNormal, buttonRounded } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
  &.gin {
    color: ${COLOR.black};
    background-color: ${COLOR.cream};
    button {
      color: ${COLOR.black};
      border: 1px solid ${COLOR.black};
    }
  }
  &.whiskey {
    color: ${COLOR.white};
    background-color: ${COLOR.wgreen};
    button {
      color: ${COLOR.white};
      border: 1px solid ${COLOR.white};
    }
    p {
      color: ${COLOR.white};
    }
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 6rem;
  ${gutter}
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 5vw;
  }
  &.images {
    display: flex;
    flex-direction: row;
    padding: 0 5vw;
  }
  ${respondTo.md`
    width: 50%;
    margin-bottom: 0;
    &.text {
      padding: 0 0 0 12.5vw;
    }
    &.images {
      padding: 0 12.5vw 0 0;
    }
  `}
`;

const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 2.6rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  font-style: 'normal';
  margin: 2rem 0 0 0;
  width: 100%;
  text-align: left;
`;

const Paragraph = styled.p`
  ${sansNormal}
  margin: 2rem 0 0 0;
  text-align: left;
`;

const ShopButton = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1rem;
  button {
    ${buttonRounded}
    margin: 0 auto;
  }
  text-align:center;
  ${respondTo.md`
    text-align:left;
  `}
`;

const ProductImage = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-right: 3rem;
  img{
     height: 60vh;
  }
`;

const ShopDualPanel = ({ className, theme, content }) => {
 
  return (
    <PanelContainer className={`${className} ${theme}`}>
      <Panel className='text'>
        <Title>{content.title}</Title>
        <Paragraph>{content.p1}</Paragraph>
        <ShopButton><button>Buy Now</button></ShopButton>
      </Panel>
      <Panel className='images'>
        <ProductImage><img src={content.image_01} className="img-fluid" alt="alt placeholder" /></ProductImage>
        <ProductImage><img src={content.image_02} className="img-fluid" alt="alt placeholder" /></ProductImage>
      </Panel>
    </PanelContainer>
  )
};

ShopDualPanel.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object,
  photo: PropTypes.string,
};

export default ShopDualPanel;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
 
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 380px;
  background-color: ${COLOR.rose};
`;

const ProductHeader = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  h3 {
    font-size: 1.4rem;
    font-family: ${FONT.sans};
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
    font-size: 3.4rem;
    font-family: ${FONT.serif};
    font-weight: 600;
  }
`;
 
const ProductImage = styled.div`
  position: absolute;
  top: 25vh;
  width: 100%;
  text-align: center;
  img {
    width: 20vw;
  }
`;

const ParagraphLeft = styled.p`
  padding: 0 12vw 0 12vw;
  text-align: left;
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-family: ${FONT.sans};
  font-weight: 500;
`;
 

const ParagraphRight = styled.p`
  padding: 0 12vw 0 12vw;
  text-align: left;
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-family: ${FONT.sans};
  font-weight: 500;
`;
 

const TitleRight = styled.h2`
  padding: 0 12vw 0 12vw;
  text-align: left;
  width: 100%;
  font-size: 2rem;
  font-family: ${FONT.serif};
  font-weight: 600;
`;
   

const HeadingRight = styled.h3`
  padding: 0 12vw 0 12vw;
  text-align: left;
  width: 100%;
  font-size: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 700;
  text-transform: uppercase;
`;
  

const ProductDetail = ({ className, product, bgColor }) => (
    <PanelContainer className={className}>
      <ProductHeader>
        <h3>{product.heading}</h3>
        <h2>{product.title}</h2>
      </ProductHeader>
      <ProductImage>
         <img src={product.image} className="img-fluid" alt="alt placeholder" />
      </ProductImage>

      <Panel style={{ backgroundColor: `${COLOR[bgColor]}`}}>
        <ParagraphLeft>{product.p1}</ParagraphLeft>
        <ParagraphLeft>{product.p2}</ParagraphLeft>
      </Panel>
      <Panel>
        <TitleRight>{product.notes_title}</TitleRight>
        <HeadingRight>{product.note_p1_heading}</HeadingRight>
        <ParagraphRight>{product.note_p1}</ParagraphRight>
        <HeadingRight>{product.note_p2_heading}</HeadingRight>
        <ParagraphRight>{product.note_p2}</ParagraphRight>
        <HeadingRight>{product.note_p3_heading}</HeadingRight>
        <ParagraphRight>{product.note_p3}</ParagraphRight>
      </Panel>
    </PanelContainer>
); 

ProductDetail.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  product: PropTypes.object,
};

export default ProductDetail;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { gutter, titleLarge, titleLargest, headingMedium, sansNormal, respondTo} from '../constants/styles';

const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
  background-color: ${COLOR.warmwhite};
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
  margin-top: 4rem;
  padding-bottom: 4rem;
  &.primary {
    padding-top: 40rem;
    ${respondTo.md`
      padding-top: 4rem;
    `}
  }  
`;

const ProductHeader = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8rem;
  h3 {
     ${headingMedium}
  }
  h2 {
    ${titleLargest}
  }
`;
 
const ProductImage = styled.div`
  position: absolute;
  top: 16rem;
  width: 100%;
  text-align: center;
  img {
    width: 30vw;
  }
  ${respondTo.md`
  top: 25vh;
    img {
      width: 20vw;
    }
  `}
`;

const ParagraphLeft = styled.p`
  ${gutter}
  text-align: left;
  width: 100%;
  ${sansNormal}
`;
 

const ParagraphRight = styled.p`
  ${gutter}
  text-align: left;
  width: 100%;
  ${sansNormal}
`;
 

const TitleRight = styled.h2`
  ${gutter}
  text-align: left;
  width: 100%;
  ${titleLarge}
`;
   

const HeadingRight = styled.h3`
  ${gutter} 
  text-align: left;
  width: 100%;
  font-size: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 500;
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

      <Panel className='primary' style={{ backgroundColor: `${COLOR[bgColor]}`}}>
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
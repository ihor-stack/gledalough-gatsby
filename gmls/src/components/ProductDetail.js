import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
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
 
const TitleRight = styled.h2`
  ${gutter}
  text-align: left;
  width: 100%;
  ${titleLarge}
`;

const ParagraphRight = styled.div`
  ${gutter}
  text-align: left;
  width: 100%;
  ${sansNormal}
`;


const ProductDetail = ({ data }) => (
    <PanelContainer className='page'>
      <ProductHeader>
        <h3>{data.heading.text}</h3>
        <h2>{data.title.text}</h2>
      </ProductHeader>
      <ProductImage>
         <img src={data.image.url} className="img-fluid" alt={data.image.alt}/>
      </ProductImage>

      <Panel className='primary' style={{ backgroundColor: `${data.background_color}`}}>
        <ParagraphLeft>{parse(data.description.html)}</ParagraphLeft>
      </Panel>
      <Panel>
        <TitleRight>{data.notes_heading.text}</TitleRight>
        <ParagraphRight>{parse(data.notes.html)}</ParagraphRight>
      </Panel>
    </PanelContainer>
); 

export default ProductDetail;
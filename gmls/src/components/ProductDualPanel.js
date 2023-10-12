import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { COLOR, FONT } from '../constants';
import { gutter, respondTo } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${respondTo.md`
    width: 50%; 
  `}

  &.photo {
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
    ${gutter}
  }
`;

const Paragraph = styled.p`
  color: ${COLOR.white}; 
  font-size: 2.2rem;
  line-height: 2.4rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  font-style: 'normal';
  margin: 2rem 0 0 0;
  text-align: center;
  &.gin {
    color: ${COLOR.white}; 
  };
  &.whiskey {
    color: ${COLOR.black}; 
  }
`;

const ProductDualPanel = ({ data, theme }) => (
    <PanelContainer className='page' style={{ backgroundColor: `${data.article_background_color}` }}>
      <Panel className='text' >
        <Paragraph className={`${theme}`}>{parse(data.article_body.html)}</Paragraph>
      </Panel>
      <Panel className='photo' style={{backgroundImage: `url(${data.article_image.url})`}} />
    </PanelContainer>
);

export default ProductDualPanel;
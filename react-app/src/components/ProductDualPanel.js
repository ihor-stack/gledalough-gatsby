import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const ProductDualPanel = ({ className, theme, bgColor, photo, content }) => (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='text' >
        <Paragraph className={`${theme}`}>{content.p1}</Paragraph>
      </Panel>
      <Panel className='photo' style={{backgroundImage: `url(${photo})`}} />
    </PanelContainer>
);

ProductDualPanel.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object,
  photo: PropTypes.string,
};

export default ProductDualPanel;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 50vh;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  &.photo {
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Title = styled.h3`
  width: 100%;
  padding: 2rem 4rem 0 4rem;
  text-align: left;
  font-size: 1.4rem;
`;

const ParagraphIntro = styled.p`
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 500;
  font-style: 'normal';
  margin: 2rem 4rem 0 4rem;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-family: ${FONT.sans}; 
  font-weight: 500;
  font-style: 'normal';
  margin: 2rem 4rem 0 4rem;
`;

const DualPanelFeature = ({ className, bgColor, photo, content, close}) => (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='photo' style={{backgroundImage: `url(${content[0].image})`}} onClick={() => close(0) }/>
      <Panel className='text' >
        <Title>{content[0].title}</Title>
        <ParagraphIntro>{content[0].p1}</ParagraphIntro>
        <Paragraph>{content[0].p2}</Paragraph>
      </Panel>
    </PanelContainer>
);

DualPanelFeature.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  photo: PropTypes.string,
};

export default DualPanelFeature;
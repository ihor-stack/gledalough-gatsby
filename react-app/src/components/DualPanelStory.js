import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { gutter, gutterRight, respondTo, sansNormal, titleMedium, headingLarge } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  &.photo {
    background-position: center; 
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    max-width: 100%;
  }
  &.text { 
    ${gutter}
    max-width: 100%;
    text-align: center;
  }
  ${respondTo.lg`
    flex: 1;
    padding: 0;
    &.text {
      ${gutterRight}
      padding-left: 5vw;
      text-align: left;
    }
  `}
`;

const Heading = styled.div`
  ${headingLarge}
  letter-spacing: 0.2rem;
  margin-top: 4rem;
  ${respondTo.lg`
    margin-top: 0;
  `}
`; 

const ParagraphIntro = styled.p`
  ${titleMedium}
  padding: 2rem 0 0 0;
  text-align: center;
`;

const Paragraph = styled.p`
  ${sansNormal}
  margin: 3rem 0;
  text-align: left;
  ${respondTo.lg`
    margin: 0;
    padding: 2rem 4rem 0 10rem;
    text-align: center;
  `}
`;

const DualPanel = ({ className, bgColor, photo, content }) => (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='photo' style={{backgroundImage: `url(${photo})`}} />
      <Panel className='text'>
        <Heading>{content.title}</Heading>
        <ParagraphIntro>{content.p1}</ParagraphIntro>
        <Paragraph>{content.p2}</Paragraph>
      </Panel>
    </PanelContainer>
);

DualPanel.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object,
  photo: PropTypes.string,
};

export default DualPanel;
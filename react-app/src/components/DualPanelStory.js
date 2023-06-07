import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { gutter, sansNormal, titleMedium, headingLarge } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
 
  display: flex;
  flex-grow: 1;
  width: 50%;
  justify-content: center;
  align-items: center;
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

const Title = styled.div`
  ${headingLarge}
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: 0.2rem;
`;

const ParagraphIntro = styled.p`
  ${titleMedium}
  margin: 2rem 0 0 0;
  text-align: center;
`;

const Paragraph = styled.p`
  ${sansNormal}
  margin: 2rem 4rem 0 10rem;
`;

const DualPanel = ({ className, bgColor, photo, content }) => (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='photo' style={{backgroundImage: `url(${photo})`}} />
      <Panel className='text' >
        <Title>{content.title}</Title>
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
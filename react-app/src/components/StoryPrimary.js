import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { gutter, sansNormal, headingLarge, titleLarge } from '../constants/styles';

const PanelContainer = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
  ${gutter}
  padding-right: 2.5vw;
  width: 50%;
  &:last-child {
    ${gutter}
    padding-left: 2.5vw;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  ${headingLarge}
  font-size: 1.2rem;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  ${titleLarge}
  margin-top: 1rem;
  &.left{
    margin-top: 0;
    margin-bottom: 3rem;
    text-align: left;
  }
`;
 
const Summary = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-family: ${FONT.serif};
`;
 
const Paragraph = styled.p`
  ${sansNormal}
`;

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 0.5rem;
`; 

const StoryPrimary = ({ className, bgColor, content }) => {
  // const index = 0; // !!! TODO: nav / state change

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <PanelHeader>
        <Heading>{content[0].heading}</Heading>
        <Title>{content[0].title}</Title>
      </PanelHeader>
      <Row>
        <Panel>
          <Summary>{ content[0].summary }</Summary>
          <ImageHolder><img className='img-fluid' src={content[0].ps[0].photo} alt='alt placeholder' /></ImageHolder>
        </Panel>
        <Panel>
          <Title className="left">{content[0].ps[0].title}</Title>
          <Paragraph>{content[0].ps[0].body}</Paragraph>
        </Panel>
      </Row>

    </PanelContainer>
)};

StoryPrimary.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  photo: PropTypes.string,
};

export default StoryPrimary;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

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
  padding: 0 2.5vw 0 12.5vw;
  width: 50%;
  &:last-child {
    padding: 0 12.5vw 0 2.5vw;
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
  font-size: 1.2rem;
  font-family: ${FONT.sans};
  font-weight: 700;
  text-transform: uppercase;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  &.left{
    text-align:left;
  }
`;
 
const Summary = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-family: ${FONT.serif};
`;
 
const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  font-style: 'normal';
`;

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 3rem;
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
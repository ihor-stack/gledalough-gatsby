import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  > div {
    padding: 0 2.5vw 0 12.5vw;
    &:last-child {
      padding: 0 12.5vw 0 2.5vw;
    }
  }
  &.reverse {
    flex-direction: row-reverse;
    > div {
      padding: 0 12.5vw 0 2.5vw;
      &:last-child {
        padding: 0 2.5vw 0 12.5vw;
      }
    }
  }
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

const StorySecondary = ({ className, bgColor, content, index, reverse }) => {
  // const index = 0; // !!! TODO: nav / state change
  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Row className={`${reverse ? 'reverse' : ''}`}>
        <Panel>
          <Summary>{ content[0].summary }</Summary>
          <ImageHolder><img className='img-fluid' src={content[0].ps[index].photo} alt='alt placeholder' /></ImageHolder>
        </Panel>
        <Panel>
          <Title className="left">{content[0].ps[index].title}</Title>
          <Paragraph>{content[0].ps[index].body}</Paragraph>
        </Panel>
      </Row>
    </PanelContainer>
)};

StorySecondary.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  index: PropTypes.number,
  reverse: PropTypes.bool,
};

export default StorySecondary;
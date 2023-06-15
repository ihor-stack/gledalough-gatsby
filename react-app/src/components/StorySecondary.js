import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { gutter, respondTo, sansNormal, titleLarge } from '../constants/styles';

const PanelContainer = styled.div`
  width: 100%;
`; 

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  &:not(.reverse) {
    ${respondTo.md`
      > div:first-child  {
        padding-right: 2.5vw;
      }
      > div:last-child  {
          padding-left: 2.5vw;
      }
    `}
  }

  &.reverse {
    flex-direction: column-reverse;
    ${respondTo.md`
      flex-direction: row-reverse;
      > div:first-child  {
          padding-left: 2.5vw;
      }
      > div:last-child  {
          padding-right: 2.5vw;
      }
    `}
  }

`; 
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
  ${gutter}
  width: 100%;
  ${respondTo.md`
    width: 50%;
  `}
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
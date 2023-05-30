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
const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 2.4rem;
  line-height: 2.6rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  margin-top: 3rem;
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
`;

const FeaturePrimary = ({ className, bgColor, content }) => {
  
  // const index = 0; // !!! TODO: nav / state change

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Row>
        <Panel>
          <ImageHolder><img className='img-fluid' src={content[0].photo_4} alt='alt placeholder' /></ImageHolder>
          <Title>{ content[0].secondary_title }</Title>
        </Panel>
        <Panel>
        <ImageHolder><img className='img-fluid' src={content[0].photo_3} alt='alt placeholder' /></ImageHolder>
        </Panel>
      </Row>
      <Row>
        <Panel>
          <Paragraph>{content[0].secondary_p1 }</Paragraph>
        </Panel>
        <Panel>
          
          <Paragraph>{content[0].secondary_p2 }</Paragraph>
        </Panel>
      </Row>

    </PanelContainer>
)};

FeaturePrimary.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  photo: PropTypes.string,
};

export default FeaturePrimary;
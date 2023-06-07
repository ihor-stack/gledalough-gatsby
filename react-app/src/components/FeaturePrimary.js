import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { gutter, titleMono, sansNormal, headingLarge, titleLarge, titleMedium } from '../constants/styles';

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
  width: 50%;
  ${gutter}
  padding-right: 2.5vw;
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
  padding: 3rem 0;
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
`;

const Date = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1.2rem;
  ${titleMono}
  font-size: 1.2rem;
  line-height: 1.2rem;
`;

const Summary = styled.div`
  width: 100%;
  text-align: center;
  ${titleMedium}
`;
 
const Paragraph = styled.p`
  ${sansNormal}
`;

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 3rem;
`;

const FeaturePrimary = ({ className, bgColor, content }) => {
  
  // const index = 0; // !!! TODO: nav / state change

  const paragraphs = content[0].primary_ps.map((paragraph, pi) => (
      <Paragraph key={pi}>{paragraph}</Paragraph>
  ));

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <PanelHeader>
        <Heading>{content[0].heading}</Heading>
        <Title>{content[0].title}</Title>
        <Date>{content[0].date}</Date>
      </PanelHeader>
      <Row>
        <Panel>
          <Summary>{ content[0].summary }</Summary>
          <ImageHolder><img className='img-fluid' src={content[0].photo_1} alt='alt placeholder' /></ImageHolder>
        </Panel>
        <Panel>
          {paragraphs}
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
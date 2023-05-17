import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import DualPanelFeature  from '../components/DualPanelFeature';
import useGinFeatureState from '../utils/useGinFeatureState';
import botanical_01 from '../assets/botanical_01.jpg';
import foraging_feature_01 from '../assets/foraging_feature_01.jpg';

const PanelContainer = styled.div`
  padding: 0 10vw;
`;
const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 2rem;
  margin-top: 2rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
  align-items: start;
`;
const HalfColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: start;
  align-items: start;
`;
const Features = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const Feature = styled.div`
  display: flex;
  flex-grow: 1;
  width: 30%;
  margin-right: 3%;
  height: 25vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const FeatureTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  margin: 0;
  text-align: center;
  background: rgba(0,0,0,0.6);
  color: ${COLOR.white};
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  font-style: 'normal';
  margin: 0 4rem 0 0;
`;


const FeaturesPanel = ({ className, bgColor, content, items, subcontent }) => {

  const { feature, loadFeature } = useGinFeatureState();
  
  const features = items.map((item, i) => (
    <Feature key={i} style={{backgroundImage: `url(${botanical_01})`}} onClick={() => loadFeature(1)}>
      <FeatureTitle>{item.title}</FeatureTitle>
    </Feature>
  ))

  return(
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Title>{content.title}</Title>
      <Row>
        <HalfColumn>
          <Paragraph>{content.p1}</Paragraph>
        </HalfColumn>
        <HalfColumn>
          <Paragraph>{content.p2}</Paragraph>
        </HalfColumn>
      </Row>
      { !feature  && <Features>{features}</Features> }
      { feature > 0 && <DualPanelFeature className='feature' bgColor='cream' content={subcontent} photo={foraging_feature_01} close={loadFeature} /> }
    </PanelContainer>
)};

FeaturesPanel.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object,
  items: PropTypes.array,
  subcontent: PropTypes.array,
};

export default FeaturesPanel;
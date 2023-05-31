import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12.5vw;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  img {
    height: 40%;
  }
`;

const Heading = styled.h3`
  width: 100%;
  text-align: start;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 600;
  font-style: 'normal';
  text-transform: uppercase;
`;

const Title = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-family: ${FONT.serif};
  font-weight: 600;
  font-style: 'normal';
`;

const Subtitle = styled.h3`
  width: 100%;
  text-align: start;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 700;
  font-style: 'normal';
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 400;
  font-style: 'normal';
`;

const Button = styled.button`
  background: none;
  border: none; 
  font-family: ${FONT.sans};
  font-weight: 700;
  font-style: 'normal';
  text-transform: uppercase;
  padding: 0;
  a, a:active {
    color: ${COLOR.black};
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-bottom: 1px solid ${COLOR.black};
  }
  a:hover, a:focus {
    text-decoration: none;
    //border-bottom: none;
  }
`;

const StoryPanel = ({ className, panelLeft, panelRight, imgLeft = false, imgRight = false }) => (
  <PanelContainer className={className}>
    <Panel style={{ backgroundColor: `${COLOR[panelLeft.bg]}` }}>
      {imgLeft && <img src={imgLeft} className="img-fluid" alt="alt placeholder" />}
      <Heading>{panelLeft.heading}</Heading>
      <Title>{panelLeft.title}</Title>
      {panelLeft.p1_title && <Subtitle>{panelLeft.p1_title}</Subtitle>}
      {panelLeft.p1 && <Paragraph>{panelLeft.p1}</Paragraph>}
      {panelLeft.p2_title && <Subtitle>{panelLeft.p2_title}</Subtitle>}
      {panelLeft.p2 && <Paragraph>{panelLeft.p2}</Paragraph>}
      <Button><Link to={panelLeft.url}>Learn more</Link></Button>
    </Panel>
    <Panel style={{ backgroundColor: `${COLOR[panelRight.bg]}` }}>
      {imgRight && <img src={imgRight} className="img-fluid" alt="alt placeholder" />}
      <Heading>{panelRight.heading}</Heading>
      <Title>{panelRight.title}</Title>
      {panelRight.p1_title && <Subtitle>{panelRight.p1_title}</Subtitle>}
      {panelRight.p1 && <Paragraph>{panelRight.p1}</Paragraph>}
      {panelRight.p2_title && <Subtitle>{panelRight.p2_title}</Subtitle>}
      {panelRight.p2 && <Paragraph>{panelRight.p2}</Paragraph>}
      <Button><Link to={panelRight.url}>Learn more</Link></Button>

    </Panel>
  </PanelContainer>
);

StoryPanel.propTypes = {
  className: PropTypes.string,
  imgLeft: PropTypes.string,
  imgRight: PropTypes.string,
  panelLeft: PropTypes.object,
  panelRight: PropTypes.object,
};

export default StoryPanel;

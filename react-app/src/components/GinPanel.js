import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10vw;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h3`
  width: 100%;
  text-align: end;
  padding-right: 5vw;
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

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 400;
  font-style: 'normal';
`;

const GinPanel = ({ className, content, bgColor }) => (
    <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
      <Panel>
        <Heading>{content.heading}</Heading>
      </Panel>
      <Panel>
        <Title>{content.title}</Title>
        <Paragraph>{content.p1}</Paragraph>
      </Panel>
    </PanelContainer>
);

GinPanel.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object, 
};

export default GinPanel;
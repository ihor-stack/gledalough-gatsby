import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { gutter, sansNormal, titleLarge, headingLarge } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${gutter}
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: start;
  align-items: center;
  margin-top: 30vh;
`;

const Heading = styled.h3`
  width: 100%;
  text-align: end;
  padding-right: 5vw;
  ${headingLarge}
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.2rem;
`;

const Title = styled.h2`
  width: 100%;
  text-align: start;
  ${titleLarge}
`;

const Paragraph = styled.p`
  ${sansNormal}

  margin-top: 2rem;
`;

const ProductIntro = ({ className, content, bgColor }) => (
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

ProductIntro.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.object, 
};

export default ProductIntro;
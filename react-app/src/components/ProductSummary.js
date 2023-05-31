import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
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
  text-align: left;
  padding: 0 12.5vw;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 600;
  font-style: 'normal';
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  width: 100%;
  text-align: left;
  padding: 0 12.5vw;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-family: ${FONT.sans};
  font-weight: 400;
  font-style: 'normal';
`;

const ProductSummary = ({ className, product, bgColor }) => (
    <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
      <Panel>
        <Heading>{product.summary_heading}</Heading>
        <Paragraph>{product.summary_p1}</Paragraph>
        <Paragraph>{product.summary_p2}</Paragraph>
      </Panel>
      <Panel>

      </Panel>
    </PanelContainer>
);

ProductSummary.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  product: PropTypes.object, 
};

export default ProductSummary;
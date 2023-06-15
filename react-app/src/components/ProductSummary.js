import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { gutter, gutterLeft, headingMedium, sansNormal, respondTo } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
`;

const Panel = styled.div`
  display: flex;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${gutter}
  ${respondTo.md`
    ${gutterLeft}
    padding-right: 0;
  `}
`;

const Heading = styled.h3`
  width: 100%;
  text-align: left;
  ${headingMedium}
`;

const Paragraph = styled.p` 
  width: 100%;
  text-align: left;
  ${sansNormal}
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
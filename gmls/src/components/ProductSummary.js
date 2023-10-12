import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
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

const ProductSummary = ({ data }) => (
    <PanelContainer className='page' style={{backgroundColor: `${data.summary_background_color}`}}>
      <Panel>
        <Heading>{data.summary_heading.text}</Heading>
        <Paragraph>{parse(data.summary.html)}</Paragraph>
      </Panel>
      <Panel>

      </Panel>
    </PanelContainer>
);

export default ProductSummary;
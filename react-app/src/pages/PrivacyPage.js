import React from 'react';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { FONT } from '../constants';
import { gutter, gutterMobile, respondTo, sansNormal, headingMedium } from '../constants/styles';

import { privacy as items } from '../constants/pages';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${gutterMobile}
  ${respondTo.sm`
    ${gutter}
  `}
`;
const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;
`;
const Heading = styled.div`
  width: 100%;
  text-align: center;
  ${headingMedium}
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  &.left{
    text-align:left;
  }
`;

const ItemHeading = styled.h3`
  width: 100%;
  text-align: left;
  ${headingMedium}
  margin-top: 2rem;
`;
const ItemParagraph = styled.p`
  width: 100%;
  text-align: left;
  ${sansNormal}
  margin: 2rem 0;
`;

const PrivacyPage = () => {
  const privacy_items = items.sections.map((item, i) => {
    const paragraphs = item.ps.map((paragraph, pi) => (
      <ItemParagraph key={pi}>{paragraph}</ItemParagraph>
    ))
    return (
      <div key={i}>
        <ItemHeading>{i+1}) {item.title}</ItemHeading>
        {paragraphs}
      </div>
    )
  });

  return (
    <>
      <PanelContainer>
        <PanelHeader>
          <Heading>Glendalough Distillery</Heading>
          <Title>Privacy Policy</Title>
        </PanelHeader>
        {privacy_items}
      </PanelContainer>
      <Footer className='page' />
    </>
  )
};

export default PrivacyPage;

import React from 'react';
import NavPanel from '../components/NavPanel';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { FONT } from '../constants';
import { privacy as items } from '../constants/pages';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12vw;
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
  font-size: 1.2rem;
  font-family: ${FONT.sans};
  font-weight: 700;
  text-transform: uppercase;
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
const PrivacyPage = () => {

  const privacy_items = items.sections.map((item, i) => {
    const paragraphs = item.ps.map((paragraph, pi) => (
      <p key={pi}>{paragraph}</p>
    ))
    return (
      <div key={i}>
        <h3>{item.title}</h3>
        {paragraphs}
      </div>
    )
  });

  return (
    <>
      <NavPanel currentPage={`privacy-page-${0}`} />

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

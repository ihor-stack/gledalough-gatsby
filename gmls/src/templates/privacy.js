import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { FONT } from '../constants';
import { gutter, gutterMobile, respondTo, sansNormal, headingMedium } from '../constants/styles';
import { Layout } from '../components/Layout'

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

const ContentWrapper = styled.p`
  width: 100%;
  text-align: left;
  ${sansNormal}
  margin: 2rem 0;
`;

const PrivacyPage = ({ data }) => {
    const pageContent = data.prismicPrivacyPolicyPage
    const pageData = data.prismicPrivacyPolicyPage.data
    // console.log('privacy pageContent ' , pageContent)
    
    const { lang, type, url } = pageContent
    const alternateLanguages = pageContent.alternate_languages || []
    const activeDoc = {
      lang,
      type,
      url,
      alternateLanguages,
    }

  return (
    <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
      <PanelContainer>
        <PanelHeader>
          <Heading>Glendalough Distillery</Heading>
          <Title>Privacy Policy</Title>
        </PanelHeader>
        <ContentWrapper>
          {parse(pageData.page_content.text)}
        </ContentWrapper>
      </PanelContainer>
      <Footer className='page' />
    </Layout>
  )
};

export const query = graphql`
query PrivacyPageQuery($uid: String, $id: String, $lang: String){
    prismicPrivacyPolicyPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
        _previewable
        url
        uid
        type
        id
        lang
        alternate_languages {
          id
          type
          lang
          uid
        }
        data {
            page_content {
                html
                text
            }
        }
    }
}
`
export default withPrismicPreview(PrivacyPage)

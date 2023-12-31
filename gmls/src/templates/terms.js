import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FONT, COLOR } from '../constants'
import {
  gutter,
  gutterMobile,
  respondTo,
  sansNormal,
  headingMedium,
} from '../constants/styles'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { extractSeo } from '../utils/filters'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${COLOR.warmwhite};
  ${gutterMobile}
  ${respondTo.sm`
    ${gutter}
  `}
`
const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;
`
const Heading = styled.div`
  width: 100%;
  text-align: center;
  ${headingMedium}
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  font-family: ${FONT.serif};
  font-weight: 500;
  &.left {
    text-align: left;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  text-align: left;
  ${sansNormal}
  margin: 2rem 0;
`

const TermsTemplate = ({ data }) => {
  const pageContent = data.prismicTerms
  const pageData = data.prismicTerms.data
  // console.log('terms pageContent ' , pageContent)

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const seo = extractSeo(data.prismicTerms.data)

  return (
    <Layout activeDocMeta={activeDoc}>
      <Seo {...seo} />
      <PanelContainer>
        <PanelHeader>
          <Heading>Glendalough Distillery</Heading>
          <Title>Terms & Conditions</Title>
        </PanelHeader>
        <ContentWrapper>{parse(pageData.page_content.html)}</ContentWrapper>
      </PanelContainer>
    </Layout>
  )
}

export const query = graphql`
  query termsQuery($uid: String, $id: String, $lang: String) {
    prismicTerms(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        meta_description {
          richText
          text
        }
        meta_title {
          richText
          text
        }
        page_content {
          html
          text
        }
      }
    }
  }
`
export default withPrismicPreview(TermsTemplate)

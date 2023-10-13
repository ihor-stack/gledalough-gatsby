import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FONT } from '../constants'
import {
  gutter,
  gutterMobile,
  respondTo,
  sansNormal,
  headingMedium,
} from '../constants/styles'
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

const EnjoyResponsiblyTemplate = ({ data }) => {
  const pageContent = data.prismicEnjoyresponsibly
  const pageData = data.prismicEnjoyresponsibly.data
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
    <Layout activeDocMeta={activeDoc}>
      <PanelContainer>
        <PanelHeader>
          <Heading>Glendalough Distillery</Heading>
          <Title>Enjoy Responsibily</Title>
        </PanelHeader>
        <ContentWrapper>{parse(pageData.page_content.html)}</ContentWrapper>
      </PanelContainer>
    </Layout>
  )
}

export const query = graphql`
  query enjoyResponsiblyQuery($uid: String, $id: String, $lang: String) {
    prismicEnjoyresponsibly(
      uid: { eq: $uid }
      id: { eq: $id }
      lang: { eq: $lang }
    ) {
      url
      uid
      id
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        page_content {
          text
          richText
          html
        }
      }
      _previewable
      type
      lang
    }
  }
`
export default withPrismicPreview(EnjoyResponsiblyTemplate)
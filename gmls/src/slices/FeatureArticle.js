import React from 'react'
import styled from 'styled-components'
import {
  gutter,
  respondTo,
  titleMono,
  sansNormal,
  headingLarge,
  titleLarge,
  titleMedium,
} from '../constants/styles'
import moment from 'moment'
import { PrismicRichText } from '@prismicio/react'
const PanelContainer = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
  padding: 0 10vw;
  ${respondTo.md`
    ${gutter}
    padding-right: 2.5vw;
    &:last-child {
      ${gutter}
      padding-left: 2.5vw;
    }
  `}
`

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 6rem 0 3rem 0;
`

const Heading = styled.div`
  width: 100%;
  text-align: center;
  ${headingLarge}
  font-size: 1.2rem;
  margin-top: 2rem;
  ${respondTo.md`
    margin-top: 0;
  `}
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  ${titleLarge}
  margin-top: 1rem;
`

const Date = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1.2rem;
  ${titleMono}
  font-size: 1.2rem;
  line-height: 1.2rem;
`

const Summary = styled.div`
  width: 100%;
  text-align: center;
  ${titleMedium}
`

const Content = styled.span`
  ${sansNormal}
  p:last-child {
    margin-bottom: 4rem;
  }
`

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 3rem;
`

const FeatureArticle = ({ slice }) => {
  // const index = 0; // !!! TODO: nav / state change
  // const paragraphs = content[0].primary_ps.map((paragraph, pi) => <Paragraph key={pi}>{paragraph}</Paragraph>)

  const { background_color, content, image, summary } = slice.primary
  const article = slice?.article

  return (
    <PanelContainer style={{ backgroundColor: background_color }}>
      <PanelHeader data-aos="fade-in">
        <Heading>{article?.heading?.text}</Heading>
        <Title>{article?.title?.text}</Title>
        <Date>{moment(article?.date).format('DD MMMM YYYY')}</Date>
      </PanelHeader>
      <Row>
        <Panel>
          <Summary data-aos="fade-up">{summary?.text}</Summary>
          <ImageHolder>
            <img
              className="img-fluid"
              src={image?.url}
              alt="alt placeholder"
              data-aos="fade-in"
            />
          </ImageHolder>
        </Panel>
        <Panel>
          <Content data-aos="fade-in">
            <PrismicRichText field={content?.richText} />
          </Content>
        </Panel>
      </Row>
    </PanelContainer>
  )
}

export default FeatureArticle

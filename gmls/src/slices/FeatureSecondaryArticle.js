import React from 'react'
import styled from 'styled-components'
import { gutter, respondTo, sansNormal, titleMedium } from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 4rem;
  padding: 0 10vw;
  ${respondTo.md`
    // width: 50%;
    ${gutter}
    padding-right: 2.5vw;
    &:last-child {
      ${gutter}
      padding-left: 2.5vw;
      margin-bottom: 4rem;
    }
  `}
`

const Title = styled.div`
  width: 100%;
  text-align: left;
  ${titleMedium}
  margin-top: 4rem;
`

const Content = styled.span`
  ${sansNormal}
`

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
`
const FeatureSecondaryArticle = ({ slice }) => {
  const { background_color } = slice.primary
  console.log({ slice })

  return (
    <PanelContainer style={{ backgroundColor: background_color }}>
      {slice?.items?.map((item, index) => (
        <Row key={index}>
          <Panel>
            <ImageHolder>
              <img
                className="img-fluid"
                src={item?.image?.url}
                alt="alt placeholder"
              />
            </ImageHolder>
            <Title>{item?.secondary_title?.text}</Title>
          </Panel>
          <Panel>
            <Content>
              <PrismicRichText field={item?.content?.richText} />
            </Content>
          </Panel>
        </Row>
      ))}
    </PanelContainer>
  )
}

export default FeatureSecondaryArticle

import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants'
import {
  gutter,
  respondTo,
  sansNormal,
  titleLarge,
  headingLarge,
} from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  ${gutter}
  justify-content: start;
  align-items: start;
  ${respondTo.md`
    flex-direction: row;
  `}
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 2rem;
  min-height: 75vh;
  ${respondTo.sm`
    margin-top: 0;
    flex: 1;
  `}
  ${respondTo.md`
    margin-top: 30vh;
  `}
`

const Heading = styled.h3`
  width: 100%;
  text-align: end;
  padding-right: 5vw;
  margin-top: 6rem;
  ${headingLarge}
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.2rem;
  ${respondTo.sm`
    margin-top: 12rem;
  `}
  ${respondTo.md`
    margin-top: 0;
  `}
`

const Title = styled.h2`
  width: 100%;
  text-align: start;
  ${titleLarge}
  margin-top: 6rem;
  ${respondTo.sm`
    margin-top: 0;
  `}
`

const Paragraph = styled.span`
  ${sansNormal}
  margin-top: 2rem;
  margin-right: 0;
  ${respondTo.sm`
    margin-right: 2rem;
  `}
  ${respondTo.md`
    margin-right: 0;
  `}
`

const ProductIntro = ({ slice }) => {
  const data = slice?.primary
  return (
    <PanelContainer
      style={{
        backgroundColor: `${data?.background_color || COLOR.cream}`,
      }}
    >
      <Panel>
        <Heading>{data?.heading?.text}</Heading>
      </Panel>
      <Panel>
        <Title>{data?.title?.text}</Title>
        <Paragraph>
          <PrismicRichText field={data?.body_text?.richText} />
        </Paragraph>
      </Panel>
    </PanelContainer>
  )
}

export default ProductIntro

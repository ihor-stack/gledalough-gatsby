import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants'
import {
  gutter,
  gutterRight,
  respondTo,
  sansNormal,
  titleMedium,
  headingLarge,
} from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  &.photo {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    max-width: 100%;
  }
  &.text {
    ${gutter}
    max-width: 100%;
    text-align: center;
  }
  ${respondTo.lg`
    flex: 1;
    padding: 0;
    width: 50%; 
    &.text {
      ${gutterRight}
      padding-left: 5vw;
      text-align: left;
      max-width: 50%; 
    }
  `}
`

const Heading = styled.div`
  ${headingLarge}
  letter-spacing: 0.2rem;
  margin-top: 4rem;
  ${respondTo.lg`
    margin-top: 0;
  `}
`

// const ParagraphIntro = styled.p`
//   ${titleMedium}
//   padding: 2rem 0 0 0;
//   text-align: center;
// `;

const Paragraph = styled.span`
  ${sansNormal}
  margin: 3rem 0;
  text-align: left;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${titleMedium}
    margin: 0;
    padding: 0;
    text-align: center;
  }
  ${respondTo.lg`
    margin: 0;
    padding: 2rem 0 0 4rem;
    text-align: center;
  `}
`

const DualPanel = ({ slice }) => {
  const data = slice.primary
  return (
    <PanelContainer
      style={{ backgroundColor: `${data?.background_color || COLOR.cream}` }}
    >
      <Panel
        className="photo"
        style={{ backgroundImage: `url(${data?.image?.url})` }}
      />
      <Panel className="text">
        <Heading>{data?.intro_text?.text}</Heading>
        <Paragraph>
          <PrismicRichText field={data?.body_text?.richText} />
        </Paragraph>
      </Panel>
    </PanelContainer>
  )
}

export default DualPanel

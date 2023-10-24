import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT } from '../constants'
import { gutter, respondTo, sansNormal, titleMedium } from '../constants/styles'
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
    max-width: 100%;
    min-height: 85vh;
  }
  &.text {
    ${gutter}
    padding: 4rem;
    max-width: 100%;
    text-align: center;
  }
  ${respondTo.lg`
    flex: 1;
    padding: 0;
    width: 50%; 
    &.text {
      padding-right: 5vw;
      padding-left: 5vw;
      text-align: left;
      max-width: 50%; 
    }
  `}
`

const Heading = styled.span`
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
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
    margin-bottom: 3rem;
    padding: 0;
    text-align: center;
    line-height: 40px;
    letter-spacing: 1.44px;
  }
  ${respondTo.lg`
    margin: 0;
    padding: 2rem 0 0 2rem;
    p {
      margin-left: 30%;
    }
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
        <Heading data-aos="fade-in" data-aos-delay="750">
          {data?.intro_text?.text}
        </Heading>
        <Paragraph data-aos="fade-up">
          <PrismicRichText field={data?.body_text?.richText} />
        </Paragraph>
      </Panel>
    </PanelContainer>
  )
}

export default DualPanel

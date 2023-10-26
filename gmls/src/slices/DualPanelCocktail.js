import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { COLOR, FONT } from '../constants'
import { gutter, gutterLeft, gutterRight, respondTo } from '../constants/styles'

const PanelContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  ${respondTo.md`
    flex-direction: row;
  `}
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: start;
  &.photo {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ${gutter}
  ${respondTo.md`
    &.photo {
      ${gutterRight}
    }
    &.text {
      ${gutterLeft}
    }
  `}
`
const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  font-style: 'normal';
  text-transform: uppercase;
`
const Paragraph = styled.div`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  font-style: 'normal';
`

const DualPanelCocktail = ({ slice }) => {
  const data = slice.primary
  console.log(data)
  return (
    <PanelContainer
      className="page"
      style={{ backgroundColor: `${data?.background_color || COLOR.cream}` }}
    >
      <Panel className="text" data-aos="fade-up">
        <Title>Ingredients</Title>
        <Paragraph>{parse(data?.ingredients?.html)}</Paragraph>
        <Title>Glassware</Title>
        <Paragraph>{parse(data?.glassware?.html)}</Paragraph>
        <Title>Instructions</Title>
        <Paragraph>{parse(data?.instructions?.html)}</Paragraph>
      </Panel>
      <Panel
        className="photo"
        style={{ backgroundImage: `url(${data?.image?.url})` }}
      />
    </PanelContainer>
  )
}

export default DualPanelCocktail

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, FONT } from '../constants'
import {
  gutter,
  respondTo,
  sansNormal,
  headingLarge,
  titleLarge,
} from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
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
  ${gutter}
  ${respondTo.md`
    width: 50%;
    padding-right: 2.5vw;
    &:last-child {
      ${gutter}
      padding-left: 2.5vw !important;
    }
  `}
`

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;
  margin-top: 5rem; // !!! NavHeader
`

const Heading = styled.div`
  width: 100%;
  text-align: center;
  ${headingLarge}
  font-size: 1.2rem;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  ${titleLarge}
  margin-top: 1rem;
  &.left {
    margin-top: 0;
    margin-bottom: 3rem;
    text-align: left;
  }
`

const Summary = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-family: ${FONT.serif};
`

const Paragraph = styled.p`
  ${sansNormal}
`

const ImageHolder = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 0.5rem;
  img {
    min-height: 15rem;
    width: 100%;
    object-fit: cover;
  }
`

const StoryPrimary = ({ className, bgColor, content }) => {
  // const index = 0; // !!! TODO: nav / state change

  return (
    <PanelContainer
      className={className}
      style={{ backgroundColor: `${COLOR[bgColor]}` }}
    >
      <PanelHeader>
        <Heading>{content?.heading}</Heading>
        <Title>{content?.title}</Title>
      </PanelHeader>
      <Row>
        <Panel>
          {/* <Summary>{content?.overview?.text}</Summary> */}
          <ImageHolder>
            <img
              className="img-fluid"
              src={content?.image?.url}
              alt={content?.image?.alt}
            />
          </ImageHolder>
        </Panel>
        <Panel>
          <Title className="left">{content?.content_title?.text}</Title>
          <Paragraph>
            <PrismicRichText field={content?.content?.richText} />
          </Paragraph>
        </Panel>
      </Row>
    </PanelContainer>
  )
}

StoryPrimary.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  photo: PropTypes.string,
}

export default StoryPrimary

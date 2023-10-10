import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, FONT } from '../constants'
import {
  gutter,
  gutterLeft,
  gutterRight,
  respondTo,
  buttonBlank,
  linkUnderlined,
  titleLarge,
  headingMedium,
} from '../constants/styles'
import { Link } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { useCallback } from 'react'

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
  ${gutter}
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    height: 40%;
  }
  ${respondTo.lg`
    flex: 1;
    padding: 0;
    &:first-of-type{
      ${gutterLeft}
      padding-right:5vw;
    }
    &:last-of-type{
      ${gutterRight}
      padding-left:5vw;
    }
  `}
`

const Heading = styled.h3`
  width: 100%;
  text-align: start;
  margin-top: 2rem;
  ${headingMedium}
`

const Title = styled.h2`
  width: 100%;
  text-align: start;
  ${titleLarge}
`

const Subtitle = styled.span`
  width: 100%;
  text-align: start;
  font-size: 1.2rem !important;
  line-height: 1.6rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  h3 {
    font-size: 1.2rem !important;
  }
`

const Button = styled.button`
  ${buttonBlank}
  margin-right: auto;
  padding-left: 0;
  > a {
    ${linkUnderlined}
  }
`

const StoryPanel = ({ slice }) => {
  const renderItem = useCallback((items, direction) => {
    return (
      <PanelContainer>
        {items?.map(({ chapters }, index) => {
          const left =
            (index % 2 == 0 && direction === 'left') ||
            (index % 2 !== 0 && direction === 'right')
          const { document, slug } = chapters
          const { data } = document

          return (
            <Panel
              key={index}
              style={{
                backgroundColor: `${left ? COLOR.beige : COLOR.warmwhite}`,
              }}
            >
              {left && (
                <img
                  src={data?.featured_image?.url}
                  className="img-fluid"
                  alt="alt placeholder"
                />
              )}
              <Heading>{data?.heading?.text}</Heading>
              <Title>{data?.title?.text}</Title>
              {data?.overview?.richText?.length !== 0 && (
                <Subtitle>
                  <PrismicRichText field={data?.overview?.richText} />
                </Subtitle>
              )}
              <Button>
                <Link to={`/our-story/${data?.slug}`}>Learn more</Link>
              </Button>
            </Panel>
          )
        })}
      </PanelContainer>
    )
  }, [])
  return (
    // render first 2 items
    <>
      {renderItem(slice?.items?.slice(0, 2), 'left')}
      {/* render the rest */}
      {renderItem(slice?.items?.slice(2), 'right')}
    </>
  )
}

StoryPanel.propTypes = {
  className: PropTypes.string,
  imgLeft: PropTypes.string,
  imgRight: PropTypes.string,
  panelLeft: PropTypes.object,
  panelRight: PropTypes.object,
}

export default StoryPanel

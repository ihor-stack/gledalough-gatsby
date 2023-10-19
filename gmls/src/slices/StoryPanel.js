import React from 'react'
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
  .img-container {
    width: 100%;
    margin-top: -8rem;
    margin-bottom: 5rem;
    &.left {
      margin-left: -5vw;
    }
    &.right {
      margin-right: -5vw;
      display: flex;
      justify-content: end;
    }
    img {
      min-height: 21rem;
      object-fit: cover;
    }
  }
  ${respondTo.lg`
    flex: 1;
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
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const Title = styled.h2`
  width: 100%;
  text-align: start;
  margin-bottom: 1rem;
  ${titleLarge}
`

const Subtitle = styled.span`
  width: 100%;
  text-align: start;
  font-size: 1rem;
  line-height: 1.6rem;
  font-family: ${FONT.sans};
  letter-spacing: 0.96px;
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
  console.log(slice)
  const renderItem = useCallback((items, direction) => {
    return (
      <PanelContainer>
        {items?.map(({ chapters }, index) => {
          const left =
            (index % 2 == 0 && direction === 'left') ||
            (index % 2 !== 0 && direction === 'right')
          const right = !left && index % 2 !== 0 && direction === 'right'

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
                <div className={`img-container ${direction}`}>
                  <img
                    src={data?.featured_image?.url}
                    className="img-fluid"
                    alt="alt placeholder"
                  />
                </div>
              )}
              {right && (
                <div className={`img-container ${direction}`}>
                  <img
                    src={data?.featured_image?.url}
                    className="img-fluid"
                    alt="alt placeholder"
                  />
                </div>
              )}
              <Heading>{data?.heading?.text}</Heading>
              <Title>{data?.title?.text}</Title>
              {data?.overview?.richText?.length !== 0 && (
                <Subtitle>
                  <PrismicRichText field={data?.overview?.richText} />
                </Subtitle>
              )}
              <Button>
                <Link to={`/our-story/${slug}`}>Learn more</Link>
              </Button>
            </Panel>
          )
        })}
        {!items[1] && (
          <Panel style={{ backgroundColor: `${COLOR.beige}` }}></Panel>
        )}
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

export default StoryPanel

import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { FONT, COLOR } from '../constants'
import {
  gutterWidth,
  headingLarge,
  titleLargest,
  buttonRounded,
} from '../constants/styles'
import { Link } from 'gatsby'

const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${COLOR.warmwhite};
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
  width: 100%;
  max-width: 100%;
  height: calc(100vh - 6rem);
`

const Nav = styled.nav`
  position: absolute;
  left: ${gutterWidth};
  bottom: -1rem;
  right: 0;
  height: 6rem;
  li {
    color: ${COLOR.grey};
    padding-bottom: 0.2rem;
    cursor: pointer;
    margin-right: 1rem;
    font-size: 0.75rem;
    line-height: 1.4rem;
    letter-spacing: 0.1rem;
    font-family: ${FONT.monospace};
    font-weight: 400;
    font-style: 'normal';
    text-transform: uppercase;
    &.active {
      color: ${COLOR.black};
      border-bottom: 1.5px ${COLOR.black} solid;
    }
  }
`
const TextContainer = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Heading = styled.h1`
  ${headingLarge}
  color: ${COLOR.white};
`
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
`
const Button = styled(Link)`
  pointer-events: all;
  ${buttonRounded}
  margin-top: 1rem;
  padding: 1rem 1.6rem;
  color: ${COLOR.white};
  border-color: ${COLOR.white};
  text-decoration: none;
`

const StoryArticle = ({ slice }) => {
  const carousel = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const handleDragStart = (e) => e.preventDefault()

  const slides = slice?.items?.map((item, i) => (
    <Panel
      key={i}
      onDragStart={handleDragStart}
      role="presentation"
      style={{ backgroundImage: `url(${item?.slider_image?.url})` }}
    />
  ))

  return (
    <PanelContainer>
      <TextContainer>
        <Heading>
          {slice.primary.heading.text ? slice.primary.heading.text : 'Explore'}
        </Heading>
        <Title>
          {slice.primary.title.text ? slice.primary.title.text : 'Our Story'}
        </Title>
        <Button to="/our-story">{slice.primary.link_text.text}</Button>
      </TextContainer>

      <AliceCarousel
        key="carousel"
        activeIndex={activeIndex}
        onSlideChanged={(e) => setActiveIndex(e.item)}
        items={slides}
        mouseTracking
        disableDotsControls
        disableButtonsControls
        ref={carousel}
      />
      <Nav>
        <ul className="nav flex-row">
          {slice?.items?.map((item, i) => (
            <li
              className={`nav-item ${activeIndex === i ? 'active' : ''}`}
              key={i}
              onClick={() => {
                carousel?.current?.slideTo(i)
                setActiveIndex(i)
              }}
              aria-hidden
            >
              0{i + 1}
            </li>
          ))}
        </ul>
      </Nav>
    </PanelContainer>
  )
}

export default StoryArticle

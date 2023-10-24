import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import useCurrentLocation from '../hooks/useCurrentLocation'
import { COLOR, FONT } from '../constants'
import { respondTo, headingLarge, titleLargest } from '../constants/styles'
import logo from '../assets/ic_glendalough.svg'
import ic_arrow_down from '../assets/ic_arrow_down.png'

const PanelContainer = styled.div`
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-top: -4rem;
    max-width: 300px;
    ${respondTo.xs`
      max-width: 400px;
    `}
    ${respondTo.sm`
      max-width: 480px; 
    `}
    ${respondTo.md`
      max-width: none; 
    `}
  }
`

const Heading = styled.h1`
  color: ${COLOR.black};
  font-family: ${FONT.sans};
  font-size: 1rem;
  font-weight: 600;
  font-style: 'normal';
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  color: ${COLOR.white};
`
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
  margin-top: 0.5rem;
`

const ArrowContainer = styled.span`
  position: absolute;
  bottom: 4rem;
  left: 0;
  right: 0;
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 50;
  .icon-arrow {
    cursor: pointer;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${ic_arrow_down});
    width: 46px;
    height: 22px;
  }
`

const HeroVideo = ({ slice }) => {
  const parallaxText = useParallax({
    speed: -33,
  })
  const { pathname, currentPage } = useCurrentLocation()
  const backgroundImage = slice.primary.background_image.url
  const videoURL = slice.primary.video_url?.url
  const heading = slice.primary.heading.text
  const title = slice.primary.title.text
  return (
    <PanelContainer
      className="page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div ref={parallaxText.ref}>
        {heading && <Heading>{heading}</Heading>}
        {title && <Title>{title}</Title>}
        {!heading && !title && (
          <div>
            <img src={logo} className="nav-logo" alt="Glendalough logo" />
          </div>
        )}
      </div>
      <ArrowContainer>
        <div
          className="icon-arrow"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              left: 0,
              behavior: 'smooth',
            })
          }}
        ></div>
      </ArrowContainer>
    </PanelContainer>
  )
}

export default HeroVideo

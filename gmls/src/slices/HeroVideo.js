import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import { COLOR } from '../constants'
import { respondTo, headingLarge, titleLargest } from '../constants/styles'
import logo from '../assets/ic_glendalough.svg'

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
  ${headingLarge}
  text-align:center;
  color: ${COLOR.white};
`
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
`

const HeroVideo = ({ slice }) => {
  const parallaxText = useParallax({
    speed: -33,
  })
  const backgroundImage = slice.primary.background_image.url
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
    </PanelContainer>
  )
}

export default HeroVideo

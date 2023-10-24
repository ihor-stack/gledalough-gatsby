import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import { COLOR } from '../constants'
import { respondTo, heroTitleText } from '../constants/styles'

const PanelContainer = styled.div`
  display: flex;
  background-color: ${COLOR.beige};
`
const TextContainer = styled.div`
  padding: 0 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo.sm`
    padding: 0 20vw;
  `}
`
const HeroTitle = styled.h2`
  ${heroTitleText}
  text-align: center;
`

const HeroText = ({ slice }) => {
  const parallaxText = useParallax({
    speed: -10,
  })
  const backgroundColor = slice.primary.background_color
  const title = slice.primary.title.text
  return (
    <PanelContainer
      className="page"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <TextContainer>
        <HeroTitle data-aos="fade-up">
          <div ref={parallaxText.ref}>{title}</div>
        </HeroTitle>
      </TextContainer>
    </PanelContainer>
  )
}

export default HeroText

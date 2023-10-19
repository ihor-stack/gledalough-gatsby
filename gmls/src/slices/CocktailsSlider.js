import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { FONT, COLOR } from '../constants'
import {
  gutter,
  titleMedium,
  buttonBlank,
  buttonRounded,
  linkUnderlined,
} from '../constants/styles'
import img_bg_texture from '../assets/bg_textured_paper.jpg'

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${img_bg_texture});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
`

const PanelHeader = styled.h3`
  text-align: center;
  width: 100%;
  font-family: ${FONT.serif};
  font-style: 'normal';
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.2rem;
  margin-bottom: 2rem;
`

const SliderContainer = styled.div`
  ${gutter}
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const SliderItem = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
`

const SlideButton = styled.button`
  ${buttonBlank}
  > a {
    display: inline-flex;
    ${linkUnderlined}
  }
`

const ButtonMore = styled.button`
  pointer-events: all;
  ${buttonRounded}
  margin: 0 auto;
  margin-top: 1.5rem;
  padding: 1rem 1.6rem;
  color: ${COLOR.black};
  border-color: ${COLOR.black};
  text-decoration: none;
  > a {
    color: ${COLOR.black};
    padding: 0.5rem 0.2rem;
    margin: 0 auto;
    background: none;
    border: none;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
    font-family: ${FONT.monospace};
    font-weight: 400;
    font-style: 'normal';
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid ${COLOR.black};
    border-bottom: 0;
  }
`

const Title = styled.h3`
  margin-top: 1rem;
  width: 100%;
  ${titleMedium}
`

const Image = styled.img`
  border: 10px solid ${COLOR.cream};
  box-shadow: 1px 1px 1px 1px ${COLOR.beige};
  width: 95%;
  border-radius: 50% 50% 0 0;
  height: 28rem;
  object-fit: cover;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: 'fill',
  },
}

const CocktailsSlider = ({ slice }) => {
  const slides = slice?.items?.map(({ show_link, link_text, item }, i) => (
    <SliderItem key={i}>
      <Image
        src={item?.document?.data?.thumbnail?.url}
        alt={item?.document?.data?.thumbnail?.alt}
      />
      <Title>{item?.document?.data?.title?.text}</Title>
      {show_link && (
        <SlideButton>
          <Link to={item?.url}>{link_text?.text}</Link>
        </SlideButton>
      )}
    </SliderItem>
  ))

  return (
    <PanelContainer>
      <PanelHeader>{slice?.primary?.title?.text}</PanelHeader>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
      <ButtonMore>
        <Link to="/cocktails">Discover more</Link>
      </ButtonMore>
    </PanelContainer>
  )
}

export default CocktailsSlider

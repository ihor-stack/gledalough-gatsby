import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { COLOR } from '../constants'
import {
  gutter,
  titleMedium,
  buttonBlank,
  linkUnderlined,
} from '../constants/styles'
import img_gin from '../assets/home_irish_gin.jpg'
import img_whiskey from '../assets/home_irish_whiskey.jpg'
import img_poitin from '../assets/home_irish_poitin.jpg'

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${gutter}
  background-color: ${COLOR.warmwhite};
`
const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
`
const SliderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  margin-top: 20vh;
`

const Button = styled.button`
  ${buttonBlank}
  > a {
    ${linkUnderlined}
  }
`

const Title = styled.h3`
  ${titleMedium}
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 90%;
  border-radius: 50% 50% 0 0;
  max-height: 28rem;
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

const DrinksPanel = ({ slice }) => {
  const slides = slice?.items?.map(({ link, link_text, title, image }, i) => (
    <SliderItem key={i} data-aos="fade-up" data-aos-delay={300 * i}>
      <Image
        src={image?.url}
        alt={image?.alt}
        onClick={() => navigate(link?.url)}
      />
      <Title>{title?.text}</Title>
      <Button>
        <Link to={link?.url}>{link_text?.text}</Link>
      </Button>
    </SliderItem>
  ))

  return (
    <PanelContainer>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
    </PanelContainer>
  )
}

export default DrinksPanel

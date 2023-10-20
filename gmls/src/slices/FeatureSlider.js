import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
//import { useRef, useEffect } from 'react';
import { COLOR } from '../constants'
import {
  gutter,
  respondTo,
  titleMedium,
  titleLargest,
  titleMono,
} from '../constants/styles'
import { navigate } from 'gatsby'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  ${gutter}
  ${respondTo.lg`
    flex-direction: row;
  `}
`
const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 50vh;
`
const SliderItem = styled.div`
  width: 100%;
  flex-shrink: 0;
  justify-content: start;
  align-items: start;
  cursor: pointer;
`
const FeatureHeading = styled.h2`
  margin-top: 4rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  ${titleLargest}
  max-height: 50vh;
`
const ItemDate = styled.h3`
  ${titleMono}
  width: 100%;
  text-align: left;
`
const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  padding-right: 2rem;
  margin: 0 auto;
  min-height: 320px;
  max-width: 90%;
  overflow: hidden;
`
const ItemImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.4s;
  &:hover{
    transform: scale(1.2);
  }
`
const ItemTitle = styled.h3`
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  background: rgba(35, 31, 32, 0.6);
  ${titleMedium}
  color: ${COLOR.white};
  padding: 1rem;
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

const FeatureSlider = ({ slice }) => {
  console.log({ slice })
  const handleDragStart = (e) => e.preventDefault()

  const COORDS = {
    xDown: null,
    xUp: null,
  }

  const handleOnMouseDown = (e) => {
    e.preventDefault()
    COORDS.xUp = null
    COORDS.xDown = null
    COORDS.xDown = e.clientX
  }

  const handleMouseUp = (e) => {
    e.preventDefault()
    COORDS.xUp = e.clientX
  }

  const handleOnClick = (e, url) => {
    if (COORDS.xDown !== COORDS.xUp) {
      e.preventDefault()
    } else {
      navigate(url)
    }
  }

  const slides = slice?.items?.map(
    ({ item: { url, document, ...item } }, i) => (
      <SliderItem
        key={i}
        role="presentation"
        onDragStart={handleDragStart}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleMouseUp}
        onClick={(e) => handleOnClick(e, url)}
      >
        {document?.data?.date && <ItemDate>{document?.data?.date}</ItemDate>}
        <ImageContainer>
          <ItemImage
            style={{
              backgroundImage: `url(${document?.data?.thumbnail?.url || document?.data?.image?.url
                })`,
            }}
          >
          </ItemImage>
          <ItemTitle>{document?.data?.title?.text}</ItemTitle>
        </ImageContainer>
      </SliderItem>
    ),
  )

  return (
    <PanelContainer
      style={{
        backgroundColor: `${slice?.primary?.background_color || COLOR.beige}`,
      }}
    >
      <FeatureHeading>{slice?.primary?.category?.text}</FeatureHeading>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
    </PanelContainer>
  )
}

export default FeatureSlider

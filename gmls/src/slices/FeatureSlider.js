import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { COLOR } from '../constants'
import {
  respondTo,
  titleMedium,
  titleLargest,
  titleMono,
  gutterLeft,
  gutter,
  gutterRight,
  buttonBlank,
} from '../constants/styles'
import { navigate } from 'gatsby'
import { slugify } from '../utils/filters'
import moment from 'moment'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  ${(props) => (props['data-items-count'] > 3 ? gutterLeft : gutter)}
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
  padding-right: 1rem;
  ${(props) =>
    props['index'] === props['total'] - 1 &&
    `
    padding-left: 1rem;
    padding-right: 0;
  `}
  ${(props) =>
    props['index'] !== props['total'] - 1 &&
    `
    padding-left: 1rem;
    padding-right: 1rem;
  `}
  ${(props) =>
    props['index'] === 0 &&
    `
    padding-left: 0;
    padding-right: 1rem;
  `}
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
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ItemDate = styled.h3`
  ${titleMono}
  width: 100%;
  text-align: left;
  font-size: 0.85rem;
`
const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  padding-right: 2rem;
  min-height: 320px;
  max-width: 100%;
  overflow: hidden;
  ${(props) =>
    props.centered &&
    `
    margin: 0 auto;
  `}
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
  &:hover {
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

const Arrow = styled.button`
  ${buttonBlank}
  &:first-child {
    margin-right: 3rem;
  }
  &:last-child {
    transform: rotate(180deg);
  }
`

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) => props['data-items-count'] > 3 && gutterRight}
`

const FeatureSlider = ({ slice }) => {
  const percent = 0.15
  const section = useRef(null)
  const sliderRef = useRef(null)
  const [padding, setPadding] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

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

  const syncState = () => {
    const { current } = section
    if (current) {
      setPadding(current.offsetWidth * percent)
    }
  }

  useEffect(syncState, [])

  const slides = slice?.items?.map(
    ({ item: { url, document, ...item } }, i) => (
      <SliderItem
        key={i}
        role="presentation"
        onDragStart={handleDragStart}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleMouseUp}
        onClick={(e) => handleOnClick(e, url)}
        data-active-index={activeIndex}
        data-index={i}
        data-total={slice?.items?.length}
      >
        {document?.data?.date && (
          <ItemDate>
            {moment(document?.data?.date).format('DD MMMM YYYY')}
          </ItemDate>
        )}
        <ImageContainer>
          <ItemImage
            style={{
              backgroundImage: `url(${
                document?.data?.thumbnail?.url || document?.data?.image?.url
              })`,
            }}
          ></ItemImage>
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
      data-category={slugify(slice?.primary?.category?.text)}
      data-items-count={slice?.items?.length}
    >
      <HeadingContainer>
        <FeatureHeading>{slice?.primary?.category?.text}</FeatureHeading>

        {slice?.items?.length > 3 && (
          <ArrowContainer data-items-count={slice?.items?.length}>
            <Arrow onClick={(e) => sliderRef?.current?.slidePrev(e)}>
              <svg
                width="16"
                height="34"
                viewBox="0 0 15 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.3031 1L1.10937 16.5L14.3031 32" stroke="black" />
              </svg>
            </Arrow>
            <Arrow onClick={(e) => sliderRef?.current?.slideNext(e)}>
              <svg
                width="16"
                height="34"
                viewBox="0 0 15 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.3031 1L1.10937 16.5L14.3031 32" stroke="black" />
              </svg>
            </Arrow>
          </ArrowContainer>
        )}
      </HeadingContainer>
      <SliderContainer ref={section}>
        <AliceCarousel
          ref={sliderRef}
          activeIndex={activeIndex}
          mouseTracking
          items={slides}
          responsive={responsive}
          paddingRight={slice?.items?.length > 3 ? padding : 0}
          onResized={syncState}
        />
      </SliderContainer>
    </PanelContainer>
  )
}

export default FeatureSlider

import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { COLOR } from '../constants'
import {
  gutter,
  respondTo,
  sansNormal,
  titleMedium,
  titleLarge,
  buttonBlank,
} from '../constants/styles'
import DualPanelFeature from '../components/DualPanelFeature'
import useGinFeatureState from '../hooks/useGinFeatureState'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  ${gutter}
  padding-bottom: 6rem;
`
const Title = styled.h3`
  ${titleLarge}
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
  padding-top: 3rem;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
  align-items: start;
`
const HalfColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: start;
  align-items: start;
  ${respondTo.md`
    flex: 1;
  `}
`
const Features = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  display: none;
  ${respondTo.md`
    display: flex;
  `}
`

const Paragraph = styled.div`
  ${sansNormal}
  margin: 1rem 0;
  ${respondTo.md`
    margin: 0 4rem 0 0;
  `}
`

const FeatureTitle = styled.h3`
  ${titleMedium}
  color: ${COLOR.white};
`

const FeatureContent = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  background: rgba(35, 31, 32, 0.6);
  padding: 1rem;
`

const FeatureAction = styled.button`
  ${buttonBlank}
  ${sansNormal}
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-decoration: underline;
  font-weight: 600;
  opacity: 0;
  display: none;
`
const Feature = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 30%;
  max-width: 30%;
  margin-right: 3%;
  height: 20rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${FeatureContent} {
    min-height: 0;
    max-height: 6rem;
  }
  &:hover {
    ${FeatureContent} {
      transition: all 0.2s ease-in-out;
      background: rgba(255, 255, 255, 0.8);
      max-height: 100%;
      ${FeatureTitle} {
        color: ${COLOR.black};
      }
      ${FeatureAction} {
        opacity: 1;
        display: block;
        margin: 0 auto;
      }
    }
  }
  &.slide {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
  }
`

const FeaturesSlider = styled.div`
  display: flex;
  margin-top: 2rem;
  ${respondTo.md`
    display: none;
  `}
`
const SliderItem = styled.div`
  width: 100%;
`
const responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  992: {
    items: 3,
    itemsFit: 'fill',
  },
}

const FeaturesPanel = ({ slice }) => {
  const primary = slice.primary
  const items = slice.items

  const { feature, loadFeature } = useGinFeatureState()

  // DESKTOP
  const features = items?.map((item, i) => (
    <Feature
      key={i}
      style={{ backgroundImage: `url(${item.image?.url})` }}
      onClick={() => loadFeature(i + 1)}
      data-aos="fade-in"
      data-aos-delay={300 * i}
    >
      <FeatureContent>
        <FeatureTitle>{item.title?.text}</FeatureTitle>
        <FeatureAction>Expand</FeatureAction>
      </FeatureContent>
    </Feature>
  ))

  // MOBILE
  const handleDragStart = (e) => e.preventDefault()
  const slides = items?.map((item, i) => (
    <SliderItem
      key={i}
      onDragStart={handleDragStart}
      data-aos="fade-in"
      data-aos-delay={300 * i}
      role="presentation"
    >
      <Feature
        className="slide"
        key={i}
        style={{ backgroundImage: `url(${item.image?.url})` }}
        onClick={() => loadFeature(i + 1)}
      >
        <FeatureTitle>{item.title?.text}</FeatureTitle>
      </Feature>
    </SliderItem>
  ))

  return (
    <PanelContainer
      style={{ backgroundColor: `${primary?.background_color || COLOR.beige}` }}
    >
      <Title data-aos="fade-in">{primary?.title?.text}</Title>
      <Row>
        <HalfColumn data-aos="fade-up">
          <Paragraph>
            <PrismicRichText field={primary?.body_text_1?.richText} />
          </Paragraph>
        </HalfColumn>
        <HalfColumn>
          <Paragraph data-aos="fade-up" data-aos-delay="300">
            <PrismicRichText field={primary?.body_text_2?.richText} />
          </Paragraph>
        </HalfColumn>
      </Row>
      {!feature && <Features>{features}</Features>}
      {!feature && (
        <FeaturesSlider>
          <AliceCarousel mouseTracking items={slides} responsive={responsive} />
        </FeaturesSlider>
      )}
      {feature > 0 && (
        <DualPanelFeature
          className="feature"
          title={items?.[feature - 1]?.title?.text}
          bgColor={items?.[feature - 1]?.background_color}
          image={items?.[feature - 1]?.image?.url}
          content={items?.[feature - 1]?.content?.richText}
          close={loadFeature}
        />
      )}
    </PanelContainer>
  )
}

export default FeaturesPanel

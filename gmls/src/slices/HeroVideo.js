import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import useCurrentLocation from '../hooks/useCurrentLocation'
import { COLOR, FONT } from '../constants'
import { respondTo, titleLargest } from '../constants/styles'
import logo from '../assets/ic_glendalough.svg'
import ic_arrow_down from '../assets/ic_arrow_down.png'

const PanelContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    background-image: url('https://images.prismic.io/zootest/4e514c05-7972-49e9-b340-f32ba3a2201e_bg_hero_home.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 2s ease-in-out;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1.5s ease-in-out;
    transform: ${(props) => props['data-transform']};
  }
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
  const [transform, setTransform] = React.useState('scale(1.1)')
  const parallaxText = useParallax({
    speed: -33,
  })
  const { pathname, currentPage } = useCurrentLocation()
  const backgroundImage = slice.primary.background_image.url
  const videoURL = slice.primary.video_url?.url
  const heading = slice.primary.heading.text
  const title = slice.primary.title.text

  useEffect(() => {
    setTransform('scale(1)')
    // wait 1500ms, then reset scale
    let tm = setTimeout(() => {
      setTransform('')
    }, 1500)
    return () => {
      clearTimeout(tm)
    }
  }, [])
  return (
    <PanelContainer className="page" data-transform={transform}>
      {/* <PanelBackground
        style={{ backgroundImage: `url(${backgroundImage})`, ...styles }}
      /> */}
      <div ref={parallaxText.ref} style={{ zIndex: 10 }}>
        {heading && <Heading>{heading}</Heading>}
        {title && <Title>{title}</Title>}
        {!heading && !title && (
          <div data-aos="fade-up" data-aos-duration="3000">
            <img src={logo} className="nav-logo" alt="Glendalough logo" />
          </div>
        )}
      </div>
      <ArrowContainer>
        <div
          role="button"
          tabIndex="0"
          className="icon-arrow"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              left: 0,
              behavior: 'smooth',
            })
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth',
              })
            }
          }}
        ></div>
      </ArrowContainer>
    </PanelContainer>
  )
}

export default HeroVideo

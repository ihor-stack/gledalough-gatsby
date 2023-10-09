import React, {useEffect, useRef} from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import * as mobileVideo from '../../../static/videos/mobile'
import * as desktopVideo from '../../../static/videos/desktop'


const VideoSlide = ({slide, video}) => {
  const { width } = useWindowSize()
  const playerRef = useRef()
  const { slide_copy_sm, slide_copy_lg, background_image} = slide
  const { video_link, video_link_mobile } = video


  useEffect(()=>{
    if (!playerRef?.current) return

    playerRef.current.addEventListener('suspend', () => {
      playerRef.current.play()
    });

  },[])

  return (
      <div className={`video-slider__slide`}
           key={slide_copy_sm.text}
           style={{backgroundImage: `url(${background_image.url})`}}>
        <div className='video-slider__content-wrap'>
          <p className='video-slider__subtitle'>
            {slide_copy_sm?.richText.map((row) => {
              return  <span key={row.text}>{row.text}<br/></span>
            }) }
          </p>
          <h4 className='video-slider__title'>
            {slide_copy_lg?.richText.map((row) => {
              return  <span key={row.text}>{row.text}<br/></span>
            }) }
          </h4>
        </div>
        <video className='video-slider__video'
               ref={playerRef}
               src={width <= 992 ? video_link_mobile : video_link}
               width="100%"
               height="100%"
               playsInline
               autoPlay
               loop
               muted/>
      </div>)
}

export const VideoSliderSection = ({ slice }) => {
  const refVideoSlider = useRef(null)

  const videos = [
    {
      video_link: desktopVideo.water,
      video_link_mobile: mobileVideo.water
    },
    {
      video_link: desktopVideo.bubbles,
      video_link_mobile: mobileVideo.bubbles
    },
    {
      video_link: desktopVideo.wave,
      video_link_mobile: mobileVideo.wave
    }
  ]

  return (
      <section className='video-slider' ref={refVideoSlider}>
        <div>
          {slice?.items.map(( slide, index )=>{
            console.log(videos[index])
            return    <VideoSlide slide={slide} key={`slide-${index}`} video={videos[index]}/>
          })}
        </div>
      </section>
  )
}
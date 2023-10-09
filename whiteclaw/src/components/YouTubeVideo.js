import React from 'react'

export const YoutubeVideo = ({youtubeSrc}) => {

  return (<>
    { youtubeSrc && <div className="youtube__inline-video">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
            id="video"
            className=""
            title='White Claw'
            src={`${youtubeSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        >
        </iframe>
      </div>
    </div> }
  </>)
}
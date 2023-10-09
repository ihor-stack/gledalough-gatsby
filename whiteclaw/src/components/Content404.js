// core
import React from "react";

import Layout404 from '../components/Layout-404'
import { Seo } from '../components/Seo'
import { Link } from 'gatsby'

//assets
import whiteclawWaveVideo from '../assets/videos/white-claw-website-wave-cinemagraph.mp4';

const Content404 = ({
  Content404ActiveDocMeta,
  Content404CustomPage,
  Content404CurrentPage,
  Content404SeoMetaTitle,
  Content404SeoMetaDescription,
  Content404SeoImage,
  Content404H1Text,
  Content404H4Text,
  Content404LinkURL,
  Content404LinkText,
}) => {
  return (
    <Layout404 currentPage={Content404CurrentPage} customPage={Content404CustomPage} activeDocMeta={Content404ActiveDocMeta}>
      <Seo
        title={Content404SeoMetaTitle ? Content404SeoMetaTitle.text : null}
        description={Content404SeoMetaDescription ? Content404SeoMetaDescription.text : null}
        image={Content404SeoImage ? Content404SeoImage.url : null}
      />
      <section className="inside-content error-404">
        <div className="error-404__sign-wrapper">
          <video autoPlay={true} playsInline={true} muted={true} loop={true}>
            <source src={whiteclawWaveVideo} type="video/mp4" />
          </video>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 70" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%"></rect>
                <g transform="translate(72,10) scale(0.82)">
                  <path d="M48,41.72H41.44v8.4h-16v-8.4H0V31.22L20.79,1.12H37.73L19.25,28.91H25.9V21.42H41.44v7.49H48Z"></path>
                  <path d="M60.93,48.2a20.73,20.73,0,0,1-7.84-8.82,31,31,0,0,1-2.83-13.76,30.9,30.9,0,0,1,2.83-13.75A20.81,20.81,0,0,1,60.93,3,21.82,21.82,0,0,1,72.45,0,21.76,21.76,0,0,1,84,3a20.75,20.75,0,0,1,7.84,8.83,30.89,30.89,0,0,1,2.84,13.75A31,31,0,0,1,91.8,39.38,20.66,20.66,0,0,1,84,48.2a21.67,21.67,0,0,1-11.51,3A21.73,21.73,0,0,1,60.93,48.2ZM78.05,25.62q0-12.39-5.6-12.39t-5.6,12.39Q66.85,38,72.45,38T78.05,25.62Z"></path>
                  <path d="M146.23,41.72h-6.51v8.4h-16v-8.4H98.28V31.22l20.79-30.1H136L117.53,28.91h6.65V21.42h15.54v7.49h6.51Z"></path>
                </g>
              </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%"></rect>
          </svg>
        </div>
        <div className="container-fluid inside-content-row">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1>{Content404H1Text}</h1>
                    <h4>{Content404H4Text}</h4>
                    <Link to={Content404LinkURL || "/"} _target="self" className="button-style-1">
                      {Content404LinkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout404>
  );
};

export default Content404;

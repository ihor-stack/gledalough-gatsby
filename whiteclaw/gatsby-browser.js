import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { PrismicProvider } from '@prismicio/react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { OneTrustProvider } from './src/components/OneTrustContext';

import OneTrustCookies from "./src/components/OneTrustCookies";

import { htmlSerializer } from './src/utils/htmlSerializer'
import { repositoryConfigs } from './src/utils/prismicPreviews'
import { linkResolver } from './src/utils/linkResolver'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import 'bootstrap/dist/css/bootstrap.min.css'
import './src/assets/css/styles.scss'

export const wrapRootElement = ({ element }) => (
<OneTrustProvider>
  <ParallaxProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
          )}
          richTextComponents={htmlSerializer}
          >
        <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
            {element}
          <OneTrustCookies/>
        </PrismicPreviewProvider>
      </PrismicProvider>
  </ParallaxProvider>
</OneTrustProvider>
)

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// ES5 way
// exports.onRouteUpdate = () => {
// ES6 way
// export const onRouteUpdate = () => {
//   window.analytics && window.analytics.page();
// };
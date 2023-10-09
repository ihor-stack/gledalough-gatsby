import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { repositoryConfigs } from './src/utils/prismicPreviews'

export const wrapRootElement = ({ element }) => (
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
        {element}
    </PrismicPreviewProvider>
)

export const onRenderBody = ({setBodyAttributes, setPreBodyComponents, setHeadComponents, setPostBodyComponents }, pluginOptions) => {
    setHeadComponents([
        <link as="script" rel="preload" href="/scripts/preloader.js" key='preloader'/>,
        <noscript key='preloader-1'><link rel="stylesheet" href="/styles/noscript.css" /></noscript>
    ])

    setBodyAttributes({
        className: 'preloader_active',
    });

    setPreBodyComponents([
        <div id="preloader" key='preloader-2'>
            <img src="/logo-blk.png" alt="logo" style={{"height": "calc(3vw + 77px)"}} />
            <div className="dot-flashing"></div>
        </div>
    ])

    setPostBodyComponents([
        <script src="/scripts/preloader.js" key='preloader-3'/>
    ])
};
// gatsby-config.js
const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'White Claw US',
    description: 'Crafted with quality ingredients, White Claw® Hard Seltzer is made from a blend of seltzer water, our gluten-free alcohol base, and a hint of fruit flavor.',
    siteUrl: 'https://www.whiteclaw.com',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: '@whiteclaw',
    pinterestDomainVerify: 'f54b03a588d3c7bda5612bd3c74cc8d0',
    googleSearchConsole: 'WNQN1m7UbyTMklHMJipAIh7akMWJQ6GIbsOzfuYFxog',
    bingWebMaster: 'B030043A25801A3B080DB5C7A09C63DD',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 80,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'tracedSVG',
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon-icons', 'favicon.png'),
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-556QGLZ",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",

        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        //
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        }
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: 'HSLB6As1kQkXDbTAmIKg7L1bbekNhFTb',
  
        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: 'qBn58ZgspH0wo5Ya3Lc0IZRT0tg4X8q4',
  
        // Boolean indicating if you want this plugin to perform any automated analytics.page() calls
        // at all, or not.
        // If set to false, see below on how to track pageviews manually.
        // 
        // This plugin will attempt to intelligently prevent duplicate page() calls.
        // 
        // Default: true
        trackPage: false,
  
        // Boolean indicating if you want this plugin to perform a page() call immediately once the snippet
        // is loaded.
        // 
        // You might want to disable this if you *only* want page() calls to occur upon Client-side routing
        // updates. See `trackPageOnRouteUpdate` option.
        // 
        // This plugin will still attempt to intelligently prevent duplicate page() calls.
        // 
        // Default: true
        trackPageImmediately: false,
  
        // Boolean indicating whether to ignore `page` calls by this plugin before we call `analytics.load`
        // and/or the `ready` event has been emitted by `analytics`.
        // 
        // Useful in some cases to prevent issues "queuing" `page` events before Segment is fully loaded.
        trackPageOnlyIfReady: true,
  
        // Boolean indicating whether to perform any page() calls during Client-side routing updates.
        // 
        // You might want to disable `trackPageImmediately` if you *only* want page() calls to occur upon
        // Client-side routing updates.
        // 
        // This plugin will still attempt to intelligently prevent duplicate page() calls.
        // 
        // Default: true
        trackPageOnRouteUpdate: true,
  
        // Number indicating what delay (in ms) should be used when calling analytics.page() in response
        // to a Gatsby `onRouteUpdate` event. This can help to ensure that the segment route tracking is 
        // in sync with the actual Gatsby route. Otherwise you can end up in a state where the Segment
        // page tracking reports the previous page on route change.
        // 
        // See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/ for more information.
        // 
        // Default: 50
        trackPageOnRouteUpdateDelay: 50,
  
        // Boolean indicating whether or not to add the document.title as the first argument to
        // the analytics.page() calls. Segment uses some sane defaults, but some users of this plugin
        // have wanted to do this in the past.
        // 
        // E.g `analytics.page(document.title)`
        // 
        // Default: false
        trackPageWithTitle: false,
        
        // Boolean indicating whether to call analytics.load() immediately, or to delay it by a specified
        // number of ms. Can be useful if you want to wait a specifc amount of time before calling
        // analytics.load() and kicking off the activity that occurs with that call.
        // 
        // Default: false
        delayLoad: false,
  
        // Number indicating (in ms) how long to wait for before analytics.load() will be called if
        // the `delayLoad` option is set to `true`.
        // 
        // Default: 1000
        delayLoadDelay: 1000,
  
        // Boolean indicating whether to delay calling analytics.load() until either:
        // 1) The User interacts with the page by scrolling
        // OR
        // 2) The User triggers a Gatsby route change.
        // 
        // The `delayLoad` option can be used in addition to this option.
        // 
        // NOTE: 
        // The route change will only be triggered if you leverage client-side routing (ie, Gatsby <Link>)
        // So if you leverage server-side routing with this feature, only a User scroll will trigger
        // the `load` call. This is because client-side routing does not do
        // a full page refresh, but server-side routing does. Therfore server-side routing will never
        // appear to have been triggered by a User interaction.
        // 
        // This is an advanced feature most often used to try to help improve your website's TTI (for SEO, UX, etc).
        // 
        // See here for more context:
        // Client-side routing and browser code: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        // 
        // Default: false
        delayLoadUntilActivity: false,
  
        // Number indicating (in ms) any additional delay to wait before calling analytics.load()
        // after User "activity" has occurred in conjunction with the `delayLoadUntilActivity` option.
        // 
        // Default: 0
        // delayLoadUntilActivityAdditionalDelay: 50,
  
        // Whether to completely skip calling `analytics.load({writeKey})`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load({writeKey})` manually
        // elsewhere in your code or are using a library
        // like: https://github.com/segmentio/consent-manager that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        // 
        // Default: false
        manualLoad: false,
  
        // If you need to proxy events through a custom endpoint,
        // add a `host` property (defaults to https://cdn.segment.io)
        // Segment docs:
        //   - https://segment.com/docs/connections/sources/custom-domains
        //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
        // 
        // Default: 'https://cdn.segment.io'
        // host: 'https://override-segment-endpoint',
  
        // This package will use a default version of Segment's code snippet, but
        // if you'd like to include your own you can do so here. This is useful if
        // the version this package uses is different than the one you'd like to
        // use...or you need to do something custom.
        // While you should NOT use a back-ticked template string here, the string
        // will be evaluated as template literal with the following variables
        // available to it:
        //    - `writeKey`: The appropriate value from the `prodKey` and `devKey`
        //      options, based on the `NODE_ENV`
        //    - any of the other options passed here
        // 
        // NOTES: 
        // - If you provide a custom snippet, an immediate call to
        //   `analytics.load()` and/or `analytics.page()` will not be added by
        //   this plugin. You can - of course - add them yourself to your snippet.
        // - If your custom snippet does not include a call to `analytics.load()`
        //   then you must either:
        //   1. Manually load it and set the `manualLoad` option here to `true`
        //   2. Use the `delayLoad` option here
        // customSnippet: '!function(){var analytics=window.analytics||[];analytics.load("${writeKey}");analytics.page();}();'
      }
    },
    `gatsby-plugin-client-side-redirect`
  ]
};
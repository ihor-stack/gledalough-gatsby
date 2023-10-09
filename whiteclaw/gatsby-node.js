const redirects = require( './redirects.json')
const path = require('path')

//trigger build
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`

    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}

exports.createPages = async function ({ actions, graphql }) {

  const { createRedirect } = actions

  redirects.forEach((redirect) =>
      createRedirect({
        fromPath: redirect.fromPath,
        toPath: redirect.toPath,
        isPermanent: true,
        redirectInBrowser: true,
      })
  );
  // TODO: refactor some pages like 'Privacy' and 'Terms' to use a common page template
  const allPages = {
    allPrismicHomepage: 'templates/index.js',
    allPrismicSubscribePage: 'templates/subscribe.js',
    allPrismicUnsubscribePage: 'templates/unsubscribe.js',
    allPrismicContactUsPage: 'templates/contact-us.js',
    allPrismicCareersHelpPage: 'templates/careers-help.js',
    allPrismicTermsAndConditionsPage: 'templates/terms-and-conditions.js',
    allPrismicPrivacyPolicyPage: 'templates/privacy.js',
    allPrismicLandingPage: 'templates/landing-page.js',
    allPrismicWishpondPage: 'templates/wishpond-page.js',
    allPrismicDjaPage: 'templates/dja-page.js',
    allPrismicDsarPage: 'templates/dsar-request.js',
    // allPrismicFullscreenEmbeddedPage: , // no translations for this
    // allPrismicMicrosite: , // no translations for this
    allPrismicRulesPage: 'templates/rules-page.js',
    allPrismicEventsPage: 'templates/events.js',
    allPrismicThankYouWavePage: 'templates/thank-you-wave.js',
    allPrismicProductDetailsPage: 'templates/product-details.js',
    allPrismicNewProductPage: 'templates/new-product.js',
    allPrismicProductsPage: 'templates/products.js',
    allPrismicAboutUsPage: 'templates/our-story.js',
    allPrismicOurStoryPage: 'templates/our-vodka-story.js',
    allPrismicErrorPage: 'pages/404.js',
    // allPrismicErrorPage: 'pages/es/404.js',
    // 404 page has to live inside pages
  }

  const pageQuery = Object.keys(allPages).map((key) => {
    return `
    ${key} {
      nodes {
        id
        lang
        url
      }
    }
    `
  })

  const { data } = await graphql(`
    query  {
      ${pageQuery}
    }
  `)

  //TODO: Determine for stand-alone page type (Privacy) ES exists, then build page - (Non-deterministic routing warning)
  const buildPages = () => {
    Object.entries(data).map(([key, val]) => {
      val.nodes.forEach(page => {
        actions.createPage({
          path: page.url,
          component: path.resolve(__dirname, `src/${allPages[key]}`),
          context: {
            id: page.id,
            lang: page.lang,
          },
        })
      })
    })
  }
  buildPages()
}
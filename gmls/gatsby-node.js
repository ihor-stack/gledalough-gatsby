//const redirects = require( './redirects.json')
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
  // const { createRedirect } = actions

  // redirects.forEach((redirect) =>
  //     createRedirect({
  //       fromPath: redirect.fromPath,
  //       toPath: redirect.toPath,
  //       isPermanent: true,
  //       redirectInBrowser: true,
  //     })
  // );
  //
  const allPages = {
    allPrismicHomepage: 'templates/index.js',
    allPrismicCocktail: 'templates/cocktail.js',
    allPrismicCocktailshome: 'templates/cocktails.js',
    allPrismicPrivacy: 'templates/privacy.js',
    allPrismicOurstory: 'templates/our-story.js',
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

  //
  const buildPages = () => {
    Object.entries(data).map(([key, val]) => {
      val.nodes.forEach((page) => {
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

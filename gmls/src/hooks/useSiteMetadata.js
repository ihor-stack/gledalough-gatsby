import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  return useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          twitterCard
          twitterSite
          pinterestDomainVerify
          googleSearchConsole
          bingWebMaster
        }
      }
      featuredImage: file(
        absolutePath: { glob: "**/src/images/social-card.png" }
      ) {
        uid
        absolutePath
        publicURL
      }
    }
  `)
}

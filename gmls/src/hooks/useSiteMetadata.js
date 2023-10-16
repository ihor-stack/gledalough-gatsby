import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  return  useStaticQuery(graphql`
    query {
       site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

}
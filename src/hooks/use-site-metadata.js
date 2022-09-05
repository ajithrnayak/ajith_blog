/**
 * Read more about hooks
 * https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  return useStaticQuery(
    graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          author {
            name
            bio
          }
          url
          title
          description
          subtitle
          icon
          copyright
          disqusShortname
          website
          sourceCode
          twitterUsername
        }
      }
      iconImage: file(relativePath: {eq: "logo-icon.png"}) {
        childImageSharp {
          fixed(height: 260, width: 260) {
            src
          }
        }
      }
    }
    
    `
  )
}

/**
 * Read more about hooks 
 * https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
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
            subtitle
            copyright
            disqusShortname
            website
          }
        }
      }
    `
  )

  return site.siteMetadata
};

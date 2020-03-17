/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

'use strict';

const siteConfig = require('./config.js');

module.exports = {
  // @see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    author: siteConfig.author
  },
  plugins: [
    `gatsby-plugin-sass`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content`,
      name: 'pages'
    }
  }]
}

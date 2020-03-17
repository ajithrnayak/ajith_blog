/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [`gatsby-plugin-sass`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content`,
      name: 'pages'
    }
  }]
}

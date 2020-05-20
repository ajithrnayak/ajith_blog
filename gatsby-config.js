/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

"use strict"

const siteConfig = require("./config.js")

module.exports = {
  // @see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    subtitle: siteConfig.subtitle,
    icon: siteConfig.metaImage,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    author: siteConfig.author,
    website: siteConfig.website,
    sourceCode: siteConfig.sourceCode,
    twitterUsername: siteConfig.social.twitter,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: "#70C80F" },
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          "gatsby-remark-autolink-headers",
          /** Note: if you are using gatsby-remark-prismjs, make sure that it’s listed after this plugin.
           *  Otherwise, you might face an issue described here: https://github.com/gatsbyjs/gatsby/issues/5764. */
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: false,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        lang: "en",
        start_url: "/",
        background_color: "#171A21",
        theme_color: "#70C80F",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: siteConfig.favicon,
      },
    },
    // The offline plugin should be listed after the manifest plugin
    // so that the offline plugin can cache the created manifest.webmanifest.
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: siteConfig.googleAnalyticsId,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}

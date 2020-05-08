import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, image, article }) => {
  const metadata = useSiteMetadata()

  const defaultTitle = metadata.title
  const defaultDescription = metadata.description
  const siteUrl = metadata.url
  const defaultImage = metadata.icon
  const twitterUsername = metadata.twitterUsername

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ""}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${metadata.title}`}>
      <html lang="en" />

      {/* -- Primary Meta Tags -- */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* -- Open Graph / Facebook -- */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* -- Twitter -- */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

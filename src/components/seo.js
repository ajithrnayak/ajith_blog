import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const constructUrl = (baseUrl, path) =>
  !baseUrl || !path ? null : `${baseUrl}${path}`

const Seo = ({ title, description, pathname, article, imageUrl, imageAlt }) => {
  const { site, iconImage } = useSiteMetadata()
  const metadata = site.siteMetadata

  const defaultTitle = metadata.title
  const defaultDescription = metadata.description
  const siteUrl = metadata.url
  const defaultImageUrl = constructUrl(
    siteUrl,
    iconImage?.childImageSharp?.fixed?.src
  )
  const twitterUsername = metadata.twitterUsername

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    ogImageUrl: imageUrl ? constructUrl(siteUrl, imageUrl) : defaultImageUrl,
    url: constructUrl(siteUrl, pathname || ""),
    cardStyle: imageUrl ? "summary_large_image" : "summary",
    imageAlt: imageAlt || "Ajith's Blog logo",
    type: article ? "article" : "website",
  }

  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${metadata.title}`}>
      <html lang="en" />

      {/* -- Primary Meta Tags -- */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.ogImageUrl} />

      {/* -- Open Graph / Facebook -- */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {<meta property="og:type" content={seo.article} />}
      {<meta property="og:title" content={seo.title} />}
      {<meta property="og:description" content={seo.description} />}
      {seo.ogImageUrl && <meta property="og:image" content={seo.ogImageUrl} />}
      <meta
        property="og:site_name"
        itemprop="name"
        content="Ajith's Blog"
      ></meta>
      <meta property="og:locale" content="en"></meta>

      {/* -- Twitter -- */}
      {/* -- If a post has an image, use the larger card. Otherwise the default image is just a small logo, so use the smaller card. -- */}
      {<meta name="twitter:card" content={seo.cardStyle} />}
      {twitterUsername && (
        <meta name="twitter:site" content={twitterUsername} />
      )}
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.ogImageUrl && <meta name="twitter:image" content={seo.ogImageUrl} />}
      {<meta name="twitter:image:alt" content={imageAlt} />}
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

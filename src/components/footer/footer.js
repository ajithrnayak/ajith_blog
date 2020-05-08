import React from "react"
import styles from "./footer.module.scss"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { OutboundLink } from 'gatsby-plugin-gtag'

const Footer = () => {
  const data = useSiteMetadata()
  const { copyright, sourceCode } = data

  return (
    <footer>
      <p className={styles.copyright}>{copyright}</p>
      <OutboundLink
        href={sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sourcecode}
      >
        View Source Code
      </OutboundLink>
    </footer>
  )
}

export default Footer

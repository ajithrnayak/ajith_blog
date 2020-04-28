import React from "react"
import styles from "./footer.module.scss"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Footer = () => {
  const data = useSiteMetadata()
  const { copyright, sourceCode } = data

  return (
    <footer>
      <p className={styles.copyright}>{copyright}</p>
      <a
        href={sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sourcecode}
      >
        View Source Code
      </a>
    </footer>
  )
}

export default Footer

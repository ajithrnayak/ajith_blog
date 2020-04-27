import React from "react"
import styles from "./footer.module.scss"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Footer = () => {
  const data = useSiteMetadata()
  const { copyright, sourceCode } = data
  console.log(data)
  return (
    <footer>
      <p className={styles.copyright}>{copyright}</p>
      <a href={sourceCode} target="_blank" className={styles.sourcecode}>View Source Code</a>
    </footer>
  )
}

export default Footer

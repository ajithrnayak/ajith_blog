import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-gtag'
import styles from "./title-and-caption.module.scss"

const TitleAndCaption = ({ data }) => {
  const { title, subtitle, website } = data

  return (
    <div className={styles.titleAndCaption}>
      <h1 className={styles.blogTitle}>
        <Link className={styles.titleLink} to={`/`}>
          {title}
        </Link>
      </h1>
      <div className={styles.blogCaption}>
        <p>
          {subtitle}
          <span className={styles.website}>
            Checkout my <OutboundLink href={website} target="_blank" rel="noopener noreferrer">website.</OutboundLink>
          </span>
        </p>
      </div>
    </div>
  )
}

export default TitleAndCaption

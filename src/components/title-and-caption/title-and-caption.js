import React from "react"
import { Link } from "gatsby"
import styles from "./title-and-caption.module.scss"

const TitleAndCaption = ({ data }) => {
  const { title, subtitle, website } = data

  return (
    <div className={styles.titleAndCaption}>
      <h2 className={styles.blogTitle}>
        <Link className={styles.titleLink} to={`/`}>
          {title}
        </Link>
      </h2>
      <div className={styles.blogCaption}>
        <p>
          {subtitle}
          <span className={styles.website}>
            Checkout my <a href={website}>website.</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default TitleAndCaption

import React from "react"
import styles from "./postHeader.module.scss"

const PostHeader = ({ frontmatter, timeToRead }) => {
  const { title } = frontmatter
  const { date, tag } = frontmatter

  return (
    <div className={styles.post_header}>
      <h1 className={styles.post_title}>{title}</h1>
      <div className={styles.post_caption}>
              <p>
                <time>{date}</time> {` – `} {tag}
              </p>
              <p>{timeToRead} min read</p>
            </div>
    </div>
  )
}

export default PostHeader

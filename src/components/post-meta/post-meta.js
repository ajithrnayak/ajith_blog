import React from "react"
import styles from "./post-meta.module.scss"

const PostMeta = ({ frontmatter, timeToRead }) => {
  const { title } = frontmatter
  const { date, tag } = frontmatter

  return (
    <header className={styles.post_meta}>
      <h1 className={styles.post_title}>{title}</h1>
      <div className={styles.post_caption}>
              <p>
                <time>{date}</time> {` – `} {tag}
              </p>
              <p>{timeToRead} min read</p>
            </div>
    </header>
  )
}

export default PostMeta

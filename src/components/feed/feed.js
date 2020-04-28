import React from "react"
import styles from "./feed.module.scss"
import { Link } from "gatsby"

const Feed = ({ posts }) => {
  return (
    <div className={styles.feed}>
      {posts.map(post => {
        const { frontmatter } = post.node
        return (
          <div className={styles.feed_item} key={frontmatter.path}>
            <h2 className={styles.post_title}>
              <Link className={styles.post_title_link} to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            <div className={styles.post_meta}>
              <p>
                <time>{frontmatter.date}</time> {` – `} {frontmatter.tag}
              </p>
            </div>
            <p className={styles.post_excerpt}>{frontmatter.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Feed
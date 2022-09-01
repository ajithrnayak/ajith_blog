import React from "react"
import { Link } from "gatsby"
import styles from "./pagination.module.scss"

const Pagination = ({ previous, next }) => {
  return (
    <div className={styles.pagination_container}>
      <nav>
        <ul className={styles.pagination}>
          <li>
            {previous && (
              <div className={styles.previous}>
                <p className={styles.pagination_label}>Previous</p>
                <hr></hr>
                <Link className={styles.page_title} to={previous.frontmatter.path} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              <p className={styles.post_excerpt}>{previous.excerpt}</p>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div className={styles.next}>
                <p className={styles.pagination_label}>Next</p>
                <hr></hr>
                <Link className={styles.page_title} to={next.frontmatter.path} rel="next">
                  {next.frontmatter.title} →
                </Link>
                <p className={styles.post_excerpt}>{next.excerpt}</p>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

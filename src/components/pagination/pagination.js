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
                <Link to={previous.frontmatter.path} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div className={styles.next}>
                <p className={styles.pagination_label}>Next</p>
                <Link to={next.frontmatter.path} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

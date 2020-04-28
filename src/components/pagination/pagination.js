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
              <Link to={previous.frontmatter.path} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

import React from "react"
import styles from "./post-content.module.scss"

const PostContent = ({ markdownRemark }) => {
  const html = markdownRemark.html

  return (
    <section
      className={styles.post_content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default PostContent

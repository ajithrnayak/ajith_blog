import React from "react"
import styles from "./postContent.module.scss"

const PostContent = ({ markdownRemark }) => {
  const html = markdownRemark.html

  return (
    <div
      className={styles.post_content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default PostContent

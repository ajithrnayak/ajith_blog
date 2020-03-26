import React from "react"
import styles from "./postHeader.module.scss"

const PostHeader = ({ frontmatter, timeToRead }) => {
  const { title } = frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>
          {frontmatter.date} – {frontmatter.tag}{" "}
        </p>
  <p>{timeToRead} min read</p>
      </div>
    </div>
  )
}

export default PostHeader

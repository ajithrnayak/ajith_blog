import React from "react"

const Posts = ({ posts }) => {
  return (
    <div>
      { posts.map(post => {
        const {frontmatter} = post.node
        return (
          <div key={frontmatter.path}>
            {frontmatter.title}
          </div>
        )
      })}
    </div>
  )
};

export default Posts;
import React from "react"
import { Link } from 'gatsby'

const Posts = ({ posts }) => {
  return (
    <div>
      { posts.map(post => {
        const {frontmatter} = post.node
        return (
          <div key={frontmatter.path}
          style={{marginBottom: '1rem'}}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
              </Link>
          </div>
        )
      })}
    </div>
  )
};

export default Posts;
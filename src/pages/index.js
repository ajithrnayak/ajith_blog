import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"

const BlogFeed = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Feed posts={edges} />
    </Layout>
  )
}

export default BlogFeed

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          frontmatter {
            category
            date(formatString: "MMMM DD, YYYY")
            excerpt
            path
            tag
            title
          }
        }
      }
    }
  }
`

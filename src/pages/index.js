import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"
import SEO from "../components/seo"

const BlogFeed = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="All posts" />
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

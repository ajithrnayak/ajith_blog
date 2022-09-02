import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"
import Seo from "../components/seo"

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="All posts" />
      <Feed posts={edges} />
    </Layout>
  )
}

export default Home

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          frontmatter {
            category
            date(formatString: "MMM DD, YYYY")
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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"
import Seo from "../components/seo"

const Home = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Blog Posts"/>
      <Feed posts={nodes} />
    </Layout>
  )
}

export default Home

export const postsQuery = graphql`
query PostsQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    nodes {
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

`

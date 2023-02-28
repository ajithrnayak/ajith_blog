import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"
import Seo from "../components/seo"

const Home = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  const imageUrl = data.homeImage.childImageSharp?.fixed?.src

  return (
    <Layout>
      <Seo title="Blog Posts" imageUrl={imageUrl} />
      <Feed posts={nodes} />
    </Layout>
  )
}

export default Home

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
    homeImage: file(relativePath: { eq: "home_icon.png" }) {
      childImageSharp {
        fixed(height: 512, width: 1024) {
          src
        }
      }
    }
  }
`

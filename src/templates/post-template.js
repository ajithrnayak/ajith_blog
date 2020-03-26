import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostHeader from "../components/postHeader/postHeader"
import Pagination from "../components/pagination/pagination"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark} = data
  const { frontmatter } = markdownRemark
  const html = markdownRemark.html
  const timeToRead = markdownRemark.timeToRead
  const { previous, next } = pageContext

  return (
    <Layout>
      <PostHeader frontmatter={frontmatter} timeToRead={timeToRead} />
      <div className="blogPost" dangerouslySetInnerHTML={{ __html: html }} />
      <Pagination previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`

export default PostTemplate

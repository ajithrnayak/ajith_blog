import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostHeader from "../components/postHeader/postHeader"
import PostContent from "../components/PostContent/postContent"
import Pagination from "../components/pagination/pagination"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark} = data
  const { frontmatter } = markdownRemark
  const timeToRead = markdownRemark.timeToRead
  const { previous, next } = pageContext

  return (
    <Layout>
      <PostHeader frontmatter={frontmatter} timeToRead={timeToRead} />
      <PostContent markdownRemark={markdownRemark}/>
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
        tag
      }
    }
  }
`

export default PostTemplate

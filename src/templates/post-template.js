import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Pagination from "../components/pagination/pagination"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  const { previous, next } = pageContext

  return (
     <Layout>
       <div>
      <h1>{title}</h1>
      </div>
      <div className="blogPost" dangerouslySetInnerHTML={{ __html: html }} />
      <Pagination previous={previous} next={next} />
      </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`

export default PostTemplate

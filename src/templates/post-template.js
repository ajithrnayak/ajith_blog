import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostMeta from "../components/post-meta/post-meta"
import PostContent from "../components/post-content/post-content"
import Pagination from "../components/pagination/pagination"
import SEO from "../components/seo"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const timeToRead = markdownRemark.timeToRead
  const { previous, next } = pageContext

  console.log(frontmatter.path)
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt || frontmatter.description}
        pathname={frontmatter.path}
        article={true}
      />
      <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
      <PostContent markdownRemark={markdownRemark} />
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
        path
      }
    }
  }
`

export default PostTemplate

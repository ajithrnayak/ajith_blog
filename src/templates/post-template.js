import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostMeta from "../components/post-meta/post-meta"
import PostContent from "../components/post-content/post-content"
import Pagination from "../components/pagination/pagination"
import BuyMeCoffee from "../components/buymecoffee/buymecoffee"
import Seo from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const timeToRead = markdownRemark.timeToRead
  const { previous, next } = pageContext
  
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: frontmatter.path },
  }
  
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.excerpt || frontmatter.description}
        pathname={frontmatter.path}
        image={frontmatter.cover.childImageSharp?.fluid}
        article={true}
      />
      <article>
      <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
      <PostContent markdownRemark={markdownRemark} />
      </article>
      <BuyMeCoffee />
      <Pagination previous={previous} next={next} />
      <DiscussionEmbed {...disqusConfig} />
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
        date(formatString: "MMM DD, YYYY")
        excerpt
        tag
        path
        cover {
          childImageSharp {
            fixed(height: 600, width: 1200) {
              src
            }
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate

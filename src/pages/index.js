import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import Posts from "../components/posts/posts";

const BlogIndex = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Posts posts={edges}/>
    </Layout>
  );
};

export default BlogIndex;


export const postsQuery = graphql`
  query PostsQuery 
  {
    allMarkdownRemark 
    {
      edges 
      {
        node 
        {
          timeToRead
          frontmatter 
          {
            category
            date(formatString: "MMMM DD, YYYY")
            excerpt
            path
            tags
            title
          }
        }
      }
    }
  }
`

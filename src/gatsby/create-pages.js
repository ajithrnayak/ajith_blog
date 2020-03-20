const path = require("path")

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/post-template.js")

  return graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const { path } = node.frontmatter

      return createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path,
        },
      })
    })
  })
}

module.exports = createPages;
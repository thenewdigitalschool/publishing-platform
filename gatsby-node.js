const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('templates/post.js')

  return graphql(`
    {
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
  `).then(res => {
    const posts = res.data.allMarkdownRemark.edges
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    posts.forEach(({ node }, index) => {
      const path = node.frontmatter.path
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          pathSlug: path,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

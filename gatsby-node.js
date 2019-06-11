const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('templates/post.js');

  return graphql(`
    {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter__date]}) {
        edges {
          node {
            html
            id
            frontmatter {
              index
              path
              title
            }
          }
        }
      }
    }
  `).then((res) => {
    const posts = res.data.allMarkdownRemark.edges;
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.lenght - 1 ? null : posts[index + 1].node,
      });
    });
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

import React from 'react';

import Layout from '../src/components/Layout';
import './post.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className="Layout-content">
        <div className="Layout-blog">
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <div
            className="postImage"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        thumbnail
      }
    }
  }
`;

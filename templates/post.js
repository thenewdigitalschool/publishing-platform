import React from 'react';

import Layout from '../src/components/Layout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className="Layout-content">
        <div className="Layout-blog">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

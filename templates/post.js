import React from 'react';

import Layout from '../src/components/Layout';
import './post.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <div className="Layout-content">
        <div className="Layout-blog">
          <h1 className="postTitle">{title}</h1>
          <div className="postBody" dangerouslySetInnerHTML={{ __html: html }} />
          <div>
            <a href="/">
              <span className="backArrow">←</span> Back to Homepage
            </a>
          </div>
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

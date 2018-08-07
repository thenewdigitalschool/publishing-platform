import React from 'react';

import Layout from '../src/pages/Layout';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <nav>
        <Navbar />
      </nav>
      <div className="Layout-content">
        <div className="Layout-blog">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <footer className="Layout-footer">
        <Footer />
      </footer>
    </Layout>
  );
}
export const postQuery = graphql`
  query BlogPostByPath ($path: String!){
    markdownRemark(frontmatter: {path: {eq:$path} }){
      html,
      frontmatter{
        path
        title
        thumbnail
      }
    }
  }
`;

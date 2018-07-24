import React from 'react';
import PropTypes from 'prop-types';

import HeroBlog from '../Components/HeroBlog';
import Layout from './Layout';
import Footer from '../Components/Footer';
import './index.css';
import '../fonts/stylesheet.css';


const TemplateWrapper = ({ data }) => (
  <Layout>
    <nav>
      <HeroBlog />
    </nav>
    <div className="Layout-content">
      { data.allMarkdownRemark.edges.map(post => (
        <ul>
          <a
            key={post.node.id}
            href={post.node.frontmatter.path}
          >
            { post.node.frontmatter.title }
          </a>
        </ul>
          ))}
    </div>
    <footer className="Layout-footer">
      <Footer />
    </footer>
  </Layout>
);


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit:10,
    ){
      edges{
        node{
           id
           frontmatter{
            title
            path
            published
            date
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;

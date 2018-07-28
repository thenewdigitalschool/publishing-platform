import React from 'react';
import PropTypes from 'prop-types';

import HeroBlog from '../Components/HeroBlog';
import Layout from './Layout';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import './index.css';
import '../fonts/stylesheet.css';


const TemplateWrapper = ({ data }) => (
  <Layout>
    <nav>
      <HeroBlog />
    </nav>
    <div className="Layout-content">
      <ul>
        { data.allMarkdownRemark.edges.map(post => (
          <li>
            <Card>
              <a key={post.node.id} href={post.node.frontmatter.path}>
                <h3 className="Card-PostTitle">{ post.node.frontmatter.title }</h3>
                <span className="Card-PostDate">Posted { post.node.frontmatter.date }</span>
                <p className="Card-PostTextPreview">{ post.node.excerpt }</p>
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </div>
    <footer className="Layout-footer">
      <Footer />
    </footer>
  </Layout>
);

TemplateWrapper.propTypes = {
  data: PropTypes.string.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit:10,
    ){
      edges{
        node{
           id
           excerpt
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

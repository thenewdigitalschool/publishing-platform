import React from 'react';
import PropTypes from 'prop-types';

import HeroBlog from '../components/HeroBlog';
import Layout from '../../src/components/Layout';
import Footer from '../components/Footer';
import Card from '../components/Card';
import CardList from '../components/CardList';
import './index.css';
import '../fonts/stylesheet.css';

const TemplateWrapper = ({ data }) => (
  <Layout>
    <nav>
      <HeroBlog>TNDS Blog</HeroBlog>
    </nav>
    <div className="Layout-content">
      <CardList>
        {data.allMarkdownRemark.edges.map(post => (
          <li>
            <Card>
              <div className="Card-PostImage">
                <img
                  src={post.node.frontmatter.thumbnail}
                  alt={post.node.frontmatter.title}
                />
              </div>
              <div className="Card-PostPreview">
                <a key={post.node.id} href={post.node.frontmatter.path}>
                  <h3 className="Card-PostTitle">
                    {post.node.frontmatter.title}
                  </h3>
                  <span className="Card-PostDate">
                    Posted {post.node.frontmatter.date}
                  </span>
                  <p className="Card-PostTextPreview">{post.node.excerpt}</p>
                </a>
              </div>
            </Card>
          </li>
        ))}
      </CardList>
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
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            thumbnail
            published
            date
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;

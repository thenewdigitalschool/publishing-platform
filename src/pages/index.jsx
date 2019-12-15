import React from 'react';
import PropTypes from 'prop-types';

import HeroBlog from '../components/HeroBlog';
import Layout from '../components/Layout';
import Card from '../components/Card';
import CardList from '../components/CardList';
import './index.css';
import '../fonts/stylesheet.css';

const TemplateWrapper = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Layout>
        <HeroBlog>Blog</HeroBlog>
        <CardList>
          {edges.map(post => {
            const { thumbnail, title, path, date } = post.node.frontmatter;
            return (
              <li key={post.node.id}>
                <Card>
                  <img className="Card-PostImage" src={thumbnail} alt={title} />
                  <div className="Card-PostPreview">
                    <a key={post.node.id} href={path}>
                      <h3 className="Card-PostTitle">{title}</h3>
                      <span className="Card-PostDate">Posted {date}</span>
                      <p className="Card-PostTextPreview">
                        {post.node.excerpt}
                      </p>
                    </a>
                  </div>
                </Card>
              </li>
            );
          })}
        </CardList>
      </Layout>
    </div>
  );
};

TemplateWrapper.propTypes = {
  data: PropTypes.node.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
    ) {
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

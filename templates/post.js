import React from 'react'

import Layout from '../src/components/Layout'
import Link from '../src/components/Link'

import './post.css'

const Template = ({ data }, pageContext) => {
  const { next, previous } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <div className="Layout-blog">
        <h1 className="postTitle">{title}</h1>
        <div className="postBody" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="blogNavigation">
          <div>
            {previous && (
              <Link
                className="previousLink"
                text="← Prev"
                href={previous.frontmatter.path}
              />
            )}
          </div>
          <Link className="homeLink" text="<- back home" href="/" />
          <div>
            {next && (
              <Link
                className="nextLink"
                text="Next →"
                href={next.frontmatter.path}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        thumbnail
      }
    }
  }
`
export default Template

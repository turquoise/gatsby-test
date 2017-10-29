import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

export default function Temlate({data}) {
  const { markdownRemark: post} = data;
  // const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

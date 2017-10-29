import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/page-3/">Go to page 3</Link>
    <h2>Index</h2>
    <ul>
    { data.allMarkdownRemark.edges.map( (post) => (
      <li key={post.node.id}>
        <Link to={post.node.frontmatter.path}
          key={post.node.id}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    )) }
    </ul>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: {
      fields: [frontmatter___date], order: DESC
    }
      filter: {
      frontmatter: {
        published: {
          eq: true
        }
      }
    }
    ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
  }
`

export default IndexPage

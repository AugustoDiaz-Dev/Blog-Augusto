import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  hoveredTitle,
} from '../../components/layout.module.css'

const BlogPage = ({ data }) => {
  return (

    <Layout pageTitle="Blog Posts">

      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2 className={hoveredTitle}>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}
              <hr />
            </p>

          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
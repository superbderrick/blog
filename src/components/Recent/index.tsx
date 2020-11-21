import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

interface Props {
  data: {
    allMdx: unknown
  }
}

const recentQuery = graphql`
  query RecentQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { parent: { id: {} }, fileAbsolutePath: { regex: "\\\\/blog/" } }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const Recent: React.FC = () => {
  return (
    <>
      <div id="recent" />
      <section className="section modular-recent">
        <div className="container grid-lg">
          <div className="columns">
            <div className="column col-3 col-md-12 header-col">
              <h4>
                <span>Latest posts</span>
              </h4>
            </div>
            <div className="column col-9 col-md-12 main-col">
              <div className="columns item">
                <StaticQuery
                  query={recentQuery}
                  render={data => {
                    return data.allMdx.edges.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <div className="column col-12" key={node.fields.slug}>
                          <h4>
                            <Link
                              to={`blog${node.fields.slug}`}
                              className="text-dark"
                            >
                              {title}
                            </Link>
                          </h4>
                          <div className="text-gray">
                            <small className="blog-date">
                              <i className="fa fa-calendar" />{" "}
                              {node.frontmatter.date}
                            </small>
                          </div>
                        </div>
                      )
                    })
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent

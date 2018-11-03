import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './bubble.scss'

const Bubble = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "I'm a Sydney based Software Developer." },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <body>
          <div className="bubble">
            {children}
            <footer>
              <p>Site built in Gatsby JS</p>
            </footer>
          </div>
        </body>
      </>
    )}
  />
)

export default Bubble

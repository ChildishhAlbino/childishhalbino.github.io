import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import style from './bubble.module.scss'

const Bubble = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
          buildTimeZone
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "I'm a Sydney based Software Developer." },
            { name: 'keywords', content: 'sofware development, programming, blogging, video games, basketball' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <body>
          <div className={style.bubble}>
            {children}
            <footer>
              <p>Site built in Gatsby JS. Last built: {data.site.buildTimeZone}</p>
            </footer>
          </div>
        </body>
      </>
    )}
  />
)

export default Bubble

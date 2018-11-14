module.exports = {
  siteMetadata: {
    title: 'Connor Williams',
    siteUrl: `https://childishhalbino.github.io`,
    icon: 'src/images/icon.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Australia/Sydney',
        format: 'dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'childishhalbino.github.io',
        short_name: `Connor's Blog`,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

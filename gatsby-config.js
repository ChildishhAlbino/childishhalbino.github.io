const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `ChildishhAlbino`,
		description: `A personal blog/portfolio for Connor Williams.`,
		author: `@gatsbyjs`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-buildtime-timezone',
			options: {
				tz: 'Australia/Sydney',
				format: 'dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a'
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: path.join(__dirname, `src`, `data`)
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `bio`,
				path: path.join(__dirname, `src`, `data`, `bio`)
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: path.join(__dirname, `src`, `data`, `posts`)
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/weiic_transparent.jpg` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-transition-link`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};

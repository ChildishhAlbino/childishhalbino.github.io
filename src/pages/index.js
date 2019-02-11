import React from 'react';
import BlogCollator from '../components/Blog/blogCollator';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<BlogCollator />
	</Layout>
);

export default IndexPage;

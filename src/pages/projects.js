import React from 'react';

import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';

const ProjectsPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h1>PROJECTS</h1>
	</Layout>
);

export default ProjectsPage;

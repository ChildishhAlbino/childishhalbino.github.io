import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';

const ContactPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h1>Contact</h1>
	</Layout>
);

export default ContactPage;

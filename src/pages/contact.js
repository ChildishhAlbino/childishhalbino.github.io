import React from 'react';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const ContactPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h1>Want to contact me? Try here :D</h1>
		<div className="icons">
			<div className="icon">
				<FaGithub />
				<p>/childishhalbino</p>
			</div>
			<div className="icon">
				<FaEnvelope />
				<p>connorandrewwilliams.work@gmail.com</p>
			</div>
			<div className="icon">
				<FaLinkedin />
				<p>/childishhalbino</p>
			</div>
			<div className="icon">
				<FaTwitter />
				<p>@childishhalbino</p>
			</div>
		</div>
	</Layout>
);

export default ContactPage;

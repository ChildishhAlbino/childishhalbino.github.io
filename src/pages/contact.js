import React from 'react';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import ContactItem from '../components/ContactItem/contactItem.js';

const ContactPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h1>Want to contact me? Try here :D</h1>
		<div className="icons">
			<ContactItem link="https://github.com/ChildishhAlbino">
				<FaGithub />
				<p>/childishhalbino</p>
			</ContactItem>
			<ContactItem link="mailto:connorandrewwilliams.work@gmail.com">
				<FaEnvelope />
				<p>connorandrewwilliams.work@gmail.com</p>
			</ContactItem>
			<ContactItem link="https://www.linkedin.com/in/childishhalbino/">
				<FaLinkedin />
				<p>/childishhalbino</p>
			</ContactItem>
			<ContactItem link="https://twitter.com/ChildishhAlbino">
				<FaTwitter />
				<p>@childishhalbino</p>
			</ContactItem>
		</div>
	</Layout>
);

export default ContactPage;

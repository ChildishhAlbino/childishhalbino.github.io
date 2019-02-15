import React from 'react';
import './contactItem.scss';

const ContactItem = ({ children, link }) => (
	<a href={link} className="icon shadow">
		{children}
	</a>
);

export default ContactItem;

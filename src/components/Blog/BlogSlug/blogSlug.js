import React from 'react';
import { Link } from 'gatsby';
import './blogSlug.scss';

const BlogSlug = (props) => {
	// console.log(props.data);
	const data = props.data;
	const frontmatter = data.frontmatter;
	return (
		<Link to={data.fields.slug}>
			<div className="blogSlug shadow">
				<div className="titleCaptionContainer">
					<h2>{frontmatter.title}</h2>
					<p>{frontmatter.caption}</p>
				</div>
				<h2>{frontmatter.postDate}</h2>
			</div>
		</Link>
	);
};

export default BlogSlug;

import React from 'react';
import './App.css';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];
	for(let i=1;i<=Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
		  {
			pageNumbers.map(number => (
				<text key={number} class="pagetext">
					<a onClick={() => paginate(number)} hreaf="!#" class="pagenumber">
						<b>{number}</b>
					</a>
				</text>
			))
		  }
		</div>
	)
}
export default Pagination;

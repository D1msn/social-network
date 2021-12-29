import React from 'react';
import {connect} from 'react-redux';

interface OwnProps {
}

type PaginationPropsType = {
	totalUsersCount: number,
	pageSize: number,
	currentPage: number,
	onPageChanged: (currentPage: number) => void
}

const Pagination = ({ currentPage, pageSize, totalUsersCount, onPageChanged}: PaginationPropsType) => {
	const pageCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	return (
		<ul className="pagination">
			{pages.map(page => {
				return <li className="pagination__item">
					<button
						onClick={() => onPageChanged(page)}
						className={`pagination__btn ${currentPage === page ? 'active' : ''}`}
					>{page}</button>
				</li>
			})}
		</ul>
	)
};

export default Pagination;

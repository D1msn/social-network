import React, {useMemo} from 'react'
// import PaginatorMoreItem from './PaginatorMoreItem'
import {ReactSVG} from "react-svg";
import arrowRight from '../../../images/arrow-right.svg'
import arrowLeft from '../../../images/arrow-left.svg'

import './Paginator.scss'
import PaginatorMoreItem from './PaginatorMoreItem';

interface PaginationPagesProperty {
	totalPages: number,
	currentPage: number,
	setActivePage: any
}

const PaginatorPages = ({ totalPages, currentPage, setActivePage }: PaginationPagesProperty) => {
	const displayPaginator = useMemo(() => {
		const totalVisiblePages = totalPages >= 7 ? 7 : totalPages
		const arr = Array(totalVisiblePages)
		if (totalVisiblePages < 7) {
			for (let i = 0; i < arr.length; i += 1) {
				arr[i] = ({ type: 'number', value: i + 1 })
			}
			return arr
		}
		if (totalVisiblePages === 7) {
			arr[0] = { type: 'number', value: 1 }
			if (currentPage < 4) {
				for (let i = 1; i < 4; i += 1) {
					arr[i] = { type: 'number', value: i + 1 }
				}
				arr[5] = { type: 'more', value: [totalVisiblePages - 2, totalPages - 1] }
				arr[6] = { type: 'number', value: totalPages }
				return arr
			}
			if (currentPage > totalPages - 3) {
				arr[1] = { type: 'less', value: [2, totalPages - 4] }
				for (let i = 2; i < totalVisiblePages - 2; i += 1) {
					arr[totalVisiblePages - i] = { type: 'number', value: totalPages + 1 - i }
				}
				arr[6] = { type: 'number', value: totalPages }
				return arr
			}
			arr[1] = { type: 'less', value: [2, currentPage - 2] }
			arr[2] = { type: 'number', value: currentPage - 1 }
			arr[3] = { type: 'number', value: currentPage }
			arr[4] = { type: 'number', value: currentPage + 1 }
			arr[5] = { type: 'more', value: [currentPage + 2, totalPages - 1] }
			arr[6] = { type: 'number', value: totalPages }
			return arr
		}

		return arr
	}, [totalPages, currentPage])

	return (
		<ul className="pagination__list">
			<li className={`pagination__item ${currentPage === 1 ? 'pagination__item--disabled' : ''}`}
				onClick={currentPage > 1 ? () => setActivePage(currentPage - 1) : () => {}}
			>
				<ReactSVG className={"svg-center"} src={arrowLeft}/>
			</li>
			{displayPaginator.map(item => (
				item.type === 'number'
					? (
						<li
							className={`pagination__item ${item.value === currentPage ? 'pagination__item--active' : ''}
                             `} key={item.id}
							onClick={item.value === currentPage ? () => {} : () => setActivePage(item.value)}
						>
							{item.value}
						</li>
					)
					: <PaginatorMoreItem item={item} setActivePage={setActivePage} />

			))}
			<li className={`pagination__item ${currentPage === totalPages || !totalPages ? 'pagination__item--disabled' : ''}`}
				onClick={currentPage < totalPages ? () => setActivePage(currentPage + 1) : () => {}}
			>
				<ReactSVG className={"svg-center"} src={arrowRight}/>
			</li>
		</ul>
	)
}

export default PaginatorPages

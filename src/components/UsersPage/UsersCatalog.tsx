import React, {FC, useEffect} from 'react';
import UserAddIcon from '../../images/user-plus.svg'
import UserRemoveIcon from '../../images/user-minus.svg'
import axios from 'axios';

import './UsersCatalog.scss'
import {ReactSVG} from "react-svg";
import {UsersCatalogPropsType} from "./UsersContainer";
import avatarImg from '../../images/avatar.png'
import PaginatorPages from "../UI/PaginatorPages/PaginatorPages";

type StateType = {
	// описываем локальный стейт
	error: boolean
}


class UsersCatalog extends React.Component<UsersCatalogPropsType, StateType> {
	constructor(props: UsersCatalogPropsType) {
		super(props);
		this.state = {error: false}
	}


	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.fetchUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			}).catch((err) => {
				this.setState({error: true})
		})
	}

	onPageChanged = (currentPage: number) => {
		this.props.setCurrentPage(currentPage)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then(res => this.props.fetchUsers(res.data.items))
	}

	render() {
		const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		if(this.state.error){
			return <div>Что то пошло не так</div>
		}

		return (
			<div className={"users-catalog"}>
				<PaginatorPages totalPages={pageCount} currentPage={this.props.currentPage} setActivePage={this.onPageChanged}/>
				<div className="users-catalog__wrapper">
					<ul className="users-catalog__list">
						{this.props.users.map(u => (
							<li key={u.id} className="users-catalog__item users-catalog-item">
								<div className="users-catalog-item__side">
									<div className="users-catalog-item__avatar">
										<img src={u.photos.small || avatarImg} alt="AVATAR"/>
									</div>
								</div>
								<div className="users-catalog-item__main">
									<div className="users-catalog-item__info">
										<p className="users-catalog-item__name">
											{u.name}
										</p>
										<p className="users-catalog-item__status">
											{u.status}
										</p>
									</div>
									{/*<div className="users-catalog-item__location">*/}
									{/*	<p className="users-catalog-item__country">*/}
									{/*		{u.location.country}*/}
									{/*	</p>*/}
									{/*	<p className="users-catalog-item__city">*/}
									{/*		{u.location.city}*/}
									{/*	</p>*/}
									{/*</div>*/}
								</div>
								<div className="users-catalog-item__actions">
									{
										u.followed ? <button
												onClick={() => this.props.unFollowUser(u.id)}
												className={`follow-btn ${u.followed ? "active" : ''}`}>
												<ReactSVG src={UserRemoveIcon}/>
											</button>
											: <button
												onClick={() => this.props.followUser(u.id)}
												className={`follow-btn ${u.followed ? "active" : ''}`}>
												<ReactSVG src={UserAddIcon}/>
											</button>
									}

								</div>

							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
};

export default UsersCatalog;

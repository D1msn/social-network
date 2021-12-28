import React, {FC, useEffect} from 'react';
import UserAddIcon from '../../images/user-plus.svg'
import UserRemoveIcon from '../../images/user-minus.svg'
import axios from 'axios';

import './UsersCatalog.scss'
import {ReactSVG} from "react-svg";
import {UsersCatalogPropsType} from "./UsersContainer";
import avatarImg from '../../images/avatar.png'

const UsersCatalog: FC<UsersCatalogPropsType> = ({users, followUser, unFollowUser, fetchUsers}) => {

	useEffect(() => {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => fetchUsers(res.data.items))
	}, [])

	return (
		<div className={"users-catalog"}>
			<div className="users-catalog__wrapper">
				<ul className="users-catalog__list">
					{users.map(u => (
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
											onClick={() => unFollowUser(u.id)}
											className={`follow-btn ${u.followed ? "active" : ''}`}>
											<ReactSVG src={UserRemoveIcon}/>
										</button>
										: <button
											onClick={() => followUser(u.id)}
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
};

export default UsersCatalog;

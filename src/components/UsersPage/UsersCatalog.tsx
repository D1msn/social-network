import React, {FC, useEffect} from 'react';
import UserAddIcon from '../../images/user-plus.svg'
import UserRemoveIcon from '../../images/user-minus.svg'

import './UsersCatalog.scss'
import {ReactSVG} from "react-svg";
import {UsersCatalogPropsType} from "./UsersContainer";

const UsersCatalog: FC<UsersCatalogPropsType> = ({users, followUser, unFollowUser, fetchUsers}) => {

	useEffect(() => {
		fetchUsers([
			{
				id: "1",
				followed: false,
				photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
				firstName: "Dmitry",
				lastName: "Volkov",
				middleName: "",
				status: "Doma",
				location: {
					country: "Russia",
					city: "Kaluga"
				}
			},
			{
				id: "2",
				followed: true,
				photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
				firstName: "Ivan",
				lastName: "Dada",
				middleName: "",
				status: "Doma2",
				location: {
					country: "Russia",
					city: "Kaluga"
				}
			},
			{
				id: "3",
				followed: false,
				photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
				firstName: "Igor",
				lastName: "Neigor",
				middleName: "",
				status: "Doma3",
				location: {
					country: "Russia",
					city: "Kaluga"
				}
			},
			{
				id: "4",
				followed: false,
				photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
				firstName: "Ivan",
				lastName: "Dada",
				middleName: "",
				status: "Doma2",
				location: {
					country: "Russia",
					city: "Kaluga"
				}
			},
			{
				id: "5",
				followed: true,
				photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
				firstName: "Igor",
				lastName: "Neigor",
				middleName: "",
				status: "Doma3",
				location: {
					country: "Russia",
					city: "Kaluga"
				}
			}
		])
	}, [])

	return (
		<div className={"users-catalog"}>
			<div className="users-catalog__wrapper">
				<ul className="users-catalog__list">
					{users.map(u => (
						<li className="users-catalog__item users-catalog-item">
							<div className="users-catalog-item__side">
								<div className="users-catalog-item__avatar">
									<img src={u.photoUrl} alt="AVATAR"/>
								</div>
							</div>
							<div className="users-catalog-item__main">
								<div className="users-catalog-item__info">
									<p className="users-catalog-item__name">
										{u.firstName} {u.lastName}
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

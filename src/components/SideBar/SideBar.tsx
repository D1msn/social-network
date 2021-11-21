import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactSVG} from "react-svg";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import profileIcon from '../../images/user_24.svg'
import messagesIcon from '../../images/chating_24.svg'
import newsIcon from '../../images/choose_type-public.svg'
import musicIcon from '../../images/volume-up.svg'
import settingsIcon from '../../images/settings_24.svg'
import sidebarAvatar from '../../images/ava.jpg'

import './SideBar.scss';
import {StoreContext} from '../../StoreContext';

type SideBarPropsTypes = {
	// state: SideBarType
}

const SideBar: React.FC<SideBarPropsTypes> = (props) => {

	return (
		<nav className="sidebar ">
			<div className="sidebar__avatar">
				<NavLink to="/profile">
					<img src={sidebarAvatar} alt="Avatar"/>
				</NavLink>
			</div>
			<ul className="sidebar__links">
				<li className="sidebar__item">
					<NavLink to="/profile" className="sidebar__link">
						<ReactSVG src={profileIcon} className="sidebar__item-icon"/>
						Profile
					</NavLink>
				</li>
				<li className="sidebar__item">
					<NavLink to="/dialogs" className="sidebar__link">
						<ReactSVG src={messagesIcon} className="sidebar__item-icon"/>
						Messages
					</NavLink>
				</li>
				<li className="sidebar__item">
					<NavLink to="/news" className="sidebar__link">
						<ReactSVG src={newsIcon} className="sidebar__item-icon"/>
						News
					</NavLink></li>
				<li className="sidebar__item">
					<NavLink to="/music" className="sidebar__link">
						<ReactSVG src={musicIcon} className="sidebar__item-icon"/>
						Music
					</NavLink>
				</li>
				<li className="sidebar__item">
					<NavLink to="/settings" className="sidebar__link">
						<ReactSVG src={settingsIcon} className="sidebar__item-icon"/>
						Settings
					</NavLink>
				</li>
			</ul>

			<StoreContext.Consumer children={
				(store) => {
					return (
						<FriendsBlock friends={store.getState().sideBar.friendsList}/>
					)
				}
			}/>
		</nav>
	);
};

export default SideBar;

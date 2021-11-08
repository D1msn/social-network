import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';
import ProfileAvatar from "../common/ProfileAvatar/ProfileAvatar";

type PropsType = {
	name: string
	id: string
	avatar: string
}

const DialogsItem = (props: PropsType) => {

	return (

		<li className="dialogs__item">
			<NavLink to={`/dialogs/${props.id}`} className={"dialogs__link"}>
				<ProfileAvatar avatar={props.avatar}/>
				{props.name}
			</NavLink>
		</li>

	);
};

export default DialogsItem;

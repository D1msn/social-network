import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';
import ProfileAvatar from "../common/ProfileAvatar/ProfileAvatar";

type PropsType = {
	id: string
	message: string
	notMy?: boolean
}



const MessagesItem = (props: PropsType) => {

	return (

		<li id={props.id} className={`messages__item ${props.notMy ? "notMy" : ""}`}>
			<ProfileAvatar height={60}  width={60} />
			<div>
				<div className={"messages__item-top"}>
					<span className={"messages__item-name"}>
						Имя
					</span>
					<span className={"messages__item-time"}>
						22:00
					</span>
				</div>
				<p className="messages__text">
					{props.message}
				</p>
			</div>

		</li>

	);
};

export default MessagesItem;

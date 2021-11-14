import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';
import ProfileAvatar from "../common/ProfileAvatar/ProfileAvatar";

type PropsType = {
	message: string
	notMy?: boolean
}



const MessagesItem = (props: PropsType) => {

	return (

		<li className={`messages__item ${props.notMy ? "notMy" : ""}`}>
			<ProfileAvatar />
			<div>
				<div className={"messages__item-top"}>
					<span className={"messages__item-name"}>
						Имя
					</span>
					<span className={"messages__item-time"}>
						22:00
					</span>
				</div>
				<p className="messages__text" dangerouslySetInnerHTML={{__html: props.message}} />
			</div>

		</li>

	);
};

export default MessagesItem;

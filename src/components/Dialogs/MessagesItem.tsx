import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';

type PropsType = {
	message: string
	notMy?: boolean
}



const MessagesItem = (props: PropsType) => {

	return (

		<li className={`messages__item ${props.notMy ? "notMy" : ""}`}>
			<p className="messages__text">
			{props.message}
			</p>
		</li>

	);
};

export default MessagesItem;

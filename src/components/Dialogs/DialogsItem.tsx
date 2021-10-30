import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';

type PropsType = {
	name: string
	id: string
}



const DialogsItem = (props: PropsType) => {

	return (

		<li className="dialogs__item">
			<NavLink to={`/dialogs/${props.id}`}>
				{props.name}
			</NavLink>
		</li>

	);
};

export default DialogsItem;

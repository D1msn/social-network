import React from 'react';
import DialogsItem from "./DialogsItem";

import './Dialogs.scss';
import MessagesItem from "./MessagesItem";
import Scrollbar from "react-scrollbars-custom";

const Dialogs = () => {

	return (
		<div className="dialogs-wrapper">
			<Scrollbar className={"dialogs"} style={{ width: "90%"}} >
					<ul className="dialogs__list">
						<DialogsItem id={"1"} name={"Дима"}/>
						<DialogsItem id={"2"} name={"Олег"}/>
						<DialogsItem id={"3"} name={"Гена"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
						<DialogsItem id={"4"} name={"Игорь"}/>
					</ul>
			</Scrollbar>

			<Scrollbar className="messages">
					<ul className="messages__list">
						<MessagesItem message={"первое"} notMy/>
						<MessagesItem message={"How Are you"}/>
						<MessagesItem message={"How Are you"}/>
						<MessagesItem message={"How Are you"}/>
						<MessagesItem message={"Yo"} notMy/>
						<MessagesItem message={"Yo"} notMy/>
						<MessagesItem message={"Yo"} notMy/>
						<MessagesItem message={"Yo"}/>
						<MessagesItem message={"Yo"}/>
						<MessagesItem message={"Yo"} notMy/>
						<MessagesItem message={"Yo"}/>
						<MessagesItem message={"Yo"}/>
						<MessagesItem message={"не мое"} notMy/>
						<MessagesItem message={"Yo"}/>
						<MessagesItem message={"последнее мое"}/>
					</ul>
			</Scrollbar>

		</div>
	);
};

export default Dialogs;

import React from 'react';
import Scrollbar from "react-scrollbars-custom";
import DialogsItem from "./DialogsItem";
import MessagesItem from "./MessagesItem";

import {DialogsPageType} from "../../redux/stateTypes";
import './Dialogs.scss';
import MessageInput from "../UI/MessageInput/MessageInput";

type DialogsPropsType = {
	state: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({state}) => {
	return (
		<div className="dialogs-wrapper">
			<Scrollbar className={"dialogs"} style={{width: "90%"}}>
				<ul className="dialogs__list">
					{state.dialogsList.map((d) => (<DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>))}
				</ul>
			</Scrollbar>

			<Scrollbar className="messages">
				<ul className="messages__list">
					{state.messagesList.map((m) => <MessagesItem id={m.id} message={m.message} notMy={m.notMy}/>)}
				</ul>
				<MessageInput className={"messages__create"}/>
			</Scrollbar>

		</div>
	);
};

export default Dialogs;

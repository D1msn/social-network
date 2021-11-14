import React from 'react';
import Scrollbar from "react-scrollbars-custom";
import DialogsItem from "./DialogsItem";
import MessagesItem from "./MessagesItem";

import {ActionsTypes, DialogsPageType} from "../../redux/stateTypes";
import './Dialogs.scss';
import MessageInputBlock from "../UI/MessageInput/MessageInputBlock";
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/state";

type DialogsPropsType = {
	state: DialogsPageType
	dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({state, dispatch}) => {

	const changeNewTextMessage = (text: string) => {
		dispatch(changeNewMessageActionCreator(text))
	}

	const addNewMessage = () => {
		dispatch(addMessageActionCreator())
	}

	return (
		<div className="dialogs-wrapper">
			<Scrollbar className={"dialogs"} style={{width: "85%"}} >
				<ul className="dialogs__list">
					{state.dialogsList.map((d) => (<DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>))}
				</ul>
			</Scrollbar>

			<Scrollbar className="messages" >
				<ul className="messages__list">
					{state.messagesList.map((m) => <MessagesItem key={m.id} message={m.message} notMy={m.notMy}/>)}
				</ul>
				<div className="messages__create">
					<MessageInputBlock onAltEnter={addNewMessage}
									   changeTextCallBack={changeNewTextMessage}
									   newText={state.newMessagesText} onClick={addNewMessage}
									   />
				</div>

			</Scrollbar>

		</div>
	);
};

export default Dialogs;

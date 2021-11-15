import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
	const headerHeight = 60;
	const scrollWidth = 5

	const [messagesBlockHeight, setMessagesBlockHeight] = useState(0)
	const [messagesInputHeight, setMessagesInputHeight] = useState(0)
	const [messagesInputWidth, setMessagesInputWidth] = useState(0)

	const messagesBlockRef = useRef<any>(null)
	const messagesBlockCreate = useRef<any>(null)
	const messagesList = useRef<any>(null)


	const changeHeight = useCallback(() => {
		const messagesBlockCreateHeight = messagesBlockCreate?.current?.clientHeight;
		const totalHeight = window.innerHeight - messagesBlockCreateHeight - headerHeight - 62;

		messagesList.current.lastChild.scrollIntoView({block: "start", behavior: "smooth"})

		setMessagesInputWidth(messagesBlockRef?.current?.holderElement?.clientWidth + scrollWidth)

		setMessagesInputHeight(messagesBlockCreateHeight)
		setMessagesBlockHeight(totalHeight)

	}, [messagesInputHeight, messagesBlockHeight, window.innerHeight, messagesBlockCreate?.current?.clientHeight, messagesBlockRef?.current?.holderElement?.clientWidth])

	useEffect(() => {
		changeHeight()
		window.addEventListener('resize', changeHeight)
		return () => {
			window.removeEventListener('resize', changeHeight)
		};
	}, []);

	useEffect(() => {
		changeHeight()
		setTimeout(()=> messagesList.current.lastChild.scrollIntoView(true), 0)

	}, [messagesBlockCreate?.current?.clientHeight, messagesBlockRef?.current?.holderElement?.clientWidth]);


	const changeNewTextMessage = (text: string) => {
		dispatch(changeNewMessageActionCreator(text))
	}

	const addNewMessage = () => {
		setTimeout(() => changeHeight(), 0)
		dispatch(addMessageActionCreator())
	}

	return (
		<div className="dialogs-wrapper">
			<Scrollbar className={"dialogs"} style={{width: "85%"}}>
				<ul className="dialogs__list">
					{state.dialogsList.map((d) => (<DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>))}
				</ul>
			</Scrollbar>

			<Scrollbar className="messages" ref={messagesBlockRef} style={{height: messagesBlockHeight}}>
				<ul className="messages__list" ref={messagesList}>
					{state.messagesList.map((m) => <MessagesItem key={m.id} message={m.message} notMy={m.notMy}/>)}
				</ul>
				<div className="messages__create" ref={messagesBlockCreate} style={{ width: messagesInputWidth }}>
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

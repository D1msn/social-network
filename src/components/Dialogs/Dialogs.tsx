import React, {useCallback, useEffect, useRef, useState} from 'react';
import Scrollbar from "react-scrollbars-custom";
import DialogsItem from "./DialogsItem";
import MessagesItem from "./MessagesItem";
import MessageInputBlock from "../UI/MessageInput/MessageInputBlock";
import {DialogsPropsType} from './DialogsContainer';

import './Dialogs.scss';


const Dialogs: React.FC<DialogsPropsType> = (props) => {
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

	const addNewMessage = () => {
		setTimeout(() => changeHeight(), 0)
		props.addNewMessage()
	}

	return (
		<div className="dialogs-wrapper">
			<Scrollbar className={"dialogs"} style={{width: "85%"}}>
				<ul className="dialogs__list">
					{props.dialogsList.map((d) => (<DialogsItem id={d.id} name={d.name} avatar={d.avatar}/>))}
				</ul>
			</Scrollbar>

			<Scrollbar className="messages" ref={messagesBlockRef} style={{height: messagesBlockHeight}}>
				<ul className="messages__list" ref={messagesList}>
					{props.messagesList.map((m) => <MessagesItem key={m.id} message={m.message} notMy={m.notMy}/>)}
				</ul>
				<div className="messages__create" ref={messagesBlockCreate} style={{ width: messagesInputWidth }}>
					<MessageInputBlock onAltEnter={addNewMessage}
									   changeTextCallBack={props.changeNewTextMessage}
									   newText={props.newMessagesText} onClick={addNewMessage}
					/>
				</div>
			</Scrollbar>
		</div>
	);
};

export default Dialogs;

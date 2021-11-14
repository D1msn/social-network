import React, {KeyboardEvent} from 'react';

import './MessageInput/MessageInputBlock.scss';
import ContentEditable, {ContentEditableEvent} from "react-contenteditable";

type MyInput = {
	className?: string
	onAltEnter: () => void
	changeTextCallBack: (value: string) => void
	text: string
}

const MyInput: React.FC<MyInput> = ({className, onAltEnter, text, changeTextCallBack}) => {

	const onChangeHandler = (e: ContentEditableEvent) =>{
		changeTextCallBack(e.target.value)
	}

	const onEnterCallback = (e: KeyboardEvent<HTMLDivElement>) => {
		if(e.key === "Enter" && e.altKey){
			onAltEnter()
		}
	}

	return (
		<ContentEditable onKeyDown={onEnterCallback} html={text} onChange={onChangeHandler} className="message-input-block__input"/>
	);
};

export default MyInput;

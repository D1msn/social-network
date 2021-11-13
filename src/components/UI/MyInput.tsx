import React, {KeyboardEvent} from 'react';

import './MessageInput/MessageInputBlock.scss';
import ContentEditable, {ContentEditableEvent} from "react-contenteditable";

type MyInput = {
	className?: string
	onAltEnter: () => void
	onChangeInput: (value:string) => void
	text: string
}

const MyInput: React.FC<MyInput> = ({className, onAltEnter, text, onChangeInput}) => {

	const onChangeHandler = (e: ContentEditableEvent) =>{
		onChangeInput(e.target.value)
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

import React from 'react';
import {ActionsTypes} from "../../../redux/stateTypes";
import MyInput from "../MyInput";
import {changeNewPostActionCreator} from "../../../redux/state";

import './MessageInputBlock.scss';

type MessageInputPropsType = {
	onClick: () => void
	onAltEnter: () => void
	className?: string
	newText: string
	changeTextCallBack: (value: string) => void
}

const MessageInputBlock: React.FC<MessageInputPropsType> = ({className, onClick, onAltEnter, newText, ...props}) => {

	return (
		<div className={`message-input-block ${className}`}>
			<div className="message-input-block__wrapper">
				<MyInput onAltEnter={onAltEnter} changeTextCallBack={props.changeTextCallBack} text={newText}/>
				<button className="message-input-block__send-btn" onClick={onClick}>
					<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd"
							  d="M2 3V23C2 24.5468 3.68077 25.5081 5.01404 24.7239L22.014 14.7239C23.3287 13.9506 23.3287 12.0494 22.014 11.2761L5.01404 1.27613C3.68077 0.491857 2 1.45317 2 3Z"
							  fill="#758CA3"/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default MessageInputBlock;

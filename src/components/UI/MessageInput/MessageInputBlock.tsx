import React, {useState} from 'react';
import MyInput from "../MyInput";

import './MessageInputBlock.scss';

type MessageInputPropsType = {
	onClick: (inputValue:string) => void
	className?: string
}

const MessageInputBlock: React.FC<MessageInputPropsType> = ({className, onClick,...props}) => {
	const [inputValue, setInputValue] = useState<string>("")

	const onClickCallBack = () => {
		onClick(inputValue)
	}

	return (
		<div className={`message-input-block ${className}`}>
			<div className="message-input-block__wrapper">
				<MyInput setInputValue={setInputValue} />
				<button className="message-input-block__send-btn" onClick={onClickCallBack}>
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

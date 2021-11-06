import React from 'react';

import './MessageInput.scss';

type MessageInputPropsType = {
	className?: string
}

const MessageInput: React.FC<MessageInputPropsType> = ({className}) => {
	return (
		<div className={`message-input-block ${className}`}>
			<div className="message-input-block__wrapper">
				<div className="message-input-block__input" contentEditable={true}></div>
				<button className="message-input-block__send-btn">
					<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3V23C2 24.5468 3.68077 25.5081 5.01404 24.7239L22.014 14.7239C23.3287 13.9506 23.3287 12.0494 22.014 11.2761L5.01404 1.27613C3.68077 0.491857 2 1.45317 2 3Z" fill="#758CA3"/>
					</svg>

				</button>
			</div>
		</div>
	);
};

export default MessageInput;

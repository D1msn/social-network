import React, {ChangeEvent} from 'react';

import './MessageInput/MessageInputBlock.scss';

type MyInput = {
	className?: string
	setInputValue: (value:string) => void
}

const MyInput: React.FC<MyInput> = ({className, setInputValue}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLDivElement>) =>{      ////////////////////////////////ИСПРАВИТЬ ТИП
		setInputValue(e.target.innerText)
	}
	return (
		<div onInput={onChangeHandler}  className="message-input-block__input" contentEditable={true}/>
	);
};

export default MyInput;

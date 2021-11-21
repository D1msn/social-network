import React from 'react';
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsPageType, StoreType} from "../../redux/stateTypes";

import './Dialogs.scss';
import { StoreContext } from '../../StoreContext';

type DialogsContainerPropsType = {
	// store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
	return (
		<StoreContext.Consumer children={
			(store) => {
				const state: DialogsPageType = store.getState().dialogsPage

				const changeNewTextMessage = (text: string) => {
					store.dispatch(changeNewMessageActionCreator(text))
				}

				const addNewMessage = () => {
					store.dispatch(addMessageActionCreator())
				}

				return (
					<Dialogs dialogsList={state.dialogsList}
							 messagesList={state.messagesList}
							 newMessagesText={state.newMessagesText}
							 addNewMessage={addNewMessage}
							 changeNewTextMessage={changeNewTextMessage}/>
				)
			}
		}/>
	);
};

export default DialogsContainer;

import React from 'react';
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {DialogsListType, MessagesListType} from "../../redux/storeTypes";
import {Dispatch} from 'redux';
import {AppStateType} from "../../redux/redux-store";

import './Dialogs.scss';


export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
	dialogsList: DialogsListType
	messagesList: MessagesListType
	newMessagesText: string
}

type MapDispatchToPropsType = {
	addNewMessage: () => void
	changeNewTextMessage: (text: string) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return{
		dialogsList: state.dialogsPage.dialogsList,
		messagesList: state.dialogsPage.messagesList,
		newMessagesText: state.dialogsPage.newMessagesText
	}
}
const mapDispatchToState = (dispatch: Dispatch): MapDispatchToPropsType => {
	return{
		addNewMessage: () => {
			dispatch(addMessageActionCreator())
		},
		changeNewTextMessage: (text: string) => {
			dispatch(changeNewMessageActionCreator(text))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToState)(Dialogs)

export default DialogsContainer;

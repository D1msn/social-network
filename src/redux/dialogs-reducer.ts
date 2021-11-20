import {ActionsTypes, DialogsPageType, MessageType} from "./stateTypes";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const initialState: DialogsPageType = {
	dialogsList: [
		{id: "1", name: "Дима", avatar: "http://lorempixel.com/150/450/"},
		{id: "2", name: "Игорь", avatar: "http://lorempixel.com/650/450/"},
		{id: "3", name: "Олег", avatar: "http://lorempixel.com/450/450/"},
		{id: "4", name: "Гена", avatar: "http://lorempixel.com/550/450/"},
		{id: "5", name: "Света", avatar: "http://lorempixel.com/450/250/"},
		{id: "6", name: "Оля", avatar: "http://lorempixel.com/250/450/"},
		{id: "7", name: "Яна", avatar: "http://lorempixel.com/350/450/"},
	],
	messagesList: [
		{id: "1", message: "первое", notMy: false},
		{id: "2", message: "How Are you", notMy: false},
		{id: "3", message: "Yo", notMy: false},
		{id: "4", message: "не мое", notMy: true},
		{id: "5", message: "не мое сообщение", notMy: true},
		{id: "6", message: "не мое", notMy: true},
		{id: "7", message: "последнее мое", notMy: false},
	],
	newMessagesText: ''
}

type DialogsReducerType = (state: DialogsPageType, action: ActionsTypes) => DialogsPageType

const dialogsReducer: DialogsReducerType = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (state.newMessagesText.length > 0) {
				let newMessage: MessageType = {id: "5", message: state.newMessagesText, notMy: false};
				state.messagesList.push(newMessage)
				state.newMessagesText = ''
			}
			return state
		case CHANGE_NEW_MESSAGE_TEXT:
			state.newMessagesText = action.newMessageText;
			return state
		default:
			return state
	}
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const changeNewMessageActionCreator = (newMessageText: string) => ({
	type: CHANGE_NEW_MESSAGE_TEXT,
	newMessageText
} as const)

export default dialogsReducer;


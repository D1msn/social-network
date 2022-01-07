import {DialogsActionsTypes, DialogsPageType, MessageType} from "../storeTypes";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const initialState: DialogsPageType = {
	dialogsList: [
		{
			id: "1",
			name: "Дима",
			avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
		},
		{
			id: "2",
			name: "Игорь",
			avatar: "data:image/jpeg;base64,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"
		},
		{
			id: "3",
			name: "Олег",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyonydaZbb2iko5EWvI1O7AsfEwlBA9qqxQ&usqp=CAU"
		},
		{
			id: "4",
			name: "Гена",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bxCh54WgCUuDt2QoGduhWe_bxLObQ1GW8w&usqp=CAU"
		},
		{
			id: "5",
			name: "Света",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO16OPSvK5qiq3mwDQP7jT83RX5gttdjwfJg&usqp=CAU"
		},
		{
			id: "6",
			name: "Оля",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU"
		},
		{
			id: "7",
			name: "Яна",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sEOqF11egSJsksb-99FItW-D2JpdeK3vEA&usqp=CAU"
		},
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

const dialogsReducer = (state = initialState, action: DialogsActionsTypes): DialogsPageType => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (state.newMessagesText.length > 0) {
				let newMessage: MessageType = {id: "5", message: state.newMessagesText, notMy: false};
				state.newMessagesText = ''
				return {...state, messagesList: [...state.messagesList, newMessage]}
			}
			return state
		case CHANGE_NEW_MESSAGE_TEXT:
			return {...state, newMessagesText: action.newMessageText}
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


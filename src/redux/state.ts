import {ActionsTypes, MessageType, MyPostType, StoreType} from "./stateTypes";

export const ADD_POST = "ADD-POST";
export const ADD_MESSAGE = "ADD-MESSAGE";
export const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

export const Store: StoreType = {
	_state: {
		profilePage: {
			myPostsList: [
				{id: "1", postMessage: "первое", likesCount: 0},
				{id: "2", postMessage: "How Are you", likesCount: 11},
				{id: "3", postMessage: "Yo", likesCount: 32},
				{id: "4", postMessage: "не мое", likesCount: 5},
				{id: "5", postMessage: "не мое сообщение", likesCount: 1},
				{id: "6", postMessage: "не мое", likesCount: 22},
				{id: "7", postMessage: "последнее мое", likesCount: 1111},
			],
			newPostText: '',
		},

		dialogsPage: {
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
		},

		sideBar: {
			friendsList: [
				{id: "1", name: "Дима", avatar: "http://lorempixel.com/150/450/"},
				{id: "2", name: "Игорь", avatar: "http://lorempixel.com/650/450/"},
				{id: "3", name: "Олег", avatar: "http://lorempixel.com/450/450/"},
			]
		}
	},

	_callSubscriber(){
		console.log("no Subscribers")
	},
	subscribe(observer){
		this._callSubscriber = observer
	},

	getState(){
		return this._state
	},
	dispatch(action: ActionsTypes){
		if(action.type === ADD_POST){
			if (this._state.profilePage.newPostText.length > 0) {
				let newPost: MyPostType = {id: "8", postMessage: this._state.profilePage.newPostText, likesCount: 0}
				this._state.profilePage.myPostsList.push(newPost)
				this._state.profilePage.newPostText = ''
				this._callSubscriber()
			}
		} else if (action.type === CHANGE_NEW_POST_TEXT){

			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber();

		}  else if (action.type === ADD_MESSAGE){
			if (this._state.dialogsPage.newMessagesText.length > 0) {
				let newMessage: MessageType = {id: "5", message: this._state.dialogsPage.newMessagesText, notMy: false};
				this._state.dialogsPage.messagesList.push(newMessage)
				this._state.dialogsPage.newMessagesText = ''
				this._callSubscriber()
			}
		}else if (action.type === CHANGE_NEW_MESSAGE_TEXT){

			this._state.dialogsPage.newMessagesText = action.newMessageText;
			this._callSubscriber();

		}
	}

}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const changeNewPostActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText } as const)
export const changeNewMessageActionCreator = (newMessageText: string) => ({type: CHANGE_NEW_MESSAGE_TEXT, newMessageText } as const)



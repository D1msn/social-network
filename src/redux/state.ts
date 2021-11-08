import {MyPostType, StateType} from "./stateTypes";
import style from "react-scrollbars-custom/dist/types/style";

export const State: StateType  = {
	profilePage: {
		myPostsList:  [
			{id: "1", postMessage: "первое", likesCount: 0},
			{id: "2", postMessage: "How Are you", likesCount: 11},
			{id: "3", postMessage: "Yo", likesCount: 32},
			{id: "4", postMessage: "не мое", likesCount: 5},
			{id: "5", postMessage: "не мое сообщение", likesCount: 1},
			{id: "6", postMessage: "не мое", likesCount: 22},
			{id: "7", postMessage: "последнее мое", likesCount: 1111},
		]
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
	},

	sideBar: {
		friendsList: [
			{id: "1", name: "Дима", avatar: "http://lorempixel.com/150/450/"},
			{id: "2", name: "Игорь", avatar: "http://lorempixel.com/650/450/"},
			{id: "3", name: "Олег", avatar: "http://lorempixel.com/450/450/"},
		]
	}
}

export const addPost = (message:string) =>{
	let newPost: MyPostType = {id: "8", postMessage: message, likesCount: 0}
	State.profilePage.myPostsList.push(newPost)
	console.log(newPost)
}


import {ActionsTypes, MyPostType, ProfilePageType, SideBarType} from "./stateTypes";


const initialState: SideBarType = {
	friendsList: [
		{id: "1", name: "Дима", avatar: "http://lorempixel.com/150/450/"},
		{id: "2", name: "Игорь", avatar: "http://lorempixel.com/650/450/"},
		{id: "3", name: "Олег", avatar: "http://lorempixel.com/450/450/"},
	]
}

type SidebarReducerType = (state: SideBarType, action: ActionsTypes) => SideBarType


const sidebarReducer: SidebarReducerType = (state = initialState, action) => {
	return state
}


export default sidebarReducer;

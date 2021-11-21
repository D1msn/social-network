import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./stateTypes";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sideBar: sidebarReducer
})

export const store: StoreType = createStore(reducers)



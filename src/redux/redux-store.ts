import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export const rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sideBar: sidebarReducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof store.getState>



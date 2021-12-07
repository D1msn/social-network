import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersCatalogReducer} from "./reducers/users-catalog-reducer";

export const rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sideBar: sidebarReducer,
	usersCatalog: usersCatalogReducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof store.getState>



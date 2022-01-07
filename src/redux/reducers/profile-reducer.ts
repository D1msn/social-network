import {MyPostType, ProfileActionsTypes, ProfileInfoType, ProfilePageType} from "../storeTypes";

export const ADD_POST = "ADD-POST";
export const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
export const SET_USER_PROFILE_INFO = "SET-USER-PROFILE-INFO";

const initialState: ProfilePageType = {
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
	profileInfo: null,
}

const profileReducer = (state = initialState, action: ProfileActionsTypes): ProfilePageType  => {

	switch (action.type) {
		case ADD_POST:
			if (state.newPostText.length > 0) {
				let newPost: MyPostType = {id: "8", postMessage: state.newPostText, likesCount: 0}
				state.newPostText = ''
				return {...state, myPostsList: [...state.myPostsList, newPost]}
			}
			return state
		case CHANGE_NEW_POST_TEXT:
			return {...state, newPostText: action.newText}
		case SET_USER_PROFILE_INFO:
			return {...state, profileInfo: action.profileInfo}
		default:
			return state
	}

}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changeNewPostActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText } as const)
export const setUserProfileInfo = (profileInfo: ProfileInfoType) => ({type: SET_USER_PROFILE_INFO, profileInfo } as const)

export default profileReducer;

import {addPostActionCreator, changeNewPostActionCreator} from "./profile-reducer";
import {addMessageActionCreator, changeNewMessageActionCreator} from "./dialogs-reducer";


export type StoreType = {
	_state: StateType
	_callSubscriber: () => void
	subscribe: (observer: () => void) => void
	getState: () => StateType
	dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
	ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof addMessageActionCreator>
	| ReturnType<typeof changeNewPostActionCreator>
	| ReturnType<typeof changeNewMessageActionCreator>


export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sideBar: SideBarType
}

export type MessageType = {
	id: string
	message: string
	notMy: boolean
}
export type DialogType = {
	id: string
	name: string
	avatar: string
}
export type MyPostType = {
	id: string
	postMessage: string
	likesCount: number
}
export type FriendType = {
	id: string
	name: string
	avatar: string
}

export type ProfilePageType = {
	myPostsList: MyPostsListType
	newPostText: string
}
export type DialogsPageType = {
	messagesList: MessagesListType
	dialogsList: DialogsListType
	newMessagesText: string
}
export type SideBarType = {
	friendsList: FriendsListType
}

export type DialogsListType = DialogType[];
export type MessagesListType = MessageType[];
export type FriendsListType = FriendType[];
export type MyPostsListType = MyPostType[];

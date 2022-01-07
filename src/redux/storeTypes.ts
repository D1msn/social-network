import {addPostActionCreator, changeNewPostActionCreator, setUserProfileInfo} from "./reducers/profile-reducer";
import {addMessageActionCreator, changeNewMessageActionCreator} from "./reducers/dialogs-reducer";


export type StoreType = {
	_state: StateType
	_callSubscriber: () => void
	subscribe: (observer: () => void) => void
	getState: () => StateType
	dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | SidebarActionsTypes

export type ProfileActionsTypes =
	ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof changeNewPostActionCreator>
	| ReturnType<typeof setUserProfileInfo>

export type SidebarActionsTypes = {}

export type DialogsActionsTypes =
	ReturnType<typeof addMessageActionCreator>
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

// --------PROFILE

export type ProfilePageType = {
	myPostsList: MyPostsListType
	newPostText: string
	profileInfo: ProfileInfoType | null
}

export type ProfileInfoType = {
	aboutMe: string;
	contacts: ProfileInfoContactsType;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: ProfileInfoPhotosType;
}

export type ProfileInfoContactsType = {
	facebook: string;
	website: string;
	vk: string;
	twitter: string;
	instagram: string;
	youtube: string;
	github: string;
	mainLink: string;
}

export type ProfileInfoPhotosType = {
	small: string;
	large: string;
}


//----PROFILE
export type DialogsPageType = {
	messagesList: MessagesListType
	dialogsList: DialogsListType
	newMessagesText: string
}
export type SideBarType = {
	friendsList: FriendsListType
}

export type UserCatalogType = {
	id: number,
	followed: boolean,
	photos: {
		large: string
		small: string
	}
	name: string,
	lastName: string,
	middleName: string,
	status: string,
	location: {
		country: string,
		city: string
	}
}
export type UsersCatalogType = {
	users: UserCatalogType[]
	totalUsersCount: number
	pageSize: number
	currentPage: number
	isLoading: boolean
}

export type DialogsListType = DialogType[];
export type MessagesListType = MessageType[];
export type FriendsListType = FriendType[];
export type MyPostsListType = MyPostType[];

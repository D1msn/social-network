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
}
export type DialogsPageType = {
	messagesList: MessagesListType
	dialogsList: DialogsListType
}
export type SideBarType = {
	friendsList: FriendsListType
}

export type DialogsListType = DialogType[];
export type MessagesListType = MessageType[];
export type FriendsListType = FriendType[];
export type MyPostsListType = MyPostType[];

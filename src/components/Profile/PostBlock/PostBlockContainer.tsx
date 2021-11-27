import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";
import PostBLock from "./PostBlock";
import {AppStateType} from "../../../redux/redux-store";
import {MyPostsListType, MyPostType, ProfilePageType} from "../../../redux/storeTypes";
import { Dispatch } from 'redux';

import './PostBlock.scss';

export type PostBlockPropsTypes = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
	myPostsList: MyPostsListType
	newTextPost: string
}

type MapDispatchToProps = {
	changeTextAction: (text: string) => void
	addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		myPostsList: state.profilePage.myPostsList,
		newTextPost: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
	return {
		changeTextAction: (text: string) => {
			dispatch(changeNewPostActionCreator(text))
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		},
	}
}

const PostBLockContainer = connect(mapStateToProps,mapDispatchToProps)(PostBLock)

export default PostBLockContainer;

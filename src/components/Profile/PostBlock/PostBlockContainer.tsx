import React from 'react';
import Post from "./Post/Post";
import {ActionsTypes, MyPostsListType, ProfilePageType, StoreType} from "../../../redux/stateTypes";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";


import './PostBlock.scss';
import MessageInputBlock from "../../UI/MessageInput/MessageInputBlock";
import PostBLock from "./PostBlock";
import { StoreContext } from '../../../StoreContext';


type PostBlockPropsTypes = {
	// store: StoreType
}

const PostBLockContainer: React.FC<PostBlockPropsTypes> = (props) => {

  return (
	  <StoreContext.Consumer children={
		  (store) => {
			  const state: ProfilePageType = store.getState().profilePage

			  const addPost = () => {
				  store.dispatch(addPostActionCreator())
			  }

			  const changeTextAction = (text: string) => {
				  store.dispatch(changeNewPostActionCreator(text))
			  }
			  return (
				  <PostBLock myPostsList={state.myPostsList} addPost={addPost} newTextPost={state.newPostText} changeTextAction={changeTextAction}/>
			  )
		  }
	  }/>
  );
};

export default PostBLockContainer;

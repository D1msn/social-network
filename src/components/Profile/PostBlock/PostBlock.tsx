import React from 'react';
import Post from "./Post/Post";
import {ActionsTypes, MyPostsListType} from "../../../redux/stateTypes";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";


import './PostBlock.scss';
import MessageInputBlock from "../../UI/MessageInput/MessageInputBlock";


type PostBlockPropsTypes = {
	myPostsList: MyPostsListType
	newTextPost: string
	dispatch: (action: ActionsTypes) => void
}

const PostBLock: React.FC<PostBlockPropsTypes> = ({myPostsList, newTextPost, ...props}) => {

	const addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const changeTextAction = (text: string) => {
		props.dispatch(changeNewPostActionCreator(text))
	}

  return (
	  <div className={"post-block"}>
		  <h2 className={"post-block__title"}>My posts</h2>
		  <div className={"post-block__create"}>
			  <MessageInputBlock onAltEnter={addPost} changeTextCallBack={changeTextAction} newText={newTextPost} onClick={addPost}/>
		  </div>
		  <ul className={"post-block__list"}>
			  {myPostsList.map((p) => <Post key={p.id} message={p.postMessage} likesCount={p.likesCount}/>)}
		  </ul>
	  </div>
  );
};

export default PostBLock;

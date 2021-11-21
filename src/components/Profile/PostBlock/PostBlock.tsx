import React from 'react';
import Post from "./Post/Post";
import {ActionsTypes, MyPostsListType} from "../../../redux/stateTypes";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";


import './PostBlock.scss';
import MessageInputBlock from "../../UI/MessageInput/MessageInputBlock";


type PostBlockPropsTypes = {
	addPost: () => void
	changeTextAction: (text: string) => void
	myPostsList: MyPostsListType
	newTextPost: string
}

const PostBLock: React.FC<PostBlockPropsTypes> = ({myPostsList, newTextPost, ...props}) => {
  return (
	  <div className={"post-block"}>
		  <h2 className={"post-block__title"}>My posts</h2>
		  <div className={"post-block__create"}>
			  <MessageInputBlock onAltEnter={props.addPost} changeTextCallBack={props.changeTextAction} newText={newTextPost} onClick={props.addPost}/>
		  </div>
		  <ul className={"post-block__list"}>
			  {myPostsList.map((p) => <Post key={p.id} message={p.postMessage} likesCount={p.likesCount}/>)}
		  </ul>
	  </div>
  );
};

export default PostBLock;

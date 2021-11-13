import React, {useState} from 'react';
import Post from "./Post/Post";
import {MyPostsListType} from "../../../redux/stateTypes";


import './PostBlock.scss';
import MessageInputBlock from "../../UI/MessageInput/MessageInputBlock";


type PostBlockPropsTypes = {
	myPostsList: MyPostsListType
	addPost: () => void
	newTextPost: string
	changeNewPostText: (text: string) => void
}

const PostBLock: React.FC<PostBlockPropsTypes> = ({myPostsList, newTextPost, ...props}) => {

	const addPost = () => {
		props.addPost();
	}

  return (
	  <div className={"post-block"}>
		  <h2 className={"post-block__title"}>My posts</h2>
		  <div className={"post-block__create"}>
			  <MessageInputBlock onAltEnter={addPost} changeNewPostText={props.changeNewPostText} newText={newTextPost} onClick={addPost}/>
		  </div>
		  <ul className={"post-block__list"}>
			  {myPostsList.map((p) => <Post key={p.id} message={p.postMessage} likesCount={p.likesCount}/>)}
		  </ul>
	  </div>
  );
};

export default PostBLock;

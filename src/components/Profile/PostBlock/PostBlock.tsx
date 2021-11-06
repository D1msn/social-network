import React from 'react';
import Post from "./Post/Post";
import {MyPostsListType} from "../../../redux/stateTypes";


import './PostBlock.scss';
import MessageInput from "../../UI/MessageInput/MessageInput";


type PostBlockPropsTypes = {
	myPostsList: MyPostsListType
}

const PostBLock: React.FC<PostBlockPropsTypes> = ({myPostsList}) => {


  return (
	  <div className={"post-block"}>
		  <h2 className={"post-block__title"}>My posts</h2>
		  <div className={"post-block__create"}>
			  <MessageInput/>
		  </div>
		  <ul className={"post-block__list"}>
			  {myPostsList.map((p) => <Post id={p.id} message={p.postMessage} likesCount={p.likesCount}/>)}
		  </ul>
	  </div>
  );
};

export default PostBLock;

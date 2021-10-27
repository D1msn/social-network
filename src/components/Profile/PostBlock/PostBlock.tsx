import React from 'react';
import Post from "./Post/Post";

import './PostBlock.scss';

const PostBLock = () => {

  return (
	  <div className={"post-block"}>
		  <h2 className={"post-block__title"}>My posts</h2>
		  <div className={"post-block__create"}>
			  <input className={"post-block__input"}/>
			  <button className={"post-block__btn"}>Send</button>
		  </div>
		  <ul className={"post-block__list"}>
			  <Post/>
			  <Post/>
			  <Post/>
			  <Post/>
			  <Post/>
			  <Post/>
			  <Post/>
			  <Post/>
		  </ul>
	  </div>
  );
};

export default PostBLock;

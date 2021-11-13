import React from 'react';

import './Post.scss';

type PropsType = {
	message: string
	likesCount: number
}

const Post = (props: PropsType) => {

  return (
	  <li className="post-block__item">
		  <div className="post-block__item-text" dangerouslySetInnerHTML={{__html: props.message}}/>
		   Лайков: {props.likesCount}</li>
  );
};

export default Post;

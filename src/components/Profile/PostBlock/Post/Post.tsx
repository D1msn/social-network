import React from 'react';

import './Post.scss';

type PropsType = {
	id: string
	message: string
	likesCount: number
}

const Post = (props: PropsType) => {

  return (
	  <li id={props.id} className="post-block__item">{props.message} Лайков: {props.likesCount}</li>
  );
};

export default Post;

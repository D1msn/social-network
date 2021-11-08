import React from 'react';
import {FriendsListType} from "../../../redux/stateTypes";
import ProfileAvatar from "../../common/ProfileAvatar/ProfileAvatar";

import './FriendsBlock.scss'

type FriendsBlockPropsTypes ={
	friends: FriendsListType
}

const FriendsBlock: React.FC<FriendsBlockPropsTypes> = ({friends}) => {

	return (
		<div className={"friends-block"}>
			<p className="friends-block__title">
				Добавить красивую плашку друзей(SVG)
			</p>
			<ul className="friends-block__list">
				{friends.map(friend => (
					<li key={friend.id} className="friends-block__item">
						<ProfileAvatar avatar={friend.avatar} width={50} height={50}/>
					</li>
				))}
			</ul>
		</div>
	)
		;
};

export default FriendsBlock;

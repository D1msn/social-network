import React from 'react';
import ProfileAvatar from "../../common/ProfileAvatar/ProfileAvatar";
import {FriendsBlockPropsTypes} from '../SideBar';

import './FriendsBlock.scss'

const FriendsBlock: React.FC<FriendsBlockPropsTypes> = ({friends}) => {

	return (
		<div className={"friends-block"}>
			<p className="friends-block__title">
				Friends
			</p>
			<ul className="friends-block__list">
				{friends.map(friend => (
					<li key={friend.id} className="friends-block__item">
						<ProfileAvatar avatar={friend.avatar} width={45} height={45}/>
					</li>
				))}
			</ul>
		</div>
	)
		;
};

export default FriendsBlock;

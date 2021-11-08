import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostBLock from "./PostBlock/PostBlock";
import {ProfilePageType} from "../../redux/stateTypes";

import './Profile.scss'

type ProfilePropsTypes = {
	state: ProfilePageType
	addPost: (message: string) => void
}

const Profile: React.FC<ProfilePropsTypes> = ({state,addPost}) => {

	return (
		<div className={"profile"}>
			<div className={"profile__banner"}>
				<img
					src={"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
			</div>
			<ProfileInfo/>
			<PostBLock  myPostsList={state.myPostsList} addPost={addPost}/>
		</div>


	);
};

export default Profile;

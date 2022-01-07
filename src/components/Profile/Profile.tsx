import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostBLockContainer from "./PostBlock/PostBlockContainer";

import './Profile.scss'

import {ProfilePropsTypes} from "./ProfileContainer";
import {Loader} from "../common/Loader";


const Profile: React.FC<ProfilePropsTypes> = ({profileInfo}) => {

	if (!profileInfo) {
		return <Loader/>
	}

	return (
		<div className={"profile"}>
			<div className={"profile__banner"}>
				<img
					src={"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
			</div>
			<ProfileInfo profileInfo={profileInfo} />
			<PostBLockContainer />
		</div>


	);
};

export default Profile;

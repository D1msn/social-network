import React from 'react';

type ProfileAvatarPropsType = {
	width?: number,
	height?: number
	style?: {}
	avatar?: string
}

const ProfileAvatar: React.FC<ProfileAvatarPropsType> = ({style, height = 60, width = 60, avatar = "https://via.placeholder.com/150"}) => {
	const imgStyles = Object.assign({
		width: width,
		height: height
	}, style)


	return (
		<div className="profile-avatar">
			<img src={avatar} alt={"AVATAR"} style={imgStyles}/>
		</div>
	);
};

export default ProfileAvatar;

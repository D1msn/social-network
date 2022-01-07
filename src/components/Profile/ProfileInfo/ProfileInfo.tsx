import React from 'react';

import './ProfileInfo.scss';
import {ProfileInfoType} from "../../../redux/storeTypes";
import {Loader} from "../../common/Loader";

type PropsTypes = {
	profileInfo: ProfileInfoType
}

const ProfileInfo = ({profileInfo}: PropsTypes) => {

	return (
		<div className={"profile-info"}>
			<div>
				<p className="profile-info__full-name">{profileInfo.fullName}</p>
				<div className={"profile-info__avatar"}>
					<img src={profileInfo.photos.small} alt={"AVATAR"}/>
				</div>

				{profileInfo.lookingForAJob && <div style={{display: 'flex'}}>
                    <span style={{
						display: 'flex',
						width: 15,
						height: 15,
						borderRadius: '50%',
						background: 'green',
						marginRight: 5
					}}></span>
                    <p>{profileInfo.lookingForAJobDescription}</p>
                </div>}

			</div>

			<div className={"profile-info__descr"}>
				{profileInfo.aboutMe}
			</div>
			<div className="profile-info__contacts">
				Контакты для связи
				<ul className="profile-info__contacts-list">
					{Object.entries(profileInfo.contacts).map(([contactType, link]) => {
						return <li className="profile-info__contact-item">
							{link && `${contactType} : ${link}`}
						</li>
					})}
				</ul>
			</div>

		</div>
	);
};

export default ProfileInfo;

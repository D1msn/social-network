import React from 'react';

import './Profile.scss'
import Profile from "./Profile";
import {ProfileInfoType} from "../../redux/storeTypes";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileInfo} from "../../redux/reducers/profile-reducer";
import axios from "axios";
import {Loader} from "../common/Loader";

export type ProfilePropsTypes = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
	profileInfo: ProfileInfoType | null
}

type MapDispatchToPropsType = {
	setUserProfileInfo: (profileInfo: ProfileInfoType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	profileInfo: state.profilePage.profileInfo
})

const mapDispatchToProps: MapDispatchToPropsType = {
	setUserProfileInfo
}

class ProfileContainer extends React.Component<ProfilePropsTypes, any> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12654`)
			.then(res => {
				this.props.setUserProfileInfo(res.data)
			})
	}

	render() {
		return (
			<Profile {...this.props} />
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

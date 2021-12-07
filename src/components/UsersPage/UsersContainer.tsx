import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersCatalog from "./UsersCatalog";
import {UserCatalogType} from "../../redux/storeTypes";
import {fetchUsersAC, followUserAC, unFollowUserAC} from "../../redux/reducers/users-catalog-reducer";

export type UsersCatalogPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
	users: UserCatalogType[]
}

type MapDispatchToPropsType = {
	followUser: (userId: string) => void
	unFollowUser: (userId: string) => void
	fetchUsers: (users: UserCatalogType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return{
		users: state.usersCatalog.users
	}
}
const mapDispatchToState = (dispatch: Dispatch): MapDispatchToPropsType => {
	return{
		followUser: (userId: string) => {
			dispatch(followUserAC(userId))
		},
		unFollowUser: (userId: string) => {
			dispatch(unFollowUserAC(userId))
		},
		fetchUsers: (users) => {
			dispatch(fetchUsersAC(users))
		},
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToState)(UsersCatalog)

export default UsersContainer;

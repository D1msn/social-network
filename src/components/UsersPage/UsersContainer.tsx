import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersCatalog from "./UsersCatalog";
import {UserCatalogType, UsersCatalogType} from "../../redux/storeTypes";
import {
	fetchUsersAC,
	followUserAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	unFollowUserAC
} from "../../redux/reducers/users-catalog-reducer";

export type UsersCatalogPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = UsersCatalogType

type MapDispatchToPropsType = {
	followUser: (userId: number) => void
	unFollowUser: (userId: number) => void
	fetchUsers: (users: UserCatalogType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return{
		users: state.usersCatalog.users,
		totalUsersCount: state.usersCatalog.totalUsersCount,
		pageSize: state.usersCatalog.pageSize,
		currentPage: state.usersCatalog.currentPage,
	}
}
const mapDispatchToState = (dispatch: Dispatch): MapDispatchToPropsType => {
	return{
		followUser: (userId: number) => {
			dispatch(followUserAC(userId))
		},
		unFollowUser: (userId: number) => {
			dispatch(unFollowUserAC(userId))
		},
		fetchUsers: (users) => {
			dispatch(fetchUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch(setTotalUsersCountAC(totalCount))
		},
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToState)(UsersCatalog)

export default UsersContainer;

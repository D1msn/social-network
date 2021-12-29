import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import UsersCatalog from "./UsersCatalog";
import {UserCatalogType, UsersCatalogType} from "../../redux/storeTypes";
import {
	fetchUsers,
	followUser,
	setCurrentPage,
	setTotalUsersCount,
	unFollowUser
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
// const mapDispatchToState = (dispatch: Dispatch): MapDispatchToPropsType => {
// 	return{
// 		followUser: (userId: number) => {
// 			dispatch(followUser(userId))
// 		},
// 		unFollowUser: (userId: number) => {
// 			dispatch(unFollowUser(userId))
// 		},
// 		fetchUsers: (users) => {
// 			dispatch(fetchUsers(users))
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setCurrentPage(currentPage))
// 		},
// 		setTotalUsersCount: (totalCount: number) => {
// 			dispatch(setTotalUsersCount(totalCount))
// 		},
// 	}
// }

const UsersContainer = connect(mapStateToProps,{
	followUser,
	unFollowUser,
	fetchUsers,
	setCurrentPage,
	setTotalUsersCount,
})(UsersCatalog)

export default UsersContainer;

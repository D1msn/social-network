import {UserCatalogType, UsersCatalogType} from "../storeTypes";


export enum usersCatalogActions {
	FOLLOW = "FOLLOW",
	UN_FOLLOW = "UN_FOLLOW",
	FETCH_USERS = "FETCH_USERS",
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
}

const initialState: UsersCatalogType = {
	users: [],
	totalUsersCount: 0,
	pageSize: 6,
	currentPage: 1,
}


export const usersCatalogReducer = (state = initialState, action: usersCatalogActionsTypes): UsersCatalogType => {
	switch (action.type) {
		case usersCatalogActions.FETCH_USERS:
			return {...state, users: [...action.users]}
		case usersCatalogActions.FOLLOW:
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
		case usersCatalogActions.UN_FOLLOW:
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
		case usersCatalogActions.SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case usersCatalogActions.SET_TOTAL_USERS_COUNT:
			return {...state, totalUsersCount: action.totalUsersCount}
		default: return state
	}
}


type usersCatalogActionsTypes = followUserActionType | unFollowUserActionType | fetchUsersActionType | setCurrentPageActionType | setTotalCountActionType

type followUserActionType = ReturnType<typeof followUser>
type unFollowUserActionType = ReturnType<typeof unFollowUser>
type fetchUsersActionType = ReturnType<typeof fetchUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalCountActionType = ReturnType<typeof setTotalUsersCount>


export const followUser = (userId: number) => ({type: usersCatalogActions.FOLLOW, userId} as const)
export const unFollowUser = (userId: number) => ({type: usersCatalogActions.UN_FOLLOW, userId} as const)
export const fetchUsers = (users: UserCatalogType[]) => ({type: usersCatalogActions.FETCH_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: usersCatalogActions.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: usersCatalogActions.SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

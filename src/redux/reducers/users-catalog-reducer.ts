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
	pageSize: 20,
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

type followUserActionType = ReturnType<typeof followUserAC>
type unFollowUserActionType = ReturnType<typeof unFollowUserAC>
type fetchUsersActionType = ReturnType<typeof fetchUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalCountActionType = ReturnType<typeof setTotalUsersCountAC>


export const followUserAC = (userId: number) => ({type: usersCatalogActions.FOLLOW, userId} as const)
export const unFollowUserAC = (userId: number) => ({type: usersCatalogActions.UN_FOLLOW, userId} as const)
export const fetchUsersAC = (users: UserCatalogType[]) => ({type: usersCatalogActions.FETCH_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: usersCatalogActions.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: usersCatalogActions.SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

import {UserCatalogType, UsersCatalogType} from "../storeTypes";


export enum usersCatalogActions {
	FOLLOW = "FOLLOW",
	UN_FOLLOW = "UN_FOLLOW",
	FETCH_USERS = "FETCH_USERS",
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
	TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING",
}

const initialState: UsersCatalogType = {
	users: [],
	totalUsersCount: 0,
	pageSize: 6,
	currentPage: 1,
	isLoading: false
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
		case usersCatalogActions.TOGGLE_IS_LOADING:
			return {...state, isLoading: action.isLoading}
		default: return state
	}
}


type usersCatalogActionsTypes = followUserActionType | unFollowUserActionType | fetchUsersActionType | setCurrentPageActionType | setTotalCountActionType | toggleIsLoadingActionType

type followUserActionType = ReturnType<typeof followUser>
type unFollowUserActionType = ReturnType<typeof unFollowUser>
type fetchUsersActionType = ReturnType<typeof fetchUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleIsLoadingActionType = ReturnType<typeof toggleIsLoading>


export const followUser = (userId: number) => ({type: usersCatalogActions.FOLLOW, userId} as const)
export const unFollowUser = (userId: number) => ({type: usersCatalogActions.UN_FOLLOW, userId} as const)
export const fetchUsers = (users: UserCatalogType[]) => ({type: usersCatalogActions.FETCH_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: usersCatalogActions.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: usersCatalogActions.SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsLoading = (isLoading: boolean) => ({type: usersCatalogActions.TOGGLE_IS_LOADING, isLoading} as const)

import {UserCatalogType, UsersCatalogType} from "../storeTypes";


export enum usersCatalogActions {
	FOLLOW = "FOLLOW",
	UN_FOLLOW = "UN_FOLLOW",
	FETCH_USERS = "FETCH_USERS"
}

const initialState: UsersCatalogType = {
	users: []
}


export const usersCatalogReducer = (state = initialState, action: usersCatalogActionsTypes): UsersCatalogType => {
	switch (action.type) {
		case usersCatalogActions.FETCH_USERS:
			return {...state, users: [...state.users, ...action.users]}
		case usersCatalogActions.FOLLOW:
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
		case usersCatalogActions.UN_FOLLOW:
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
		default: return state
	}
}


type usersCatalogActionsTypes = followUserActionType | unFollowUserActionType | fetchUsersActionType

type followUserActionType = ReturnType<typeof followUserAC>
type unFollowUserActionType = ReturnType<typeof unFollowUserAC>
type fetchUsersActionType = ReturnType<typeof fetchUsersAC>


export const followUserAC = (userId: string) => ({type: usersCatalogActions.FOLLOW, userId} as const)
export const unFollowUserAC = (userId: string) => ({type: usersCatalogActions.UN_FOLLOW, userId} as const)
export const fetchUsersAC = (users: UserCatalogType[]) => ({type: usersCatalogActions.FETCH_USERS, users} as const)

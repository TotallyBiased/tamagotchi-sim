import { updateWithUniqueId } from "../../common/helpers"
import { neverReached } from "../../common/reducer"
import { createNewUser } from "./business-logic"
import { User, UserActions, UserViewType } from "./models"

export function selectedUserIdReducer(state = "", action: UserActions) {
	switch (action.type) {
		case "LOGOUT_ACTION":
			return ""
		case "LOGIN_ACTION":
			return action.data.userId
		case "CREATE_USER_ACTION":
		case "UPDATE_USER_VIEW_ACTION":
			break
		default:
			neverReached(action)
	}
	return state
}

export function usersReducer(
	state: Record<string, User> = {},
	action: UserActions
) {
	switch (action.type) {
		case "CREATE_USER_ACTION":
			const newUser: User = updateWithUniqueId(
				state,
				createNewUser(action.data.name)
			)
			return {
				...state,
				[newUser.id]: newUser
			}
		case "LOGOUT_ACTION":
		case "LOGIN_ACTION":
		case "UPDATE_USER_VIEW_ACTION":
			break
		default:
			neverReached(action)
	}
	return state
}

export function currentUserViewReducer(
	state: UserViewType = "view-tamagotchi",
	action: UserActions
) {
	switch (action.type) {
		case "UPDATE_USER_VIEW_ACTION":
			return action.data.view
		case "LOGOUT_ACTION":
		case "LOGIN_ACTION":
		case "CREATE_USER_ACTION":
			return state
		default:
			neverReached(action)
	}
	return state
}

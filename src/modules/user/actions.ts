export function loginAction(userId: string) {
	return {
		type: "LOGIN_ACTION",
		data: {
			userId
		}
	} as const
}

export function logoutAction() {
	return {
		type: "LOGOUT_ACTION"
	} as const
}

export function createUserAction(name: string) {
	return {
		type: "CREATE_USER_ACTION",
		data: {
			name
		}
	} as const
}

export function updateUserViewAction(view: string) {
	return {
		type: "UPDATE_USER_VIEW_ACTION",
		data: {
			view
		}
	} as const
}

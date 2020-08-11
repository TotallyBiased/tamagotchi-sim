export function pushNotificationAction(message: string, title: string) {
	return {
		type: "PUSH_NOTIFICATION_ACTION",
		data: {
			message,
			title
		}
	} as const
}

export function resetNotificationAction() {
	return {
		type: "RESET_NOTIFICATION_ACTION"
	} as const
}

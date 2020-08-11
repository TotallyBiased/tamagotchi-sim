import { Box } from "ink"
import nodeNotifier from "node-notifier"
import * as React from "react"
import { useEffect } from "react"
import { NotificationContainerProps } from "../containers/NotificationContainer"

export function NotificationCom({
	notification,
	resetNotificationAction
}: NotificationContainerProps) {
	useEffect(() => {
		if (notification) {
			nodeNotifier.notify(notification)
			resetNotificationAction()
		}
	}, [notification])

	return <Box></Box>
}

import { Box } from "ink"
import nodeNotifier from "node-notifier"
import * as React from "react"
import { useEffect } from "react"
import { useLocation } from "../../../common/useLocation"
import { NotificationContainerProps } from "../containers/NotificationContainer"

export function NotificationCom({
	notification,
	resetNotificationAction,
	nav
}: NotificationContainerProps) {
	const { location, setLocation } = useLocation()
	useEffect(() => {
		if (location !== nav) {
			setLocation(nav)
		}
	}, [nav])
	useEffect(() => {
		if (notification) {
			nodeNotifier.notify(notification)
			resetNotificationAction()
		}
	}, [notification])

	return <Box></Box>
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { neverReached } from "../../common/reducer"
import { RefineAction } from "../../types"
import { ControlsActions } from "../controls/models"
import { NotificationActions, NotificationBroadcast } from "./models"
import { text } from "./text"

export function notificationReducer(
	state: NotificationBroadcast | { type: "noop" } = { type: "noop" },
	action: NotificationActions | RefineAction<ControlsActions, "SUBMIT_CONTROLS_ACTION">
) {
	switch (action.type) {
		case "PUSH_NOTIFICATION_ACTION":
			return {
				type: "general",
				notification: text.notifications.general(action.data.title, action.data.message)
			}
		case "SUBMIT_CONTROLS_ACTION":
			if (action.data.command === "eat") {
				return {
					type: "general",
					notification: text.notifications.general("HEY", "EAT")
				}
			} else {
				return state
			}
		case "RESET_NOTIFICATION_ACTION":
			return { type: "noop" }
		default:
			neverReached(action)
	}
	return state
}

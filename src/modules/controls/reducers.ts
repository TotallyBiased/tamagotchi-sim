/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { neverReached } from "../../common/reducer"
import { ControlsActions } from "./models"

export function controlsReducer(state = "" as const, action: ControlsActions) {
	switch (action.type) {
		case "INPUT_CONTROLS_ACTION":
			return state
		case "SUBMIT_CONTROLS_ACTION":
			return action.data.command
		default:
			neverReached(action)
	}
	return state
}

import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { pushNotificationAction, resetNotificationAction } from "../actions"
import { NotificationCom } from "../components/NotificationCom"
import { NotificationBroadcast } from "../models"

type PassThroughProps = EmptyRecord

interface DerivedState {
	notification: NotificationBroadcast["notification"]
}

const dispatchActions = {
	pushNotificationAction,
	resetNotificationAction
} as const

type DispatchActions = typeof dispatchActions

export interface NotificationContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _props: PassThroughProps): DerivedState {
	switch (state.ui.notification.type) {
		case "fatal":
			return state.ui.notification
		case "general":
			return state.ui.notification
		case "warning":
			return state.ui.notification
		case "noop":
		default:
			return state.ui.notification
	}
}

export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(NotificationCom)

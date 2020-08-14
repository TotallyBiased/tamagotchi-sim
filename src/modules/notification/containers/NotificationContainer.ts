import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { pushNotificationAction, resetNotificationAction } from "../actions"
import { NotificationCom } from "../components/NotificationCom"
import { NotificationBroadcast } from "../models"

type PassThroughProps = EmptyRecord

interface DerivedState {
	notification?: NotificationBroadcast["notification"]
	nav: string
}

const dispatchActions = {
	pushNotificationAction,
	resetNotificationAction
} as const

type DispatchActions = typeof dispatchActions

export interface NotificationContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _props: PassThroughProps): DerivedState {
	const { notification } = state.ui.notification

	return {
		notification,
		nav: state.ui.controls
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const NotificationContainer = connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(NotificationCom)

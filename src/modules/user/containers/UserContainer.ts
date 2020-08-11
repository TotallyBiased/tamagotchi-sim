import { connect } from "react-redux"
import { AppState } from "../../../store"
import { UserView } from "../components.cli/UserView"
import { UserViewType } from "../models"

interface PassThroughProps {}

type DerivedState = {
	currentUserView: UserViewType
}

const dispatchActions = {} as const

type DispatchActions = typeof dispatchActions

export interface UserContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		currentUserView: state.ui.currentUserView
	}
}

export default connect<
	DerivedState,
	DispatchActions,
	PassThroughProps,
	AppState
>(
	mapStateToProps,
	dispatchActions
)(UserView)
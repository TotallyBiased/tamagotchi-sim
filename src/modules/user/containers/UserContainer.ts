import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { UserView } from "../components.cli/UserView"
import { User } from "../models"

type PassThroughProps = EmptyRecord

interface DerivedState {
	user: User
}

const dispatchActions = {} as const

type DispatchActions = typeof dispatchActions

export interface UserContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		user: state.entities.users[state.ui.selectedUserId]
	}
}

// eslint-disable-next-line prettier/prettier
export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(UserView)

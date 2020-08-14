import { connect } from "react-redux"
import { AppState } from "../../../store"
import { inputControlsAction, submitControlsAction } from "../actions"
import { ControlsView } from "../components/ControlsView"

interface PassThroughProps {
	placeholder: string
	highlightPastedText: boolean
}

type DerivedState = Pick<PassThroughProps, "placeholder" | "highlightPastedText">

const dispatchActions = {
	inputControlsAction,
	submitControlsAction
} as const

type DispatchActions = typeof dispatchActions

export interface ControlsContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(
	_state: AppState,
	{ placeholder, highlightPastedText }: PassThroughProps
): DerivedState {
	return { placeholder, highlightPastedText }
}

export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(ControlsView)

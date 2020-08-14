import { connect } from "react-redux"
import { AppState } from "../../../store"
import { inputControlsAction, submitControlsAction } from "../actions"
import { ControlsView } from "../components/ControlsView"

interface PassThroughProps {
	text: string
}

interface DerivedState {
	header: string
	prompt: string
	placeHolder: string
}

const dispatchActions = {
	inputControlsAction,
	submitControlsAction
} as const

type DispatchActions = typeof dispatchActions

export interface ControlsContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(_state: AppState, { header, placeHolder }: PassThroughProps): DerivedState {
	const prompt = ""
	return {
		header,
		placeHolder,
		prompt
	}
}

export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(ControlsView)

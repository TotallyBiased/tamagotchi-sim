import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { TamagotchiCommandView } from "../components/TamagotchiCommandView"

type PassThroughProps = EmptyRecord

type DerivedState = EmptyRecord

const dispatchActions = {} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiCommandContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(_state: AppState, _: PassThroughProps): DerivedState {
	return {}
}

export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(TamagotchiCommandView)

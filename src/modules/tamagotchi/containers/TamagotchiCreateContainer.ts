import { connect } from "react-redux"
import { AppState } from "../../../store"
import { createTamagotchiAction } from "../actions"
import { TamagotchiCreateView } from "../components/TamagotchiCreateView"

interface PassThroughProps {}

interface DerivedState {}

const dispatchActions = {
	createTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiCreateContainerProps
	extends DispatchActions,
		DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		tamagotchi: state.entities.tamagotchis.selectedTamagotchiId
			? state.entities.tamagotchis[state.ui.selectedTamagotchiId]
			: undefined
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
)(TamagotchiCreateView)

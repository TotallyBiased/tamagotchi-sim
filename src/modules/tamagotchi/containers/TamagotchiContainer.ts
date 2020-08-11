import { connect } from "react-redux"
import { AppState } from "../../../store"
import { selectTamagotchiAction } from "../actions"
import { TamagotchiView } from "../components/TamagotchiView"
import { Tamagotchi } from "../models"

interface PassThroughProps {}

interface DerivedState {
	readonly tamagotchi?: Tamagotchi
}

const dispatchActions = {
	selectTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiContainerProps
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
)(TamagotchiView)

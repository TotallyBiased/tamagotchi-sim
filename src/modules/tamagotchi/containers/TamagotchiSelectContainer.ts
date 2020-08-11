import { connect } from "react-redux"
import { AppState } from "../../../store"
import { selectTamagotchiAction } from "../actions"
import { TamagotchiSelectView } from "../components/TamagotchiSelectView"
import { Tamagotchi } from "../models"

interface PassThroughProps {}

interface DerivedState {
	readonly tamagotchis: Tamagotchi[]
}

const dispatchActions = {
	selectTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiSelectContainerProps
	extends DispatchActions,
		DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		tamagotchis: Object.keys(state.entities.tamagotchis).map(
			(id) => state.entities.tamagotchis[id]
		)
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
)(TamagotchiSelectView)

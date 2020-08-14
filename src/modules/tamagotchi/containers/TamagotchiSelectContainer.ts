import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { selectTamagotchiAction } from "../actions"
import { TamagotchiSelectView } from "../components/TamagotchiSelectView"
import { Tamagotchi } from "../models"

type PassThroughProps = EmptyRecord

interface DerivedState {
	readonly tamagotchis: Tamagotchi[]
}

const dispatchActions = {
	selectTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiSelectContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		tamagotchis: Object.keys(state.entities.tamagotchis).map((id) => state.entities.tamagotchis[id])
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default connect<DerivedState, DispatchActions, PassThroughProps, AppState>(
	mapStateToProps,
	dispatchActions
)(TamagotchiSelectView)

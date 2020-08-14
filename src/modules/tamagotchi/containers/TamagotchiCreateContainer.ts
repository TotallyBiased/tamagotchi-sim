import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { createTamagotchiAction } from "../actions"
import { TamagotchiCreateView } from "../components/TamagotchiCreateView"

type PassThroughProps = EmptyRecord

type DerivedState = EmptyRecord

const dispatchActions = {
	createTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiCreateContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		tamagotchi: state.entities.tamagotchis.selectedTamagotchiId
			? state.entities.tamagotchis[state.ui.selectedTamagotchiId]
			: undefined
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TamagotchiCreateContainer = connect<
	DerivedState,
	DispatchActions,
	PassThroughProps,
	AppState
>(
	mapStateToProps,
	dispatchActions
)(TamagotchiCreateView)

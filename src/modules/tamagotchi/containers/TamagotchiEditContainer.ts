import { connect } from "react-redux"
import { AppState } from "../../../store"
import { EmptyRecord } from "../../../types"
import { editTamagotchiAction } from "../actions"
import { TamagotchiEditView } from "../components/TamagotchiEditView"
import { Tamagotchi } from "../models"

type PassThroughProps = EmptyRecord

interface DerivedState {
	readonly tamagotchi?: Tamagotchi
}

const dispatchActions = {
	editTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiEditContainerProps extends DispatchActions, DerivedState {}

function mapStateToProps(state: AppState, _: PassThroughProps): DerivedState {
	return {
		tamagotchi: state.ui.selectedTamagotchiId
			? state.entities.tamagotchis[state.ui.selectedTamagotchiId]
			: undefined
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TamagotchiEditContainer = connect<
	DerivedState,
	DispatchActions,
	PassThroughProps,
	AppState
>(
	mapStateToProps,
	dispatchActions
)(TamagotchiEditView)

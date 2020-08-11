import { connect } from "react-redux"
import { AppState } from "../../../store"
import { editTamagotchiAction } from "../actions"
import { TamagotchiEditView } from "../components/TamagotchiEditView"
import { Tamagotchi } from "../models"

interface PassThroughProps {
	tamagotchiId: Tamagotchi["id"]
}

interface DerivedState {
	readonly tamagotchi?: Tamagotchi
}

const dispatchActions = {
	editTamagotchiAction
} as const

type DispatchActions = typeof dispatchActions

export interface TamagotchiEditContainerProps
	extends DispatchActions,
		DerivedState {}

function mapStateToProps(
	state: AppState,
	{ tamagotchiId }: PassThroughProps
): DerivedState {
	return {
		tamagotchi: tamagotchiId
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
)(TamagotchiEditView)

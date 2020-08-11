import { setEntity, updateWithUniqueId } from "../../common/helpers"
import { neverReached } from "../../common/reducer"
import { createNewTamagotchi } from "./business-logic"
import { Tamagotchi, TamagotchiActions } from "./models"

export function selectedTamagotchiIdReducer(
	state = "",
	action: TamagotchiActions
) {
	switch (action.type) {
		case "SELECT_TAMAGOTCHI_ACTION":
			return action.data.tamagotchiId
		case "CREATE_TAMAGOTCHI_ACTION":
		case "EDIT_TAMAGOTCHI_ACTION":
			break
		default:
			neverReached(action)
	}
	return state
}

export function tamagotchisReducer(
	state: Record<Tamagotchi["id"], Tamagotchi> = {},
	action: TamagotchiActions
) {
	switch (action.type) {
		case "CREATE_TAMAGOTCHI_ACTION":
			return setEntity(
				state,
				updateWithUniqueId(
					state,
					createNewTamagotchi(
						action.data.tamagotchiType,
						action.data.name
					)
				)
			)
		case "EDIT_TAMAGOTCHI_ACTION":
			return setEntity(state, action.data.editedTamagotchi)
		case "SELECT_TAMAGOTCHI_ACTION":
			break
		default:
			neverReached(action)
	}
	return state
}
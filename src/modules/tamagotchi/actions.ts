/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Tamagotchi, TamagotchiType } from "./models"

export function selectTamagotchiAction(tamagotchiId: string) {
	return {
		type: "SELECT_TAMAGOTCHI_ACTION",
		data: {
			tamagotchiId
		}
	} as const
}

export function createTamagotchiAction(name: string, tamagotchiType: TamagotchiType) {
	return {
		type: "CREATE_TAMAGOTCHI_ACTION",
		data: {
			tamagotchiType,
			name
		}
	} as const
}

export function editTamagotchiAction(editedTamagotchi: Tamagotchi) {
	return {
		type: "EDIT_TAMAGOTCHI_ACTION",
		data: {
			editedTamagotchi
		}
	} as const
}

import { getNewId } from "../../common/helpers"
import { Tamagotchi, TamagotchiType } from "./models"

export function getTamagotchiType(value: string): TamagotchiType | undefined {
	switch (value) {
		case "male":
		case "female":
		case "other":
			return value
		default:
			return undefined
	}
}

export function createNewTamagotchi(type: TamagotchiType, name: string): Tamagotchi {
	return {
		id: getNewId(),
		type,
		name,
		health: {
			life: 100,
			feeling: "Happy"
		},
		sustenance: {
			calories: 0,
			nutrition: {
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				e: 0
			}
		}
	}
}

import { EntityBase, EntityCollection } from "../../common/reducer"
import { ExtractReturnTypesFromImport } from "../../types"
import * as actions from "./actions"

export type TamagotchiActions = ExtractReturnTypesFromImport<typeof actions>

export type GoodFeel = "Happy" | "Joy" | "Happy"

export type Bad = "Sad" | "Fear" | "Faint"

export type Neutral = "Bored"

export type Feeling = GoodFeel | Bad | Neutral

export interface Nutrition {
	a: number
	b: number
	c: number
	d: number
	e: number
}

export interface Sustenance {
	calories: number
	nutrition: Nutrition
}

export interface TamagotchiHealth {
	life: number
	feeling: Feeling
}

export type TamagotchiType = "male" | "female" | "other"

export interface Tamagotchi extends EntityBase {
	type: TamagotchiType
	sustenance: Sustenance
	id: string
	name: string
	health: TamagotchiHealth
}

export type Tamagotchis = EntityCollection<Tamagotchi>

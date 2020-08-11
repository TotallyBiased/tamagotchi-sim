import { EntityBase, EntityCollection } from "../../common/reducer"
import { ExtractReturnTypesFromImport } from "../../types"
import * as actions from "./actions"

export type UserActions = ExtractReturnTypesFromImport<typeof actions>

export interface User extends EntityBase {
	name: string
	tamagotchiIds: string[]
}

export type UserViewType =
	| "view-tamagotchi"
	| "create-tamagotchi"
	| "select-tamagotchi"
	| "command-tamagotchi"

export type Users = EntityCollection<User>

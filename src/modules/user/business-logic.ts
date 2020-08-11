import { getNewId } from "../../common/helpers"
import { User } from "./models"

export function createNewUser(name: string): User {
	return {
		id: getNewId(),
		name,
		tamagotchiIds: []
	}
}

import { getEntityNewId } from "../../common/helpers"
import { User } from "./models"

export function createNewUser(name: string): User {
	return {
		id: getEntityNewId(),
		name,
		tamagotchiIds: []
	}
}

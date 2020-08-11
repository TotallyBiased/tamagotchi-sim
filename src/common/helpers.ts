import { EntityBase, EntityCollection } from "./reducer"

export function getNewId(): string {
	return Math.floor(Math.random() * 10000).toString()
}

export function updateWithUniqueId<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T
): T {
	while (checkForEntity(state, item)) {
		item.id = getNewId()
	}
	return item
}

export function setEntity<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T
): EntityCollection<T> {
	return {
		...state,
		[item.id]: item
	}
}

export function setEntityIfExists<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T
): EntityCollection<T> {
	return checkForEntity(state, item) ? setEntity(state, item) : state
}

export function getEntity<T extends EntityBase>(
	state: EntityCollection<T>,
	id: T["id"]
): T | "none" {
	return checkForEntity(state, id) ? state[id] : "none"
}

export function checkForEntity<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T["id"] | T
): boolean {
	return "id" in item ? item.id in state : item in state
}

export function hasLength<T>(arrayLike: ArrayLike<T>): boolean {
	/**
	 * We boolean evaluate the left had side so that we always
	 * return a bool and not a falsy value like undefined.
	 */
	return arrayLike?.length > 0 ? true : false
}

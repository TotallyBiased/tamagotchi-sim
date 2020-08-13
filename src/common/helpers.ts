import { EntityBase, EntityCollection, Noneable } from "../types"

export function getEntityNewId(powerOf = 10000): string {
	return Math.floor(Math.random() * powerOf).toString()
}

export function updateWithUniqueId<T extends EntityBase>(state: EntityCollection<T>, item: T): T {
	while (checkForEntity(state, item)) {
		item.id = getEntityNewId()
	}
	return item
}

export function setOrReplaceEntity<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T
): EntityCollection<T> {
	/**
	 * We defer to copy-on-write by creating a new object.
	 */
	return {
		...state,
		[item.id]: item
	}
}

export function setEntityIfExists<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T
): EntityCollection<T> {
	return checkForEntity(state, item) ? setOrReplaceEntity(state, item) : state
}

export function getEntityOrNone<T extends EntityBase>(
	state: EntityCollection<T>,
	id: T["id"]
): Noneable<T> {
	return checkForEntity(state, id) ? state[id] : "none"
}

/** checkForEntity
 * The items argument is polymorphic by being either
 * an Entity or an Entity's Id.
 */
export function checkForEntity<T extends EntityBase>(
	state: EntityCollection<T>,
	item: T["id"] | T
): boolean {
	return "id" in item ? item.id in state : item in state
}

/** hasLength
 * We boolean evaluate the left had side so that we always
 * return a bool and not a falsy value like undefined.
 *
 * And we use the elvis operator in order to
 * add some runtime safety.
 */
export function hasLength<T>(arrayLike: ArrayLike<T>): boolean {
	return arrayLike?.length > 0 ? true : false
}

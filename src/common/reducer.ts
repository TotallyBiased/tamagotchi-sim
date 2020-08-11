export function neverReached(_: never): void {}

export type EntityBase = { id: string }

export type EntityCollection<T extends EntityBase> = Record<T["id"], T>

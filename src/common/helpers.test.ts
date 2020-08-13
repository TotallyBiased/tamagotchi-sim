import { EntityBase, EntityCollection } from "../types"
import {
	checkForEntity,
	getEntityNewId,
	getEntityOrNone,
	setOrReplaceEntity,
	updateWithUniqueId
} from "./helpers"

function createEntityCollection(count: number, initialState: EntityCollection<EntityBase>) {
	while (count > 0) {
		const id = Date.now().toString().slice(1, 5)
		initialState[id] = { id }
		count--
	}
	return initialState
}

const BASE_CASES = {
	"123": {
		id: "123"
	},
	"253245": {
		id: "253245"
	}
} as const

const TEST_CASES = createEntityCollection(20, BASE_CASES)

describe("Test helpers functions: ", () => {
	describe("checkForEntity", () => {
		it("should check for entity in state", () => {
			expect(checkForEntity(TEST_CASES, "123")).toEqual(true)
			expect(checkForEntity(TEST_CASES, "22")).toEqual(false)
			expect(checkForEntity(TEST_CASES, { id: "123" })).toEqual(true)
			expect(checkForEntity(TEST_CASES, { id: "999" })).toEqual(false)
		})
	})

	describe("getEntity", () => {
		it("should return entity if exists", () => {
			expect(getEntityOrNone(TEST_CASES, "253245")).toEqual(BASE_CASES["253245"])
			expect(getEntityOrNone(TEST_CASES, "000")).toEqual("none")
		})
	})

	describe("getNewId", () => {
		it("should return a number", () => {
			expect(getEntityNewId()).toBeGreaterThan(1)
			expect(getEntityNewId()).toBeGreaterThan(1)
			expect(getEntityNewId()).toBeGreaterThan(1)
		})
	})

	describe("updateWithUniqueId", () => {
		it("should update state with random Id property", () => {
			expect(
				updateWithUniqueId(
					{
						...BASE_CASES
					},
					{ id: "123" }
				)
			).not.toHaveProperty("id", 123)
		})
	})

	describe("setEntity", () => {
		it("should ", async () => {
			expect(
				setOrReplaceEntity(
					{
						...BASE_CASES
					},
					{ id: "333" }
				)
			).toHaveProperty("333", { id: "333" })
		})
	})
})

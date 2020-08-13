import { ControlsActions } from "./modules/controls/models"
import { NotificationActions } from "./modules/notification/models"
import { TamagotchiActions } from "./modules/tamagotchi/models"
import { UserActions } from "./modules/user/models"

type Actions = UserActions | NotificationActions | TamagotchiActions | ControlsActions

/** ActionBase
 * Used as a model the action messages instead of the Redux Action
 * `type` definition to open it for extensibility with an optional generic
 * to pass in the `type` paramter and decouple our domain from our
 * dependency's implementation.
 */
interface ActionBase<T = string> {
	type: T
	data?: EmptyRecord
}

/** GetActionBaseType
 * Pull out the `type` properties value.
 */
type GetActionBaseType<T extends ActionBase> = T["type"]

/** Any Type
 * As a rule, using the `any` type is avoid as much as possible.
 * This is not always possible, and sometimes, it is either too onerous
 * at the time or not practical, to priorities a Platonic Ideal
 * of a expressive type application for marginal returns type safety.
 *
 * The generic string argument is required, but unconsumed in the
 * type definition, to mandate that reason in natural language is
 * provided, for documentation and reference.
 *
 * The follow type alias' are to be used in the following ways:
 *
 * `IntentionalAny`: explicitly annotate a value with `any` when it
 * is a necessity and understood to others why they were not able to provide a
 * narrower correct type. This can include when there is a
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IntentionalAny<TReason extends string> = TReason extends string ? any : never
/**
 * `FixMe`: Use to signal that type should be fixed, for example,
 * can be used initially in a pull request when a dev wasn't able
 * to express their type needs and need assistant by a reviewer.
 */
type FixMe<TReason extends string> = IntentionalAny<TReason>
/**
 * `Inexpressible`: used in situations such as; there are limitations of
 * the current version of TypeScript and/or a version of a dependency and
 * it's type definition.
 */
type Inexpressible<TReason extends string> = IntentionalAny<TReason>

type EmptyRecord = Record<string, unknown>

/** RefinementType
 * Used to narrow down a subset of a used defined type such as a distribute
 * union, an enum or a collection of some sort.
 */
type RefinementType<T, K extends T> = K extends T ? K : never

type RefineActionWithoutAction<T extends ActionBase, K extends GetActionBaseType<T>> = T extends {
	type: K
}
	? { type: K }
	: never

type RefineActionWithData<T extends Required<ActionBase>, K extends GetActionBaseType<T>> = T extends {
	type: K
	data: infer P
}
	? { type: K; data: P }
	: never

/** RefineAction
 * Used to refine a union of action models
 */
type RefineAction<T extends ActionBase, K extends GetActionBaseType<T>> = T extends Required<ActionBase>
	? RefineActionWithData<T, K>
	: RefineActionWithoutAction<T, K>

/** MembersOf
 * Used to extract members of an object
 */
type MembersOf<T> = T[keyof T]

/**
 * Used to extract members of an object
 */
type ExtractReturnTypesFromImport<
	T extends {
		[key: string]: IntentionalAny<"Widen the type to allow any type of function.">
	}
> = ReturnType<MembersOf<T>>

type EntityBase = { id: string }

type EntityCollection<T extends EntityBase> = Record<T["id"], T>

interface WithChildren<T = JSX.Element[] | JSX.Element> {
	readonly children: T
}

type NoneType = "none"

type Noneable<T> = T | "none"

import { ExtractReturnTypesFromImport } from "../../types"
import * as actions from "./actions"

export type NotificationActions = ExtractReturnTypesFromImport<typeof actions>

export type NotificationBroadcastType = "fatal" | "warning" | "general"

type NotificationBroadcastBase<T extends string> = Readonly<{
	type: T
	notification: {
		message: string
		title: string
	}
}>

export type NotificationBroadcast =
	| NotificationBroadcastBase<"fatal">
	| NotificationBroadcastBase<"warning">
	| NotificationBroadcastBase<"general">
	| { type: "noop"; notification: undefined }

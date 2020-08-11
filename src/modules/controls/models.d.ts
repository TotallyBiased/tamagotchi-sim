import { ExtractReturnTypesFromImport } from "../../types"
import * as actions from "./actions"

export type ControlsActions = ExtractReturnTypesFromImport<typeof actions>

import * as React from "react"
import { Input } from "../../../framework/cli/elements/Input"
import { Tile } from "../../../framework/cli/elements/Tile"
import { ControlsContainerProps } from "../containers/ControlsContainer"
import { CONTROLS_TEXT } from "../text"

export function ControlsView(props: ControlsContainerProps): JSX.Element {
	return (
		<Tile header={CONTROLS_TEXT.control_header}>
			<Input
				prompt={CONTROLS_TEXT.control_message}
				placeholder={CONTROLS_TEXT.control_place_holder}
				onChange={props.inputControlsAction}
				onSubmit={props.submitControlsAction}
			/>
		</Tile>
	)
}

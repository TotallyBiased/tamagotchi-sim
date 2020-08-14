import { Box, Text } from "ink"
import * as React from "react"
import { Cli } from "../../../framework/cli/elements/Cli"
import { Tile } from "../../../framework/cli/elements/Tile"
import { ControlsContainerProps } from "../containers/ControlsContainer"
import { CONTROLS_TEXT } from "../text"

export function ControlsView(props: ControlsContainerProps): JSX.Element {
	return (
		<Tile header={CONTROLS_TEXT.control_header}>
			<Cli
				highlightPastedText={props.highlightPastedText}
				placeholder={props.placeholder}
				onChange={props.inputControlsAction}
				onSubmit={props.submitControlsAction}
			>
				{({ hasValue, renderedValue, renderedPlaceholder, placeholder }) => (
					<Box margin={0.2} flexDirection="row">
						<Text color={"green"}>{"Prompt: "}</Text>
						<Text color={hasValue && renderedValue ? "blue" : "yellowBright"}>
							{placeholder
								? hasValue
									? renderedValue
									: renderedPlaceholder
								: renderedValue}
						</Text>
					</Box>
				)}
			</Cli>
		</Tile>
	)
}

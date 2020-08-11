import { Box, Text } from "ink"
import * as React from "react"
import { TamagotchiCommandContainerProps } from "../containers/TamagotchiCommandContainer"

export function TamagotchiCommandView({}: TamagotchiCommandContainerProps): JSX.Element {
	return (
		<Box flexDirection="column">
			<Box flexDirection="row" margin={3}>
				<Text>""</Text>
			</Box>
		</Box>
	)
}

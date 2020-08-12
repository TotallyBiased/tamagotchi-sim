import { Box, Text } from "ink"
import * as React from "react"
import { TamagotchiEditContainerProps } from "../containers/TamagotchiEditContainer"

export function TamagotchiEditView({ tamagotchi }: TamagotchiEditContainerProps): JSX.Element {
	return (
		<Box flexDirection="column">
			<Box flexDirection="row" margin={3}>
				<Text>{tamagotchi?.name}</Text>
			</Box>
		</Box>
	)
}

import { Box, Text } from "ink"
import * as React from "react"
import { TamagotchiContainerProps } from "../containers/TamagotchiContainer"
import { TAMAGOTCHI_TEXT } from "../text"

function Tamagotchi(props: Required<Pick<TamagotchiContainerProps, "tamagotchi">>) {
	return (
		<Box flexDirection="column">
			<Box flexDirection="row" margin={3}>
				<Text>{TAMAGOTCHI_TEXT.tamagotchi_name_is(props.tamagotchi.name)}</Text>
			</Box>
		</Box>
	)
}

function TamagotchiNotFound() {
	return (
		<Box flexDirection="column">
			<Text>{TAMAGOTCHI_TEXT.tamagotchi_not_found}</Text>
		</Box>
	)
}

export function TamagotchiView({ tamagotchi }: TamagotchiContainerProps): JSX.Element {
	return tamagotchi ? <Tamagotchi tamagotchi={tamagotchi} /> : <TamagotchiNotFound />
}

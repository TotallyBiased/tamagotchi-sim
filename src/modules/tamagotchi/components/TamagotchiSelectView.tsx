import { Box, Text } from "ink"
import * as React from "react"
import { TamagotchiSelectContainerProps } from "../containers/TamagotchiSelectContainer"
import { TAMAGOTCHI_TEXT } from "../text"

export function TamagotchiSelectView({
	tamagotchis
}: TamagotchiSelectContainerProps): JSX.Element {
	return (
		<Box flexDirection="column">
			<Box flexDirection="row" margin={3}>
				{tamagotchis.map((item) => {
					;<Text>
						{TAMAGOTCHI_TEXT.tamagotchi_name_is(item.name)}
					</Text>
				})}
			</Box>
		</Box>
	)
}

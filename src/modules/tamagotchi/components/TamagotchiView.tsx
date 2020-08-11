import { Box, Text } from "ink"
import * as React from "react"
import { TamagotchiContainerProps } from "../containers/TamagotchiContainer"
import { TAMAGOTCHI_TEXT } from "../text"

const Tamagotchi: React.FC<Required<
	Pick<TamagotchiContainerProps, "tamagotchi">
>> = ({ tamagotchi }) => (
	<Box flexDirection="column">
		<Box flexDirection="row" margin={3}>
			<Text>{TAMAGOTCHI_TEXT.tamagotchi_name_is(tamagotchi.name)}</Text>
		</Box>
	</Box>
)

const TamagotchiNotFound: React.FC = () => (
	<Box flexDirection="column">
		<Text>{TAMAGOTCHI_TEXT.tamagotchi_not_found}</Text>
	</Box>
)

export function TamagotchiView({
	tamagotchi
}: TamagotchiContainerProps): JSX.Element {
	return tamagotchi ? (
		<Tamagotchi tamagotchi={tamagotchi} />
	) : (
		<TamagotchiNotFound />
	)
}

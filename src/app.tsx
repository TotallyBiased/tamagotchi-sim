import { Box, Text } from "ink"
import * as React from "react"
import { useLocation } from "./common/useLocation"
import ControlsContainer from "./modules/controls/containers/ControlsContainer"

function App(): JSX.Element {
	const { location } = useLocation()

	return (
		<Box width={"50%"} flexDirection="column">
			<Box borderStyle="bold" borderColor="black" flexDirection="column">
				<Box>
					<Text>{`Location :${location}`}</Text>
				</Box>
				<ControlsContainer highlightPastedText={false} placeholder={""} />
			</Box>
		</Box>
	)
}

export default App

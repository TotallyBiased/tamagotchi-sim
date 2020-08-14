import { Box, Text } from "ink"
import * as React from "react"
import { useEffect } from "react"
import { useLocation } from "./common/useLocation"
import ControlsContainer from "./modules/controls/containers/ControlsContainer"

interface AppProps {
	command: string
}

function parseCommands() {}

function App({ command }: AppProps): JSX.Element {
	const { location, setLocation } = useLocation()
	useEffect(() => {
		if (command === "create") {
			setLocation("/create")
		}
	}, [command])
	return (
		<Box borderStyle="bold" borderColor="black" flexDirection="column">
			<Box>
				<Text>{`Location :${location}`}</Text>
			</Box>
			<Box>
				<ControlsContainer placeHolder="placeHolder" text={command} />
			</Box>
		</Box>
	)
}

export default App

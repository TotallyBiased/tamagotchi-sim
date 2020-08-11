import { Box } from "ink"
import * as React from "react"
import UserContainer from "./modules/user/containers/UserContainer"

function App(): JSX.Element {
	return (
		<Box borderStyle="bold" borderColor="black" flexDirection="column">
			<UserContainer />
		</Box>
	)
}

export default App

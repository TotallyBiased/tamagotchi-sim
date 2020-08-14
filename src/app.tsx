import { Box, Text } from "ink"
import * as React from "react"
import { useLocation } from "./common/useLocation"
import ControlsContainer from "./modules/controls/containers/ControlsContainer"
import { NotificationContainer } from "./modules/notification/containers/NotificationContainer"
import TamagotchiContainer from "./modules/tamagotchi/containers/TamagotchiContainer"
import { TamagotchiCreateContainer } from "./modules/tamagotchi/containers/TamagotchiCreateContainer"
import { TamagotchiEditContainer } from "./modules/tamagotchi/containers/TamagotchiEditContainer"
import TamagotchiSelectContainer from "./modules/tamagotchi/containers/TamagotchiSelectContainer"
import UserContainer from "./modules/user/containers/UserContainer"
import { MembersOf } from "./types"

function NotYetImplemented() {
	return (
		<Box>
			<Text>{"Not Yet Implemented"}</Text>
		</Box>
	)
}
const ROUTE_MAP = {
	"/": {
		path: "/",
		help: {
			message: "Global Help Message",
			commands: ["/create", "/select", "/edit", "/command"]
		},
		view: NotYetImplemented
	},
	"command-tamagotchi": {
		path: "command-tamagotchi",
		commands: ["/feed"],
		help: {
			message: "Global Help Message",
			commands: ["/feed <food>"]
		},
		view: TamagotchiSelectContainer
	},
	"view-tamagotchi": {
		path: "view-tamagotchi",
		commands: ["/feed"],
		help: {
			message: "Global Help Message",
			commands: ["/feed <food>"]
		},
		view: TamagotchiContainer
	},
	"view-user": {
		path: "view-user",
		commands: ["/feed"],
		help: {
			message: "Global Help Message",
			commands: ["/feed <food>"]
		},
		view: UserContainer
	},
	"create-tamagotchi": {
		path: "create-tamagotchi",
		view: TamagotchiCreateContainer
	},
	"create-user": {
		path: "create-user",
		view: NotYetImplemented
	},
	"edit-tamagotchi": {
		path: "edit-tamagotchi",
		view: TamagotchiEditContainer
	},
	"select-user": {
		path: "select-user",
		view: NotYetImplemented
	},
	"select-tamagotchi": {
		path: "select-tamagotchi",
		view: TamagotchiSelectContainer
	}
} as const

function getRoute(location: string): Readonly<MembersOf<typeof ROUTE_MAP>> {
	switch (location) {
		case "select-tamagotchi":
			return ROUTE_MAP[location]

		case "edit-tamagotchi":
			return ROUTE_MAP[location]

		case "create-tamagotchi":
			return ROUTE_MAP[location]

		case "command-tamagotchi":
			return ROUTE_MAP[location]

		case "select-tamagotchi":
			return ROUTE_MAP[location]
		case "/":
		default:
			return ROUTE_MAP["/"]
	}
}

function App(): JSX.Element {
	const { location } = useLocation()

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { view: Route } = getRoute(location)

	return (
		<Box width={"50%"} flexDirection="column">
			<Route />
			<ControlsContainer highlightPastedText={false} placeholder={""} />
			<NotificationContainer />
		</Box>
	)
}

export default App

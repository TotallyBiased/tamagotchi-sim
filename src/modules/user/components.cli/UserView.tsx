import * as React from "react"
import TamagotchiCreateContainer from "../../tamagotchi/containers/TamagotchiCreateContainer"
import { UserContainerProps } from "../containers/UserContainer"

export function UserView({ currentUserView }: UserContainerProps): JSX.Element {
	switch (currentUserView) {
		case "command-tamagotchi":
			return <TamagotchiCreateContainer />
		case "create-tamagotchi":
			return <TamagotchiCreateContainer />
		case "select-tamagotchi":
			return <TamagotchiCreateContainer />
		case "view-tamagotchi":
		default:
			return <TamagotchiCreateContainer />
	}
}

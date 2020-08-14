import { Box, Text } from "ink"
import * as React from "react"
import { UserContainerProps } from "../containers/UserContainer"

export function UserView({ user }: UserContainerProps): JSX.Element {
	return (
		<Box>
			<Text>{`name: ${user?.name}`}</Text>
		</Box>
	)
}

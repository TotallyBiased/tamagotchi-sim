import { Text } from "ink"
import * as React from "react"
import { GradientText } from "./GradientText"

type IAppLinkProps = {
	message: string
}

export function Header({ message }: IAppLinkProps): React.ReactElement {
	return (
		<GradientText name={"vice"}>
			<Text>{message}</Text>
		</GradientText>
	)
}

import { Box, Text, useStdin } from "ink"
import * as React from "react"
import { useEffect } from "react"
import { WithChildren } from "../../../types"

export function RawModeGuard(props: WithChildren): JSX.Element {
	const { isRawModeSupported } = useStdin()

	useEffect(() => {
		if (!isRawModeSupported) {
			setTimeout(() => {
				process.exit()
			}, 500)
		}
	}, [isRawModeSupported])

	if (!isRawModeSupported) {
		return (
			<Box marginRight={1} marginLeft={1} marginTop={1} marginBottom={0}>
				<Text>{"Raw mode is not supported by this terminal... Good Bye."}</Text>
			</Box>
		)
	} else {
		return <>{props.children}</>
	}
}

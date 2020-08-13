import { Box } from "ink"
import * as React from "react"
import { Header } from "./Header"

interface TileProps {
	header: string
}

export function Tile(props: React.PropsWithChildren<TileProps>): JSX.Element {
	return (
		<Box flexDirection="column">
			<Header message={props.header} />
			{props.children}
		</Box>
	)
}

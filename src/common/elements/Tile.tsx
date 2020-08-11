import { Box } from "ink"
import * as React from "react"
import { ReactFCWithChildren } from "../../types"
import { Header } from "./Header"

interface TileProps {
	header: string
}

export const Tile: ReactFCWithChildren<TileProps> = (props) => (
	<Box flexDirection="column">
		<Header message={props.header} />
		{props.children}
	</Box>
)

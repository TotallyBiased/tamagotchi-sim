import { Box, Text, useStdout } from "ink"
import * as React from "react"
import { useEffect, useState } from "react"
import { EmptyRecord } from "../../../types"

type IBorderProps = React.PropsWithChildren<EmptyRecord>

function useStdoutDimensions(): [number, number] {
	const { stdout } = useStdout()
	if (!stdout) return [10, 10]
	const [dimensions, setDimensions] = useState<[number, number]>([stdout.columns, stdout.rows])

	useEffect(() => {
		const handler = () => setDimensions([stdout.columns, stdout.rows])
		stdout.on("resize", handler)
		return () => {
			stdout.off("resize", handler)
		}
	}, [stdout])

	return dimensions
}

export function Border(props: IBorderProps): JSX.Element {
	const [columns, rows] = useStdoutDimensions()
	return (
		<Box width={columns} height={rows}>
			<Text>This box will stretch to {columns} width</Text>
			{props.children}
		</Box>
	)
}

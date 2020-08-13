import figures from "figures"
import { Box, Text, useInput } from "ink"
import * as React from "react"
import { useState } from "react"
import { hasLength } from "../../../common/helpers"

interface Item<T extends string = string> {
	label: string
	value: T
}

interface MultiSelectProps<T extends string = string> {
	items: Item<T>[]
	mode: "radio" | "checkbox"
	onSubmit: (value: T[]) => void
}

export function MultiSelect(props: MultiSelectProps): JSX.Element {
	const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])
	const [positionIndex, setPositionIndex] = useState<number>(0)
	const itemLength = props["items"]["length"]
	const keyedItems = props.items.map((item, key) => ({ ...item, key }))

	useInput((_, key) => {
		switch (true) {
			case key.upArrow:
				if (positionIndex > 0) {
					setPositionIndex(positionIndex - 1)
				}
				break
			case key.downArrow:
				if (positionIndex < itemLength - 1) {
					setPositionIndex(positionIndex + 1)
				}
				break
			case key.return:
				const items: string[] = []
				for (const item of keyedItems) {
					if (props.mode === "radio" && item.key === positionIndex) {
						items.push(item.value)
						break
					} else if (
						props.mode === "checkbox" &&
						hasLength(selectedIndexes) &&
						item.key in selectedIndexes
					) {
						items.push(item.value)
					}
				}
				if (items.length) {
					props.onSubmit(items)
				}
				break
			case key.tab:
				if (props.mode === "checkbox") {
					setSelectedIndexes(
						positionIndex in selectedIndexes
							? selectedIndexes.filter((index) => index === positionIndex)
							: [...selectedIndexes, positionIndex]
					)
				}
				break
			case key.leftArrow:
			case key.rightArrow:
			case key.pageDown:
			case key.pageUp:
			case key.escape:
			case key.ctrl:
			case key.shift:
			case key.backspace:
			case key.delete:
			default:
				break
		}
	})

	return (
		<Box flexDirection="column">
			{keyedItems.map((item, index) => (
				<Box key={item.key}>
					<Box marginRight={1}>
						{index === positionIndex ? (
							<Text color="blue">{figures.pointer}</Text>
						) : (
							<Text> </Text>
						)}
					</Box>
					<Box marginRight={1}>
						<Text color="blue">
							{index === positionIndex ? figures.circleFilled : figures.circle}
						</Text>
					</Box>
					<Text color={item.key === index ? "blue" : ""}>{item.label}</Text>
				</Box>
			))}
		</Box>
	)
}

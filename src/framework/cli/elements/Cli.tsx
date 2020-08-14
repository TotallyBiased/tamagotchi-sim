import chalk from "chalk"
import { Box, Text } from "ink"
import * as React from "react"
import { useState } from "react"
import { backspace, write } from "../../../common/helpers"
import { isKeyBinding, useInput } from "../../../common/useInput"
import { WithChildren } from "../../../types"

export type CommandLineInterfaceProps = WithChildren<(props: { command: string }) => JSX.Element>

interface CursorState {
	cursorOffset: number
	cursorWidth: number
	command: string
}

export function Cli(props: CommandLineInterfaceProps): JSX.Element {
	const [{ command, cursorOffset, cursorWidth }, setState] = useState<CursorState>({
		cursorOffset: 0,
		cursorWidth: 0,
		command: ""
	})

	useInput((key) => {
		const { like, exact } = isKeyBinding(key)
		const vm = {
			command: command,
			cursorWidth: cursorWidth,
			cursorOffset: cursorOffset
		}

		if (key.return) {
			vm.command = ""
		} else if (exact("backspace", "ctrl")) {
			vm.command = ""
			vm.cursorOffset = vm.command.length
		} else if (exact("backspace")) {
			vm.command = backspace(command)
			vm.cursorOffset = vm.command.length
		} else if (like("downArrow", "upArrow", "leftArrow", "rightArrow")) {
			if (key.rightArrow && vm.command.length - 1 > vm.cursorOffset) {
				vm.cursorOffset += 1
			} else if (key.leftArrow && vm.cursorOffset > 0) {
				vm.cursorOffset -= 1
			}
		} else {
			if (vm.cursorOffset > vm.command.length) {
				vm.command = write(vm.command, key.char)
				vm.cursorOffset = vm.command.length
			} else {
				const split1 = vm.command.slice(0, vm.cursorOffset)
				const split2 = vm.command.slice(vm.cursorOffset, vm.command.length)
				vm.command = write(split1, key.char, split2)
				vm.cursorOffset = split1.length + key.char.length
			}
		}
		vm.cursorOffset
		setState(vm)
	})
	const highlightPastedText = false
	const placeholder = "Enter A command"
	const hasValue = command.length > 0
	const cursorActualWidth = highlightPastedText ? cursorWidth : 0

	const renderedPlaceholder =
		placeholder.length > 0
			? chalk.inverse(placeholder[0]) + placeholder.slice(1)
			: chalk.inverse(" ")

	let renderedValue = command.length > 0 ? "" : chalk.inverse(" ")

	let i = 0
	for (const char of command) {
		if (i >= cursorOffset - cursorActualWidth && i <= cursorOffset) {
			renderedValue += chalk.inverse(char)
		} else {
			renderedValue += char
		}

		i++
	}

	if (command.length > 0 && cursorOffset === command.length) {
		renderedValue += chalk.inverse(" ")
	}

	return (
		<Box width={"50%"} flexDirection="column">
			<Box margin={0.2} flexDirection="row">
				{props.children({ command })}
			</Box>
			<Box margin={0.2} flexDirection="row">
				<Text color={"green"}>{"Prompt: "}</Text>
				<Text color={hasValue && renderedValue ? "blue" : "yellowBright"}>
					{placeholder ? (hasValue ? renderedValue : renderedPlaceholder) : renderedValue}
				</Text>
			</Box>
		</Box>
	)
}

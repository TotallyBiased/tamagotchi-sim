import { Box, Text } from "ink"
import TextInput from "ink-text-input"
import * as React from "react"

interface InputProps<T> {
	prompt: string
	placeholder?: string
	onChange?: (value: string) => void
	onSubmit: (result: T) => void
}

const DEFAULT_INPUT_LOCAL_STATE = ""

export function Input<T = unknown>(props: InputProps<T>): JSX.Element {
	const [value, setValue] = React.useState(DEFAULT_INPUT_LOCAL_STATE)

	const { prompt, placeholder = "", onChange, onSubmit } = props

	const handleSubmit = React.useCallback(
		(submittedValue) => {
			if (onSubmit && submittedValue) {
				onSubmit(submittedValue)
				setValue("")
			}
		},
		[onSubmit]
	)

	const handleChange = React.useCallback(
		(newValue: string) => {
			setValue(newValue)
			if (onChange) {
				onChange(newValue)
			}
		},
		[onChange]
	)

	return (
		<Box>
			{prompt && (
				<Box marginRight={1}>
					<Text color="green">{`${prompt}:`}</Text>
				</Box>
			)}
			{/* Have to force the removal and remounting of the element
				to overcome a bug in which after clearing the local
				text value state and the user enters another command
				the curser is over the tailing char. */}
			{!!value && (
				<TextInput
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
			)}
			{!value && (
				<TextInput
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
			)}
		</Box>
	)
}

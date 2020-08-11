import { Box, Text } from "ink"
import TextInput from "ink-text-input"
import * as React from "react"

interface InputProps {
	prompt: string
	placeholder?: string
	onChange?: (value: string) => void
	onSubmit: (result: any) => void
}

const DEFAULT_INPUT_LOCAL_STATE = ""

export function Input({
	prompt,
	placeholder = "",
	onChange,
	onSubmit
}: InputProps) {
	const [value, setValue] = React.useState(DEFAULT_INPUT_LOCAL_STATE)

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
					onChange={handleChange}
					onSubmit={handleSubmit}
					placeholder={placeholder}
				/>
			)}
			{!value && (
				<TextInput
					value={value}
					onChange={handleChange}
					onSubmit={handleSubmit}
					placeholder={placeholder}
				/>
			)}
		</Box>
	)
}

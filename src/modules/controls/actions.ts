export function inputControlsAction(command: string) {
	return {
		type: "INPUT_CONTROLS_ACTION",
		data: {
			command
		}
	} as const
}

export function submitControlsAction(command: string) {
	return {
		type: "SUBMIT_CONTROLS_ACTION",
		data: {
			command
		}
	} as const
}

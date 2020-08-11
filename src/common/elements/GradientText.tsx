import gradientString from "gradient-string"
import { Transform } from "ink"
import * as React from "react"
import stripAnsi from "strip-ansi"

type IGradientProps =
	| {
			name: Exclude<keyof typeof gradientString, "children">
	  }
	| {
			colors: string
	  }

export function GradientText(
	props: React.PropsWithChildren<IGradientProps>
): React.ReactElement {
	const gradient =
		"name" in props
			? gradientString[props.name]
			: gradientString(props.colors)
	const applyGradient = (text: string) => gradient.multiline(stripAnsi(text))

	return <Transform transform={applyGradient}>{props.children}</Transform>
}

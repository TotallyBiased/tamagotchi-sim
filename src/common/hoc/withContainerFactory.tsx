import * as React from "react"
import store, { AppState } from "../../store"

export type ViewComponentBaseProps<T> = {
	component: (props: T) => JSX.Element
}

export function withContainer<C, P, D>(mapStateToProps: (p: P, s: AppState) => C, dispatchActions: D) {
	return (props: P & ViewComponentBaseProps<C & D>): JSX.Element => {
		return React.createElement(props.component, {
			...mapStateToProps(props, store.getState()),
			...dispatchActions
		})
	}
}

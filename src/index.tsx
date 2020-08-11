#!/usr/bin/env node
import fs from "fs-extra"
import { render } from "ink"
import * as React from "react"
import { Provider } from "react-redux"
import App from "./app"
import store from "./store"

// Catch unhandled rejections
process.on("unhandledRejection", (_reason) => {
	process.exit()
})

// Catch uncaught exceptions
process.on("uncaughtException", (error) => {
	fs.writeSync(1, `${error}\n\n`)
})

// End process on ctrl+c or ESC
process.stdin.on("data", (key: string) => {
	// console.log(`data: ${key}`)
	if (["\u0003", "\u001B"].includes(key)) process.exit()
})

render(
	<Provider store={store}>
		<App />
	</Provider>
)

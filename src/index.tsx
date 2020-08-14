#!/usr/bin/env node
import fs from "fs-extra"
import { render } from "ink"
import * as React from "react"
import { Provider } from "react-redux"
import App from "./app"
import { LocationProvider } from "./common/useLocation"
import "./config"
import { Cli } from "./framework/cli/elements/Cli"
import { RawModeGuard } from "./framework/cli/elements/RawModeGuard"
import store from "./store"

// Catch unhandled rejections
process.on("unhandledRejection", (_reason) => {
	// eslint-disable-next-line no-console
	// console.error(`reason: ${_reason}`)
	process.exit()
})

// Catch uncaught exceptions
process.on("uncaughtException", (error) => {
	fs.writeSync(1, `${error}\n\n`)
})

// End process on ctrl+c or ESC
process.stdin.on("data", (key: string) => {
	if (["\u0003", "\u001B"].includes(key)) {
		process.stdout.write("Bail!")
		process.exit()
	}
})

render(
	<RawModeGuard>
		<Provider store={store}>
			<Cli>
				{({ command }) => (
					<LocationProvider>
						<App command={command} />
					</LocationProvider>
				)}
			</Cli>
		</Provider>
	</RawModeGuard>
)

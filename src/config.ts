import dotenv from "dotenv"
import { resolve } from "path"
/**
 * Purpose: This file is imported before any other module at the root
 * of the application to initialize the environment variables with
 * `dotenv`.
 *
 * This method allows `dotenv` to be correctly reloaded with each hot
 * reload while developing.
 */

switch (process.env.NODE_ENV) {
	case "development":
	case "staging":
	case "production":
	case "testing":
		dotenv.config({
			path: resolve(__dirname, "../.env")
		})
		break
	default:
		throw new Error("")
}

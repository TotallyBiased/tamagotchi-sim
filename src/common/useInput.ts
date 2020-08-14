import { useStdin } from "ink"
import { useEffect } from "react"

export interface Key {
	/**
	 * Up arrow key was pressed.
	 */
	upArrow: boolean

	/**
	 * Down arrow key was pressed.
	 */
	downArrow: boolean

	/**
	 * Left arrow key was pressed.
	 */
	leftArrow: boolean

	/**
	 * Right arrow key was pressed.
	 */
	rightArrow: boolean

	/**
	 * Page Down key was pressed.
	 */
	pageDown: boolean

	/**
	 * Page Up key was pressed.
	 */
	pageUp: boolean

	/**
	 * Return (Enter) key was pressed.
	 */
	return: boolean

	/**
	 * Escape key was pressed.
	 */
	escape: boolean

	/**
	 * Ctrl key was pressed.
	 */
	ctrl: boolean

	/**
	 * Shift key was pressed.
	 */
	shift: boolean

	/**
	 * Tab key was pressed.
	 */
	tab: boolean

	/**
	 * Backspace key was pressed.
	 */
	backspace: boolean

	/**
	 * Delete key was pressed.
	 */
	delete: boolean

	/**
	 * [Meta key](https://en.wikipedia.org/wiki/Meta_key) was pressed.
	 */
	meta: boolean

	/**
	 * Char input string
	 */
	char: string

	[Symbol.iterator](): Iterator<keyof Key>
}
interface Options {
	/**
	 * Enable or disable capturing of user input.
	 * Useful when there are multiple useInput hooks used at once to avoid handling the same input several times.
	 *
	 * @default true
	 */
	isActive?: boolean
}

function isKey(key: string): key is keyof Key {
	switch (key) {
		case "upArrow":
		case "downArrow":
		case "leftArrow":
		case "rightArrow":
		case "pageDown":
		case "pageUp":
		case "return":
		case "escape":
		case "ctrl":
		case "shift":
		case "tab":
		case "backspace":
		case "delete":
		case "meta":
		case "char":
			return true
		default:
			return false
	}
}
// const KEYS = [
// 	"upArrow",
// 	"downArrow",
// 	"leftArrow",
// 	"rightArrow",
// 	"pageDown",
// 	"pageUp",
// 	"return",
// 	"escape",
// 	"ctrl",
// 	"shift",
// 	"tab",
// 	"backspace",
// 	"delete",
// 	"meta",
// 	"char"
// ] as const

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isKeyBinding(keyCollection: Key) {
	const result = [...keyCollection]
	console.table(result)
	return {
		result,
		like: (...keys: (keyof Key)[]): boolean => {
			return result.length ? keys.some((s) => result.includes(s)) : false
		},
		exact: (...keys: (keyof Key)[]): boolean => {
			return result.length
				? keys.every((x) => result.includes(x)) && result.every((x) => keys.includes(x))
				: false
		}
	}
}

export function useInput(inputHandler: (key: Key) => void, options: Options = {}): void {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { stdin, setRawMode, internal_exitOnCtrlC } = useStdin()
	useEffect(() => {
		if (options.isActive === false) {
			return
		}

		setRawMode(true)

		return () => {
			setRawMode(false)
		}
	}, [options.isActive, setRawMode])

	useEffect(() => {
		if (options.isActive === false) {
			return
		}

		const handleData = (data: Buffer) => {
			const input = String(data)
			console.log(input.split(""))
			const parsedInput = input
			const key: Key = {
				upArrow: false,
				downArrow: false,
				leftArrow: false,
				rightArrow: false,
				pageDown: false,
				pageUp: false,
				return: false,
				escape: false,
				ctrl: false,
				shift: false,
				tab: false,
				backspace: false,
				delete: false,
				meta: false,
				char: parsedInput,
				[Symbol.iterator]: function* (): Iterator<keyof Key> {
					for (const [key, value] of Object.entries(this)) {
						if (isKey(key) && key !== "char" && key !== "meta" && value) {
							yield key as keyof Key
						}
					}
				}
			}

			switch (key.char) {
				case "\x1B[A":
				case "\x1B[1;5A":
					key.ctrl = key.char.includes("1;5")
					key.upArrow = true
					key.char = ""
					key.meta = true
					break
				case "\x1B[B":
				case "\x1B[1;5B":
					key.ctrl = key.char.includes("1;5")
					key.downArrow = true
					key.char = ""
					key.meta = true
					break
				case "\x1B[D":
				case "\x1B[1;5D":
					key.ctrl = key.char.includes("1;5")
					key.leftArrow = true
					key.char = ""
					key.meta = true
					break
				case "\x1B[C":
				case "\x1B[1;5C":
					key.ctrl = key.char.includes("1;5")
					key.rightArrow = true
					key.char = ""
					key.meta = true
					break
				case "\x1B[6~":
					key.pageDown = true
					key.char = ""
					key.meta = true
					break
				case "\x1B[5~":
					key.pageUp = true
					key.char = ""
					key.meta = true
					break
				case "\r":
					key.return = true
					key.meta = true
					break
				case "\n":
					key.ctrl = true
					key.return = true
					key.meta = true
					break
				case "\x1B":
					key.escape = true
					key.meta = true
					break
				case "\t":
				case "[Z":
					key.tab = true
					key.char = ""
					key.meta = true
					break
				case "\u0008":
				case "\b":
					key.backspace = true
					key.char = ""
					key.meta = true
					break
				case "\u0017":
					key.ctrl = true
					key.backspace = true
					key.char = ""
					key.meta = true
					break
				case "\u007F":
				case "\x1Bd":
				case "\x1B[3~":
					key.delete = true
					key.char = ""
					key.meta = true
					break
			}

			// Copied from `keypress` module
			if (key.char <= "\u001A" && !key.meta) {
				key.char = String.fromCharCode(key.char.charCodeAt(0) + "a".charCodeAt(0) - 1)
				key.ctrl = true
				key.meta = true
			}

			const isLatinUppercase = key.char >= "A" && key.char <= "Z"
			const isCyrillicUppercase = key.char >= "А" && key.char <= "Я"
			if (key.char.length === 1 && (isLatinUppercase || isCyrillicUppercase)) {
				key.shift = true
				key.meta = true
			}

			// Shift+Tab
			if (key.tab && key.char === "[Z") {
				key.shift = true
				key.meta = true
			}

			// If app is not supposed to exit on Ctrl+C, then let key.char listener handle it
			if (!(key.char === "c" && key.ctrl) || !internal_exitOnCtrlC) {
				inputHandler(key)
			}
		}

		stdin?.on("data", handleData)

		return () => {
			stdin?.off("data", handleData)
		}
	}, [options.isActive, stdin, internal_exitOnCtrlC, inputHandler])
}

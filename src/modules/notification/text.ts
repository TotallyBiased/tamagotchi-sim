export const text = {
	notifications: {
		general: (title: string, message: string) =>
			({
				title,
				message
			} as const),
		warning: (tamagotchi: string) =>
			({
				title: "Warning!",
				message: `Your Tamagotchi ${tamagotchi} needs help.`
			} as const),
		fatal: (tamagotchi: string) =>
			({
				title: "RIP",
				message: `I'm sorry, your Tamagotchi, ${tamagotchi}, has passed away.`
			} as const)
	}
} as const

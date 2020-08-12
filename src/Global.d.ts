export {}

interface AppConfigEnv {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	NODE_ENV: string
}

declare global {
	namespace NodeJS {
		type IProcessEnv = AppConfigEnv
	}
}

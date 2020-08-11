export {}

interface AppConfigEnv {
	NODE_ENV: string
}

declare global {
	namespace NodeJS {
		type IProcessEnv = AppConfigEnv
	}
}

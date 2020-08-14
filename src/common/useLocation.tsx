import * as React from "react"

type Props = {
	children: React.ReactNode
}

type LocationContextType = {
	location: string
	setLocation: (value: string) => void
}

const DEFAULT_LOCATION: LocationContextType = {
	location: "/",
	setLocation: (_: string) => void {}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LocationContext = React.createContext<LocationContextType>(DEFAULT_LOCATION)

export function LocationProvider({ children }: Props): JSX.Element {
	const [location, setLocation] = React.useState(DEFAULT_LOCATION.location)
	return (
		<LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>
	)
}

export const useLocation = (): LocationContextType =>
	React.useContext<LocationContextType>(LocationContext)

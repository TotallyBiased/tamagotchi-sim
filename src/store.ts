import { combineReducers, createStore, Store } from "redux"
import { controlsReducer } from "./modules/controls/reducers"
import { NotificationBroadcast } from "./modules/notification/models"
import { notificationReducer } from "./modules/notification/reducers"
import { Tamagotchi } from "./modules/tamagotchi/models"
import { selectedTamagotchiIdReducer, tamagotchisReducer } from "./modules/tamagotchi/reducers"
import { User, UserViewType } from "./modules/user/models"
import { currentUserViewReducer, selectedUserIdReducer, usersReducer } from "./modules/user/reducers"
import { Actions, EntityCollection } from "./types"

const uiReducer = combineReducers({
	notification: notificationReducer,
	controls: controlsReducer,
	selectedTamagotchiId: selectedTamagotchiIdReducer,
	currentUserView: currentUserViewReducer,
	selectedUserId: selectedUserIdReducer
})

const entitiesReducer = combineReducers({
	tamagotchis: tamagotchisReducer,
	users: usersReducer
})

const rootReducer = combineReducers({
	ui: uiReducer,
	entities: entitiesReducer
})

export type AppState = {
	ui: {
		notification: NotificationBroadcast
		controls: string
		selectedTamagotchiId: string
		currentUserView: UserViewType
		selectedUserId: string
	}
	entities: {
		tamagotchis: EntityCollection<Tamagotchi>
		users: EntityCollection<User>
	}
}

function configureStore(): Store<AppState, Actions> {
	const store = createStore(rootReducer, undefined)
	return store
}
const store = configureStore()

export default store

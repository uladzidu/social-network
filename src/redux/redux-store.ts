import {combineReducers, legacy_createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export type AppStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers( {
    profilePage : profileReducer,
    messagesPage : dialogsReducer,
    usersPage : usersReducer,
    sidebar : sidebarReducer,
    auth : authReducer

} )

export let store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store


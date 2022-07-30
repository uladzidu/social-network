import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";


export const reducers = combineReducers( {
    profilePage : profileReducer,
    messagesPage : dialogsReducer,
    usersPage : usersReducer,
    sidebar : sidebarReducer,

} )

export let store = createStore(reducers)


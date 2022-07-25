import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type AppPropsType = {
    state: StatePropsType
}
export type PostDataType = {
    id: string
    postMessage: string
    likes: number
}
export type DialogDataType = {
    name: string
    id: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type StatePropsType = {
    profilePage: {
        postData: PostDataType[]
        newPostText: string
    },
    messagesPage: {
        dialogsData: DialogDataType[]
        messagesData: MessagesDataType[]
        newMessageText: string
    },
    sidebar: {}
}


export let store = {
    _state: <StatePropsType>{
        profilePage: {
            postData: [
                {id: v1(), postMessage: 'Hi, how are you', likes: 5},
                {id: v1(), postMessage: 'It\'s my first post', likes: 15},
                {id: v1(), postMessage: 'It\'s my second post', likes: 15},
                {id: v1(), postMessage: 'It\'s my third post', likes: 15},
            ],
            newPostText: 'it'
        },
        messagesPage: {
            dialogsData: [
                {id: v1(), name: 'Vlados'},
                {id: v1(), name: 'Gyn'},
                {id: v1(), name: 'Andr'},
                {id: v1(), name: 'Taras'},
                {id: v1(), name: 'Sanya Big Boss'},
            ],
            messagesData: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are u?'},
                {id: v1(), message: 'Good Job!'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber (state : any) {
    },
    getState() {
        return this._state
    },
    subscribe (observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



import React from "react";
// import {v1} from "uuid";
// import {AllProfileReducersType, profileReducer} from "./profile-reducer";
// import {dialogsReducer, DialogsReducersType} from "./dialogs-reducer";
// import {sidebarReducer} from "./sidebar-reducer";
//
//
// type StatePropsType = {
//     profilePage: {
//         postData: any[]
//         newPostText: string
//     },
//     messagesPage: {
//         dialogsData: DialogDataType[]
//         messagesData: MessagesDataType[]
//         newMessageText: string
//     },
//     sidebar: {}
// }
// type StoreType = {
//     _state : StatePropsType
//     _callSubscriber : (state : StatePropsType) => void
//     getState : () => StatePropsType
//     subscribe : (observer: any) => void
//     dispatch : (action: ActionsAllTypes) => void
// }
//
// type ActionsAllTypes = AllProfileReducersType | DialogsReducersType
//
//
//
// let store : StoreType = {
//     _state: <StatePropsType>{
//         profilePage: <ProfilePageType> {
//             postData: <PostDataType[]>[
//                 {id: v1(), postMessage: 'Hi, how are you', likes: 5},
//                 {id: v1(), postMessage: 'It\'s my first post', likes: 15},
//                 {id: v1(), postMessage: 'It\'s my second post', likes: 15},
//                 {id: v1(), postMessage: 'It\'s my third post', likes: 15},
//             ],
//             newPostText: 'it'
//         },
//         messagesPage: <MessagesPageType> {
//             dialogsData: <DialogDataType[]>[
//                 {id: v1(), name: 'Vlados'},
//                 {id: v1(), name: 'Gyn'},
//                 {id: v1(), name: 'Andr'},
//                 {id: v1(), name: 'Taras'},
//                 {id: v1(), name: 'Sanya Big Boss'},
//             ],
//             messagesData: <MessagesDataType[]> [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'How are u?'},
//                 {id: v1(), message: 'Good Job!'},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     _callSubscriber (state : StatePropsType) {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe (observer: any) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionsAllTypes) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//     }
// }

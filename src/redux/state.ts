import {v1} from "uuid";

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
    }
}

export let store = {
    _state : {
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
            newMessageText: 'hi'
        }
    } ,
    getState : function () {
        return this._state
    },
    _callSubscriber : function (value : any) {
        console.log(value)
    },
    addPost : function () {
        let newPost: PostDataType = {id: v1(), postMessage: this._state.profilePage.newPostText, likes: 0}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText : function (newText : string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe : function (observer : any) {
        this._callSubscriber = observer
    },
    addMessage : function () {
        let newAddedMessage = {id : v1(), message : this._state.profilePage.newPostText}
        this._state.messagesPage.messagesData.push(newAddedMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateTextMessage : function (newMessage: string) {
        this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },



}


// export const state = {
//     profilePage: {
//         postData: [
//             {id: v1(), postMessage: 'Hi, how are you', likes: 5},
//             {id: v1(), postMessage: 'It\'s my first post', likes: 15},
//             {id: v1(), postMessage: 'It\'s my second post', likes: 15},
//             {id: v1(), postMessage: 'It\'s my third post', likes: 15},
//         ],
//         newPostText: 'it'
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: v1(), name: 'Vlados'},
//             {id: v1(), name: 'Gyn'},
//             {id: v1(), name: 'Andr'},
//             {id: v1(), name: 'Taras'},
//             {id: v1(), name: 'Sanya Big Boss'},
//         ],
//         messagesData: [
//             {id: v1(), message: 'Hi'},
//             {id: v1(), message: 'How are u?'},
//             {id: v1(), message: 'Good Job!'},
//         ],
//         newMessageText: 'hi'
//     }
// }

// export const addPost = () => {
//     let newPost: PostDataType = {id: v1(), postMessage: state.profilePage.newPostText, likes: 0}
//     state.profilePage.postData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
//
// }

// export const addMessage = () => {
//     let newAddedMessage = {id : v1(), message : state.messagesPage.newMessageText}
//     state.messagesPage.messagesData.push(newAddedMessage)
//     state.messagesPage.newMessageText = ''
//     rerenderEntireTree()
// }

// export const updateTextMessage = (newMessage: string) => {
//     state.messagesPage.newMessageText = newMessage
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer : any) => {
//     rerenderEntireTree = observer
// }

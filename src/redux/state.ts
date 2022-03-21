import {v1} from "uuid";
import {rerenderEntireTree} from "../index";

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

window.state = state

export let state = {
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
}

export let addPost = (postMessage: string) => {
    let newPost: PostDataType = {id: v1(), postMessage: state.profilePage.newPostText, likes: 0}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export let addMessage = () => {
    let newAddedMessage = {id : v1(), message : state.messagesPage.newMessageText}
    state.messagesPage.messagesData.push(newAddedMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
    console.log(state.messagesPage.messagesData)
}

export let updateTextMessage = (newMessage: string) => {
    state.messagesPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {

}

export default state;
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


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';


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
            newMessageText: 'hi'
        }
    } ,
    _callSubscriber : function (value : any) {
    },
    getState : function () {
        return this._state
    },
    subscribe : function (observer : any) {
        this._callSubscriber = observer
    },
    dispatch(action : any) {

        switch (action.type) {
            case ADD_POST:
                let newPost: PostDataType = {id: v1(), postMessage: this._state.profilePage.newPostText, likes: 0}
                this._state.profilePage.postData.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_POST:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break;
            case ADD_MESSAGE:
                let newAddedMessage = {id: v1(), message: this._state.profilePage.newPostText}
                this._state.messagesPage.messagesData.push(newAddedMessage)
                this._state.messagesPage.newMessageText = ''
                this._callSubscriber(this._state)
                break;
            case UPDATE_TEXT_MESSAGE:
                this._state.messagesPage.newMessageText = action.newMessage
                this._callSubscriber(this._state)
                break;
        }
    },
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostActionCreator = (text: string) => ( {type: UPDATE_NEW_POST, newText: text} )
export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} )
export const updateTextMessageActionCreator = (newMessage: string) => (
    {type: UPDATE_TEXT_MESSAGE, newMessage: newMessage} )
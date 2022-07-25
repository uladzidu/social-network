import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

export type AddMessageReducerType = {
    type : 'ADD-MESSAGE'
}

export type UpdateTextMessageReducerType = {
    type : 'UPDATE-TEXT-MESSAGE'
    newMessage : string
}

const dialogsReducer = (state: any, action: any) => {

    switch (action.type) {

        case ADD_MESSAGE:
            const newAddedMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messagesData.push(newAddedMessage)
            state.newMessageText = ''
            return state;

        case UPDATE_TEXT_MESSAGE:
            state.newMessageText = action.newMessage
            return state;

        default:
            return state
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateTextMessageCreator = (newMessage: string) => (
    {type: UPDATE_TEXT_MESSAGE, newMessage: newMessage})

export default dialogsReducer
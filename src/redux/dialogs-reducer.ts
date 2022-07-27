import {v1} from "uuid";
import {ActionsAllTypes, MessagesPageType} from "./state";


export type AddMessageReducerType = {
    type : 'ADD-MESSAGE'
}
export type UpdateTextMessageReducerType = {
    type : 'UPDATE-TEXT-MESSAGE'
    newMessage : string
}
export type DialogsReducersType = AddMessageReducerType | UpdateTextMessageReducerType

export const dialogsReducer = (state: MessagesPageType, action: ActionsAllTypes) => {

    switch (action.type) {

        case "ADD-MESSAGE":
            const newAddedMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messagesData.push(newAddedMessage)
            state.newMessageText = ''
            return state;

        case "UPDATE-TEXT-MESSAGE":
            state.newMessageText = action.newMessage
            return state;

        default:
            return state
    }
}

export const addMessageCreator = () : AddMessageReducerType => ({type: 'ADD-MESSAGE'})
export const updateTextMessageCreator = (newMessage: string) : UpdateTextMessageReducerType => (
    {type: 'UPDATE-TEXT-MESSAGE', newMessage: newMessage})

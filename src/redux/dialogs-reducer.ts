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

const dialogsReducerInitState = {
    dialogsData: [
        {id: v1(), name: 'Vlados'},
        {id: v1(), name: 'Gyn'},
        {id: v1(), name: 'Andr'},
        {id: v1(), name: 'Taras'},
        {id: v1(), name: 'Sanya Big Boss'},
    ],
    messagesData:  [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are u?'},
        {id: v1(), message: 'Good Job!'},
    ],
    newMessageText: 'qq'
}

export const dialogsReducer = (state: MessagesPageType = dialogsReducerInitState, action: ActionsAllTypes) => {

    switch (action.type) {

        case "ADD-MESSAGE": {
            const newAddedMessage = {
                id: v1(),
                message: state.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newAddedMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        }

        case "UPDATE-TEXT-MESSAGE": {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage
            return stateCopy;
        }

        default:
            return state
    }
}

export const addMessageCreator = () : AddMessageReducerType => ({type: 'ADD-MESSAGE'})
export const updateTextMessageCreator = (newMessage: string) : UpdateTextMessageReducerType => (
    {type: 'UPDATE-TEXT-MESSAGE', newMessage: newMessage})
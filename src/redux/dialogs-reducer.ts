import {v1} from "uuid";

type DialogDataType = {
    id: string
    name: string
}
type MessagesDataType = {
    id: string
    message: string
}
export type MessagesPageType = {
    dialogsData : DialogDataType[]
    messagesData : MessagesDataType[]
    newMessageText : string
}

export type DialogsActionType =
    ReturnType<typeof addMessageCreator>
    | ReturnType<typeof updateTextMessageCreator>

const dialogsInitState : MessagesPageType = {
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

export const dialogsReducer = (state: MessagesPageType = dialogsInitState, action: DialogsActionType) : MessagesPageType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            const newAddedMessage = {
                id: v1(),
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [newAddedMessage, ...state.messagesData],
                newMessageText: ''
            };
        }
        case "UPDATE-TEXT-MESSAGE": {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state
    }
}

export const addMessageCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const updateTextMessageCreator = (newMessage: string) => (
    {type: 'UPDATE-TEXT-MESSAGE', newMessage: newMessage} as const)
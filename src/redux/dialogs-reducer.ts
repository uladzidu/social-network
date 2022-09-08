import {v1} from "uuid";

export type DialogDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type MessagesPageType = {
    dialogsData : DialogDataType[]
    messagesData : MessagesDataType[]
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
    ]
}

export const dialogsReducer = (state: MessagesPageType = dialogsInitState, action: DialogsActionType) : MessagesPageType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            const newAddedMessage = {
                id: v1(),
                message: action.newMessageText
            }
            return {
                ...state,
                messagesData: [newAddedMessage, ...state.messagesData]
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

export const addMessageCreator = (newMessageText : string) => ({type: 'ADD-MESSAGE',newMessageText} as const)
export const updateTextMessageCreator = (newMessage: string) => (
    {type: 'UPDATE-TEXT-MESSAGE', newMessage} as const)
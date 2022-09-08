import React from 'react';
import style from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType, MessagesPageType} from "../../redux/dialogs-reducer";
import {AddMessageReduxForm} from "../common/Forms/AddMessageForm";


type DialogsPropsType = {
    messagesPage : MessagesPageType
    newMessageText : string
    addDialogMessage: (value : string) => void
    onChangeMessage: (newText: string) => void
    isAuth : boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    const state = props.messagesPage

    const mappedMessagesData = state.messagesData.map((m: MessagesDataType) =>
        <Message key={m.id}
                 id={m.id}
                 message={m.message}/>)

    const mappedDialogs = state.dialogsData.map((d: DialogDataType) =>
        <DialogItem key={d.id}
                    id={d.id}
                    name={d.name}/>)

    const localAddMessage = (value : any) => {
        props.addDialogMessage(value)
    }

    const addMessageHandler = (value : any) => {
        console.log(value.message)
        localAddMessage(value.message)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={style.messages}>
                <div>{mappedMessagesData}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addMessageHandler} />
                </div>
            </div>
        </div>
    )
}
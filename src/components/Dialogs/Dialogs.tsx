import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import { Message } from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';

export type propsType = {
    name: string
    id: number
}

export type propsMessageType = {
    message: string
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Vlados'},
        {id: 2, name: 'Gyn'},
        {id: 3, name: 'Andr'},
        {id: 4, name: 'Taras'},
        {id: 5, name: 'Sanya Big Boss'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'Good Job!'},
    ]

    let mapedMessagesData = messagesData.map(newMessage => <Message message={newMessage.message}/>)
    let mapedDialogs = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mapedDialogs}
            </div>
            <div className={s.messages}>
                {mapedMessagesData}
            </div>
        </div>
    )
}
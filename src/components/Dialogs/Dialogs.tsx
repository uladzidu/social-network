import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {AppType} from '../../index';

export const Dialogs = (props: AppType) => {

    let mapedMessagesData = props.messagesData.map(newMessage = {<Message/>)
    let mapedDialogs = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

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
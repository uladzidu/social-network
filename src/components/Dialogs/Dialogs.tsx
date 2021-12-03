import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {MessagesDataType, StatePropsType} from '../../redux/state';




export const Dialogs = (props: StatePropsType) => {

    let mapedMessagesData = props.messagesPage.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let mapedDialogs = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

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
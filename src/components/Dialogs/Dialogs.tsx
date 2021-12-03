import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType, StatePropsType} from '../../redux/state';


type DialogsPropsType = {
    dialogsData : DialogDataType[]
    messagesData : MessagesDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    let mapedMessagesData = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let mapedDialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

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
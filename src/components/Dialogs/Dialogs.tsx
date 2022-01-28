import React, {MutableRefObject, useRef} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType, StatePropsType} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    let mappedMessagesData = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let mappedDialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageRef = useRef<any>()

    let addMessage = () => {
        let messageAddedText = messageRef.current?.value
        alert(messageAddedText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                {mappedMessagesData}
            </div>
            <textarea ref={messageRef}/>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}
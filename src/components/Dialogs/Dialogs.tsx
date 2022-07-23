import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {
    addMessageActionCreator,
    DialogDataType,
    MessagesDataType,
    updateTextMessageActionCreator
} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
    dispatch : any
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let mappedMessagesData = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let mappedDialogs = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>()

    let localAddMessage = () => {
        if (messageRef.current?.value) {
            props.dispatch( addMessageActionCreator() )
        }
    }

    let OnChangeMessage = () => {
        const newMessage = messageRef.current?.value as string
        props.dispatch( updateTextMessageActionCreator(newMessage) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                {mappedMessagesData}
            </div>

            <textarea ref={messageRef}
                      value={props.newMessageText}
                      onChange={OnChangeMessage}
            />

            <button onClick={localAddMessage}>Add Message</button>
        </div>
    )
}
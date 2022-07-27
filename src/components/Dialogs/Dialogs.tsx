import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType} from "../../redux/state";


type DialogsPropsType = {
    messagesData : MessagesDataType[]
    dialogsData : DialogDataType[]
    newMessageText : string
    addDialogMessage : () => void
    onChangeMessage : (newText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let mappedMessagesData = props.messagesData.map((m:MessagesDataType) =>
        <Message key={m.id}
                 id={m.id}
                 message={m.message} />)

    let mappedDialogs = props.dialogsData.map((d:DialogDataType) =>
        <DialogItem key={d.id}
                    id={d.id}
                    name={d.name} />)

    let messageRef = React.createRef<HTMLTextAreaElement>()

    let localAddMessage = () => {
        if (messageRef.current?.value) {
            props.addDialogMessage()
        }
    }

    let OnChangeMessage = () => {
        const newMessage = messageRef.current?.value as string
        props.onChangeMessage(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                <div>{mappedMessagesData}</div>
                <div>
                    <div><textarea ref={messageRef}
                                   placeholder={'Enter you message'}
                                   value={props.newMessageText}
                                   onChange={OnChangeMessage}/>
                    </div>
                    <div>
                        <button onClick={localAddMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
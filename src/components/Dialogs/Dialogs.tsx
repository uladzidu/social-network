import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType, MessagesPageType} from "../../redux/state";


type DialogsPropsType = {
    messagesPage : MessagesPageType
    addDialogMessage: () => void
    onChangeMessage: (newText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.messagesPage

    let mappedMessagesData = state.messagesData.map((m: MessagesDataType) =>
        <Message key={m.id}
                 id={m.id}
                 message={m.message}/>)

    let mappedDialogs = state.dialogsData.map((d: DialogDataType) =>
        <DialogItem key={d.id}
                    id={d.id}
                    name={d.name}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>()

    let localAddMessage = () => {
        props.addDialogMessage()
    }

    let onChangeMessage = () => {
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
                                   value={state.newMessageText}
                                   onChange={onChangeMessage}/>
                    </div>
                    <div>
                        <button onClick={localAddMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
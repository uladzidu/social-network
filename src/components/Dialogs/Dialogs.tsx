import React from 'react';
import style from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType, MessagesPageType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    messagesPage : MessagesPageType
    newMessageText : string
    addDialogMessage: () => void
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

    const messageRef = React.createRef<HTMLTextAreaElement>()

    const localAddMessage = () => {
        props.addDialogMessage()
    }

    const onChangeMessage = () => {
        const newMessage = messageRef.current?.value as string
        props.onChangeMessage(newMessage)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={style.messages}>
                <div>{mappedMessagesData}</div>
                <div>
                    <div><textarea ref={messageRef}
                                   placeholder={'Enter you message'}
                                   value={props.newMessageText}
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
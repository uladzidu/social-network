import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {ActionsAllTypes, DialogDataType, MessagesDataType} from "../../redux/state";
import {addMessageCreator, updateTextMessageCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
    dispatch: (action: ActionsAllTypes) => void
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let mappedMessagesData = props.messagesData.map((m:MessagesDataType) =>
        <Message key={m.id} id={m.id} message={m.message} />)

    let mappedDialogs = props.dialogsData.map((d:DialogDataType) =>
        <DialogItem key={d.id} id={d.id} name={d.name} />)

    let messageRef = React.createRef<HTMLTextAreaElement>()

    let localAddMessage = () => {
        if (messageRef.current?.value) {
            props.dispatch(addMessageCreator())
        }
    }

    let OnChangeMessage = () => {
        const newMessage = messageRef.current?.value as string
        props.dispatch(updateTextMessageCreator(newMessage))
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
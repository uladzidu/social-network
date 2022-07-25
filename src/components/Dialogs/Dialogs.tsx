import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogDataType, MessagesDataType} from "../../redux/state";
import {addMessageCreator, updateTextMessageCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
    dispatch: any
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let mappedMessagesData = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let mappedDialogs = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

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
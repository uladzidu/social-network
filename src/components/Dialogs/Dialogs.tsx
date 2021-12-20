import React, {useRef} from 'react';
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
    let ref = React.createRef()
    let addMessage = () => {
        let newAddMessage = ref.current.value
        alert(newAddMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mapedDialogs}
            </div>
            <div className={s.messages}>
                {mapedMessagesData}
            </div>
            <textarea ref={ref}/>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}
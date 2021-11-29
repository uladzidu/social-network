import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type propsType = {
    name: string
    id: number
}

type propsMessageType = {
    message: string
}

const DialogItem = (props: propsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}
                     style={({isActive}) => ({color: isActive ? 'gold' : 'black'})}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: propsMessageType) => {
    return (
        <div className="message">{props.message}</div>
    )
}

export const Dialogs = (props: propsType) => {

    let dialogsData = [
        {id: 1, name: 'Vlados'},
        {id: 2, name: 'Gyn'},
        {id: 3, name: 'Andr'},
        {id: 4, name: 'Taras'},
        {id: 5, name: 'Sanya Big Boss'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'Good Job!'},
    ]

    let mapedMessagesData = messagesData.map(newMessage => <Message message={newMessage.message}/>)
    let mapedDialogs = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

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
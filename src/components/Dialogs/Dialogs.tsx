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
        {id: 2, message:},
        {id: 3, message: 'Good Job!'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id ={dialogsData[0].id} name={dialogsData[0].name}  />
                <DialogItem id ={dialogsData[1].id} name={dialogsData[1].name}  />
                <DialogItem id ={dialogsData[2].id} name={dialogsData[2].name}  />
                <DialogItem id ={dialogsData[3].id} name={dialogsData[3].name}  />
                <DialogItem id ={dialogsData[4].id} name={dialogsData[4].name}  />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />

            </div>
        </div>
    )
}
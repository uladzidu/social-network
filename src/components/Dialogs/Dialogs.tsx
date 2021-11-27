import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type propsType = {
    name: string
    id: number
}

type propsMessageType = {
    message : string
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

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vlados" id ={1}/>
                <DialogItem name="Gyn" id ={2}/>
                <DialogItem name="Andr" id ={3}/>
                <DialogItem name="Taras" id ={4}/>
                <DialogItem name="Sanya Big Boss" id ={5}/>
            </div>
            <div className={s.messages}>
                <Message message= 'Hi'/>
                <Message message= 'How are u? '/>
                <Message message= 'Good Job!'/>

            </div>
        </div>
    )
}
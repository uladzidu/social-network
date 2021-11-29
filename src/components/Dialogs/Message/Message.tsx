import React from 'react';
import s from './../Dialogs.module.css'
import {propsMessageType} from '../Dialogs';


export const Message = (props: propsMessageType) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

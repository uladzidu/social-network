import React from 'react';
import s from './../Dialogs.module.css'
import {AppType} from '../../../index';


export const Message = (props: AppType) => {
    return (
        <div className={s.messages}>{props.messagesData}</div>
    )
}

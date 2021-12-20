import React from 'react';
import s from './../Dialogs.module.css'
import {MessagesDataType} from '../../../redux/state';


export const Message = (props: MessagesDataType) => {
    return (
        <div className={s.messages}>{props.message}</div>)
}

import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {AppType, DialogDataType} from '../../../index';


export const DialogItem = (props: DialogDataType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}
                     style={({isActive}) => ({color: isActive ? 'gold' : 'black'})}>{props.name}</NavLink>
        </div>
    )
}
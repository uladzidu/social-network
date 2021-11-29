import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {propsType} from '../Dialogs';


export const DialogItem = (props: propsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}
                     style={({isActive}) => ({color: isActive ? 'gold' : 'black'})}>{props.name}</NavLink>
        </div>
    )
}
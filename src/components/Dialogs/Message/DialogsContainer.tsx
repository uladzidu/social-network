import React from 'react';
import {Dialogs} from "../Dialogs";
import {StoreType} from "../../../redux/state";
import {addMessageCreator, updateTextMessageCreator} from "../../../redux/dialogs-reducer";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState()


    let addDialogMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onChangeMessage = (newText: string) => {
        props.store.dispatch(updateTextMessageCreator(newText))
    }

    return (
        <Dialogs addDialogMessage={addDialogMessage}
                 onChangeMessage={onChangeMessage}
                 newMessageText = {state.messagesPage.newMessageText}
                 dialogsData = {state.messagesPage.dialogsData}
                 messagesData = {state.messagesPage.messagesData}
        />
    )
}
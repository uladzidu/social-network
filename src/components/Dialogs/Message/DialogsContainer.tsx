import React from 'react';
import {Dialogs} from "../Dialogs";
import {addMessageCreator, updateTextMessageCreator} from "../../../redux/dialogs-reducer";
import {StoreContext} from '../../../StoreContext';
import {StoreType} from "../../../redux/state";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store : StoreType) => {
                let state = store.getState()
                let addDialogMessage = () => {
                    store.dispatch(addMessageCreator())
                }
                let onChangeMessage = (newText: string) => {
                    store.dispatch(updateTextMessageCreator(newText))
                }
                return (
                    <Dialogs addDialogMessage={addDialogMessage}
                             onChangeMessage={onChangeMessage}
                             newMessageText={state.messagesPage.newMessageText}
                             dialogsData={state.messagesPage.dialogsData}
                             messagesData={state.messagesPage.messagesData}
                    />
                )
            }

        }
        </StoreContext.Consumer>
    )
}
import React from 'react';
import {Dialogs} from "../Dialogs";
import {addMessageCreator, MessagesPageType, updateTextMessageCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToDialogsType = {
    messagesPage: MessagesPageType
    newMessageText : string
}

const mapStateToDialogsProps = (state : AppStateType) : mapStateToDialogsType => {
    return {
        messagesPage: state.messagesPage,
        newMessageText : state.messagesPage.newMessageText
    }
}

const mapDispatchToDialogsProps = (dispatch : Dispatch) => {
    return {
        addDialogMessage : () => {
            dispatch(addMessageCreator())
        } ,
        onChangeMessage : (newText : string) => {
            dispatch(updateTextMessageCreator(newText))
        }
    }
}

export const DialogsContainer = connect(mapStateToDialogsProps , mapDispatchToDialogsProps)(Dialogs)
import React from 'react';
import {Dialogs} from "../Dialogs";
import {addMessageCreator, updateTextMessageCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


const mapStateToDialogsProps = (state : any) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToDialogsProps = (dispatch : any) => {
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
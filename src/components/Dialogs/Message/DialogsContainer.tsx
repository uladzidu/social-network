import React from 'react';
import {Dialogs} from "../Dialogs";
import {addMessageCreator, MessagesPageType, updateTextMessageCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

type mapStateToDialogsType = {
    messagesPage: MessagesPageType
    newMessageText: string
    isAuth: boolean
}

const mapStateToDialogsProps = (state: AppStateType): mapStateToDialogsType => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToDialogsProps = (dispatch: Dispatch) => {
    return {
        addDialogMessage: () => {
            dispatch(addMessageCreator())
        },
        onChangeMessage: (newText: string) => {
            dispatch(updateTextMessageCreator(newText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToDialogsProps, mapDispatchToDialogsProps),
    WithAuthRedirect
)(Dialogs)

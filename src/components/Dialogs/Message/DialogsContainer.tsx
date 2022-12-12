import React from "react";
import { Dialogs } from "../Dialogs";
import { addMessageCreator, MessagesPageType } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";

type mapStateToDialogsType = {
  messagesPage: MessagesPageType;
  isAuth: boolean;
};

const mapStateToDialogsProps = (state: AppStateType): mapStateToDialogsType => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToDialogsProps = (dispatch: Dispatch) => {
  return {
    addDialogMessage: (value: any) => {
      dispatch(addMessageCreator(value));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToDialogsProps, mapDispatchToDialogsProps),
  WithAuthRedirect
)(Dialogs);

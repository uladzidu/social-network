import React from "react";
import s from "./../Dialogs.module.css";
import { MessagesDataType } from "../../../redux/dialogs-reducer";

export const Message = (props: MessagesDataType) => {
    return <div className={s.messages}>{props.message}</div>;
};

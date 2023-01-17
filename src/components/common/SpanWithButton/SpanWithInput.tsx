import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import {
    updateUserDataAC,
    updateUserDataTC,
    updateUserStatusTC,
} from "../../../redux/profile-reducer";

export type SpanWithInputPropsType = {
    name: string;
    callback?: any;
    editProfile: boolean;
};

export const SpanWithInput = (props: SpanWithInputPropsType) => {
    const userAuthId = useAppSelector((state) => state.auth.id);
    const currentUserId = useAppSelector((state) => state.profilePage.userId);
    const dispatch = useAppDispatch();

    // @ts-ignore
    const currentContact = useAppSelector((state) => state.profilePage.contacts[props.name]);

    const isAuthProfile = currentUserId === userAuthId;

    const [text, setText] = useState(currentContact);
    const [edit, setEdit] = useState(false);
    const onClickHandler = () => {};

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    const deactivateEditMode = async () => {
        setEdit(false);
        await dispatch(props.callback(text));
    };
    const activateEditMode = () => {
        setEdit(true);
    };

    useEffect(() => {
        setText(currentContact);
    }, [currentContact]);

    return (
        <div style={{ display: "flex" }}>
            <strong>{props.name} : </strong>
            {edit || props.editProfile ? (
                <div style={{ marginLeft: "10px" }}>
                    <input
                        autoFocus
                        onChange={onTextChange}
                        onBlur={deactivateEditMode}
                        value={text}
                    />
                </div>
            ) : (
                <div style={{ marginLeft: "10px" }}>
                    <span onDoubleClick={activateEditMode}>{text}</span>
                </div>
            )}
        </div>
    );
};

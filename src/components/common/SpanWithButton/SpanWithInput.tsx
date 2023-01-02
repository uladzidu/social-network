import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { updateUserStatusTC } from "../../../redux/profile-reducer";

export type SpanWithInputPropsType = {
    name: string;
    callback?: () => void;
};

export const SpanWithInput = (props: SpanWithInputPropsType) => {
    const userAuthId = useAppSelector((state) => state.auth.id);
    const currentUserId = useAppSelector((state) => state.profilePage.userId);
    const dispatch = useAppDispatch();

    const { aboutMe, lookingForAJob } = useAppSelector((state) => state.profilePage);

    // @ts-ignore
    const currentContact = useAppSelector((state) => state.profilePage.contacts[props.name]);
    console.log("currentContact : ", currentContact);

    const isAuthProfile = currentUserId === userAuthId;

    const [text, setText] = useState(currentContact);
    const [edit, setEdit] = useState(false);
    console.log("text : ", text);
    const onClickHandler = () => {};

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    const deactivateEditMode = () => {
        setEdit(false);
    };
    const activateEditMode = () => {
        setEdit(true);
    };

    useEffect(() => {
        setText(currentContact);
    }, [currentContact]);

    return (
        <div>
            {/*<span>{props.name} : {text}</span>*/}
            {/*{isAuthProfile && (*/}
            {/*    <IconButton onClick={onClickHandler}>*/}
            {/*        <EditIcon />*/}
            {/*    </IconButton>*/}
            {/*)}*/}

            {props.name}
            {edit ? (
                <div>
                    <input
                        autoFocus
                        onChange={onTextChange}
                        onBlur={deactivateEditMode}
                        value={text}
                    />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={activateEditMode}>{text}</span>
                    {isAuthProfile && (
                        <IconButton onClick={activateEditMode}>
                            <EditIcon />
                        </IconButton>
                    )}
                </div>
            )}
        </div>
    );
};

import React, { ChangeEvent, useEffect, useState } from "react";
import { getUserStatusTC, updateUserStatusTC } from "../../../redux/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export type ProfileStatusWithHooksPropsType = {
    userId: number;
};

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    const reduxStatus = useAppSelector((state) => state.profilePage.status);

    const userAuthId = useAppSelector((state) => state.auth.id);
    console.log("userAuthId : ", userAuthId);
    console.log("userId : ", +props.userId);

    const [edit, setEdit] = useState(false);
    const [status, setStatus] = useState(reduxStatus);
    const dispatch = useAppDispatch();

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };
    const deactivateEditMode = () => {
        dispatch(updateUserStatusTC(status));
        setEdit(false);
    };
    const activateEditMode = () => {
        setEdit(true);
    };

    useEffect(() => {
        setStatus(reduxStatus);
    }, [reduxStatus]);

    return (
        <div>
            {edit ? (
                <div>
                    <input
                        autoFocus
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={activateEditMode}>Status : {status}</span>
                    {+props.userId === userAuthId && (
                        <IconButton onClick={activateEditMode}>
                            <EditIcon />
                        </IconButton>
                    )}
                </div>
            )}
        </div>
    );
};

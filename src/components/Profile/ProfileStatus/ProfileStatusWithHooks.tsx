import React, { ChangeEvent, useEffect, useState } from "react";
import { getUserStatusTC, updateUserStatusTC } from "../../../redux/profile-reducer";
import { useAppDispatch } from "../../../redux/redux-store";

export type ProfileStatusWithHooksPropsType = {
    userId: any;
    status: string | any;
};

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    const [edit, setEdit] = useState(false);
    const [status, setStatus] = useState(props.status);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setStatus(props.status);
    }, []);

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

    return (
        <div>
            {edit ? (
                <div>
                    <input
                        autoFocus
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        // type={status}
                        value={status}
                    />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={activateEditMode}>Status : {props.status}</span>
                </div>
            )}
        </div>
    );
};

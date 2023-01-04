import React, { ChangeEvent, useState } from "react";
import { IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useAppDispatch, useAppSelector } from "../../redux/redux-store";
import defaultAva from "./../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg";
import { updateUserAvatarTC } from "../../redux/profile-reducer";

export const InputTypeFile = () => {
    // @ts-ignore
    const avatar = useAppSelector((state) => state.profilePage.photos.large);
    console.log("avatar : ", avatar);
    const dispatch = useAppDispatch();
    // const name = useAppSelector((state) => state.profile.name);
    // const isLoading = useAppSelector((state) => state.app.isLoading);
    const [ava, setAva] = useState(avatar);
    const [isAvaBroken, setIsAvaBroken] = useState(false);

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            console.log("file : ", file);
            const fileSize = file.size;
            const fileSizeInMb = fileSize / 1024 ** 2;

            if (fileSizeInMb < 1) {
                setIsAvaBroken(false);
                setAva(file);
                // @ts-ignore
                dispatch(updateUserAvatarTC(file));
            } else {
                // dispatch(setAppErrorAC("File size should be no more than 200 KB "));
            }
        }
    };

    // const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         const file64 = reader.result as string;
    //         callBack(file64);
    //     };
    //     reader.readAsDataURL(file);
    // };

    const errorHandler = () => {
        setIsAvaBroken(true);
        alert("Broken img. Default Img has set");
    };

    return (
        <div>
            <img
                src={isAvaBroken ? defaultAva : ava!!}
                style={{ width: "180px", height: "180px", borderRadius: "50%" }}
                onError={errorHandler}
                alt="ava"
            />
            <label>
                <input
                    type="file"
                    onChange={uploadHandler}
                    accept="image/*"
                    style={{ display: "none" }}
                />
                <IconButton component="span">
                    <CloudUploadIcon />
                </IconButton>
            </label>
        </div>
    );
};

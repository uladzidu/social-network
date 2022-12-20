import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/redux-store";

export const ProfileFuncComponent = () => {
    const { userId } = useParams<{ userId: string | undefined }>();
    console.log("userId : ", userId);

    // console.log(userId);

    return (
        <div>
            <ProfileInfo userId={userId} />
            {/*<ProfileInfoMemo />*/}
            <MyPostsContainer />
        </div>
    );
};

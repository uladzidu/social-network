import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { useParams } from "react-router-dom";

export const ProfileFuncComponent = () => {
    const { userId } = useParams<{ userId: string | undefined }>();
    // console.log(userId);

    return (
        <div>
            <ProfileInfo userId={userId} />
            {/*<ProfileInfoMemo />*/}
            <MyPostsContainer />
        </div>
    );
};

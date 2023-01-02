import { v1 } from "uuid";
import { profileApi, usersApi } from "../api/api";
import { AppThunk } from "./redux-store";

const ProfileReducerInitState = {
    postData: <PostDataType[]>[
        { id: v1(), postMessage: "Hi, how are you", likes: 5 },
        { id: v1(), postMessage: "It's my first post", likes: 15 },
        { id: v1(), postMessage: "It's my second post", likes: 15 },
        { id: v1(), postMessage: "It's my third post", likes: 15 },
    ],
    status: "",
    aboutMe: "",
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: "",
    },
    lookingForAJob: null as null | boolean,
    lookingForAJobDescription: "",
    fullName: "",
    userId: null as null | number,
    photos: "",
};

export const profileReducer = (
    state: ProfilePageType = ProfileReducerInitState,
    action: ProfileReducersAT
): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostDataType = { id: v1(), postMessage: action.newPostText, likes: 0 };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            };
        }
        case "app/SET-USER-ID":
            return {
                ...state,
                userId: action.userId,
            };
        case "SET-PROFILE-DATA": {
            return {
                ...state,
                ...action.profileData,
            };
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status,
            };
        }
        case "app/UPDATE-AVATAR": {
            return {
                ...state,
                photos: action.avatar,
            };
        }
        // case "app/UPDATE-SMALL-AVATAR": {
        //     let copyState = { ...state, ...state.photos };
        //     copyState.photos.small = action.avatar;
        //     return copyState;
        // }
        default:
            return state;
    }
};
// Action Creators
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText,
    } as const;
};

export const setUserIdAC = (userId: number) => ({ type: "app/SET-USER-ID", userId } as const);

export const setProfileDataAC = (profileData: ProfileType) => {
    return { type: "SET-PROFILE-DATA", profileData } as const;
};
export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status,
    } as const;
};

export const updateAvatarAC = (avatar: string) => ({ type: "app/UPDATE-AVATAR", avatar } as const);

// export const updateSmallAvatarAC = (avatar: string) =>
//     ({ type: "app/UPDATE-SMALL-AVATAR", avatar } as const);

// Thunk Creators
// export const getUserProfileTC = (userId: number | null): AppThunk => {
//     return async (dispatch) => {
//         const response = await profileApi.getProfile(userId!!);
//         console.log(response);
//         // @ts-ignore
//         dispatch(setProfileDataAC(response));
//     };
// };

export const getUserProfileTC = (userId: number): AppThunk => {
    return async (dispatch) => {
        let response;
        if (userId) {
            response = await profileApi.getProfile(userId);
            dispatch(setProfileDataAC(response));
            dispatch(getUserStatusTC(userId));
        }
    };
};

export const getUserStatusTC =
    (userId: number | null): AppThunk =>
    async (dispatch) => {
        if (userId) {
            const response = await profileApi.getStatus(userId);
            dispatch(setUserStatusAC(response));
        }
    };
export const updateUserStatusTC =
    (status: string): AppThunk =>
    async (dispatch, getState) => {
        const userId = getState().profilePage.userId;
        const response = await profileApi.updateStatus(status);
        // console.log(response);
        if (response.resultCode === 0) {
            dispatch(setUserStatusAC(status));
            // dispatch(getUserStatusTC(userId));
        }
    };

export const updateProfileAvatarTC =
    (image: string): AppThunk =>
    async (dispatch) => {
        const response = await profileApi.updateAvatar(image);
        console.log(response);
        dispatch(updateAvatarAC(response.data.photos.large));
    };

export type PostDataType = {
    id: string;
    postMessage: string;
    likes: number;
};

export type ProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: string;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string;
        github: string;
        mainLink: string;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription?: string;
    fullName: string;
    userId: number;
    photos: string;
};

type ProfilePageType = typeof ProfileReducerInitState;

type ProfileReducersAT =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setProfileDataAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUserIdAC>
    | ReturnType<typeof updateAvatarAC>;
// | ReturnType<typeof updateSmallAvatarAC>;

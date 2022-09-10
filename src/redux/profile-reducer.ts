import {v1} from "uuid";
import {profileApi, usersApi} from "../api/api";


export type PostDataType = {
    id: string
    postMessage: string
    likes: number
}
type ProfilePageType = {
    postData: PostDataType[]
    profile: null | any
    status: string
}

type AllProfileReducersActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>

const ProfileReducerInitState: ProfilePageType = {
    postData: <PostDataType[]>[
        {id: v1(), postMessage: 'Hi, how are you', likes: 5},
        {id: v1(), postMessage: 'It\'s my first post', likes: 15},
        {id: v1(), postMessage: 'It\'s my second post', likes: 15},
        {id: v1(), postMessage: 'It\'s my third post', likes: 15},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = ProfileReducerInitState, action: AllProfileReducersActionType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostDataType = {id: v1(), postMessage: action.newPostText, likes: 0}
            return {
                ...state,
                postData: [newPost, ...state.postData],
            };
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
// Action Creators
export const addPostAC = (newPostText : string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

// Thunk Creators
export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        usersApi.getProfile(userId)
            .then((data: any) => {
                dispatch(setUserProfileAC(data))
            })
            .then()
    }
}
export const getUserStatusThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId)
            .then((data: any) => {
                dispatch(setUserStatusAC(data))
            })
    }
}
export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: any) => {
        profileApi.updateStatus(status)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}


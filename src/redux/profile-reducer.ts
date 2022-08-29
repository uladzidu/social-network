import {v1} from "uuid";

type PostDataType = {
    id: string
    postMessage: string
    likes: number
}
type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
    profile : null | any
}
type AllProfileReducersActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfileAC>

const ProfileReducerInitState: ProfilePageType = {
    postData: <PostDataType[]>[
        {id: v1(), postMessage: 'Hi, how are you', likes: 5},
        {id: v1(), postMessage: 'It\'s my first post', likes: 15},
        {id: v1(), postMessage: 'It\'s my second post', likes: 15},
        {id: v1(), postMessage: 'It\'s my third post', likes: 15},
    ],
    newPostText: 'it',
    profile : null
}

export const profileReducer = (state: ProfilePageType = ProfileReducerInitState, action: AllProfileReducersActionType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostDataType = {id: v1(), postMessage: state.newPostText, likes: 0}
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            };
        }
        case "UPDATE_NEW_POST": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile : action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const updateNewPostAC = (text: string) =>
    ({type: "UPDATE_NEW_POST", newText: text} as const)

export const setUserProfileAC = (profile : any) => {
    return {
        type : 'SET-USER-PROFILE',
        profile
    } as const
}
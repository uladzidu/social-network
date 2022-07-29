import {v1} from "uuid";
import {ActionsAllTypes, PostDataType, ProfilePageType} from "./state";


export type AddPostReducerType = {
    type : 'ADD-POST'
}
export type UpdateNewPostReducerType = {
    type : 'UPDATE_NEW_POST',
    newText : string
}

export type AllProfileReducersType = AddPostReducerType | UpdateNewPostReducerType

const ProfileReducerInitState = {
    postData: <PostDataType[]>[
        {id: v1(), postMessage: 'Hi, how are you', likes: 5},
        {id: v1(), postMessage: 'It\'s my first post', likes: 15},
        {id: v1(), postMessage: 'It\'s my second post', likes: 15},
        {id: v1(), postMessage: 'It\'s my third post', likes: 15},
    ],
    newPostText: 'it'
}

export const profileReducer = (state: ProfilePageType = ProfileReducerInitState, action: ActionsAllTypes) => {

    switch (action.type) {

        case "ADD-POST": {
            const newPost: PostDataType = {
                id: v1(),
                postMessage: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }

        case "UPDATE_NEW_POST": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default:
            return state
    }
}

export const addPostCreator = () : AddPostReducerType => ( {type : "ADD-POST"} )
export const updateNewPostCreator = (text: string) : UpdateNewPostReducerType =>
    ( {type : "UPDATE_NEW_POST" , newText : text} )
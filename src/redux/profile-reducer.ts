import {v1} from "uuid";
import {PostDataType} from "./state";


export type AddPostReducerType = ReturnType<typeof addPostCreator>
export type UpdateNewPostReducerType = ReturnType<typeof updateNewPostCreator>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


const profileReducer = (state: any, action: any) => {

    switch (action.type) {

        case ADD_POST:
            const newPost: PostDataType = {
                id: v1(),
                postMessage: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state;

        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text: string) => ({type: UPDATE_NEW_POST, newText : text})

export default profileReducer
import React from 'react';
import {Field, reduxForm} from "redux-form";


export type AddMessageFormPropsType = {

}

export const AddPostForm = (props : any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New post'} name={'post'} component={'textarea'} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div></div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)




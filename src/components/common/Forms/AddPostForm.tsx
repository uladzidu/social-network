import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthThunk, requiredField} from "../../../utils/validators/validators";
import {TextAreaComponent} from "../FormsControls/FormElements";

export type FormDataPostType = {
    post: string
}

const maxLength30 = maxLengthThunk(30)

const AddPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='New post'
                       name='post'
                       component={TextAreaComponent}
                       validate={[requiredField, maxLength30]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div></div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormDataPostType>({form: 'addPostForm'})(AddPostForm)




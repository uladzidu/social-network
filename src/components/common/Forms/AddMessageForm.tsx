import React from 'react';
import {Field, reduxForm} from "redux-form";


export type AddMessageFormPropsType = {

}

const AddMessageForm = (props : any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New message'} name={'message'} component={'textarea'} />
            </div>
            <div>
                <button>Add Message</button>
            </div>
            <div></div>
        </form>
    )
}
export const AddMessageReduxForm = reduxForm({form: 'addPostForm'})(AddMessageForm)




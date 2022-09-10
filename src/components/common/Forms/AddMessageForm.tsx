import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../Login/Login";
import {TextArea} from "../FormsControls/FormsControls";
import {maxLengthThunk, requiredField} from "../../../utils/validators/validators";

const maxLength = maxLengthThunk(30)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New message'}
                       name={'message'}
                       validate={[requiredField, maxLength]}
                       component={TextArea}
                />
            </div>
            <div>
                <button>Add Message</button>
            </div>
            <div></div>
        </form>
    )
}
export const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addPostForm'})(AddMessageForm)




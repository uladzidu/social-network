import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormDataType } from "../../Login/Login";
import { TextAreaComponent } from "../FormsControls/FormElements";
import { maxLengthThunk, requiredField } from "../../../utils/validators/validators";

const maxLength = maxLengthThunk(50);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"New message"}
                    name={"message"}
                    validate={[requiredField, maxLength]}
                    component={TextAreaComponent}
                />
            </div>
            <div>
                <button>Add Message</button>
            </div>
            <div></div>
        </form>
    );
};
export const AddMessageReduxForm = reduxForm<FormDataType>({ form: "addPostForm" })(AddMessageForm);
